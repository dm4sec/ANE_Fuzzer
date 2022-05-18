#!usr/bin/env python3
# -*- coding: utf-8 -*-
# @Time    : 2022/1/24 15:14

import frida
import sys
import logging
import argparse

logging.basicConfig(stream=sys.stdout, format="%(levelname)s: %(asctime)s: %(message)s", level=logging.INFO, datefmt='%a %d %b %Y %H:%M:%S')
log = logging.getLogger(__name__)

# --app-name=VNCoreMLModel_Clean

g_app_name = None
g_dev_serial = None
g_script = None

g_js_code_pre = """
{
    var g_proc_name = "proc_name_AAoAA";
    console.log('[*] Frida js is attached to: ' + g_proc_name)

"""


g_js_code_post = """
}
"""

g_js_code_interceptor_template = """ 
    const g_EXPORT_NAME_ptr = Module.getExportByName(g_proc_name, 'EXPORT_NAME');
    console.log("[i] g_EXPORT_NAME_ptr addr: " + g_EXPORT_NAME_ptr)

    Interceptor.attach(g_EXPORT_NAME_ptr, {
        onEnter: function(args) {
            console.log("[*] onEnter: EXPORT_NAME")
        },

        onLeave: function(retval)
        {
            console.log("[*] onLeave: EXPORT_NAME");
        }
    });        
"""

def on_message(message, data):
    global g_script
    if message["type"] == "send":
        msg = message["payload"].strip().split("|")

        g_script.post({'type': 'synchronize',
                       'payload': "quit"})

        with open("IOKitChecker.js", "w") as fwh:
            fwh.write(g_js_code_pre)
            for export in msg:
                if export != "":
                    js_code_interceptor = g_js_code_interceptor_template.replace("EXPORT_NAME", export)
                    fwh.write(js_code_interceptor)
            fwh.write(g_js_code_post)
        go("IOKitChecker.js")

def go(script_file):
    global g_app_name, g_dev_serial, g_script

    if g_dev_serial == None:
        session = frida.attach(g_app_name)
        JSFile = open(script_file)
        JsCodeFromfile = JSFile.read()
        JsCodeFromfile = JsCodeFromfile.replace("proc_name_AAoAA", g_app_name)

        # print(JsCodeFromfile)
        g_script = session.create_script(JsCodeFromfile)
        g_script.on('message', on_message)
        g_script.load()

    else:
        # NOT tested yet
        try:
            device = frida.get_device(g_dev_serial)
        except:
            log.info("device not found")
            log.info("device list:")
            for dev in frida.enumerate_devices():
                log.info(dev)

        process_id = 0
        app_id = None
        for application in device.enumerate_applications():
            if g_app_name == application.name:
                process_id = application.pid
                app_id = application.identifier

        if app_id == None:
            log.info("application not found")
            log.info("application list:")
            for application in device.enumerate_applications():
                print(application)

        if process_id != 0:
            device.kill(process_id)

        process_id = device.spawn(app_id)
        session = device.attach(process_id)

        JSFile = open(script_file)
        JsCodeFromfile = JSFile.read()
        JsCodeFromfile = JsCodeFromfile.replace("proc_name_AAoAA", g_app_name)

        # print(JsCodeFromfile)
        g_script = session.create_script(JsCodeFromfile)
        g_script.on('message', on_message)
        g_script.load()
        # should resume ASAP, or the app will be killed by the system
        device.resume(process_id)


def main():

    parser = argparse.ArgumentParser()
    parser.add_argument('--app-name', required=True,
                        help="Application name.")
    parser.add_argument('--dev-serial', required=False,
                        help="Serial of the device.")

    global g_app_name, g_dev_serial
    args = parser.parse_args()
    g_app_name = args.app_name
    if args.dev_serial != None:
        g_dev_serial = args.dev_serial

    go("IOKitCheckerPre.js")

    # new_round(True)
    sys.stdin.read()
    # print("NEVER run here.")
if __name__ == '__main__':
    main()

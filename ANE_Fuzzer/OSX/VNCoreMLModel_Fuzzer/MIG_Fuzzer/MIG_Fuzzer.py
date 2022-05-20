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

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--app-name', required=True,
                        help="Application name.")
    parser.add_argument('--dev-serial', required=False,
                        help="Serial of the device.")

    args = parser.parse_args()
    if args.dev_serial == None:
        session = frida.attach(args.app_name)
        JSFile = open('MIG_Fuzzer.js')
        JsCodeFromfile = JSFile.read()
        JsCodeFromfile = JsCodeFromfile.replace("proc_name_AAoAA", args.app_name)

        # print(JsCodeFromfile)
        script = session.create_script(JsCodeFromfile)
        script.load()

    else:
        try:
            device = frida.get_device(args.dev_serial)
        except:
            log.info("device not found")
            log.info("device list:")
            for dev in frida.enumerate_devices():
                log.info(dev)

        process_id = 0
        app_id = None
        for application in device.enumerate_applications():
            if args.app_name == application.name:
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

        JSFile = open('MIG_Fuzzer.js')
        JsCodeFromfile = JSFile.read()
        JsCodeFromfile = JsCodeFromfile.replace("proc_name_AAoAA", args.app_name)

        # print(JsCodeFromfile)
        script = session.create_script(JsCodeFromfile)
        script.load()
        # should resume ASAP, or the app will be killed by the system
        device.resume(process_id)

    # new_round(True)
    sys.stdin.read()
    # print("NEVER run here.")
if __name__ == '__main__':
    main()

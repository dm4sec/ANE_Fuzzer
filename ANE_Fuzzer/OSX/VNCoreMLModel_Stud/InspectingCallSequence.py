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

g_log_info = []
g_index = 0

def gen_graph():
    pass

'''
{   
    "index": 0, 
    "api": "IOServiceGetMatchingService", 
    "2nd arg (matching)": "{IONameMatch = IOSurfaceRoot;}", 
    "ret (service)": 0x4107,
    "IOServiceOpen":
    [
        {
            "index": 1,
            "api": "IOServiceOpen",
            "1st arg (service)": 0x4107,
            "3rd arg (type)": 0, 
            "ret (connect)": 0x4a4b,
            "IOConnectCallMethod":
            [
                {
                    "index": 2,
                    "api": "IOConnectCallMethod",
                    "1st arg (connection)": 0x4a4b,
                    "2nd arg (selector)": 13,
                    "ret (kern_return_t)": 0
                }
            ]
        }
        {
            
        }
    ]
}
'''
def on_message(message, data):
    global g_log_info
    global g_index
    if message["type"] == "send":
        g_index += 1
        if message["payload"]["api"] == 'IOServiceGetMatchingService':
            g_log_info.append(
                {
                    "index": g_index,
                    "api": message["payload"]["api"],
                    "2nd arg (matching)": message["payload"]["arg_2"],
                    "ret (service)": message["payload"]["ret"],
                    "name": message["payload"]["name"],
                    "IOServiceOpen": []
                }
            )
        elif message["payload"]["api"] == 'IOServiceAddMatchingNotification':
            g_log_info.append(
                {
                    "index": g_index,
                    "api": message["payload"]["api"],
                    "3rd arg (matching)": message["payload"]["arg_3"],
                    "6th arg (iterator)": message["payload"]["arg_6"],
                    "IOIteratorNext": []
                }
            )
        elif message["payload"]["api"] == 'IOIteratorNext':
            for l1 in g_log_info:
                if (l1["api"] == "IOServiceAddMatchingNotification"):
                    if (l1["6th arg (iterator)"] == message["payload"]["arg_1"]):
                        l1["IOIteratorNext"].append(
                            {
                                "index": g_index,
                                "api": message["payload"]["api"],
                                "1st arg (iterator)": message["payload"]["arg_1"],
                                "ret (service)": message["payload"]["ret"],
                                "name": message["payload"]["name"],
                                "IOServiceOpen": []
                            }
                        )
                        break

        elif message["payload"]["api"] == 'IOServiceOpen':
            for l1 in g_log_info:
                if (l1["api"] == "IOServiceGetMatchingService"):
                    if (l1["ret (service)"] == message["payload"]["arg_1"]):
                        l1["IOServiceOpen"].append(
                            {
                                "index": g_index,
                                "api": message["payload"]["api"],
                                "1st arg (service)": message["payload"]["arg_1"],
                                "3rd arg (type)": message["payload"]["arg_3"],
                                "4th arg (connection)": message["payload"]["arg_4"],
                                "IOConnectCallMethod": []
                            }
                        )
                        break
                elif(l1["api"] == "IOServiceAddMatchingNotification"):
                    for l2 in l1["IOIteratorNext"]:
                        if l2["ret (service)"] == message["payload"]["arg_1"]:
                            if ("IOServiceOpen" not in l2.keys()):
                                l2["IOServiceOpen"] = []
                            l2["IOServiceOpen"].append(
                                {
                                    "index": g_index,
                                    "api": message["payload"]["api"],
                                    "1st arg (service)": message["payload"]["arg_1"],
                                    "3rd arg (type)": message["payload"]["arg_3"],
                                    "4th arg (connection)": message["payload"]["arg_4"],
                                    "IOConnectCallMethod": []
                                }
                            )
                            break

        elif message["payload"]["api"] == 'IOConnectCallMethod' \
                or message["payload"]["api"] == 'IOConnectCallScalarMethod'\
                or message["payload"]["api"] == 'IOConnectCallAsyncMethod':
            for l1 in g_log_info:
                if (l1["api"] == "IOServiceGetMatchingService"):
                    for l2 in l1["IOServiceOpen"]:
                        if l2["4th arg (connection)"] == message["payload"]["arg_1"]:
                            l2["IOConnectCallMethod"].append(
                                {
                                    "index": g_index,
                                    "api": message["payload"]["api"],
                                    "1st arg (service)": message["payload"]["arg_1"],
                                    "2nd arg (selector)": message["payload"]["arg_2"],
                                }
                            )
                            break

                elif(l1["api"] == "IOServiceAddMatchingNotification"):
                    for l2 in l1["IOIteratorNext"]:
                        for l3 in l2["IOServiceOpen"]:
                            if l3["4th arg (connection)"] == message["payload"]["arg_1"]:
                                l3["IOConnectCallMethod"].append(
                                    {
                                        "index": g_index,
                                        "api": message["payload"]["api"],
                                        "1st arg (service)": message["payload"]["arg_1"],
                                        "2nd arg (selector)": message["payload"]["arg_2"],
                                    }
                                )
                                break

    import json
    with open("./CallSeq.json", "w") as fwp:
        json.dump(g_log_info, fwp)

    pass

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--app-name', required=True,
                        help="Application name.")
    parser.add_argument('--dev-serial', required=False,
                        help="Serial of the device.")

    args = parser.parse_args()
    if args.dev_serial == None:
        session = frida.attach(args.app_name)
        JSFile = open('InspectingCallSequence.js')
        JsCodeFromfile = JSFile.read()
        JsCodeFromfile = JsCodeFromfile.replace("proc_name_AAoAA", args.app_name)

        # print(JsCodeFromfile)
        script = session.create_script(JsCodeFromfile)
        script.on('message', on_message)
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

        JSFile = open('InspectingCallSequence.js')
        JsCodeFromfile = JSFile.read()
        JsCodeFromfile = JsCodeFromfile.replace("proc_name_AAoAA", args.app_name)

        # print(JsCodeFromfile)
        script = session.create_script(JsCodeFromfile)
        script.on('message', on_message)
        script.load()
        # should resume ASAP, or the app will be killed by the system
        device.resume(process_id)

    # new_round(True)
    sys.stdin.read()
    # print("NEVER run here.")
if __name__ == '__main__':
    main()

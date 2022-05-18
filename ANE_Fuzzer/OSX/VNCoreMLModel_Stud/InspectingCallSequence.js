// https://frida.re/docs/javascript-api/

/*
IOServiceNameMatching:
public func IOServiceNameMatching(_ name: UnsafePointer<CChar>!) -> CFMutableDictionary!
|-[i] 1st arg: `IOSurfaceRoot`

IOServiceMatching:
public func IOServiceMatching(_ name: UnsafePointer<CChar>!) -> CFMutableDictionary!
|-[i] 1st arg: `IOAccelerator`
|-[i] 1st arg: `IOPlatformExpertDevice`
|-[i] 1st arg: `IOPlatformExpertDevice`

typedef int             kern_return_t;

typedef io_object_t     io_service_t;
typedef mach_port_t     io_object_t;
typedef __darwin_mach_port_t mach_port_t;
typedef __darwin_mach_port_name_t __darwin_mach_port_t;
typedef __darwin_natural_t __darwin_mach_port_name_t;
typedef unsigned int            __darwin_natural_t;

typedef io_object_t     io_iterator_t;


IOServiceGetMatchingService:
public func IOServiceGetMatchingService(_ mainPort: mach_port_t, _ matching: CFDictionary!) -> io_service_t

IOServiceGetMatchingServices:
public func IOServiceGetMatchingServices(_ mainPort: mach_port_t, _ matching: CFDictionary!, _ existing: UnsafeMutablePointer<io_iterator_t>!) -> kern_return_t

IOServiceAddMatchingNotification:
public func IOServiceAddMatchingNotification(_ notifyPort: IONotificationPortRef!, _ notificationType: UnsafePointer<CChar>!, _ matching: CFDictionary!, _ callback: IOServiceMatchingCallback!, _ refCon: UnsafeMutableRawPointer!, _ notification: UnsafeMutablePointer<io_iterator_t>!) -> kern_return_t

IOIteratorNext:
public func IOIteratorNext(_ iterator: io_iterator_t) -> io_object_t



IOServiceOpen:
public func IOServiceOpen(_ service: io_service_t, _ owningTask: task_port_t, _ type: UInt32, _ connect: UnsafeMutablePointer<io_connect_t>!) -> kern_return_t



IOConnectCallMethod:
@available(macOS 10.5, *)
public func IOConnectCallMethod(_ connection: mach_port_t, _ selector: UInt32, _ input: UnsafePointer<UInt64>!, _ inputCnt: UInt32, _ inputStruct: UnsafeRawPointer!, _ inputStructCnt: Int, _ output: UnsafeMutablePointer<UInt64>!, _ outputCnt: UnsafeMutablePointer<UInt32>!, _ outputStruct: UnsafeMutableRawPointer!, _ outputStructCnt: UnsafeMutablePointer<Int>!) -> kern_return_t

IOConnectCallAsyncMethod:
@available(macOS 10.5, *)
public func IOConnectCallAsyncMethod(_ connection: mach_port_t, _ selector: UInt32, _ wake_port: mach_port_t, _ reference: UnsafeMutablePointer<UInt64>!, _ referenceCnt: UInt32, _ input: UnsafePointer<UInt64>!, _ inputCnt: UInt32, _ inputStruct: UnsafeRawPointer!, _ inputStructCnt: Int, _ output: UnsafeMutablePointer<UInt64>!, _ outputCnt: UnsafeMutablePointer<UInt32>!, _ outputStruct: UnsafeMutableRawPointer!, _ outputStructCnt: UnsafeMutablePointer<Int>!) -> kern_return_t

IOConnectCallScalarMethod:
@available(macOS 10.5, *)
public func IOConnectCallScalarMethod(_ connection: mach_port_t, _ selector: UInt32, _ input: UnsafePointer<UInt64>!, _ inputCnt: UInt32, _ output: UnsafeMutablePointer<UInt64>!, _ outputCnt: UnsafeMutablePointer<UInt32>!) -> kern_return_t



IORegistryEntryCreateCFProperty:
public func IORegistryEntryCreateCFProperty(_ entry: io_registry_entry_t, _ key: CFString!, _ allocator: CFAllocator!, _ options: IOOptionBits) -> Unmanaged<CFTypeRef>!

*/

{
    var g_proc_name = "proc_name_AAoAA";
    console.log('[*] Frida js is attached to: ' + g_proc_name)
    var g_index = 0;

    //
    var g_name = Memory.alloc(128)
    function IORegistryEntryGetName(service){
        const IORegistryEntryGetName_ptr = Module.getExportByName(g_proc_name, 'IORegistryEntryGetName');
        console.log("[*] IORegistryEntryGetName_ptr: " + IORegistryEntryGetName_ptr)

        var IORegistryEntryGetName_func = new NativeFunction(IORegistryEntryGetName_ptr, 'int', ['uint32', 'pointer']);
        try{
            var retMe = IORegistryEntryGetName_func(
                service,
                g_name
            );
            console.log("|-[i] class name:" + g_name.readUtf8String())
        }
        catch(err) {
            console.error(err);
        }
    }

    // IOServiceGetMatchingService
    const g_IOServiceGetMatchingService_msg           = {
        "api": "IOServiceGetMatchingService",
        "arg_2": "",
        "ret": 0,
        "name": ""
    }

    const g_IOServiceGetMatchingService_ptr = Module.getExportByName(g_proc_name, 'IOServiceGetMatchingService');
    console.log("[*] g_IOServiceGetMatchingService_ptr: " + g_IOServiceGetMatchingService_ptr)

    Interceptor.attach(g_IOServiceGetMatchingService_ptr, {
        onEnter: function(args) {
            console.log("[*] onEnter: IOServiceGetMatchingService")
            var arg = new ObjC.Object(args[1]);
            // console.log(args[1].readUtf8String())
            console.log("|-[i] 2nd arg (matching):")
            g_IOServiceGetMatchingService_msg.arg_2 = arg.toString()
            console.log(arg.toString())
            console.log('|-[i] IOServiceGetMatchingService called from:\n' +
                Thread.backtrace(this.context, Backtracer.ACCURATE)
                .map(DebugSymbol.fromAddress).join('\n') + '\n');
        },

        onLeave: function(retval) {
            console.log("[*] onLeave: IOServiceGetMatchingService");
            console.log("|-[i] return value (io_service_t): " + retval);
            g_IOServiceGetMatchingService_msg.ret = retval.toInt32()
            IORegistryEntryGetName(retval.toInt32())
            g_IOServiceGetMatchingService_msg.name = g_name.readUtf8String()
            send(g_IOServiceGetMatchingService_msg)
            g_index += 1
            console.log("|-[i] g_index: " + g_index);
        }
    });


    // IOServiceGetMatchingServices
    const g_IOServiceGetMatchingServices_ptr = Module.getExportByName(g_proc_name, 'IOServiceGetMatchingServices');
    console.log("[*] g_IOServiceGetMatchingServices_ptr: " + g_IOServiceGetMatchingServices_ptr)

    Interceptor.attach(g_IOServiceGetMatchingServices_ptr, {
        onEnter: function(args) {
            console.error("[*] onEnter: IOServiceGetMatchingServices")
            var arg = new ObjC.Object(args[1]);
            // console.log(args[1].readUtf8String())
            console.log("|-[i] 2nd arg (matching):")
            console.log(arg.toString())
            console.log('|-[i] IOServiceGetMatchingServices called from:\n' +
                Thread.backtrace(this.context, Backtracer.ACCURATE)
                .map(DebugSymbol.fromAddress).join('\n') + '\n');
        },

        onLeave: function(retval) {
            console.error("[*] onLeave: IOServiceGetMatchingServices");
            console.log("|-[i] return value (kern_return_t): " + retval);
        }
    });


    // IOServiceAddMatchingNotification
    var g_iterator;
    const g_IOServiceAddMatchingNotification_msg           = {
        "api": "IOServiceAddMatchingNotification",
        "arg_3": "",
        "arg_6": 0
    }

    const g_IOServiceAddMatchingNotification_ptr = Module.getExportByName(g_proc_name, 'IOServiceAddMatchingNotification');
    console.log("[*] g_IOServiceAddMatchingNotification_ptr: " + g_IOServiceAddMatchingNotification_ptr)

    Interceptor.attach(g_IOServiceAddMatchingNotification_ptr, {
        onEnter: function(args) {
            console.log("[*] onEnter: IOServiceAddMatchingNotification")
            var arg = new ObjC.Object(args[2]);
            console.log("|-[i] 3rd arg (matching):")
            console.log(arg.toString())
            g_IOServiceAddMatchingNotification_msg.arg_3 = arg.toString()
            g_iterator = args[5]
            console.log('|-[i] IOServiceAddMatchingNotification called from:\n' +
                Thread.backtrace(this.context, Backtracer.ACCURATE)
                .map(DebugSymbol.fromAddress).join('\n') + '\n');
        },

        onLeave: function(retval) {
            console.log("[*] onLeave: IOServiceAddMatchingNotification");
            console.log("|-[i] 6th arg (iterator): " + g_iterator.readU32());
            g_IOServiceAddMatchingNotification_msg.arg_6 = g_iterator.readU32()
            console.log("|-[i] return value (kern_return_t): " + retval);
            send(g_IOServiceAddMatchingNotification_msg)
            g_index += 1
            console.log("|-[i] g_index: " + g_index);
        }
    });

    // IOIteratorNext
    const g_IOIteratorNext_msg           = {
        "api": "IOIteratorNext",
        "arg_1": 0,
        "ret": 0,
        "name": ""
    }

    const g_IOIteratorNext_ptr = Module.getExportByName(g_proc_name, 'IOIteratorNext');
    console.log("[*] g_IOIteratorNext_ptr: " + g_IOIteratorNext_ptr)

    Interceptor.attach(g_IOIteratorNext_ptr, {
        onEnter: function(args) {
            console.log("[*] onEnter: IOIteratorNext")
            console.log("|-[i] 1st arg (iterator): " + args[0].toInt32())
            g_IOIteratorNext_msg.arg_1 = args[0].toInt32()
            console.log('|-[i] IOIteratorNext called from:\n' +
                Thread.backtrace(this.context, Backtracer.ACCURATE)
                .map(DebugSymbol.fromAddress).join('\n') + '\n');
        },

        onLeave: function(retval) {
            console.log("[*] onLeave: IOIteratorNext");
            console.log("|-[i] return value (service): " + retval);
            g_IOIteratorNext_msg.ret = retval.toInt32()
            IORegistryEntryGetName(retval.toInt32())
            g_IOIteratorNext_msg.name = g_name.readUtf8String()
            send(g_IOIteratorNext_msg)
            g_index += 1
            console.log("|-[i] g_index: " + g_index);
        }
    });


    // IOServiceOpen
    var g_connection

    const g_IOServiceOpen_msg           = {
        "api": "IOServiceOpen",
        "arg_1": 0,
        "arg_3": 0,
        "arg_4": 0,
    }

    const g_IOServiceOpen_ptr = Module.getExportByName(g_proc_name, 'IOServiceOpen');
    console.log("[*] g_IOServiceOpen_ptr: " + g_IOServiceOpen_ptr)

    Interceptor.attach(g_IOServiceOpen_ptr, {
        onEnter: function(args) {
            console.log("[*] onEnter: IOServiceOpen")
            console.log("|-[i] 1st arg (service): " + args[0].toInt32())
            g_IOServiceOpen_msg.arg_1 = args[0].toInt32()
            console.log("|-[i] 3rd arg (type): " + args[2].toInt32())
            g_IOServiceOpen_msg.arg_3 = args[2].toInt32()
            g_connection = args[3]
            console.log('|-[i] IOServiceOpen called from:\n' +
                Thread.backtrace(this.context, Backtracer.ACCURATE)
                .map(DebugSymbol.fromAddress).join('\n') + '\n');
        },

        onLeave: function(retval) {
            console.log("[*] onLeave: IOServiceOpen");
            console.log("|-[i] 4th (connection): " + g_connection.readU32());
            g_IOServiceOpen_msg.arg_4 = g_connection.readU32()
            console.log("|-[i] return value (kern_return_t): " + retval);
            send(g_IOServiceOpen_msg)
            g_index += 1
            console.log("|-[i] g_index: " + g_index);
        }
    });


    // IOConnectCallMethod
    const g_IOConnectCallMethod_msg           = {
        "api": "IOConnectCallMethod",
        "arg_1": 0,
        "arg_2": 0,
    }

    const g_IOConnectCallMethod_ptr = Module.getExportByName(g_proc_name, 'IOConnectCallMethod');
    console.log("[*] g_IOConnectCallMethod_ptr: " + g_IOConnectCallMethod_ptr)

    Interceptor.attach(g_IOConnectCallMethod_ptr, {
        onEnter: function(args) {
            console.log("[*] onEnter: IOConnectCallMethod")
            console.log("|-[i] 1st arg (connection): " + args[0].toInt32())
            g_IOConnectCallMethod_msg.arg_1 = args[0].toInt32()
            console.log("|-[i] 2nd arg (selector): " + args[1].toInt32())
            g_IOConnectCallMethod_msg.arg_2 = args[1].toInt32()
            console.log('|-[i] IOConnectCallMethod called from:\n' +
                Thread.backtrace(this.context, Backtracer.ACCURATE)
                .map(DebugSymbol.fromAddress).join('\n') + '\n');
        },

        onLeave: function(retval) {
            console.log("[*] onLeave: IOConnectCallMethod");
            console.log("|-[i] return value: " + retval);
            send(g_IOConnectCallMethod_msg)
            g_index += 1
            console.log("|-[i] g_index: " + g_index);
        }
    });

    // IOConnectCallScalarMethod
    const g_IOConnectCallScalarMethod_msg           = {
        "api": "IOConnectCallScalarMethod",
        "arg_1": 0,
        "arg_2": 0,
    }

    const g_IOConnectCallScalarMethod_ptr = Module.getExportByName(g_proc_name, 'IOConnectCallScalarMethod');
    console.log("[*] g_IOConnectCallScalarMethod_ptr: " + g_IOConnectCallScalarMethod_ptr)

    Interceptor.attach(g_IOConnectCallScalarMethod_ptr, {
        onEnter: function(args) {
            console.log("[*] onEnter: IOConnectCallScalarMethod")
            console.log("|-[i] 1st arg (connection): " + args[0].toInt32())
            g_IOConnectCallScalarMethod_msg.arg_1 = args[0].toInt32()
            console.log("|-[i] 2nd arg (selector): " + args[1].toInt32())
            g_IOConnectCallScalarMethod_msg.arg_2 = args[1].toInt32()
            console.log('|-[i] IOConnectCallScalarMethod called from:\n' +
                Thread.backtrace(this.context, Backtracer.ACCURATE)
                .map(DebugSymbol.fromAddress).join('\n') + '\n');
        },

        onLeave: function(retval) {
            console.log("[*] onLeave: IOConnectCallScalarMethod");
            console.log("|-[i] return value: " + retval);
            send(g_IOConnectCallScalarMethod_msg)
            g_index += 1
            console.log("|-[i] g_index: " + g_index);
        }
    });

    // IOConnectCallAsyncMethod
    const g_IOConnectCallAsyncMethod_msg           = {
        "api": "IOConnectCallAsyncMethod",
        "arg_1": 0,
        "arg_2": 0,
    }
    const g_IOConnectCallAsyncMethod_ptr = Module.getExportByName(g_proc_name, 'IOConnectCallAsyncMethod');
    console.log("[*] g_IOConnectCallAsyncMethod_ptr: " + g_IOConnectCallAsyncMethod_ptr)

    Interceptor.attach(g_IOConnectCallAsyncMethod_ptr, {
        onEnter: function(args) {
            console.log("[*] onEnter: IOConnectCallAsyncMethod")
            console.log("|-[i] 1st arg (connection): " + args[0].toInt32())
            g_IOConnectCallAsyncMethod_msg.arg_1 = args[0].toInt32()
            console.log("|-[i] 2nd arg (selector): " + args[1].toInt32())
            g_IOConnectCallAsyncMethod_msg.arg_2 = args[1].toInt32()
            console.log('|-[i] IOConnectCallAsyncMethod called from:\n' +
                Thread.backtrace(this.context, Backtracer.ACCURATE)
                .map(DebugSymbol.fromAddress).join('\n') + '\n');
        },

        onLeave: function(retval) {
            console.log("[*] onLeave: IOConnectCallAsyncMethod");
            console.log("|-[i] return value: " + retval);
            send(g_IOConnectCallAsyncMethod_msg)
            g_index += 1
            console.log("|-[i] g_index: " + g_index);
        }
    });


    // IOServiceMatching
    /*
    const g_IOServiceMatching_ptr = Module.getExportByName(g_proc_name, 'IOServiceMatching');
    console.log("[*] g_IOServiceMatching_ptr: " + g_IOServiceMatching_ptr)

    Interceptor.attach(g_IOServiceMatching_ptr, {
        onEnter: function(args) {
            console.log("[*] onEnter: IOServiceMatching")
            console.log("|-[i] 1st arg: `" + args[0].readUtf8String() + "`")
            console.log('|-[i] IOServiceMatching called from:\n' +
                Thread.backtrace(this.context, Backtracer.ACCURATE)
                .map(DebugSymbol.fromAddress).join('\n') + '\n');
        },

        onLeave: function(retval) {
            console.log("[*] onLeave: IOServiceMatching");
            // console.log("|-[i] return value: " + retval);
            var arg = new ObjC.Object(retval);
            // console.log(args[1].readUtf8String())
            console.log("|-[i] return content:")
            console.log(arg)
        }
    });
    */


    // IOServiceNameMatching
    /*
    const g_IOServiceNameMatching_ptr = Module.getExportByName(g_proc_name, 'IOServiceNameMatching');
    console.log("[*] g_IOServiceNameMatching_ptr: " + g_IOServiceNameMatching_ptr)

    Interceptor.attach(g_IOServiceNameMatching_ptr, {
        onEnter: function(args) {
            console.log("[*] onEnter: IOServiceNameMatching")
            console.log("|-[i] 1st arg: `" + args[0].readUtf8String() + "`")
            console.log('|-[i] IOServiceNameMatching called from:\n' +
                Thread.backtrace(this.context, Backtracer.ACCURATE)
                .map(DebugSymbol.fromAddress).join('\n') + '\n');
        },

        onLeave: function(retval) {
            console.log("[*] onLeave: IOServiceNameMatching");
            console.log("|-[i] return value: " + retval);
            var arg = new ObjC.Object(retval);
            // console.log(args[1].readUtf8String())
            console.log("|-[i] return content:")
            console.log(arg)
        }
    });
    */

    // IORegistryEntryCreateCFProperty
    /*
    const g_IORegistryEntryCreateCFProperty_ptr = Module.getExportByName(g_proc_name, 'IORegistryEntryCreateCFProperty');
    console.log("[*] g_IORegistryEntryCreateCFProperty_ptr: " + g_IORegistryEntryCreateCFProperty_ptr)

    Interceptor.attach(g_IORegistryEntryCreateCFProperty_ptr, {
        onEnter: function(args) {
            console.log("[*] onEnter: IORegistryEntryCreateCFProperty")
            // console.log(args[1].readUtf8String())
            console.log("|-[i] 2nd arg: " + new ObjC.Object(args[1]))
            console.log('|-[i] IORegistryEntryCreateCFProperty called from:\n' +
                Thread.backtrace(this.context, Backtracer.ACCURATE)
                .map(DebugSymbol.fromAddress).join('\n') + '\n');
        },

        onLeave: function(retval) {
            console.log("[*] onLeave: IORegistryEntryCreateCFProperty");
            console.log("|-[i] return value: " + retval);
        }
    });
    */

    // funcApiResolver('exports:*!IOConnectCallMethod*')
    // funcApiResolver('exports:*!open*')
    // funcApiResolver('exports:*!_io_connect_map_memory_into_task*')

    function funcApiResolver(str){
        const resolver = new ApiResolver('module');
        const matches = resolver.enumerateMatches(str);
        // const first = matches[0];
        for (var i = 0; i < matches.length; i ++)
            console.warn(matches[i].name + ", addr: " + matches[i].address)

        console.warn("[*] detached")
        Interceptor.detachAll()
    }

    // funcHelper('ioctl')
    // funcHelper("IOConnectCallMethod")
    //
    function funcHelper(mangled_name){
        console.log("[i] searching for: " + mangled_name)
        var addr_map = new Map();

        var ms = Process.enumerateModules();
        for (var i = 0; i < ms.length; i ++ )
        {
            try{
                var func_ptr = Module.getExportByName(ms[i].path, mangled_name).toString(16);
                if (func_ptr != 0)
                {
                    // console.log("[i] verbose info: " + ms[i].path + ", " + func_ptr);
                    if (!addr_map.has(func_ptr))
                    {
                        addr_map.set(func_ptr, ms[i].path);
                    }
                }
            }
            catch(err) {
                console.error(err);
            }
        }

        for (let [key, value] of addr_map.entries())
        {
            console.warn("[i] " + mangled_name + ": " + value + ": 0x" + key);
        }
        console.warn("[*] detached")
        Interceptor.detachAll()

    }

    function dump_mem(mem_ptr, length){
        console.log(hexdump(mem_ptr, {
            offset: 0,
            length: length,
            header: true,
            ansi: true
        }));
    }

    /*

    */
    function moduleHelper(model_name, export_name)
    {
        if(model_name == "")
        {
            console.log("[i] list all modules:")
            var ms = Process.enumerateModules()

            for (var i = 0; i < ms.length; i ++ )
            {
                console.log(ms[i].name + ": " + ms[i].path);
                if(export_name != "")
                {
                    try{
                        if (ms[i].findExportByName(export_name) != null)
                        {
                            console.log("[*] got module: " + ms[i].path)
                        }
                    }
                    catch(err) {
                        console.error(err);
                    }
                }
            }
        }
        else
        {
            console.log("[i] list all exports of module: " + module_name)
            var es = Module.load(module_name).enumerateExports()

            for (var i = 0; i < es.length; i ++ )
            {
                console.log(es[i].type + ": " + es[i].name);
            }
        }

        Interceptor.detachAll();
    }

};

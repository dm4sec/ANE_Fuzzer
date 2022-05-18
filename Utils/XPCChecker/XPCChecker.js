// https://frida.re/docs/javascript-api/

{
    var g_proc_name = "proc_name_AAoAA";
    console.log('[*] Frida js is attached to: ' + g_proc_name)


    var g_NSXPCConnection_initWithMachServiceName_options_ptr = ObjC.classes.NSXPCConnection['- initWithMachServiceName:options:'];
    console.log("[i] g_NSXPCConnection_initWithMachServiceName_options_ptr: " + g_NSXPCConnection_initWithMachServiceName_options_ptr.implementation)

    Interceptor.attach(g_NSXPCConnection_initWithMachServiceName_options_ptr.implementation, {
        onEnter: function (args) {
            console.log("[*] onEnter: g_NSXPCConnection_initWithMachServiceName_options_ptr")

            // As this is an Objective-C method, the arguments are as follows:
            // 0. 'self'
            // 1. The selector (applicationWillFinishLaunching:)
            // 2. The first argument to this method
            // var arg = new ObjC.Object(args[2]);

            // Convert it to a JS string and log it
            // var argStr = arg.absoluteString().toString();
            // console.log('1st arg: ' + argStr);
        },
        onLeave: function(retval) {
            console.log("[*] onLeave: g_NSXPCConnection_initWithMachServiceName_options_ptr");
            // console.log("|-[i] return value: " + retval);
        }
    });


    var g_NSXPCConnection_initWithServiceName_ptr = ObjC.classes.NSXPCConnection['- initWithServiceName:'];
    console.log("[i] g_NSXPCConnection_initWithServiceName_ptr: " + g_NSXPCConnection_initWithServiceName_ptr.implementation)

    Interceptor.attach(g_NSXPCConnection_initWithServiceName_ptr.implementation, {
        onEnter: function (args) {
            console.log("[*] onEnter: g_NSXPCConnection_initWithServiceName_ptr")

            // As this is an Objective-C method, the arguments are as follows:
            // 0. 'self'
            // 1. The selector (applicationWillFinishLaunching:)
            // 2. The first argument to this method
            var arg = new ObjC.Object(args[2]);
            console.log("[i] The 1st argument: " + arg)

            // Convert it to a JS string and log it
            // var argStr = arg.absoluteString().toString();
            // console.log("[i] The 1st argument: " + argStr)
        },
        onLeave: function(retval) {
            console.log("[*] onLeave: g_NSXPCConnection_initWithServiceName_ptr");
            // console.log("|-[i] return value: " + retval);
        }
    });



    var g_NSXPCConnection_initWithListenerEndpoint_ptr = ObjC.classes.NSXPCConnection['- initWithListenerEndpoint:'];
    console.log("[i] g_NSXPCConnection_initWithListenerEndpoint_ptr: " + g_NSXPCConnection_initWithListenerEndpoint_ptr.implementation)

    Interceptor.attach(g_NSXPCConnection_initWithListenerEndpoint_ptr.implementation, {
        onEnter: function (args) {
            console.log("[*] onEnter: g_NSXPCConnection_initWithListenerEndpoint_ptr")

            // As this is an Objective-C method, the arguments are as follows:
            // 0. 'self'
            // 1. The selector (applicationWillFinishLaunching:)
            // 2. The first argument to this method
            // var arg = new ObjC.Object(args[2]);

            // Convert it to a JS string and log it
            // var argStr = arg.absoluteString().toString();
            // console.log('1st arg: ' + argStr);
        },
        onLeave: function(retval) {
            console.log("[*] onLeave: g_NSXPCConnection_initWithListenerEndpoint_ptr");
            // console.log("|-[i] return value: " + retval);
        }

    });


    // xpc_connection_create
    const g_xpc_connection_create_ptr = Module.getExportByName(g_proc_name, 'xpc_connection_create');
    console.log("[i] g_xpc_connection_create_ptr: " + g_xpc_connection_create_ptr)

    Interceptor.attach(g_xpc_connection_create_ptr, {
        onEnter: function(args) {
            console.log("[*] onEnter: g_xpc_connection_create_ptr")
            console.log("[i] The 1st argument: " + args[0].readUtf8String())
            /*
            console.log('|-[i] xpc_connection_create called from:\n' +
                Thread.backtrace(this.context, Backtracer.ACCURATE)
                .map(DebugSymbol.fromAddress).join('\n') + '\n');
            */
        },

        onLeave: function(retval) {
            console.log("[*] onLeave: g_xpc_connection_create_ptr");
            // console.log("|-[i] return value: " + retval);
        }
    });

    // xpc_connection_create_mach_service
    const g_xpc_connection_create_mach_service_ptr = Module.getExportByName(g_proc_name, 'xpc_connection_create_mach_service');
    console.log("[i] g_xpc_connection_create_mach_service_ptr: " + g_xpc_connection_create_mach_service_ptr)

    Interceptor.attach(g_xpc_connection_create_mach_service_ptr, {
        onEnter: function(args) {
            console.log("[*] onEnter: g_xpc_connection_create_mach_service_ptr")
            /*
            console.log('|-[i] xpc_connection_create_mach_service called from:\n' +
                Thread.backtrace(this.context, Backtracer.ACCURATE)
                .map(DebugSymbol.fromAddress).join('\n') + '\n');
            */
        },

        onLeave: function(retval) {
            console.log("[*] onLeave: g_xpc_connection_create_mach_service_ptr");
            // console.log("|-[i] return value: " + retval);
        }
    });

    // xpc_connection_create_from_endpoint
    const g_xpc_connection_create_from_endpoint_ptr = Module.getExportByName(g_proc_name, 'xpc_connection_create_from_endpoint');
    console.log("[i] g_xpc_connection_create_from_endpoint_ptr: " + g_xpc_connection_create_from_endpoint_ptr)

    Interceptor.attach(g_xpc_connection_create_from_endpoint_ptr, {
        onEnter: function(args) {
            console.log("[*] onEnter: g_xpc_connection_create_from_endpoint_ptr")
            /*
            console.log('|-[i] xpc_connection_create_from_endpoint called from:\n' +
                Thread.backtrace(this.context, Backtracer.ACCURATE)
                .map(DebugSymbol.fromAddress).join('\n') + '\n');
            */
        },

        onLeave: function(retval) {
            console.log("[*] onLeave: g_xpc_connection_create_from_endpoint_ptr");
            // console.log("|-[i] return value: " + retval);
        }
    });


    // NSXPCConnection.init(serviceName: <#T##String#>)
    /*s
    const g_NSXPCConnection_init_serviceName_ptr = Module.getExportByName(g_proc_name, '$sSo15NSXPCConnectionC11serviceNameABSS_tcfcTO');
    console.log("[i] g_NSXPCConnection_init_serviceName_ptr: " + g_NSXPCConnection_init_serviceName_ptr)

    Interceptor.attach(g_NSXPCConnection_init_serviceName_ptr, {
        onEnter: function(args) {
            console.log("[*] onEnter: g_NSXPCConnection_init_serviceName_ptr")
            console.log('|-[i] g_NSXPCConnection_init_serviceName_ptr called from:\n' +
                Thread.backtrace(this.context, Backtracer.ACCURATE)
                .map(DebugSymbol.fromAddress).join('\n') + '\n');
        },

        onLeave: function(retval) {
            console.log("[*] onLeave: g_NSXPCConnection_init_serviceName_ptr");
            // console.log("|-[i] return value: " + retval);
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

// https://frida.re/docs/javascript-api/

{
    var g_proc_name = "proc_name_AAoAA";
    console.log('[*] Frida js is attached to: ' + g_proc_name);

    // mach_msg
    const g_mach_msg_ptr = Module.getExportByName(g_proc_name, 'mach_msg');
    console.log("[i] g_mach_msg_ptr: " + g_mach_msg_ptr)

    Interceptor.attach(g_mach_msg_ptr, {
        onEnter: function(args) {
            console.log("[*] onEnter: mach_msg");

            /*
            try{
                console.log('|-[i] mach_msg called from:\n' +
                    Thread.backtrace(this.context, Backtracer.ACCURATE)
                    .map(DebugSymbol.fromAddress).join('\n') + '\n');
            }
            catch(err) {
                console.error(err);
            }
            */

        },

        onLeave: function(retval) {
            console.log("[*] onLeave: mach_msg");
            // console.log("|-[i] return value: " + retval);
        }
    });

    // mach_msg_overwrite
    const g_mach_msg_overwrite_ptr = Module.getExportByName(g_proc_name, 'mach_msg_overwrite');
    console.log("[i] g_mach_msg_overwrite_ptr: " + g_mach_msg_overwrite_ptr)

    Interceptor.attach(g_mach_msg_overwrite_ptr, {
        onEnter: function(args) {
            console.log("[*] onEnter: mach_msg_overwrite");
            /*
            console.log('|-[i] mach_msg called from:\n' +
                Thread.backtrace(this.context, Backtracer.ACCURATE)
                .map(DebugSymbol.fromAddress).join('\n') + '\n');
            */

        },

        onLeave: function(retval) {
            console.log("[*] onLeave: mach_msg_overwrite");
            // console.log("|-[i] return value: " + retval);
        }
    });

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

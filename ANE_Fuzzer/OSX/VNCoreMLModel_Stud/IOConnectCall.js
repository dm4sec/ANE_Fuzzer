// https://frida.re/docs/javascript-api/

/*

IOConnectCallMethod:
@available(macOS 10.5, *)
public func IOConnectCallMethod(
    _ connection: mach_port_t,
    _ selector: UInt32,
    _ input: UnsafePointer<UInt64>!,
    _ inputCnt: UInt32,
    _ inputStruct: UnsafeRawPointer!,
    _ inputStructCnt: Int,
    _ output: UnsafeMutablePointer<UInt64>!,
    _ outputCnt: UnsafeMutablePointer<UInt32>!,
    _ outputStruct: UnsafeMutableRawPointer!,
    _ outputStructCnt: UnsafeMutablePointer<Int>!) -> kern_return_t

IOConnectCallAsyncMethod:
@available(macOS 10.5, *)
public func IOConnectCallAsyncMethod(
    _ connection: mach_port_t,
    _ selector: UInt32,
    _ wake_port: mach_port_t,
    _ reference: UnsafeMutablePointer<UInt64>!,
    _ referenceCnt: UInt32,
    _ input: UnsafePointer<UInt64>!,
    _ inputCnt: UInt32,
    _ inputStruct: UnsafeRawPointer!,
    _ inputStructCnt: Int,
    _ output: UnsafeMutablePointer<UInt64>!,
    _ outputCnt: UnsafeMutablePointer<UInt32>!,
    _ outputStruct: UnsafeMutableRawPointer!,
    _ outputStructCnt: UnsafeMutablePointer<Int>!) -> kern_return_t

IOConnectCallScalarMethod:
@available(macOS 10.5, *)
public func IOConnectCallScalarMethod(
    _ connection: mach_port_t,
    _ selector: UInt32,
    _ input: UnsafePointer<UInt64>!,
    _ inputCnt: UInt32,
    _ output: UnsafeMutablePointer<UInt64>!,
    _ outputCnt: UnsafeMutablePointer<UInt32>!) -> kern_return_t

*/

{
    var g_proc_name = "proc_name_AAoAA";
    console.log('[*] Frida js is attached to: ' + g_proc_name)

    const kIOConnectMethodVarOutputSize = -3

    // IOConnectCallMethod
    const g_IOConnectCallMethod_ptr = Module.getExportByName(g_proc_name, 'IOConnectCallMethod');
    console.log("[*] g_IOConnectCallMethod_ptr: " + g_IOConnectCallMethod_ptr)

    Interceptor.attach(g_IOConnectCallMethod_ptr, {
        onEnter: function(args) {
            console.log("[*] onEnter: IOConnectCallMethod")
            /*
            console.log("|-[i] 1st arg: " + args[0])
            console.log('|-[i] IOConnectCallMethod called from:\n' +
                Thread.backtrace(this.context, Backtracer.ACCURATE)
                .map(DebugSymbol.fromAddress).join('\n') + '\n');
            */
            console.log("|-[i] selector: "          + args[1])
            console.log("|-[i] input: "             + args[2])
            console.log("|-[i] inputCnt: "          + args[3])
            console.log("|-[i] inputStruct: "       + args[4])
            console.log("|-[i] inputStructCnt: "    + args[5])
            console.log("|-[i] output: "            + args[6])
            console.log("|-[i] outputCnt: "         + args[7])
            console.log("|-[i] outputStruct: "      + args[8])
            console.log("|-[i] outputStructCntP: "  + args[9])

            if (args[2].isNull() == false)
            {
                console.log("input data: ")
                dump_mem(args[2], args[3].toInt32())
            }
            if (args[4].isNull() == false)
            {
                console.log("inputStruct data: ")
                dump_mem(args[4], args[5].toInt32())
            }
            if (args[6].isNull() == false)
            {
                console.log("output data: ")
                dump_mem(args[6], args[7].readU32())
            }
            if (args[8].isNull() == false)
            {
                console.log("outputStruct data: ")
                dump_mem(args[8], args[9].readULong())
            }
        },

        onLeave: function(retval) {
            console.log("[*] onLeave: IOConnectCallMethod");
            console.log("|-[i] return value: " + retval);

        }
    });

    // IOConnectCallScalarMethod
    const g_IOConnectCallScalarMethod_ptr = Module.getExportByName(g_proc_name, 'IOConnectCallScalarMethod');
    console.log("[*] g_IOConnectCallScalarMethod_ptr: " + g_IOConnectCallScalarMethod_ptr)

    Interceptor.attach(g_IOConnectCallScalarMethod_ptr, {
        onEnter: function(args) {
            console.log("[*] onEnter: IOConnectCallScalarMethod")
            /*
            console.log("|-[i] 1st arg: " + args[0])
            console.log('|-[i] IOConnectCallScalarMethod called from:\n' +
                Thread.backtrace(this.context, Backtracer.ACCURATE)
                .map(DebugSymbol.fromAddress).join('\n') + '\n');
            */
            console.log("|-[i] input: "             + args[2])
            console.log("|-[i] inputCnt: "          + args[3])
            console.log("|-[i] output: "            + args[4])
            console.log("|-[i] outputCnt: "         + args[5])

        },

        onLeave: function(retval) {
            console.log("[*] onLeave: IOConnectCallScalarMethod");
            console.log("|-[i] return value: " + retval);

        }
    });

    // IOConnectCallAsyncMethod
    const g_IOConnectCallAsyncMethod_ptr = Module.getExportByName(g_proc_name, 'IOConnectCallAsyncMethod');
    console.log("[*] g_IOConnectCallAsyncMethod_ptr: " + g_IOConnectCallAsyncMethod_ptr)

    Interceptor.attach(g_IOConnectCallAsyncMethod_ptr, {
        onEnter: function(args) {
            console.log("[*] onEnter: IOConnectCallAsyncMethod")
            /*
            console.log("|-[i] 1st arg: " + args[0])
            console.log('|-[i] IOConnectCallAsyncMethod called from:\n' +
                Thread.backtrace(this.context, Backtracer.ACCURATE)
                .map(DebugSymbol.fromAddress).join('\n') + '\n');
            */

            console.log("|-[i] selector: "          + args[1].toInt32())
            console.log("|-[i] input: "             + args[5])
            console.log("|-[i] inputCnt: "          + args[6].toInt32())
            console.log("|-[i] inputStruct: "       + args[7])
            console.log("|-[i] inputStructCnt: "    + args[8].toInt32())
            console.log("|-[i] output: "            + args[9])
            console.log("|-[i] outputCnt: "         + args[10])
            console.log("|-[i] outputStruct: "      + args[11])
            console.log("|-[i] outputStructCntP: "  + args[12])

            if (args[5].isNull() == false)
            {
                console.log("input data: ")
                dump_mem(args[5], args[6].toInt32())
            }
            if (args[7].isNull() == false)
            {
                console.log("inputStruct data: ")
                dump_mem(args[7], args[8].toInt32())
            }
            if (args[9].isNull() == false)
            {
                console.log("output data: ")
                dump_mem(args[9], args[10].readU32())
            }
            if (args[11].isNull() == false)
            {
                console.log("outputStruct data: ")
                dump_mem(args[11], args[12].readULong())
            }

        },

        onLeave: function(retval) {
            console.log("[*] onLeave: IOConnectCallAsyncMethod");
            console.log("|-[i] return value: " + retval);

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

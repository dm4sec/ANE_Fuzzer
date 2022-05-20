// https://frida.re/docs/javascript-api/

/*************************************************
NOT finish yet.
TODO:
1. Fuzz all IOConnectCallX methods.
2. Maintain the relationship of service, connection and selector to avoid triggering certain methods, which is likely to suspend the test process.
*************************************************/

/*

kern_return_t
IOConnectCallMethod(
	mach_port_t	 connection,		// In
	uint32_t	 selector,		// In
	const uint64_t	*input,			// In
	uint32_t	 inputCnt,		// In
	const void      *inputStruct,		// In
	size_t		 inputStructCnt,	// In
	uint64_t	*output,		// Out
	uint32_t	*outputCnt,		// In/Out
	void		*outputStruct,		// Out
	size_t		*outputStructCnt)	// In/Out
AVAILABLE_MAC_OS_X_VERSION_10_5_AND_LATER;

typedef int             kern_return_t;

typedef __darwin_mach_port_t mach_port_t;
typedef __darwin_mach_port_name_t __darwin_mach_port_t;
typedef __darwin_natural_t __darwin_mach_port_name_t;
typedef unsigned int            __darwin_natural_t;

typedef __darwin_size_t        size_t;
typedef unsigned long           __darwin_size_t;


kern_return_t
IOConnectCallAsyncMethod(
	mach_port_t	 connection,		// In
	uint32_t	 selector,		// In
	mach_port_t	 wake_port,		// In
	uint64_t	*reference,		// In
	uint32_t	 referenceCnt,		// In
	const uint64_t	*input,			// In
	uint32_t	 inputCnt,		// In
	const void	*inputStruct,		// In
	size_t		 inputStructCnt,	// In
	uint64_t	*output,		// Out
	uint32_t	*outputCnt,		// In/Out
	void		*outputStruct,		// Out
	size_t		*outputStructCnt)	// In/Out


kern_return_t
IOConnectCallScalarMethod(
	mach_port_t	 connection,		// In
	uint32_t	 selector,		// In
	const uint64_t	*input,			// In
	uint32_t	 inputCnt,		// In
	uint64_t	*output,		// Out
	uint32_t	*outputCnt)		// In/Out
AVAILABLE_MAC_OS_X_VERSION_10_5_AND_LATER;

*/

{
    var g_proc_name = "proc_name_AAoAA";
    console.log('[*] Frida js is attached to: ' + g_proc_name)

    function genSeed(org_value){
//        console.log("genSeed: ", org_value)
        return [//org_value,
                    ~org_value,
                    org_value & 0xffffff00, org_value & 0xffff00ff, org_value & 0xff00ffff, org_value & 0x00ffffff,
                    org_value | 0x000000ff, org_value | 0x0000ff00, org_value | 0x00ff0000, org_value | 0xff000000,
                    org_value & 0xffffff00 + 0x7f, org_value & 0xffff00ff + 0x7f00, org_value & 0xff00ffff + 0x7f0000, org_value & 0x00ffffff + 0x7f000000,
                    org_value & 0xffffff00 + 0x80, org_value & 0xffff00ff + 0x8000, org_value & 0xff00ffff + 0x800000, org_value & 0x00ffffff + 0x80000000,
                    0,
                    0x7f, 0x7fff, 0x7fffff, 0x7fffffff,
                    0x80, 0x8000, 0x800000, 0x80000000,
                    0xff, 0xffff, 0xffffff,
                    0xffffffff,
                    org_value + 1, org_value + 0x100, org_value + 0x10000, org_value + 0x1000000,
                    org_value - 1, org_value - 0x100, org_value - 0x10000, org_value - 0x1000000,
                    0x41414141,
        ];
    }

    function fuzz_IOConnectCallMethod(connection, selector, input, inputCnt, inputStruct, inputStructCnt, output, outputCnt, outputStruct, outputStructCnt)
    {
        console.log("[*] onEnter: IOConnectCallMethod")
        console.log("|-selector: " + selector.toString())

        if (input.isNull() == false && inputCnt != 0)
        {
            console.log("|-input:")
            console.log(hexdump(input, {
                offset: 0,
                length: inputCnt * 8,
                header: true,
                ansi: true
            }));

            for(var i = 0; i < inputCnt * 2; i ++)
            {
                var fuzz_pos = input.add(i * 4)
                var original_value = fuzz_pos.readU32();
                var seed = genSeed(original_value);
                for(var j = 0; j < seed.length; j ++)
                {
                    fuzz_pos.writeS32(seed[j]);

                    console.log(hexdump(input, {
                        offset: 0,
                        length: inputCnt * 8,
                        header: true,
                        ansi: true
                    }));
                    g_IOConnectCallMethod_func(connection, selector, input, inputCnt, inputStruct, inputStructCnt, output, outputCnt, outputStruct, outputStructCnt);
                }
                fuzz_pos.writeU32(original_value);
            }
        }
        if (inputStruct.isNull() == false && inputStructCnt != 0)
        {
            console.log("|-inputStruct:")
            console.log(hexdump(inputStruct, {
                offset: 0,
                length: inputStructCnt,
                header: true,
                ansi: true
            }));

            for(var i = 0; i < inputStructCnt / 4; i ++)
            {
                var fuzz_pos = inputStruct.add(i * 4)
                var original_value = fuzz_pos.readU32();
                var seed = genSeed(original_value);
                for(var j = 0; j < seed.length; j ++)
                {
                    fuzz_pos.writeS32(seed[j]);

                    console.log(hexdump(inputStruct, {
                        offset: 0,
                        length: inputStructCnt,
                        header: true,
                        ansi: true
                    }));
                    g_IOConnectCallMethod_func(connection, selector, input, inputCnt, inputStruct, inputStructCnt, output, outputCnt, outputStruct, outputStructCnt);
                }
                fuzz_pos.writeU32(original_value);
            }
        }

        return g_IOConnectCallMethod_func(connection, selector, input, inputCnt, inputStruct, inputStructCnt, output, outputCnt, outputStruct, outputStructCnt);
    }


    // IOConnectCallMethod
    const g_IOConnectCallMethod_ptr = Module.getExportByName(g_proc_name, 'IOConnectCallMethod');
    console.log("[*] g_IOConnectCallMethod_ptr: " + g_IOConnectCallMethod_ptr)

    const g_IOConnectCallMethod_func = new NativeFunction(
        g_IOConnectCallMethod_ptr,
        'int',
        ['uint', 'uint32', 'pointer', 'uint32', 'pointer', 'ulong', 'pointer', 'pointer', 'pointer', 'pointer']
    );
    console.log("[*] IOConnectCallMethod func addr: " + g_IOConnectCallMethod_func)

    Interceptor.replace(
        g_IOConnectCallMethod_ptr,
        new NativeCallback(
            fuzz_IOConnectCallMethod,
            'int',
            ['uint', 'uint32', 'pointer', 'uint32', 'pointer', 'ulong', 'pointer', 'pointer', 'pointer', 'pointer']
        )
    );

    function fuzz_IOConnectCallScalarMethod(connection, selector, input, inputCnt, output, outputCnt)
    {
        console.log("[*] onEnter: IOConnectCallScalarMethod")
        console.log("|-selector: " + selector.toString())

        if (input.isNull() == false && inputCnt != 0)
        {
            console.log("|-input:")
            console.log(hexdump(input, {
                offset: 0,
                length: inputCnt * 4,
                header: true,
                ansi: true
            }));

            for(var i = 0; i < inputCnt * 2; i ++)
            {
                var fuzz_pos = input.add(i * 4)
                var original_value = fuzz_pos.readU32();
                var seed = genSeed(original_value);
                for(var j = 0; j < seed.length; j ++)
                {
                    fuzz_pos.writeS32(seed[j]);

                    console.log(hexdump(input, {
                        offset: 0,
                        length: inputCnt * 4,
                        header: true,
                        ansi: true
                    }));
                    g_IOConnectCallScalarMethod_func(connection, selector, input, inputCnt, output, outputCnt);
                }
                fuzz_pos.writeU32(original_value);
            }
        }
    }

    // IOConnectCallScalarMethod
    const g_IOConnectCallScalarMethod_ptr = Module.getExportByName(g_proc_name, 'IOConnectCallScalarMethod');
    console.log("[*] g_IOConnectCallScalarMethod_ptr: " + g_IOConnectCallScalarMethod_ptr)

    const g_IOConnectCallScalarMethod_func = new NativeFunction(
        g_IOConnectCallScalarMethod_ptr,
        'int',
        ['uint', 'uint32', 'pointer', 'uint32', 'pointer', 'pointer']
    );
    console.log("[*] IOConnectCallScalarMethod func addr: " + g_IOConnectCallScalarMethod_func)

    Interceptor.replace(
        g_IOConnectCallScalarMethod_ptr,
        new NativeCallback(
            fuzz_IOConnectCallScalarMethod,
            'int',
            ['uint', 'uint32', 'pointer', 'uint32', 'pointer', 'pointer']
        )
    );

    /*
    Interceptor.attach(g_IOConnectCallMethod_ptr, {
        onEnter: function(args) {
            console.log("[*] onEnter: IOConnectCallMethod")
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
    */

    // IOConnectCallAsyncMethod
    /*
    const g_IOConnectCallAsyncMethod_ptr = Module.getExportByName(g_proc_name, 'IOConnectCallAsyncMethod');
    console.log("[*] g_IOConnectCallAsyncMethod_ptr: " + g_IOConnectCallAsyncMethod_ptr)

    Interceptor.attach(g_IOConnectCallAsyncMethod_ptr, {
        onEnter: function(args) {
            console.log("[*] onEnter: IOConnectCallAsyncMethod")

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
    */

};

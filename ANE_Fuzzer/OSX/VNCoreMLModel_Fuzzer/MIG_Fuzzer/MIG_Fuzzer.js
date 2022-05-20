// https://frida.re/docs/javascript-api/

/*************************************************
NOT finish yet.
TODO: This is a coarse implementation, need to map the client with the server
*************************************************/
/*
extern mach_msg_return_t        mach_msg(
	mach_msg_header_t *msg,
	mach_msg_option_t option,
	mach_msg_size_t send_size,
	mach_msg_size_t rcv_size,
	mach_port_name_t rcv_name,
	mach_msg_timeout_t timeout,
	mach_port_name_t notify);

typedef kern_return_t mach_msg_return_t;
typedef int             kern_return_t;

typedef integer_t mach_msg_option_t;
typedef int                     integer_t;

typedef natural_t mach_msg_size_t;
typedef __darwin_natural_t      natural_t;
typedef unsigned int            __darwin_natural_t;

typedef natural_t mach_port_name_t;
typedef __darwin_natural_t      natural_t;
typedef unsigned int            __darwin_natural_t;

typedef natural_t mach_msg_timeout_t;
typedef __darwin_natural_t      natural_t;
typedef unsigned int            __darwin_natural_t;



extern mach_msg_return_t        mach_msg_overwrite(
	mach_msg_header_t *msg,
	mach_msg_option_t option,
	mach_msg_size_t send_size,
	mach_msg_size_t rcv_size,
	mach_port_name_t rcv_name,
	mach_msg_timeout_t timeout,
	mach_port_name_t notify,
	mach_msg_header_t *rcv_msg,
	mach_msg_size_t rcv_limit);

typedef struct{
	mach_msg_bits_t               msgh_bits;
	mach_msg_size_t               msgh_size;
	mach_port_t                   msgh_remote_port;
	mach_port_t                   msgh_local_port;
	mach_port_name_t              msgh_voucher_port;
	mach_msg_id_t                 msgh_id;
} mach_msg_header_t;

typedef unsigned int mach_msg_bits_t;

typedef __darwin_mach_port_t mach_port_t;
typedef __darwin_mach_port_name_t __darwin_mach_port_t;
typedef __darwin_natural_t __darwin_mach_port_name_t;
typedef unsigned int            __darwin_natural_t;

typedef integer_t mach_msg_id_t;
typedef int                     integer_t;

*/

{

    const MACH_SEND_MSG                     = 0x00000001
    const MACH_RCV_MSG                      = 0x00000002

    const MACH_MSGH_BITS_COMPLEX            = 0x80000000
    const mach_msg_header_t_SIZE            = 0x18

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

    var g_mach_msg_index = 0
    const g_mach_msg_skip = [723, 724]

    function fuzz_mach_msg(msg, option, send_size, rcv_size, rcv_name, timeout, notify)
    {
        g_mach_msg_index ++;
        console.log("[*] onEnter: mach_msg ( " + g_mach_msg_index.toString() + " )")
        // if (g_mach_msg_index != 725)
        if (g_mach_msg_skip.includes(g_mach_msg_index))
        {
            console.log("|-[i] skip testing")
            return g_mach_msg_func(msg, option, send_size, rcv_size, rcv_name, timeout, notify);
        }
//        console.log("[*] onEnter: mach_msg")
//        if (rcv_size != 0)
//        {
//            return g_mach_msg_func(msg, option, send_size, rcv_size, rcv_name, timeout, notify);
//        }
        // console.log("|-selector: " + selector.toString())
        console.log("|-[i] args\n" +
            "|__option: 0x" + option.toString(16) + "\n" +
            "|__send_size: 0x" + send_size.toString(16) + "\n" +
            "|__rcv_size: 0x" + rcv_size.toString(16) + "\n" +
            "|__rcv_name: 0x" + rcv_name.toString(16) + "\n" +
            "|__timeout: 0x" + timeout.toString(16) + "\n" +
            "|__notify: 0x" + notify.toString(16)
        )

        if (option & MACH_SEND_MSG == 0)
        {
            console.error("|-not send msg")
            return g_mach_msg_func(msg, option, send_size, rcv_size, rcv_name, timeout, notify);
        }

        console.log("|-send msg")

        var msgh_bits = msg.readUInt();
        // var msgh_size = msg.add(4).readUInt();
        console.log("|-[i] mach_msg_header_t\n" +
            "|__msgh_bits: 0x" + msgh_bits.toString(16)
        )
        // console.log("|--msgh_size: 0x" + msgh_size.toString(16))

        // console.log("|--MACH_MSGH_BITS_COMPLEX: 0x" + (msgh_bits & MACH_MSGH_BITS_COMPLEX).toString(16))
        if ((msgh_bits & MACH_MSGH_BITS_COMPLEX) == 0)
        {
            console.log("|-[i] simple msg")
            // return g_mach_msg_func(msg, option, send_size, rcv_size, rcv_name, timeout, notify);

            for(var i = 0; i < (send_size - mach_msg_header_t_SIZE) / 4; i ++)
            {
                var fuzz_pos = msg.add(mach_msg_header_t_SIZE).add(i * 4)
                var original_value = fuzz_pos.readU32();
                var seed = genSeed(original_value);
                for(var j = 0; j < seed.length; j ++)
                {
                    fuzz_pos.writeS32(seed[j]);

                    /*
                    console.log("|-mach_msg_body_t:")
                    console.log(hexdump(msg.add(mach_msg_header_t_SIZE), {
                        offset: 0,
                        length: send_size - mach_msg_header_t_SIZE,
                        header: true,
                        ansi: true
                    }));
                    */

                    // g_mach_msg_func(msg, option & (~MACH_RCV_MSG), send_size, rcv_size, rcv_name, timeout, 0);
                    g_mach_msg_func(msg, option, send_size, rcv_size, rcv_name, timeout, notify);
                }
                fuzz_pos.writeU32(original_value);
            }
        }
        else
        {
            /*
            It's very hard to tell them apart, I have to refer to the server for such information.

            typedef struct{
                mach_msg_size_t msgh_descriptor_count;
            } mach_msg_body_t;

            typedef union{
                mach_msg_port_descriptor_t            port;
                mach_msg_ool_descriptor_t             out_of_line;
                mach_msg_ool_ports_descriptor_t       ool_ports;
                mach_msg_type_descriptor_t            type;
                mach_msg_guarded_port_descriptor_t    guarded_port;
            } mach_msg_descriptor_t;


            typedef struct{
                mach_port_t                   name;
            // Pad to 8 bytes everywhere except the K64 kernel where mach_port_t is 8 bytes
                mach_msg_size_t               pad1;
                unsigned int                  pad2 : 16;
                mach_msg_type_name_t          disposition : 8;
                mach_msg_descriptor_type_t    type : 8;
            } mach_msg_port_descriptor_t;


            typedef struct{
                void*                         address;
            #if !defined(__LP64__)
                mach_msg_size_t               size;
            #endif
                boolean_t                     deallocate: 8;
                mach_msg_copy_options_t       copy: 8;
                unsigned int                  pad1: 8;
                mach_msg_descriptor_type_t    type: 8;
            #if defined(__LP64__)
                mach_msg_size_t               size;
            #endif
            } mach_msg_ool_descriptor_t;


            typedef struct{
                void*                         address;
            #if !defined(__LP64__)
                mach_msg_size_t               count;
            #endif
                boolean_t                     deallocate: 8;
                mach_msg_copy_options_t       copy: 8;
                mach_msg_type_name_t          disposition : 8;
                mach_msg_descriptor_type_t    type : 8;
            #if defined(__LP64__)
                mach_msg_size_t               count;
            #endif
            } mach_msg_ool_ports_descriptor_t;


            typedef struct{
                natural_t                     pad1;
                mach_msg_size_t               pad2;
                unsigned int                  pad3 : 24;
                mach_msg_descriptor_type_t    type : 8;
            } mach_msg_type_descriptor_t;


            typedef struct{
                mach_port_context_t           context;
            #if !defined(__LP64__)
                mach_port_name_t              name;
            #endif
                mach_msg_guard_flags_t        flags : 16;
                mach_msg_type_name_t          disposition : 8;
                mach_msg_descriptor_type_t    type : 8;
            #if defined(__LP64__)
                mach_port_name_t              name;
            #endif
            } mach_msg_guarded_port_descriptor_t;


            */

            console.error("|-[i] TODO:: complex msg");
            // console.error("|__mach_msg_descriptor_t, length: 0x" + (send_size - mach_msg_header_t_SIZE - 4).toString(16));
            console.error(
                "|__msgh_descriptor_count: 0x" + msg.add(mach_msg_header_t_SIZE).readU32() + "\n" +
                "|__mach_msg_descriptor_t, value: \n" +
                hexdump(msg.add(mach_msg_header_t_SIZE).add(4), {
                    offset: 0,
                    length: send_size - mach_msg_header_t_SIZE - 4,
                    header: true,
                    ansi: true
            }));

        }

        return g_mach_msg_func(msg, option, send_size, rcv_size, rcv_name, timeout, notify);
    }


    // mach_msg
    const g_mach_msg_ptr = Module.getExportByName(g_proc_name, 'mach_msg');
    console.log("[*] g_mach_msg_ptr: " + g_mach_msg_ptr)

    const g_mach_msg_func = new NativeFunction(
        g_mach_msg_ptr,
        'int',
        ['pointer', 'int', 'uint', 'uint', 'uint', 'uint', 'uint']
    );
    console.log("[*] mach_msg func addr: " + g_mach_msg_func)

    Interceptor.replace(
        g_mach_msg_ptr,
        new NativeCallback(
            fuzz_mach_msg,
            'int',
            ['pointer', 'int', 'uint', 'uint', 'uint', 'uint', 'uint']
        )
    );

    /*
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
    */

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

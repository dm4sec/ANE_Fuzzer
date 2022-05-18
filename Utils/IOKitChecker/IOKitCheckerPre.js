// https://frida.re/docs/javascript-api/

// --app-name=VNCoreMLModel_Clean

{
    var g_proc_name = "proc_name_AAoAA";
    console.log('[*] Frida js is attached to: ' + g_proc_name)

    var module_name = "/System/Library/Frameworks/IOKit.framework/Versions/A/IOKit"

    console.log("[i] list all exports of module: " + module_name)
    var es = Module.load(module_name).enumerateExports()
    var toHostMsg = ""

    for (var i = 0; i < es.length; i ++ )
    {
        console.log(es[i].type + ": " + es[i].name);
        if (es[i].type == "function")
        {
            toHostMsg += es[i].name
            toHostMsg += "|"
        }
    }

    // console.log("[i] message send to host: " + toHostMsg)
    send(toHostMsg);

    // ensure the host has got the message.
    var foo = recv('synchronize', function(value) {
        // console.log(value.payload)
        if (value.payload == "quit")
        {
            console.log("[i] host message `quit` received, quit.");
            Interceptor.detachAll();
        }
    });
};

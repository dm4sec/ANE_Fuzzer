# XPCChecker

There are 3 ways to create an `NSXPCConnection`:
```commandline
[[NSXPCConnection alloc] initWithMachServiceName:<#(nonnull NSString *)#> options:<#(NSXPCConnectionOptions)#>]
[[NSXPCConnection alloc] initWithServiceName:<#(nonnull NSString *)#>]
[[NSXPCConnection alloc] initWithListenerEndpoint:[[NSXPCConnection alloc]]]
```

Another 3 c version
```commandline
xpc_connection_t
xpc_connection_create(const char * _Nullable name,
	dispatch_queue_t _Nullable targetq);

xpc_connection_t
xpc_connection_create_mach_service(const char *name,
	dispatch_queue_t _Nullable targetq, uint64_t flags);
	
xpc_connection_t
xpc_connection_create_from_endpoint(xpc_endpoint_t endpoint);
```

Another 3 swift version
```commandline
let connection = NSXPCConnection.init(serviceName: "nil.xpc")
//let connection = NSXPCConnection.init(listenerEndpoint: T##NSXPCListenerEndpoint)
//let connection = NSXPCConnection.init(machServiceName: <#T##String#>, options: 
```

By attaching to the swift version or oc version app, I found that
all are thunk to the same API, the `Interceptor` for C version is enough for this task.

## Reference:
https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/CreatingXPCServices.html  
https://developer.apple.com/documentation/foundation/nsxpcconnection  
https://developer.apple.com/documentation/foundation/nsxpcconnection?language=objc  
https://www.jianshu.com/p/939a6cd5b1c3  
https://www.blackhat.com/docs/us-15/materials/us-15-Wang-Review-And-Exploit-Neglected-Attack-Surface-In-iOS-8.pdf  
https://thecyberwire.com/events/docs/IanBeer_JSS_Slides.pdf  
https://objccn.io/issue-14-4/  
https://wooyun.js.org/drops/iOS%E5%86%B0%E4%B8%8E%E7%81%AB%E4%B9%8B%E6%AD%8C%20%E2%80%93%20%E5%88%A9%E7%94%A8XPC%E8%BF%87App%E6%B2%99%E7%9B%92.html  
https://github.com/MattyAyOh/XPCLab  
```commandline
Luke Deshotels, Costin Carabas, Jordan Beichler, Razvan Deaconescu, William Enck:
Kobold: Evaluating Decentralized Access Control for Remote NSXPC Methods on iOS. IEEE Symposium on Security and Privacy 2020: 1056-1070
```

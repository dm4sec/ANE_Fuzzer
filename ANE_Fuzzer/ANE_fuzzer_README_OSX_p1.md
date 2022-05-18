I firstly use the [XPCChecker](https://github.com/dm4sec/ANE_Fuzzer/tree/main/Utils/XPCChecker) to find that there is no Inter-Process Communication (IPC, XPC) 
in between the app and other services. 
Then I use [IOKitChecker](https://github.com/dm4sec/ANE_Fuzzer/tree/main/Utils/IOKitChecker) to find the below call sequence.
```
[*] onEnter: IOServiceNameMatching
[*] onLeave: IOServiceNameMatching
[*] onEnter: IOServiceGetMatchingService
[*] onEnter: IOMasterPort
[*] onLeave: IOMasterPort
[*] onEnter: IOCFSerialize
[*] onLeave: IOCFSerialize
[*] onLeave: IOServiceGetMatchingService
[*] onEnter: IOServiceOpen
[*] onLeave: IOServiceOpen
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOMasterPort
[*] onLeave: IOMasterPort
[*] onEnter: IOServiceMatching
[*] onLeave: IOServiceMatching
[*] onEnter: IONotificationPortCreate
[*] onEnter: IOObjectRetain
[*] onLeave: IOObjectRetain
[*] onLeave: IONotificationPortCreate
[*] onEnter: IONotificationPortSetDispatchQueue
[*] onLeave: IONotificationPortSetDispatchQueue
[*] onEnter: IOServiceAddMatchingNotification
[*] onEnter: IOCFSerialize
[*] onLeave: IOCFSerialize
[*] onLeave: IOServiceAddMatchingNotification
[*] onEnter: IOObjectRetain
[*] onLeave: IOObjectRetain
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOIteratorNext
[*] onLeave: IOIteratorNext
[*] onEnter: IOObjectConformsTo
[*] onEnter: _IOObjectConformsTo
[*] onEnter: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntrySearchCFProperty
[*] onLeave: _IOObjectConformsTo
[*] onLeave: IOObjectConformsTo
[*] onEnter: IOObjectRetain
[*] onLeave: IOObjectRetain
[*] onEnter: IONotificationPortCreate
[*] onEnter: IOMasterPort
[*] onLeave: IOMasterPort
[*] onLeave: IONotificationPortCreate
[*] onEnter: IONotificationPortSetDispatchQueue
[*] onLeave: IONotificationPortSetDispatchQueue
[*] onEnter: IORegistryEntryGetRegistryEntryID
[*] onLeave: IORegistryEntryGetRegistryEntryID
[*] onEnter: IOServiceAddInterestNotification
[*] onLeave: IOServiceAddInterestNotification
[*] onEnter: IORegistryEntryCreateCFProperty
[*] onEnter: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntryCreateCFProperty
[*] onEnter: IORegistryEntryCreateCFProperty
[*] onEnter: IORegistryEntrySearchCFProperty
[*] onEnter: IOCFUnserializeWithSize
[*] onEnter: IOCFUnserializeBinary
[*] onLeave: IOCFUnserializeBinary
[*] onLeave: IOCFUnserializeWithSize
[*] onLeave: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntryCreateCFProperty
[*] onEnter: IORegistryEntryCreateCFProperty
[*] onEnter: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntryCreateCFProperty
[*] onEnter: IOServiceOpen
[*] onLeave: IOServiceOpen
[*] onEnter: IOConnectCallStructMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onLeave: IOConnectCallStructMethod
[*] onEnter: IOConnectCallStructMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onLeave: IOConnectCallStructMethod
[*] onEnter: IOConnectCallStructMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onLeave: IOConnectCallStructMethod
[*] onEnter: IOConnectCallStructMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onLeave: IOConnectCallStructMethod
[*] onEnter: IORegistryEntryGetRegistryEntryID
[*] onLeave: IORegistryEntryGetRegistryEntryID
[*] onEnter: IOObjectRetain
[*] onLeave: IOObjectRetain
[*] onEnter: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntrySearchCFProperty
[*] onEnter: IORegistryEntryCreateIterator
[*] onLeave: IORegistryEntryCreateIterator
[*] onEnter: IOIteratorNext
[*] onLeave: IOIteratorNext
[*] onEnter: IOObjectConformsTo
[*] onEnter: _IOObjectConformsTo
[*] onLeave: _IOObjectConformsTo
[*] onLeave: IOObjectConformsTo
[*] onEnter: IORegistryEntrySearchCFProperty
[*] onEnter: IOCFUnserializeWithSize
[*] onEnter: IOCFUnserializeBinary
[*] onLeave: IOCFUnserializeBinary
[*] onLeave: IOCFUnserializeWithSize
[*] onLeave: IORegistryEntrySearchCFProperty
[*] onEnter: IOObjectRelease
[*] onLeave: IOObjectRelease
[*] onEnter: IOObjectRelease
[*] onLeave: IOObjectRelease
[*] onEnter: IOServiceOpen
[*] onLeave: IOServiceOpen
[*] onEnter: IOConnectCallStructMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onLeave: IOConnectCallStructMethod
[*] onEnter: IOConnectCallStructMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onLeave: IOConnectCallStructMethod
[*] onEnter: IOConnectCallStructMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onLeave: IOConnectCallStructMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallStructMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onLeave: IOConnectCallStructMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOObjectRelease
[*] onLeave: IOObjectRelease
[*] onEnter: IOIteratorNext
[*] onLeave: IOIteratorNext
[*] onEnter: IOObjectConformsTo
[*] onEnter: _IOObjectConformsTo
[*] onEnter: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntrySearchCFProperty
[*] onLeave: _IOObjectConformsTo
[*] onLeave: IOObjectConformsTo
[*] onEnter: IOObjectRetain
[*] onLeave: IOObjectRetain
[*] onEnter: IONotificationPortCreate
[*] onEnter: IOMasterPort
[*] onLeave: IOMasterPort
[*] onLeave: IONotificationPortCreate
[*] onEnter: IONotificationPortSetDispatchQueue
[*] onLeave: IONotificationPortSetDispatchQueue
[*] onEnter: IORegistryEntryGetRegistryEntryID
[*] onLeave: IORegistryEntryGetRegistryEntryID
[*] onEnter: IOServiceAddInterestNotification
[*] onLeave: IOServiceAddInterestNotification
[*] onEnter: IORegistryEntryCreateCFProperty
[*] onEnter: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntryCreateCFProperty
[*] onEnter: IORegistryEntryCreateCFProperty
[*] onEnter: IORegistryEntrySearchCFProperty
[*] onEnter: IOCFUnserializeWithSize
[*] onEnter: IOCFUnserializeBinary
[*] onLeave: IOCFUnserializeBinary
[*] onLeave: IOCFUnserializeWithSize
[*] onLeave: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntryCreateCFProperty
[*] onEnter: IORegistryEntryCreateCFProperty
[*] onEnter: IORegistryEntrySearchCFProperty
[*] onEnter: IOCFUnserializeWithSize
[*] onEnter: IOCFUnserializeBinary
[*] onLeave: IOCFUnserializeBinary
[*] onLeave: IOCFUnserializeWithSize
[*] onLeave: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntryCreateCFProperty
[*] onEnter: IOServiceOpen
[*] onLeave: IOServiceOpen
[*] onEnter: IOConnectCallStructMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onLeave: IOConnectCallStructMethod
[*] onEnter: IOConnectCallStructMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onLeave: IOConnectCallStructMethod
[*] onEnter: IOConnectCallStructMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onLeave: IOConnectCallStructMethod
[*] onEnter: IOConnectCallStructMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onLeave: IOConnectCallStructMethod
[*] onEnter: IORegistryEntryGetRegistryEntryID
[*] onLeave: IORegistryEntryGetRegistryEntryID
[*] onEnter: IOObjectRetain
[*] onLeave: IOObjectRetain
[*] onEnter: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntrySearchCFProperty
[*] onEnter: IORegistryEntryCreateIterator
[*] onLeave: IORegistryEntryCreateIterator
[*] onEnter: IOIteratorNext
[*] onLeave: IOIteratorNext
[*] onEnter: IOObjectConformsTo
[*] onEnter: _IOObjectConformsTo
[*] onLeave: _IOObjectConformsTo
[*] onLeave: IOObjectConformsTo
[*] onEnter: IORegistryEntrySearchCFProperty
[*] onEnter: IOCFUnserializeWithSize
[*] onEnter: IOCFUnserializeBinary
[*] onLeave: IOCFUnserializeBinary
[*] onLeave: IOCFUnserializeWithSize
[*] onLeave: IORegistryEntrySearchCFProperty
[*] onEnter: IOObjectRelease
[*] onLeave: IOObjectRelease
[*] onEnter: IOObjectRelease
[*] onLeave: IOObjectRelease
[*] onEnter: IOServiceOpen
[*] onLeave: IOServiceOpen
[*] onEnter: IOConnectCallStructMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onLeave: IOConnectCallStructMethod
[*] onEnter: IOConnectCallStructMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onLeave: IOConnectCallStructMethod
[*] onEnter: IOConnectCallStructMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onLeave: IOConnectCallStructMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IORegistryEntryGetParentEntry
[*] onLeave: IORegistryEntryGetParentEntry
[*] onEnter: IORegistryEntryCreateCFProperty
[*] onEnter: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntryCreateCFProperty
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOObjectRelease
[*] onLeave: IOObjectRelease
[*] onEnter: IOIteratorNext
[*] onLeave: IOIteratorNext
[*] onEnter: IOObjectRelease
[*] onLeave: IOObjectRelease
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IORegistryEntryGetParentEntry
[*] onLeave: IORegistryEntryGetParentEntry
[*] onEnter: IORegistryEntryCreateCFProperty
[*] onEnter: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntryCreateCFProperty
[*] onEnter: IORegistryEntryGetParentEntry
[*] onLeave: IORegistryEntryGetParentEntry
[*] onEnter: IORegistryEntryCreateCFProperty
[*] onEnter: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntryCreateCFProperty
[*] onEnter: IORegistryEntryGetParentEntry
[*] onLeave: IORegistryEntryGetParentEntry
[*] onEnter: IORegistryEntryCreateCFProperty
[*] onEnter: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntryCreateCFProperty
[*] onEnter: IORegistryEntryGetParentEntry
[*] onLeave: IORegistryEntryGetParentEntry
[*] onEnter: IORegistryEntryCreateCFProperty
[*] onEnter: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntryCreateCFProperty
[*] onEnter: IORegistryEntryGetParentEntry
[*] onLeave: IORegistryEntryGetParentEntry
[*] onEnter: IORegistryEntryCreateCFProperty
[*] onEnter: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntryCreateCFProperty
[*] onEnter: IORegistryEntryGetParentEntry
[*] onLeave: IORegistryEntryGetParentEntry
[*] onEnter: IORegistryEntryCreateCFProperty
[*] onEnter: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntryCreateCFProperty
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallStructMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onLeave: IOConnectCallStructMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IORegistryEntryGetParentEntry
[*] onLeave: IORegistryEntryGetParentEntry
[*] onEnter: IORegistryEntryCreateCFProperty
[*] onEnter: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntryCreateCFProperty
[*] onEnter: IORegistryEntryGetParentEntry
[*] onLeave: IORegistryEntryGetParentEntry
[*] onEnter: IORegistryEntryCreateCFProperty
[*] onEnter: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntryCreateCFProperty
[*] onEnter: IORegistryEntryGetParentEntry
[*] onLeave: IORegistryEntryGetParentEntry
[*] onEnter: IORegistryEntryCreateCFProperty
[*] onEnter: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntryCreateCFProperty
[*] onEnter: IORegistryEntryGetParentEntry
[*] onLeave: IORegistryEntryGetParentEntry
[*] onEnter: IORegistryEntryCreateCFProperty
[*] onEnter: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntryCreateCFProperty
[*] onEnter: IOServiceOpen
[*] onLeave: IOServiceOpen
[*] onEnter: IOConnectAddClient
[*] onLeave: IOConnectAddClient
[*] onEnter: IONotificationPortCreate
[*] onEnter: IOMasterPort
[*] onLeave: IOMasterPort
[*] onLeave: IONotificationPortCreate
[*] onEnter: IONotificationPortSetDispatchQueue
[*] onLeave: IONotificationPortSetDispatchQueue
[*] onEnter: IONotificationPortGetMachPort
[*] onLeave: IONotificationPortGetMachPort
[*] onEnter: IOConnectCallAsyncScalarMethod
[*] onEnter: IOConnectCallAsyncMethod
[*] onLeave: IOConnectCallAsyncMethod
[*] onLeave: IOConnectCallAsyncScalarMethod
[*] onEnter: IOConnectCallStructMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onLeave: IOConnectCallStructMethod
[*] onEnter: IONotificationPortSetDispatchQueue
[*] onLeave: IONotificationPortSetDispatchQueue
[*] onEnter: IORegistryEntryGetParentEntry
[*] onLeave: IORegistryEntryGetParentEntry
[*] onEnter: IORegistryEntryCreateCFProperty
[*] onEnter: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntryCreateCFProperty
[*] onEnter: IORegistryEntryGetParentEntry
[*] onLeave: IORegistryEntryGetParentEntry
[*] onEnter: IORegistryEntryCreateCFProperty
[*] onEnter: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntryCreateCFProperty
[*] onEnter: IORegistryEntryGetParentEntry
[*] onLeave: IORegistryEntryGetParentEntry
[*] onEnter: IORegistryEntryCreateCFProperty
[*] onEnter: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntryCreateCFProperty
[*] onEnter: IORegistryEntryGetParentEntry
[*] onLeave: IORegistryEntryGetParentEntry
[*] onEnter: IORegistryEntryCreateCFProperty
[*] onEnter: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntryCreateCFProperty
[*] onEnter: IOServiceOpen
[*] onLeave: IOServiceOpen
[*] onEnter: IOConnectAddClient
[*] onLeave: IOConnectAddClient
[*] onEnter: IONotificationPortCreate
[*] onEnter: IOMasterPort
[*] onLeave: IOMasterPort
[*] onLeave: IONotificationPortCreate
[*] onEnter: IONotificationPortSetDispatchQueue
[*] onLeave: IONotificationPortSetDispatchQueue
[*] onEnter: IONotificationPortGetMachPort
[*] onLeave: IONotificationPortGetMachPort
[*] onEnter: IOConnectCallAsyncScalarMethod
[*] onEnter: IOConnectCallAsyncMethod
[*] onLeave: IOConnectCallAsyncMethod
[*] onLeave: IOConnectCallAsyncScalarMethod
[*] onEnter: IOConnectCallStructMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onLeave: IOConnectCallStructMethod
[*] onEnter: IONotificationPortSetDispatchQueue
[*] onLeave: IONotificationPortSetDispatchQueue
[*] onEnter: IONotificationPortDestroy
[*] onLeave: IONotificationPortDestroy
[*] onEnter: IOConnectRelease
[*] onLeave: IOConnectRelease
[*] onEnter: IONotificationPortDestroy
[*] onLeave: IONotificationPortDestroy
[*] onEnter: IOConnectRelease
[*] onLeave: IOConnectRelease
[*] onEnter: IOServiceMatching
[*] onLeave: IOServiceMatching
[*] onEnter: IOServiceGetMatchingService
[*] onEnter: IOMasterPort
[*] onLeave: IOMasterPort
[*] onEnter: IOCFSerialize
[*] onLeave: IOCFSerialize
[*] onLeave: IOServiceGetMatchingService
[*] onEnter: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntrySearchCFProperty
[*] onEnter: IORegistryEntryGetParentEntry
[*] onLeave: IORegistryEntryGetParentEntry
[*] onEnter: IORegistryEntryCreateCFProperty
[*] onEnter: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntryCreateCFProperty
[*] onEnter: IORegistryEntryGetParentEntry
[*] onLeave: IORegistryEntryGetParentEntry
[*] onEnter: IORegistryEntryCreateCFProperty
[*] onEnter: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntryCreateCFProperty
[*] onEnter: IORegistryEntryGetParentEntry
[*] onLeave: IORegistryEntryGetParentEntry
[*] onEnter: IORegistryEntryCreateCFProperty
[*] onEnter: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntryCreateCFProperty
[*] onEnter: IORegistryEntryGetParentEntry
[*] onLeave: IORegistryEntryGetParentEntry
[*] onEnter: IORegistryEntryCreateCFProperty
[*] onEnter: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntryCreateCFProperty
[*] onEnter: IOServiceOpen
[*] onLeave: IOServiceOpen
[*] onEnter: IOConnectAddClient
[*] onLeave: IOConnectAddClient
[*] onEnter: IONotificationPortCreate
[*] onEnter: IOMasterPort
[*] onLeave: IOMasterPort
[*] onLeave: IONotificationPortCreate
[*] onEnter: IONotificationPortSetDispatchQueue
[*] onLeave: IONotificationPortSetDispatchQueue
[*] onEnter: IONotificationPortGetMachPort
[*] onLeave: IONotificationPortGetMachPort
[*] onEnter: IOConnectCallAsyncScalarMethod
[*] onEnter: IOConnectCallAsyncMethod
[*] onLeave: IOConnectCallAsyncMethod
[*] onLeave: IOConnectCallAsyncScalarMethod
[*] onEnter: IOConnectCallStructMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onLeave: IOConnectCallStructMethod
[*] onEnter: IONotificationPortSetDispatchQueue
[*] onLeave: IONotificationPortSetDispatchQueue
[*] onEnter: IORegistryEntryGetParentEntry
[*] onLeave: IORegistryEntryGetParentEntry
[*] onEnter: IORegistryEntryCreateCFProperty
[*] onEnter: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntryCreateCFProperty
[*] onEnter: IORegistryEntryGetParentEntry
[*] onLeave: IORegistryEntryGetParentEntry
[*] onEnter: IORegistryEntryCreateCFProperty
[*] onEnter: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntryCreateCFProperty
[*] onEnter: IORegistryEntryGetParentEntry
[*] onLeave: IORegistryEntryGetParentEntry
[*] onEnter: IORegistryEntryCreateCFProperty
[*] onEnter: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntryCreateCFProperty
[*] onEnter: IORegistryEntryGetParentEntry
[*] onLeave: IORegistryEntryGetParentEntry
[*] onEnter: IORegistryEntryCreateCFProperty
[*] onEnter: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntryCreateCFProperty
[*] onEnter: IOServiceOpen
[*] onLeave: IOServiceOpen
[*] onEnter: IOConnectAddClient
[*] onLeave: IOConnectAddClient
[*] onEnter: IONotificationPortCreate
[*] onEnter: IOMasterPort
[*] onLeave: IOMasterPort
[*] onLeave: IONotificationPortCreate
[*] onEnter: IONotificationPortSetDispatchQueue
[*] onLeave: IONotificationPortSetDispatchQueue
[*] onEnter: IONotificationPortGetMachPort
[*] onLeave: IONotificationPortGetMachPort
[*] onEnter: IOConnectCallAsyncScalarMethod
[*] onEnter: IOConnectCallAsyncMethod
[*] onLeave: IOConnectCallAsyncMethod
[*] onLeave: IOConnectCallAsyncScalarMethod
[*] onEnter: IOConnectCallStructMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onLeave: IOConnectCallStructMethod
[*] onEnter: IONotificationPortSetDispatchQueue
[*] onLeave: IONotificationPortSetDispatchQueue
[*] onEnter: IOServiceMatching
[*] onLeave: IOServiceMatching
[*] onEnter: IOServiceGetMatchingService
[*] onEnter: IOMasterPort
[*] onLeave: IOMasterPort
[*] onEnter: IOCFSerialize
[*] onLeave: IOCFSerialize
[*] onLeave: IOServiceGetMatchingService
[*] onEnter: IORegistryEntrySearchCFProperty
[*] onLeave: IORegistryEntrySearchCFProperty
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallStructMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onLeave: IOConnectCallStructMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: _IODispatchCalloutWithDispatch
[*] onEnter: IODispatchCalloutFromCFMessage
[*] onLeave: IODispatchCalloutFromCFMessage
[*] onLeave: _IODispatchCalloutWithDispatch
[*] onEnter: _IODispatchCalloutWithDispatch
[*] onEnter: IODispatchCalloutFromCFMessage
[*] onLeave: IODispatchCalloutFromCFMessage
[*] onLeave: _IODispatchCalloutWithDispatch
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: _IODispatchCalloutWithDispatch
[*] onEnter: IODispatchCalloutFromCFMessage
[*] onLeave: IODispatchCalloutFromCFMessage
[*] onLeave: _IODispatchCalloutWithDispatch
[*] onEnter: _IODispatchCalloutWithDispatch
[*] onEnter: IODispatchCalloutFromCFMessage
[*] onLeave: IODispatchCalloutFromCFMessage
[*] onLeave: _IODispatchCalloutWithDispatch
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: _IODispatchCalloutWithDispatch
[*] onEnter: IODispatchCalloutFromCFMessage
[*] onLeave: IODispatchCalloutFromCFMessage
[*] onLeave: _IODispatchCalloutWithDispatch
[*] onEnter: _IODispatchCalloutWithDispatch
[*] onEnter: IODispatchCalloutFromCFMessage
[*] onLeave: IODispatchCalloutFromCFMessage
[*] onLeave: _IODispatchCalloutWithDispatch
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: _IODispatchCalloutWithDispatch
[*] onEnter: IODispatchCalloutFromCFMessage
[*] onLeave: IODispatchCalloutFromCFMessage
[*] onLeave: _IODispatchCalloutWithDispatch
[*] onEnter: _IODispatchCalloutWithDispatch
[*] onEnter: IODispatchCalloutFromCFMessage
[*] onLeave: IODispatchCalloutFromCFMessage
[*] onLeave: _IODispatchCalloutWithDispatch
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IONotificationPortDestroy
[*] onLeave: IONotificationPortDestroy
[*] onEnter: IOConnectRelease
[*] onLeave: IOConnectRelease
[*] onEnter: IONotificationPortDestroy
[*] onLeave: IONotificationPortDestroy
[*] onEnter: IOConnectRelease
[*] onLeave: IOConnectRelease
[*] onEnter: IOConnectCallScalarMethod
[*] onLeave: IOConnectCallScalarMethod
[*] onEnter: IOConnectCallScalarMethod
[*] onLeave: IOConnectCallScalarMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
[*] onEnter: IOConnectCallMethod
[*] onLeave: IOConnectCallMethod
```

The methods we come across are collected as belows, it is organized in the order of the procedure of invoking a `user client` object:

|                #                 | 1                                                                                           |                                                                                 2                                                                                 |                                                                                      3                                                                                      |                                           4                                           |
|:--------------------------------:|:--------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------:|
| setting up a matching dictionary | IOServiceNameMatching(\_ name: UnsafePointer\<CChar\>!)                                     |                                                        IOServiceMatching(\_ name: UnsafePointer\<CChar\>!)                                                        |             IOBSDNameMatching(\_:\_:, \_ bsdName: UnsafePointer\<CChar\>!)                                                                                                  |                    other stuff by using CFDictionaryCreateMutable                     |
|    examining matching objects    | IOServiceGetMatchingService(\_:\_ matching: CFDictionary!)                                  | IOServiceGetMatchingServices(\_:\_ matching: CFDictionary!, \_ existing: UnsafeMutablePointer\<io\_iterator\_t\>!) + IOIteratorNext(\_ iterator: io\_iterator\_t) | IOServiceAddMatchingNotification(\_:\_:, _ matching: CFDictionary!, _ notification: UnsafeMutablePointer\<io_iterator_t\>!)  + IOIteratorNext(\_ iterator: io\_iterator\_t) |                                           -                                           |                                                                                     |
| open the in-kernel driver object | IOServiceOpen(_ service: io_service_t\_:\_:\_ connect: UnsafeMutablePointer<io_connect_t>!) |                                                                                 -                                                                                 |                                                                                      -                                                                                      |                                           -                                           |
|   invoke a user-client object    | IOConnectCallMethod(_ connection: mach_port_t\_:\_:\_:\_:\_:\_:\_:\_:\_:)                   |                                              IOConnectCallScalarMethod(_ connection: mach_port_t\_:\_:\_:\_:\_:) ??                                               |                                           IOConnectCallAsyncMethod(_ connection: mach_port_t\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)                                           | IOConnectCallStructMethod, IOConnectCallAsyncScalarMethod are wrappers of other APIs. |

**NOTE:**
1. I do not find `IOConnectMapMemory*` stuff which does the memory-mapping job in userspace.
2. Rather than [other study](https://i.blackhat.com/asia-21/Friday-Handouts/as21-Wu-Apple-Neural_Engine.pdf), the app talks to driver directly in OSX.




By using [InspectingCallSequence](https://github.com/dm4sec/ANE_Fuzzer/tree/main/ANE_Fuzzer/OSX/VNCoreMLModel_Stud/InspectingCallSequence.py), 
the call sequence is collected as belows:

```
/Users/panmac/Desktop/fuzzer/ios_fuzzer/venv/bin/python /Users/panmac/Desktop/fuzzer/ios_fuzzer/ANE_Fuzzer/OSX/VNCoreMLModel_Stud/InspectingCallSequence.py --app-name=VNCoreMLModel_Clean
[*] Frida js is attached to: VNCoreMLModel_Clean
[*] g_IOServiceGetMatchingService_ptr: 0x7ff82020c38c
[*] g_IOServiceGetMatchingServices_ptr: 0x7ff82020ced5
[*] g_IOServiceAddMatchingNotification_ptr: 0x7ff82020ef5a
[*] g_IOIteratorNext_ptr: 0x7ff82020d1c0
[*] g_IOServiceOpen_ptr: 0x7ff82020d7e5
[*] g_IOConnectCallMethod_ptr: 0x7ff82020d96c
[*] g_IOConnectCallScalarMethod_ptr: 0x7ff820215a1c
[*] g_IOConnectCallAsyncMethod_ptr: 0x7ff820215a88
[*] onEnter: IOServiceGetMatchingService
|-[i] 2nd arg (matching):
{
    IONameMatch = IOSurfaceRoot;
}
|-[i] IOServiceGetMatchingService called from:
0x7ff82618196a IOSurface!_iosConnectInitalize
0x7ff81d865d6a libsystem_pthread.dylib!__pthread_once_handler
0x7ff81d87c766 libsystem_platform.dylib!_os_once_callout
0x7ff81d865d18 libsystem_pthread.dylib!pthread_once
0x7ff826181311 IOSurface!IOSurfaceClientCopyGPUPolicies
0x7ff8261c6b87 Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff828859a34 MetalPerformanceShaders!MPSGetPreferredDevice
0x7ff832d5f9a1 Espresso!Espresso::select_metal_device(int)
0x7ff832a6751a Espresso!EspressoLight::espresso_context::espresso_context(espresso_engine_t, int, void*, void*)
0x7ff832a6607e Espresso!espresso_create_context

[*] onLeave: IOServiceGetMatchingService
|-[i] return value (io_service_t): 0x3e07
[*] IORegistryEntryGetName_ptr: 0x7ff820218c77
|-[i] class name:IOSurfaceRoot
|-[i] g_index: 1
[*] onEnter: IOServiceOpen
|-[i] 1st arg (service): 15879
|-[i] 3rd arg (type): 0
|-[i] IOServiceOpen called from:
0x7ff8261819a0 IOSurface!_iosConnectInitalize
0x7ff81d865d6a libsystem_pthread.dylib!__pthread_once_handler
0x7ff81d87c766 libsystem_platform.dylib!_os_once_callout
0x7ff81d865d18 libsystem_pthread.dylib!pthread_once
0x7ff826181311 IOSurface!IOSurfaceClientCopyGPUPolicies
0x7ff8261c6b87 Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff828859a34 MetalPerformanceShaders!MPSGetPreferredDevice
0x7ff832d5f9a1 Espresso!Espresso::select_metal_device(int)
0x7ff832a6751a Espresso!EspressoLight::espresso_context::espresso_context(espresso_engine_t, int, void*, void*)
0x7ff832a6607e Espresso!espresso_create_context

[*] onLeave: IOServiceOpen
|-[i] 4th (connection): 17939
|-[i] return value (kern_return_t): 0x0
|-[i] g_index: 2
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 17939
|-[i] 2nd arg (selector): 13
|-[i] IOConnectCallMethod called from:
0x7ff826181cad IOSurface!_iosConnectInitalize
0x7ff81d865d6a libsystem_pthread.dylib!__pthread_once_handler
0x7ff81d87c766 libsystem_platform.dylib!_os_once_callout
0x7ff81d865d18 libsystem_pthread.dylib!pthread_once
0x7ff826181311 IOSurface!IOSurfaceClientCopyGPUPolicies
0x7ff8261c6b87 Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff828859a34 MetalPerformanceShaders!MPSGetPreferredDevice
0x7ff832d5f9a1 Espresso!Espresso::select_metal_device(int)
0x7ff832a6751a Espresso!EspressoLight::espresso_context::espresso_context(espresso_engine_t, int, void*, void*)
0x7ff832a6607e Espresso!espresso_create_context

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 3
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 17939
|-[i] 2nd arg (selector): 44
|-[i] IOConnectCallMethod called from:
0x7ff826182189 IOSurface!_iosConnectInitalize
0x7ff81d865d6a libsystem_pthread.dylib!__pthread_once_handler
0x7ff81d87c766 libsystem_platform.dylib!_os_once_callout
0x7ff81d865d18 libsystem_pthread.dylib!pthread_once
0x7ff826181311 IOSurface!IOSurfaceClientCopyGPUPolicies
0x7ff8261c6b87 Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff828859a34 MetalPerformanceShaders!MPSGetPreferredDevice
0x7ff832d5f9a1 Espresso!Espresso::select_metal_device(int)
0x7ff832a6751a Espresso!EspressoLight::espresso_context::espresso_context(espresso_engine_t, int, void*, void*)
0x7ff832a6607e Espresso!espresso_create_context

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0xe00002f0
|-[i] g_index: 4
[*] onEnter: IOServiceAddMatchingNotification
|-[i] 3rd arg (matching):
{
    IOProviderClass = IOAccelerator;
}
|-[i] IOServiceAddMatchingNotification called from:
0x7ff826260e34 Metal!MTLIOAccelServiceGetMatchingServices
0x7ff82619c60f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff828859a34 MetalPerformanceShaders!MPSGetPreferredDevice
0x7ff832d5f9a1 Espresso!Espresso::select_metal_device(int)
0x7ff832a6751a Espresso!EspressoLight::espresso_context::espresso_context(espresso_engine_t, int, void*, void*)
0x7ff832a6607e Espresso!espresso_create_context
0x7ff825409add CoreML!-[MLNeuralNetworkEngine collectParametersFromContainer:configuration:error:]
0x7ff82540b2e8 CoreML!-[MLNeuralNetworkEngine initWithContainer:configuration:error:]
0x7ff825422854 CoreML!+[MLNeuralNetworkEngine loadModelFromCompiledArchive:modelVersionInfo:compilerVersionInfo:configuration:error:]

[*] onLeave: IOServiceAddMatchingNotification
|-[i] 6th arg (iterator): 15115
|-[i] return value (kern_return_t): 0x0
|-[i] g_index: 5
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 17939
|-[i] 2nd arg (selector): 32
|-[i] IOConnectCallMethod called from:
0x7ff8261824fd IOSurface!IOSurfaceGetGraphicsCommPageAddress
0x7ff826193415 IOAccelerator!__IOAccelInitCommPage_block_invoke
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c64a Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff828859a34 MetalPerformanceShaders!MPSGetPreferredDevice
0x7ff832d5f9a1 Espresso!Espresso::select_metal_device(int)
0x7ff832a6751a Espresso!EspressoLight::espresso_context::espresso_context(espresso_engine_t, int, void*, void*)
0x7ff832a6607e Espresso!espresso_create_context

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 6
[*] onEnter: IOIteratorNext
|-[i] 1st arg (iterator): 15115
|-[i] IOIteratorNext called from:
0x7ff82619c652 Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff828859a34 MetalPerformanceShaders!MPSGetPreferredDevice
0x7ff832d5f9a1 Espresso!Espresso::select_metal_device(int)
0x7ff832a6751a Espresso!EspressoLight::espresso_context::espresso_context(espresso_engine_t, int, void*, void*)
0x7ff832a6607e Espresso!espresso_create_context
0x7ff825409add CoreML!-[MLNeuralNetworkEngine collectParametersFromContainer:configuration:error:]
0x7ff82540b2e8 CoreML!-[MLNeuralNetworkEngine initWithContainer:configuration:error:]
0x7ff825422854 CoreML!+[MLNeuralNetworkEngine loadModelFromCompiledArchive:modelVersionInfo:compilerVersionInfo:configuration:error:]
0x7ff825482bbf CoreML!+[MLLoader loadModelFromArchive:configuration:loaderEvent:error:]

[*] onLeave: IOIteratorNext
|-[i] return value (service): 0x3a0b
[*] IORegistryEntryGetName_ptr: 0x7ff820218c77
|-[i] class name:IntelAccelerator
|-[i] g_index: 7
[*] onEnter: IOServiceOpen
|-[i] 1st arg (service): 14859
|-[i] 3rd arg (type): 5
|-[i] IOServiceOpen called from:
0x7ff826193150 IOAccelerator!IOAccelDeviceCreateWithAPIProperty
0x7ff82619ca4f Metal!-[MTLIOAccelDevice initWithAcceleratorPort:]
0x7ffa2bdb40b9 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout

[*] onLeave: IOServiceOpen
|-[i] 4th (connection): 22319
|-[i] return value (kern_return_t): 0x0
|-[i] g_index: 8
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22319
|-[i] 2nd arg (selector): 9
|-[i] IOConnectCallMethod called from:
0x7ff82020ea6a IOKit!IOConnectCallStructMethod
0x7ff8261931b5 IOAccelerator!IOAccelDeviceCreateWithAPIProperty
0x7ff82619ca4f Metal!-[MTLIOAccelDevice initWithAcceleratorPort:]
0x7ffa2bdb40b9 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x1
|-[i] g_index: 9
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22319
|-[i] 2nd arg (selector): 2
|-[i] IOConnectCallMethod called from:
0x7ff82020ea6a IOKit!IOConnectCallStructMethod
0x7ff826193222 IOAccelerator!IOAccelDeviceCreateWithAPIProperty
0x7ff82619ca4f Metal!-[MTLIOAccelDevice initWithAcceleratorPort:]
0x7ffa2bdb40b9 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 10
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22319
|-[i] 2nd arg (selector): 0
|-[i] IOConnectCallMethod called from:
0x7ff82020ea6a IOKit!IOConnectCallStructMethod
0x7ff82619333f IOAccelerator!IOAccelDeviceCreateWithAPIProperty
0x7ff82619ca4f Metal!-[MTLIOAccelDevice initWithAcceleratorPort:]
0x7ffa2bdb40b9 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 11
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22319
|-[i] 2nd arg (selector): 7
|-[i] IOConnectCallMethod called from:
0x7ff82020ea6a IOKit!IOConnectCallStructMethod
0x7ff82619336e IOAccelerator!IOAccelDeviceCreateWithAPIProperty
0x7ff82619ca4f Metal!-[MTLIOAccelDevice initWithAcceleratorPort:]
0x7ffa2bdb40b9 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 12
[*] onEnter: IOIteratorNext
|-[i] 1st arg (iterator): 42507
|-[i] IOIteratorNext called from:
0x7ff82621b507 Metal!-[MTLIOAccelDevice isBuiltIn]
0x7ff82619cefd Metal!-[MTLIOAccelDevice updateGPUSelectionProperties]
0x7ff82619cbcd Metal!-[MTLIOAccelDevice initWithAcceleratorPort:]
0x7ffa2bdb40b9 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout

[*] onLeave: IOIteratorNext
|-[i] return value (service): 0xa503
[*] IORegistryEntryGetName_ptr: 0x7ff820218c77
|-[i] class name:IGPU
|-[i] g_index: 13
[*] onEnter: IOServiceOpen
|-[i] 1st arg (service): 14859
|-[i] 3rd arg (type): 6
|-[i] IOServiceOpen called from:
0x7ff826193649 IOAccelerator!IOAccelSharedCreate
0x7ff82621b077 Metal!-[MTLIOAccelDevice lazyInitialize]
0x7ff82619cbf1 Metal!-[MTLIOAccelDevice initWithAcceleratorPort:]
0x7ffa2bdb40b9 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout

[*] onLeave: IOServiceOpen
|-[i] 4th (connection): 42511
|-[i] return value (kern_return_t): 0x0
|-[i] g_index: 14
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 42511
|-[i] 2nd arg (selector): 9
|-[i] IOConnectCallMethod called from:
0x7ff82020ea6a IOKit!IOConnectCallStructMethod
0x7ff8261936cd IOAccelerator!IOAccelSharedCreate
0x7ff82621b077 Metal!-[MTLIOAccelDevice lazyInitialize]
0x7ff82619cbf1 Metal!-[MTLIOAccelDevice initWithAcceleratorPort:]
0x7ffa2bdb40b9 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 15
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 42511
|-[i] 2nd arg (selector): 10
|-[i] IOConnectCallMethod called from:
0x7ff82020ea6a IOKit!IOConnectCallStructMethod
0x7ff8261940eb IOAccelerator!IOAccelSharedSetupDirtyRing
0x7ff82621b08f Metal!-[MTLIOAccelDevice lazyInitialize]
0x7ff82619cbf1 Metal!-[MTLIOAccelDevice initWithAcceleratorPort:]
0x7ffa2bdb40b9 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 16
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22319
|-[i] 2nd arg (selector): 11
|-[i] IOConnectCallMethod called from:
0x7ff82020ea6a IOKit!IOConnectCallStructMethod
0x7ffa2bdb3872 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initializeDevice:sharedRef:]
0x7ffa2bdb40fc AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 17
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22319
|-[i] 2nd arg (selector): 10
|-[i] IOConnectCallMethod called from:
0x7ffa2bdb3960 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initializeDevice:sharedRef:]
0x7ffa2bdb40fc AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff828859a34 MetalPerformanceShaders!MPSGetPreferredDevice

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 18
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 42511
|-[i] 2nd arg (selector): 22
|-[i] IOConnectCallMethod called from:
0x7ff82020ea6a IOKit!IOConnectCallStructMethod
0x7ffa2bdb399d AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initializeDevice:sharedRef:]
0x7ffa2bdb40fc AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 19
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22319
|-[i] 2nd arg (selector): 12
|-[i] IOConnectCallMethod called from:
0x7ffa2bdade8f AppleIntelHD5000GraphicsMTLDriver!idvarInitDebugVariables
0x7ffa2bdb3e90 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initializeDevice:sharedRef:]
0x7ffa2bdb40fc AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 20
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22319
|-[i] 2nd arg (selector): 12
|-[i] IOConnectCallMethod called from:
0x7ffa2bdade8f AppleIntelHD5000GraphicsMTLDriver!idvarInitDebugVariables
0x7ffa2bdb3e90 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initializeDevice:sharedRef:]
0x7ffa2bdb40fc AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 21
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22319
|-[i] 2nd arg (selector): 12
|-[i] IOConnectCallMethod called from:
0x7ffa2bdade8f AppleIntelHD5000GraphicsMTLDriver!idvarInitDebugVariables
0x7ffa2bdb3e90 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initializeDevice:sharedRef:]
0x7ffa2bdb40fc AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 22
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22319
|-[i] 2nd arg (selector): 12
|-[i] IOConnectCallMethod called from:
0x7ffa2bdade8f AppleIntelHD5000GraphicsMTLDriver!idvarInitDebugVariables
0x7ffa2bdb3e90 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initializeDevice:sharedRef:]
0x7ffa2bdb40fc AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 23
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22319
|-[i] 2nd arg (selector): 12
|-[i] IOConnectCallMethod called from:
0x7ffa2bdade8f AppleIntelHD5000GraphicsMTLDriver!idvarInitDebugVariables
0x7ffa2bdb3e90 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initializeDevice:sharedRef:]
0x7ffa2bdb40fc AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 24
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22319
|-[i] 2nd arg (selector): 12
|-[i] IOConnectCallMethod called from:
0x7ffa2bdade8f AppleIntelHD5000GraphicsMTLDriver!idvarInitDebugVariables
0x7ffa2bdb3e90 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initializeDevice:sharedRef:]
0x7ffa2bdb40fc AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 25
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22319
|-[i] 2nd arg (selector): 12
|-[i] IOConnectCallMethod called from:
0x7ffa2bdade8f AppleIntelHD5000GraphicsMTLDriver!idvarInitDebugVariables
0x7ffa2bdb3e90 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initializeDevice:sharedRef:]
0x7ffa2bdb40fc AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 26
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22319
|-[i] 2nd arg (selector): 12
|-[i] IOConnectCallMethod called from:
0x7ffa2bdade8f AppleIntelHD5000GraphicsMTLDriver!idvarInitDebugVariables
0x7ffa2bdb3e90 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initializeDevice:sharedRef:]
0x7ffa2bdb40fc AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 27
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22319
|-[i] 2nd arg (selector): 12
|-[i] IOConnectCallMethod called from:
0x7ffa2bdade8f AppleIntelHD5000GraphicsMTLDriver!idvarInitDebugVariables
0x7ffa2bdb3e90 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initializeDevice:sharedRef:]
0x7ffa2bdb40fc AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 28
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22319
|-[i] 2nd arg (selector): 12
|-[i] IOConnectCallMethod called from:
0x7ffa2bdade8f AppleIntelHD5000GraphicsMTLDriver!idvarInitDebugVariables
0x7ffa2bdb3e90 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initializeDevice:sharedRef:]
0x7ffa2bdb40fc AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 29
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22319
|-[i] 2nd arg (selector): 12
|-[i] IOConnectCallMethod called from:
0x7ffa2bdade8f AppleIntelHD5000GraphicsMTLDriver!idvarInitDebugVariables
0x7ffa2bdb3e90 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initializeDevice:sharedRef:]
0x7ffa2bdb40fc AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 30
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22319
|-[i] 2nd arg (selector): 12
|-[i] IOConnectCallMethod called from:
0x7ffa2bdade8f AppleIntelHD5000GraphicsMTLDriver!idvarInitDebugVariables
0x7ffa2bdb3e90 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initializeDevice:sharedRef:]
0x7ffa2bdb40fc AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 31
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22319
|-[i] 2nd arg (selector): 12
|-[i] IOConnectCallMethod called from:
0x7ffa2bdade8f AppleIntelHD5000GraphicsMTLDriver!idvarInitDebugVariables
0x7ffa2bdb3e90 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initializeDevice:sharedRef:]
0x7ffa2bdb40fc AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 32
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22319
|-[i] 2nd arg (selector): 12
|-[i] IOConnectCallMethod called from:
0x7ffa2bdade8f AppleIntelHD5000GraphicsMTLDriver!idvarInitDebugVariables
0x7ffa2bdb3e90 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initializeDevice:sharedRef:]
0x7ffa2bdb40fc AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 33
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22319
|-[i] 2nd arg (selector): 12
|-[i] IOConnectCallMethod called from:
0x7ffa2bdade8f AppleIntelHD5000GraphicsMTLDriver!idvarInitDebugVariables
0x7ffa2bdb3e90 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initializeDevice:sharedRef:]
0x7ffa2bdb40fc AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 34
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22319
|-[i] 2nd arg (selector): 12
|-[i] IOConnectCallMethod called from:
0x7ffa2bdade8f AppleIntelHD5000GraphicsMTLDriver!idvarInitDebugVariables
0x7ffa2bdb3e90 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initializeDevice:sharedRef:]
0x7ffa2bdb40fc AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 35
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22319
|-[i] 2nd arg (selector): 12
|-[i] IOConnectCallMethod called from:
0x7ffa2bdade8f AppleIntelHD5000GraphicsMTLDriver!idvarInitDebugVariables
0x7ffa2bdb3e90 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initializeDevice:sharedRef:]
0x7ffa2bdb40fc AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 36
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22319
|-[i] 2nd arg (selector): 12
|-[i] IOConnectCallMethod called from:
0x7ffa2bdade8f AppleIntelHD5000GraphicsMTLDriver!idvarInitDebugVariables
0x7ffa2bdb3e90 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initializeDevice:sharedRef:]
0x7ffa2bdb40fc AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 37
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22319
|-[i] 2nd arg (selector): 12
|-[i] IOConnectCallMethod called from:
0x7ffa2bdade8f AppleIntelHD5000GraphicsMTLDriver!idvarInitDebugVariables
0x7ffa2bdb3e90 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initializeDevice:sharedRef:]
0x7ffa2bdb40fc AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 38
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22319
|-[i] 2nd arg (selector): 12
|-[i] IOConnectCallMethod called from:
0x7ffa2bdade8f AppleIntelHD5000GraphicsMTLDriver!idvarInitDebugVariables
0x7ffa2bdb3e90 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initializeDevice:sharedRef:]
0x7ffa2bdb40fc AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 39
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22319
|-[i] 2nd arg (selector): 12
|-[i] IOConnectCallMethod called from:
0x7ffa2bdade8f AppleIntelHD5000GraphicsMTLDriver!idvarInitDebugVariables
0x7ffa2bdb3e90 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initializeDevice:sharedRef:]
0x7ffa2bdb40fc AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 40
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22319
|-[i] 2nd arg (selector): 12
|-[i] IOConnectCallMethod called from:
0x7ffa2bdade8f AppleIntelHD5000GraphicsMTLDriver!idvarInitDebugVariables
0x7ffa2bdb3e90 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initializeDevice:sharedRef:]
0x7ffa2bdb40fc AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 41
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22319
|-[i] 2nd arg (selector): 12
|-[i] IOConnectCallMethod called from:
0x7ffa2bdade8f AppleIntelHD5000GraphicsMTLDriver!idvarInitDebugVariables
0x7ffa2bdb3e90 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initializeDevice:sharedRef:]
0x7ffa2bdb40fc AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 42
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22319
|-[i] 2nd arg (selector): 12
|-[i] IOConnectCallMethod called from:
0x7ffa2bdade8f AppleIntelHD5000GraphicsMTLDriver!idvarInitDebugVariables
0x7ffa2bdb3e90 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initializeDevice:sharedRef:]
0x7ffa2bdb40fc AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 43
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22319
|-[i] 2nd arg (selector): 12
|-[i] IOConnectCallMethod called from:
0x7ffa2bdade8f AppleIntelHD5000GraphicsMTLDriver!idvarInitDebugVariables
0x7ffa2bdb3e90 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initializeDevice:sharedRef:]
0x7ffa2bdb40fc AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 44
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22319
|-[i] 2nd arg (selector): 12
|-[i] IOConnectCallMethod called from:
0x7ffa2bdade8f AppleIntelHD5000GraphicsMTLDriver!idvarInitDebugVariables
0x7ffa2bdb3e90 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initializeDevice:sharedRef:]
0x7ffa2bdb40fc AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 45
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22319
|-[i] 2nd arg (selector): 12
|-[i] IOConnectCallMethod called from:
0x7ffa2bdade8f AppleIntelHD5000GraphicsMTLDriver!idvarInitDebugVariables
0x7ffa2bdb3e90 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initializeDevice:sharedRef:]
0x7ffa2bdb40fc AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 46
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22319
|-[i] 2nd arg (selector): 12
|-[i] IOConnectCallMethod called from:
0x7ffa2bdade8f AppleIntelHD5000GraphicsMTLDriver!idvarInitDebugVariables
0x7ffa2bdb3e90 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initializeDevice:sharedRef:]
0x7ffa2bdb40fc AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 47
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22319
|-[i] 2nd arg (selector): 12
|-[i] IOConnectCallMethod called from:
0x7ffa2bdade8f AppleIntelHD5000GraphicsMTLDriver!idvarInitDebugVariables
0x7ffa2bdb3e90 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initializeDevice:sharedRef:]
0x7ffa2bdb40fc AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 48
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22319
|-[i] 2nd arg (selector): 12
|-[i] IOConnectCallMethod called from:
0x7ffa2bdade8f AppleIntelHD5000GraphicsMTLDriver!idvarInitDebugVariables
0x7ffa2bdb3e90 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initializeDevice:sharedRef:]
0x7ffa2bdb40fc AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 49
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22319
|-[i] 2nd arg (selector): 12
|-[i] IOConnectCallMethod called from:
0x7ffa2bdade8f AppleIntelHD5000GraphicsMTLDriver!idvarInitDebugVariables
0x7ffa2bdb3e90 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initializeDevice:sharedRef:]
0x7ffa2bdb40fc AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 50
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22319
|-[i] 2nd arg (selector): 12
|-[i] IOConnectCallMethod called from:
0x7ffa2bdade8f AppleIntelHD5000GraphicsMTLDriver!idvarInitDebugVariables
0x7ffa2bdb3e90 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initializeDevice:sharedRef:]
0x7ffa2bdb40fc AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 51
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22319
|-[i] 2nd arg (selector): 12
|-[i] IOConnectCallMethod called from:
0x7ffa2bdade8f AppleIntelHD5000GraphicsMTLDriver!idvarInitDebugVariables
0x7ffa2bdb3e90 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initializeDevice:sharedRef:]
0x7ffa2bdb40fc AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 52
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22319
|-[i] 2nd arg (selector): 12
|-[i] IOConnectCallMethod called from:
0x7ffa2bdade8f AppleIntelHD5000GraphicsMTLDriver!idvarInitDebugVariables
0x7ffa2bdb3e90 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initializeDevice:sharedRef:]
0x7ffa2bdb40fc AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 53
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22319
|-[i] 2nd arg (selector): 12
|-[i] IOConnectCallMethod called from:
0x7ffa2bdade8f AppleIntelHD5000GraphicsMTLDriver!idvarInitDebugVariables
0x7ffa2bdb3e90 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initializeDevice:sharedRef:]
0x7ffa2bdb40fc AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 54
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22319
|-[i] 2nd arg (selector): 12
|-[i] IOConnectCallMethod called from:
0x7ffa2bdade8f AppleIntelHD5000GraphicsMTLDriver!idvarInitDebugVariables
0x7ffa2bdb3e90 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initializeDevice:sharedRef:]
0x7ffa2bdb40fc AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 55
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22319
|-[i] 2nd arg (selector): 12
|-[i] IOConnectCallMethod called from:
0x7ffa2bdade8f AppleIntelHD5000GraphicsMTLDriver!idvarInitDebugVariables
0x7ffa2bdb3e90 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initializeDevice:sharedRef:]
0x7ffa2bdb40fc AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 56
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22319
|-[i] 2nd arg (selector): 12
|-[i] IOConnectCallMethod called from:
0x7ffa2bdade8f AppleIntelHD5000GraphicsMTLDriver!idvarInitDebugVariables
0x7ffa2bdb3e90 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initializeDevice:sharedRef:]
0x7ffa2bdb40fc AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 57
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22319
|-[i] 2nd arg (selector): 12
|-[i] IOConnectCallMethod called from:
0x7ffa2bdade8f AppleIntelHD5000GraphicsMTLDriver!idvarInitDebugVariables
0x7ffa2bdb3e90 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initializeDevice:sharedRef:]
0x7ffa2bdb40fc AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 58
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22319
|-[i] 2nd arg (selector): 12
|-[i] IOConnectCallMethod called from:
0x7ffa2bdade8f AppleIntelHD5000GraphicsMTLDriver!idvarInitDebugVariables
0x7ffa2bdb3e90 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initializeDevice:sharedRef:]
0x7ffa2bdb40fc AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 59
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22319
|-[i] 2nd arg (selector): 12
|-[i] IOConnectCallMethod called from:
0x7ffa2bdade8f AppleIntelHD5000GraphicsMTLDriver!idvarInitDebugVariables
0x7ffa2bdb3e90 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initializeDevice:sharedRef:]
0x7ffa2bdb40fc AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 60
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22319
|-[i] 2nd arg (selector): 12
|-[i] IOConnectCallMethod called from:
0x7ffa2bdade8f AppleIntelHD5000GraphicsMTLDriver!idvarInitDebugVariables
0x7ffa2bdb3e90 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initializeDevice:sharedRef:]
0x7ffa2bdb40fc AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 61
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22319
|-[i] 2nd arg (selector): 12
|-[i] IOConnectCallMethod called from:
0x7ffa2bdade8f AppleIntelHD5000GraphicsMTLDriver!idvarInitDebugVariables
0x7ffa2bdb3e90 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initializeDevice:sharedRef:]
0x7ffa2bdb40fc AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 62
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22319
|-[i] 2nd arg (selector): 12
|-[i] IOConnectCallMethod called from:
0x7ffa2bdade8f AppleIntelHD5000GraphicsMTLDriver!idvarInitDebugVariables
0x7ffa2bdb3e90 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initializeDevice:sharedRef:]
0x7ffa2bdb40fc AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 63
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22319
|-[i] 2nd arg (selector): 12
|-[i] IOConnectCallMethod called from:
0x7ffa2bdade8f AppleIntelHD5000GraphicsMTLDriver!idvarInitDebugVariables
0x7ffa2bdb3e90 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initializeDevice:sharedRef:]
0x7ffa2bdb40fc AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 64
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22319
|-[i] 2nd arg (selector): 12
|-[i] IOConnectCallMethod called from:
0x7ffa2bdade8f AppleIntelHD5000GraphicsMTLDriver!idvarInitDebugVariables
0x7ffa2bdb3e90 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initializeDevice:sharedRef:]
0x7ffa2bdb40fc AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 65
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22319
|-[i] 2nd arg (selector): 12
|-[i] IOConnectCallMethod called from:
0x7ffa2bdade8f AppleIntelHD5000GraphicsMTLDriver!idvarInitDebugVariables
0x7ffa2bdb3e90 AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initializeDevice:sharedRef:]
0x7ffa2bdb40fc AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 66
[*] onEnter: IOIteratorNext
|-[i] 1st arg (iterator): 15115
|-[i] IOIteratorNext called from:
0x7ff82619c66e Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff828859a34 MetalPerformanceShaders!MPSGetPreferredDevice
0x7ff832d5f9a1 Espresso!Espresso::select_metal_device(int)
0x7ff832a6751a Espresso!EspressoLight::espresso_context::espresso_context(espresso_engine_t, int, void*, void*)
0x7ff832a6607e Espresso!espresso_create_context
0x7ff825409add CoreML!-[MLNeuralNetworkEngine collectParametersFromContainer:configuration:error:]
0x7ff82540b2e8 CoreML!-[MLNeuralNetworkEngine initWithContainer:configuration:error:]
0x7ff825422854 CoreML!+[MLNeuralNetworkEngine loadModelFromCompiledArchive:modelVersionInfo:compilerVersionInfo:configuration:error:]
0x7ff825482bbf CoreML!+[MLLoader loadModelFromArchive:configuration:loaderEvent:error:]

[*] onLeave: IOIteratorNext
|-[i] return value (service): 0xa517
[*] IORegistryEntryGetName_ptr: 0x7ff820218c77
|-[i] class name:AMDRadeonX4000_AMDVerdeGraphicsAccelerator
|-[i] g_index: 67
[*] onEnter: IOServiceOpen
|-[i] 1st arg (service): 42263
|-[i] 3rd arg (type): 5
|-[i] IOServiceOpen called from:
0x7ff826193150 IOAccelerator!IOAccelDeviceCreateWithAPIProperty
0x7ff82619ca4f Metal!-[MTLIOAccelDevice initWithAcceleratorPort:]
0x7ffa384e2c95 AMDMTLBronzeDriver!-[BronzeMtlDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout

[*] onLeave: IOServiceOpen
|-[i] 4th (connection): 41771
|-[i] return value (kern_return_t): 0x0
|-[i] g_index: 68
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 41771
|-[i] 2nd arg (selector): 9
|-[i] IOConnectCallMethod called from:
0x7ff82020ea6a IOKit!IOConnectCallStructMethod
0x7ff8261931b5 IOAccelerator!IOAccelDeviceCreateWithAPIProperty
0x7ff82619ca4f Metal!-[MTLIOAccelDevice initWithAcceleratorPort:]
0x7ffa384e2c95 AMDMTLBronzeDriver!-[BronzeMtlDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x1
|-[i] g_index: 69
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 41771
|-[i] 2nd arg (selector): 2
|-[i] IOConnectCallMethod called from:
0x7ff82020ea6a IOKit!IOConnectCallStructMethod
0x7ff826193222 IOAccelerator!IOAccelDeviceCreateWithAPIProperty
0x7ff82619ca4f Metal!-[MTLIOAccelDevice initWithAcceleratorPort:]
0x7ffa384e2c95 AMDMTLBronzeDriver!-[BronzeMtlDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 70
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 41771
|-[i] 2nd arg (selector): 0
|-[i] IOConnectCallMethod called from:
0x7ff82020ea6a IOKit!IOConnectCallStructMethod
0x7ff82619333f IOAccelerator!IOAccelDeviceCreateWithAPIProperty
0x7ff82619ca4f Metal!-[MTLIOAccelDevice initWithAcceleratorPort:]
0x7ffa384e2c95 AMDMTLBronzeDriver!-[BronzeMtlDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 71
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 41771
|-[i] 2nd arg (selector): 7
|-[i] IOConnectCallMethod called from:
0x7ff82020ea6a IOKit!IOConnectCallStructMethod
0x7ff82619336e IOAccelerator!IOAccelDeviceCreateWithAPIProperty
0x7ff82619ca4f Metal!-[MTLIOAccelDevice initWithAcceleratorPort:]
0x7ffa384e2c95 AMDMTLBronzeDriver!-[BronzeMtlDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 72
[*] onEnter: IOIteratorNext
|-[i] 1st arg (iterator): 22795
|-[i] IOIteratorNext called from:
0x7ff82621b507 Metal!-[MTLIOAccelDevice isBuiltIn]
0x7ff82619cefd Metal!-[MTLIOAccelDevice updateGPUSelectionProperties]
0x7ff82619cbcd Metal!-[MTLIOAccelDevice initWithAcceleratorPort:]
0x7ffa384e2c95 AMDMTLBronzeDriver!-[BronzeMtlDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout

[*] onLeave: IOIteratorNext
|-[i] return value (service): 0xa203
[*] IORegistryEntryGetName_ptr: 0x7ff820218c77
|-[i] class name:GFX0
|-[i] g_index: 73
[*] onEnter: IOServiceOpen
|-[i] 1st arg (service): 42263
|-[i] 3rd arg (type): 6
|-[i] IOServiceOpen called from:
0x7ff826193649 IOAccelerator!IOAccelSharedCreate
0x7ff82621b077 Metal!-[MTLIOAccelDevice lazyInitialize]
0x7ff82619cbf1 Metal!-[MTLIOAccelDevice initWithAcceleratorPort:]
0x7ffa384e2c95 AMDMTLBronzeDriver!-[BronzeMtlDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout

[*] onLeave: IOServiceOpen
|-[i] 4th (connection): 22799
|-[i] return value (kern_return_t): 0x0
|-[i] g_index: 74
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 9
|-[i] IOConnectCallMethod called from:
0x7ff82020ea6a IOKit!IOConnectCallStructMethod
0x7ff8261936cd IOAccelerator!IOAccelSharedCreate
0x7ff82621b077 Metal!-[MTLIOAccelDevice lazyInitialize]
0x7ff82619cbf1 Metal!-[MTLIOAccelDevice initWithAcceleratorPort:]
0x7ffa384e2c95 AMDMTLBronzeDriver!-[BronzeMtlDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 75
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 10
|-[i] IOConnectCallMethod called from:
0x7ff82020ea6a IOKit!IOConnectCallStructMethod
0x7ff8261940eb IOAccelerator!IOAccelSharedSetupDirtyRing
0x7ff82621b08f Metal!-[MTLIOAccelDevice lazyInitialize]
0x7ff82619cbf1 Metal!-[MTLIOAccelDevice initWithAcceleratorPort:]
0x7ffa384e2c95 AMDMTLBronzeDriver!-[BronzeMtlDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 76
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 10
|-[i] IOConnectCallMethod called from:
0x7ff82020ea6a IOKit!IOConnectCallStructMethod
0x7ff8261940eb IOAccelerator!IOAccelSharedSetupDirtyRing
0x7ffa384e2d6a AMDMTLBronzeDriver!-[BronzeMtlDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 77
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 41771
|-[i] 2nd arg (selector): 256
|-[i] IOConnectCallMethod called from:
0x7ffa38495740 AMDMTLBronzeDriver!amdMtlBronzeInitHwInfo(__IOAccelDevice*, unsigned int, unsigned int, BronzeHwInfoRec*, _sAMD_GET_HW_INFO_VALUES*)
0x7ffa384e2f06 AMDMTLBronzeDriver!-[BronzeMtlDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff828859a34 MetalPerformanceShaders!MPSGetPreferredDevice

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 78
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 268
|-[i] IOConnectCallMethod called from:
0x7ffa384e33a5 AMDMTLBronzeDriver!-[BronzeMtlDevice amdMtl_PostInit]
0x7ffa384e30df AMDMTLBronzeDriver!-[BronzeMtlDevice initWithAcceleratorPort:]
0x7ff82619c998 Metal!-[MTLIOAccelService initWithAcceleratorPort:]
0x7ff82619c7f4 Metal!+[MTLIOAccelService registerService:]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff826260e96 Metal!MTLIOAccelServiceRegisterService
0x7ff82619c65f Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff828859a34 MetalPerformanceShaders!MPSGetPreferredDevice

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0xe00002c2
|-[i] g_index: 79
[*] onEnter: IOIteratorNext
|-[i] 1st arg (iterator): 15115
|-[i] IOIteratorNext called from:
0x7ff82619c66e Metal!+[MTLIOAccelDevice registerDevices]
0x7ff8261c6fcf Metal!invocation function for block in MTLDeviceArrayInitialize()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff82619c4cd Metal!MTLCopyAllDevices
0x7ff828859a50 MetalPerformanceShaders!0x1a50 (0x7ff80b30aa50)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff828859a34 MetalPerformanceShaders!MPSGetPreferredDevice
0x7ff832d5f9a1 Espresso!Espresso::select_metal_device(int)
0x7ff832a6751a Espresso!EspressoLight::espresso_context::espresso_context(espresso_engine_t, int, void*, void*)
0x7ff832a6607e Espresso!espresso_create_context
0x7ff825409add CoreML!-[MLNeuralNetworkEngine collectParametersFromContainer:configuration:error:]
0x7ff82540b2e8 CoreML!-[MLNeuralNetworkEngine initWithContainer:configuration:error:]
0x7ff825422854 CoreML!+[MLNeuralNetworkEngine loadModelFromCompiledArchive:modelVersionInfo:compilerVersionInfo:configuration:error:]
0x7ff825482bbf CoreML!+[MLLoader loadModelFromArchive:configuration:loaderEvent:error:]

[*] onLeave: IOIteratorNext
|-[i] return value (service): 0x0
[*] IORegistryEntryGetName_ptr: 0x7ff820218c77
|-[i] class name:GFX0
|-[i] g_index: 80
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 42511
|-[i] 2nd arg (selector): 0
|-[i] IOConnectCallMethod called from:
0x7ff82619421f IOAccelerator!IOAccelResourceCreate
0x7ff8261a43dc Metal!-[MTLIOAccelResource initWithDevice:remoteStorageResource:options:args:argsSize:]
0x7ff8261a41b5 Metal!-[MTLIOAccelResource initWithDevice:options:args:argsSize:]
0x7ff826260422 Metal!-[MTLIOAccelHeap initWithDevice:size:options:args:argsSize:desc:]
0x7ff826260370 Metal!-[MTLIOAccelHeap initWithDevice:size:options:args:argsSize:]
0x7ffa2bdb6f5a AppleIntelHD5000GraphicsMTLDriver!-[MTLIGAccelDevice newHeapWithDescriptor:]
0x7ff826e58bb1 MPSCore!0x27bb1 (0x7ff809909bb1)
0x7ff826e81ed8 MPSCore!MPSDevice::MPSDevice(id<MTLDevice>)
0x7ff826e8212e MPSCore!MPSDevice_Common::MPSDevice_Common(id<MTLDevice>)
0x7ff826e828f4 MPSCore!MPSDevice_MacOS::MPSDevice_MacOS(id<MTLDevice>)
0x7ff826e80ed1 MPSCore!MPSDevice::GetMPSDevice(id<MTLDevice>)
0x7ff828859cf5 MetalPerformanceShaders!0x1cf5 (0x7ff80b30acf5)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff828859a34 MetalPerformanceShaders!MPSGetPreferredDevice
0x7ff832d5f9a1 Espresso!Espresso::select_metal_device(int)

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 81
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 42511
|-[i] 2nd arg (selector): 4
|-[i] IOConnectCallMethod called from:
0x7ff82619516f IOAccelerator!IOAccelResourceSetPurgeable
0x7ff8261c3eec Metal!-[MTLIOAccelResource setPurgeableState:]
0x7ff82626076a Metal!-[MTLIOAccelHeap setPurgeableState:]
0x7ff826e58d51 MPSCore!0x27d51 (0x7ff809909d51)
0x7ff826e58bf6 MPSCore!0x27bf6 (0x7ff809909bf6)
0x7ff826e81ed8 MPSCore!MPSDevice::MPSDevice(id<MTLDevice>)
0x7ff826e8212e MPSCore!MPSDevice_Common::MPSDevice_Common(id<MTLDevice>)
0x7ff826e828f4 MPSCore!MPSDevice_MacOS::MPSDevice_MacOS(id<MTLDevice>)
0x7ff826e80ed1 MPSCore!MPSDevice::GetMPSDevice(id<MTLDevice>)
0x7ff828859cf5 MetalPerformanceShaders!0x1cf5 (0x7ff80b30acf5)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff828859a34 MetalPerformanceShaders!MPSGetPreferredDevice
0x7ff832d5f9a1 Espresso!Espresso::select_metal_device(int)
0x7ff832a6751a Espresso!EspressoLight::espresso_context::espresso_context(espresso_engine_t, int, void*, void*)
0x7ff832a6607e Espresso!espresso_create_context

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 82
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 0
|-[i] IOConnectCallMethod called from:
0x7ff82619421f IOAccelerator!IOAccelResourceCreate
0x7ff8261a43dc Metal!-[MTLIOAccelResource initWithDevice:remoteStorageResource:options:args:argsSize:]
0x7ff8261a41b5 Metal!-[MTLIOAccelResource initWithDevice:options:args:argsSize:]
0x7ff8261a3f87 Metal!-[MTLIOAccelBuffer initWithDevice:pointer:length:options:sysMemSize:vidMemSize:args:argsSize:deallocator:]
0x7ffa383e8d5b AMDMTLBronzeDriver!-[BronzeMtlBuffer initWithDevice:pointer:length:options:sysMemSize:vidMemSize:args:argsSize:deallocator:]
0x7ffa383e8b8b AMDMTLBronzeDriver!-[BronzeMtlBuffer initInternalWithDevice:pointer:length:options:deallocator:]
0x7ffa3843d9d3 AMDMTLBronzeDriver!amdMtlAllocateBuffer(id<MTLDevice>, unsigned long, AMDBufferAllocFlags)
0x7ffa384e3159 AMDMTLBronzeDriver!-[BronzeMtlDevice amdMtlBronzeLazyInit]
0x7ffa384dff35 AMDMTLBronzeDriver!-[BronzeMtlDevice newHeapWithDescriptor:]
0x7ff826e58bb1 MPSCore!0x27bb1 (0x7ff809909bb1)
0x7ff826e81ed8 MPSCore!MPSDevice::MPSDevice(id<MTLDevice>)
0x7ff826e8212e MPSCore!MPSDevice_Common::MPSDevice_Common(id<MTLDevice>)
0x7ff826e828f4 MPSCore!MPSDevice_MacOS::MPSDevice_MacOS(id<MTLDevice>)
0x7ff826e8138d MPSCore!MPSDevice::GetMPSDevice(id<MTLDevice>)
0x7ff828859cf5 MetalPerformanceShaders!0x1cf5 (0x7ff80b30acf5)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 83
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 0
|-[i] IOConnectCallMethod called from:
0x7ff82619421f IOAccelerator!IOAccelResourceCreate
0x7ff8261a43dc Metal!-[MTLIOAccelResource initWithDevice:remoteStorageResource:options:args:argsSize:]
0x7ff8261a41b5 Metal!-[MTLIOAccelResource initWithDevice:options:args:argsSize:]
0x7ff8261a3f87 Metal!-[MTLIOAccelBuffer initWithDevice:pointer:length:options:sysMemSize:vidMemSize:args:argsSize:deallocator:]
0x7ffa383e8d5b AMDMTLBronzeDriver!-[BronzeMtlBuffer initWithDevice:pointer:length:options:sysMemSize:vidMemSize:args:argsSize:deallocator:]
0x7ffa383e8b8b AMDMTLBronzeDriver!-[BronzeMtlBuffer initInternalWithDevice:pointer:length:options:deallocator:]
0x7ffa3843d9d3 AMDMTLBronzeDriver!amdMtlAllocateBuffer(id<MTLDevice>, unsigned long, AMDBufferAllocFlags)
0x7ffa38490fcf AMDMTLBronzeDriver!amdMtlBronzeUBMAllocVidMem(void*, _UBM_ALLOCVIDMEM_INPUT const*, _UBM_ALLOCVIDMEM_OUTPUT*)
0x7ffa3851d8ed AMDMTLBronzeDriver!BltMgrBase::AllocVidMem(_UBM_ALLOCVIDMEM_INPUT const*, _UBM_ALLOCVIDMEM_OUTPUT*)
0x7ffa38530a90 AMDMTLBronzeDriver!ShaderVidMemMgr::AllocVidMemForShaders(_UBM_ALLOCVIDMEM_OUTPUT*, unsigned int, unsigned int)
0x7ffa38550f94 AMDMTLBronzeDriver!SiShaderVidMemMgr::CpuLoadInitialShaders()
0x7ffa38530d97 AMDMTLBronzeDriver!SiBltMgr::HwlInit()
0x7ffa3851dd0e AMDMTLBronzeDriver!BltMgr::Init(BltMgrInitInfo const*)
0x7ffa38526bc1 AMDMTLBronzeDriver!BltMgrContainer::Create(_UBM_CREATEINFO const*)
0x7ffa3851cdd8 AMDMTLBronzeDriver!UBMCreate
0x7ffa38490f0d AMDMTLBronzeDriver!amdMtlBronzeInitUBMInterface(BronzeUBMInterfaceRec*, id<MTLDevice>, void*, BronzeHwInfoRec const*, _sAMD_GET_HW_INFO_VALUES*)

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 84
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 0
|-[i] IOConnectCallMethod called from:
0x7ff82619421f IOAccelerator!IOAccelResourceCreate
0x7ff8261a43dc Metal!-[MTLIOAccelResource initWithDevice:remoteStorageResource:options:args:argsSize:]
0x7ff8261a41b5 Metal!-[MTLIOAccelResource initWithDevice:options:args:argsSize:]
0x7ff8261a3f87 Metal!-[MTLIOAccelBuffer initWithDevice:pointer:length:options:sysMemSize:vidMemSize:args:argsSize:deallocator:]
0x7ffa383e8d5b AMDMTLBronzeDriver!-[BronzeMtlBuffer initWithDevice:pointer:length:options:sysMemSize:vidMemSize:args:argsSize:deallocator:]
0x7ffa383e8b8b AMDMTLBronzeDriver!-[BronzeMtlBuffer initInternalWithDevice:pointer:length:options:deallocator:]
0x7ffa3843d9d3 AMDMTLBronzeDriver!amdMtlAllocateBuffer(id<MTLDevice>, unsigned long, AMDBufferAllocFlags)
0x7ffa38490fcf AMDMTLBronzeDriver!amdMtlBronzeUBMAllocVidMem(void*, _UBM_ALLOCVIDMEM_INPUT const*, _UBM_ALLOCVIDMEM_OUTPUT*)
0x7ffa3851d8ed AMDMTLBronzeDriver!BltMgrBase::AllocVidMem(_UBM_ALLOCVIDMEM_INPUT const*, _UBM_ALLOCVIDMEM_OUTPUT*)
0x7ffa38530dc3 AMDMTLBronzeDriver!SiBltMgr::HwlInit()
0x7ffa3851dd0e AMDMTLBronzeDriver!BltMgr::Init(BltMgrInitInfo const*)
0x7ffa38526bc1 AMDMTLBronzeDriver!BltMgrContainer::Create(_UBM_CREATEINFO const*)
0x7ffa3851cdd8 AMDMTLBronzeDriver!UBMCreate
0x7ffa38490f0d AMDMTLBronzeDriver!amdMtlBronzeInitUBMInterface(BronzeUBMInterfaceRec*, id<MTLDevice>, void*, BronzeHwInfoRec const*, _sAMD_GET_HW_INFO_VALUES*)
0x7ffa384e318e AMDMTLBronzeDriver!-[BronzeMtlDevice amdMtlBronzeLazyInit]
0x7ffa384dff35 AMDMTLBronzeDriver!-[BronzeMtlDevice newHeapWithDescriptor:]

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 85
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 0
|-[i] IOConnectCallMethod called from:
0x7ff82619421f IOAccelerator!IOAccelResourceCreate
0x7ff8261a43dc Metal!-[MTLIOAccelResource initWithDevice:remoteStorageResource:options:args:argsSize:]
0x7ff8261a41b5 Metal!-[MTLIOAccelResource initWithDevice:options:args:argsSize:]
0x7ff8261a3f87 Metal!-[MTLIOAccelBuffer initWithDevice:pointer:length:options:sysMemSize:vidMemSize:args:argsSize:deallocator:]
0x7ffa383e8d5b AMDMTLBronzeDriver!-[BronzeMtlBuffer initWithDevice:pointer:length:options:sysMemSize:vidMemSize:args:argsSize:deallocator:]
0x7ffa383e8b8b AMDMTLBronzeDriver!-[BronzeMtlBuffer initInternalWithDevice:pointer:length:options:deallocator:]
0x7ffa3843d9d3 AMDMTLBronzeDriver!amdMtlAllocateBuffer(id<MTLDevice>, unsigned long, AMDBufferAllocFlags)
0x7ffa384e321a AMDMTLBronzeDriver!-[BronzeMtlDevice amdMtlBronzeLazyInit]
0x7ffa384dff35 AMDMTLBronzeDriver!-[BronzeMtlDevice newHeapWithDescriptor:]
0x7ff826e58bb1 MPSCore!0x27bb1 (0x7ff809909bb1)
0x7ff826e81ed8 MPSCore!MPSDevice::MPSDevice(id<MTLDevice>)
0x7ff826e8212e MPSCore!MPSDevice_Common::MPSDevice_Common(id<MTLDevice>)
0x7ff826e828f4 MPSCore!MPSDevice_MacOS::MPSDevice_MacOS(id<MTLDevice>)
0x7ff826e8138d MPSCore!MPSDevice::GetMPSDevice(id<MTLDevice>)
0x7ff828859cf5 MetalPerformanceShaders!0x1cf5 (0x7ff80b30acf5)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 86
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 0
|-[i] IOConnectCallMethod called from:
0x7ff82619421f IOAccelerator!IOAccelResourceCreate
0x7ff8261a43dc Metal!-[MTLIOAccelResource initWithDevice:remoteStorageResource:options:args:argsSize:]
0x7ff8261a41b5 Metal!-[MTLIOAccelResource initWithDevice:options:args:argsSize:]
0x7ff8261a3f87 Metal!-[MTLIOAccelBuffer initWithDevice:pointer:length:options:sysMemSize:vidMemSize:args:argsSize:deallocator:]
0x7ffa383e8d5b AMDMTLBronzeDriver!-[BronzeMtlBuffer initWithDevice:pointer:length:options:sysMemSize:vidMemSize:args:argsSize:deallocator:]
0x7ffa383e8b8b AMDMTLBronzeDriver!-[BronzeMtlBuffer initInternalWithDevice:pointer:length:options:deallocator:]
0x7ffa3843d9d3 AMDMTLBronzeDriver!amdMtlAllocateBuffer(id<MTLDevice>, unsigned long, AMDBufferAllocFlags)
0x7ffa383ecb73 AMDMTLBronzeDriver!amdMtlPPMemMgrAddMemObjMinSize(AMDPPMemMgrRec*, unsigned int)
0x7ffa38463f15 AMDMTLBronzeDriver!amdMtlPPMemMgrAddData(AMDPPMemMgrRec*, unsigned int const*, unsigned long, AMDPPMemBlockRec*)
0x7ffa38498622 AMDMTLBronzeDriver!amdMtlBronzeAllocateInternalShaders(BronzeHwInfoRec const*, AMDPPMemMgrRec*)
0x7ffa384e324c AMDMTLBronzeDriver!-[BronzeMtlDevice amdMtlBronzeLazyInit]
0x7ffa384dff35 AMDMTLBronzeDriver!-[BronzeMtlDevice newHeapWithDescriptor:]
0x7ff826e58bb1 MPSCore!0x27bb1 (0x7ff809909bb1)
0x7ff826e81ed8 MPSCore!MPSDevice::MPSDevice(id<MTLDevice>)
0x7ff826e8212e MPSCore!MPSDevice_Common::MPSDevice_Common(id<MTLDevice>)
0x7ff826e828f4 MPSCore!MPSDevice_MacOS::MPSDevice_MacOS(id<MTLDevice>)

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 87
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 12
|-[i] IOConnectCallMethod called from:
0x7ff82020ea6a IOKit!IOConnectCallStructMethod
0x7ff82619458b IOAccelerator!IOAccelSharedAllocateFenceMemory
0x7ff8261a4767 Metal!__28-[MTLIOAccelDevice newFence]_block_invoke
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6c013f libdispatch.dylib!_dispatch_lane_barrier_sync_invoke_and_complete
0x7ff8261a46f2 Metal!-[MTLIOAccelDevice newFence]
0x7ffa384e3272 AMDMTLBronzeDriver!-[BronzeMtlDevice amdMtlBronzeLazyInit]
0x7ffa384dff35 AMDMTLBronzeDriver!-[BronzeMtlDevice newHeapWithDescriptor:]
0x7ff826e58bb1 MPSCore!0x27bb1 (0x7ff809909bb1)
0x7ff826e81ed8 MPSCore!MPSDevice::MPSDevice(id<MTLDevice>)
0x7ff826e8212e MPSCore!MPSDevice_Common::MPSDevice_Common(id<MTLDevice>)
0x7ff826e828f4 MPSCore!MPSDevice_MacOS::MPSDevice_MacOS(id<MTLDevice>)
0x7ff826e8138d MPSCore!MPSDevice::GetMPSDevice(id<MTLDevice>)
0x7ff828859cf5 MetalPerformanceShaders!0x1cf5 (0x7ff80b30acf5)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 88
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 0
|-[i] IOConnectCallMethod called from:
0x7ff82619421f IOAccelerator!IOAccelResourceCreate
0x7ff8261a43dc Metal!-[MTLIOAccelResource initWithDevice:remoteStorageResource:options:args:argsSize:]
0x7ff8261a41b5 Metal!-[MTLIOAccelResource initWithDevice:options:args:argsSize:]
0x7ff826260422 Metal!-[MTLIOAccelHeap initWithDevice:size:options:args:argsSize:desc:]
0x7ffa38448f06 AMDMTLBronzeDriver!-[BronzeMtlHeap initInternalWithDevice:withDescriptor:]
0x7ff826e58bb1 MPSCore!0x27bb1 (0x7ff809909bb1)
0x7ff826e81ed8 MPSCore!MPSDevice::MPSDevice(id<MTLDevice>)
0x7ff826e8212e MPSCore!MPSDevice_Common::MPSDevice_Common(id<MTLDevice>)
0x7ff826e828f4 MPSCore!MPSDevice_MacOS::MPSDevice_MacOS(id<MTLDevice>)
0x7ff826e8138d MPSCore!MPSDevice::GetMPSDevice(id<MTLDevice>)
0x7ff828859cf5 MetalPerformanceShaders!0x1cf5 (0x7ff80b30acf5)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff828859a34 MetalPerformanceShaders!MPSGetPreferredDevice
0x7ff832d5f9a1 Espresso!Espresso::select_metal_device(int)
0x7ff832a6751a Espresso!EspressoLight::espresso_context::espresso_context(espresso_engine_t, int, void*, void*)

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 89
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 4
|-[i] IOConnectCallMethod called from:
0x7ff82619516f IOAccelerator!IOAccelResourceSetPurgeable
0x7ff8261c3eec Metal!-[MTLIOAccelResource setPurgeableState:]
0x7ff82626076a Metal!-[MTLIOAccelHeap setPurgeableState:]
0x7ffa3844921e AMDMTLBronzeDriver!-[BronzeMtlHeap setPurgeableState:]
0x7ff826e58d51 MPSCore!0x27d51 (0x7ff809909d51)
0x7ff826e58bf6 MPSCore!0x27bf6 (0x7ff809909bf6)
0x7ff826e81ed8 MPSCore!MPSDevice::MPSDevice(id<MTLDevice>)
0x7ff826e8212e MPSCore!MPSDevice_Common::MPSDevice_Common(id<MTLDevice>)
0x7ff826e828f4 MPSCore!MPSDevice_MacOS::MPSDevice_MacOS(id<MTLDevice>)
0x7ff826e8138d MPSCore!MPSDevice::GetMPSDevice(id<MTLDevice>)
0x7ff828859cf5 MetalPerformanceShaders!0x1cf5 (0x7ff80b30acf5)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff828859a34 MetalPerformanceShaders!MPSGetPreferredDevice
0x7ff832d5f9a1 Espresso!Espresso::select_metal_device(int)
0x7ff832a6751a Espresso!EspressoLight::espresso_context::espresso_context(espresso_engine_t, int, void*, void*)

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 90
[*] onEnter: IOServiceOpen
|-[i] 1st arg (service): 42263
|-[i] 3rd arg (type): 8
|-[i] IOServiceOpen called from:
0x7ff8261945e7 IOAccelerator!IOAccelCommandQueueCreateWithQoS
0x7ff8261a4c07 Metal!-[MTLIOAccelCommandQueue initWithDevice:descriptor:]
0x7ff832d5e8c7 Espresso!Espresso::context_metal::setup(id<MTLCommandQueue>)
0x7ff832d5ea65 Espresso!Espresso::context_metal::context_metal(std::__1::shared_ptr<Espresso::abstract_engine> const&, id<MTLDevice>)
0x7ff832fffbf9 Espresso!Espresso::MPSEngine::context::context<id<MTLDevice> __strong>(std::__1::shared_ptr<Espresso::abstract_engine> const&, id<MTLDevice> __strong)
0x7ff83297ef0d Espresso!std::__1::__shared_ptr_emplace<Espresso::MPSEngine::context, std::__1::allocator<Espresso::MPSEngine::context> >::__shared_ptr_emplace<std::__1::shared_ptr<Espresso::abstract_engine>, id<MTLDevice> __strong>(std::__1::allocator<Espresso::MPSEngine::context>, std::__1::shared_ptr<Espresso::abstract_engine>&&, id<MTLDevice> __strong&&)
0x7ff83297eeb8 Espresso!std::__1::shared_ptr<Espresso::MPSEngine::context> std::__1::allocate_shared<Espresso::MPSEngine::context, std::__1::allocator<Espresso::MPSEngine::context>, std::__1::shared_ptr<Espresso::abstract_engine>, id<MTLDevice> __strong, void>(std::__1::allocator<Espresso::MPSEngine::context> const&, std::__1::shared_ptr<Espresso::abstract_engine>&&, id<MTLDevice> __strong&&)
0x7ff832a6753d Espresso!EspressoLight::espresso_context::espresso_context(espresso_engine_t, int, void*, void*)
0x7ff832a6607e Espresso!espresso_create_context
0x7ff825409add CoreML!-[MLNeuralNetworkEngine collectParametersFromContainer:configuration:error:]
0x7ff82540b2e8 CoreML!-[MLNeuralNetworkEngine initWithContainer:configuration:error:]
0x7ff825422854 CoreML!+[MLNeuralNetworkEngine loadModelFromCompiledArchive:modelVersionInfo:compilerVersionInfo:configuration:error:]
0x7ff825482bbf CoreML!+[MLLoader loadModelFromArchive:configuration:loaderEvent:error:]
0x7ff8254827da CoreML!+[MLLoader loadModelFromArchive:configuration:error:]
0x7ff82548db66 CoreML!-[MLPipeline initModelFromMetadataAndArchive:versionInfo:description:configuration:error:]
0x7ff8254e7acf CoreML!+[MLPipelineLoader loadModelFromCompiledArchive:modelVersionInfo:compilerVersionInfo:configuration:error:]

[*] onLeave: IOServiceOpen
|-[i] 4th (connection): 41555
|-[i] return value (kern_return_t): 0x0
|-[i] g_index: 91
[*] onEnter: IOConnectCallAsyncMethod
|-[i] 1st arg (connection): 41555
|-[i] 2nd arg (selector): 0
|-[i] IOConnectCallAsyncMethod called from:
0x7ff82020f787 IOKit!IOConnectCallAsyncScalarMethod
0x7ff82619475c IOAccelerator!IOAccelCommandQueueCreateWithQoS
0x7ff8261a4c07 Metal!-[MTLIOAccelCommandQueue initWithDevice:descriptor:]
0x7ff832d5e8c7 Espresso!Espresso::context_metal::setup(id<MTLCommandQueue>)
0x7ff832d5ea65 Espresso!Espresso::context_metal::context_metal(std::__1::shared_ptr<Espresso::abstract_engine> const&, id<MTLDevice>)
0x7ff832fffbf9 Espresso!Espresso::MPSEngine::context::context<id<MTLDevice> __strong>(std::__1::shared_ptr<Espresso::abstract_engine> const&, id<MTLDevice> __strong)
0x7ff83297ef0d Espresso!std::__1::__shared_ptr_emplace<Espresso::MPSEngine::context, std::__1::allocator<Espresso::MPSEngine::context> >::__shared_ptr_emplace<std::__1::shared_ptr<Espresso::abstract_engine>, id<MTLDevice> __strong>(std::__1::allocator<Espresso::MPSEngine::context>, std::__1::shared_ptr<Espresso::abstract_engine>&&, id<MTLDevice> __strong&&)
0x7ff83297eeb8 Espresso!std::__1::shared_ptr<Espresso::MPSEngine::context> std::__1::allocate_shared<Espresso::MPSEngine::context, std::__1::allocator<Espresso::MPSEngine::context>, std::__1::shared_ptr<Espresso::abstract_engine>, id<MTLDevice> __strong, void>(std::__1::allocator<Espresso::MPSEngine::context> const&, std::__1::shared_ptr<Espresso::abstract_engine>&&, id<MTLDevice> __strong&&)
0x7ff832a6753d Espresso!EspressoLight::espresso_context::espresso_context(espresso_engine_t, int, void*, void*)
0x7ff832a6607e Espresso!espresso_create_context
0x7ff825409add CoreML!-[MLNeuralNetworkEngine collectParametersFromContainer:configuration:error:]
0x7ff82540b2e8 CoreML!-[MLNeuralNetworkEngine initWithContainer:configuration:error:]
0x7ff825422854 CoreML!+[MLNeuralNetworkEngine loadModelFromCompiledArchive:modelVersionInfo:compilerVersionInfo:configuration:error:]
0x7ff825482bbf CoreML!+[MLLoader loadModelFromArchive:configuration:loaderEvent:error:]
0x7ff8254827da CoreML!+[MLLoader loadModelFromArchive:configuration:error:]
0x7ff82548db66 CoreML!-[MLPipeline initModelFromMetadataAndArchive:versionInfo:description:configuration:error:]

[*] onLeave: IOConnectCallAsyncMethod
|-[i] return value: 0x0
|-[i] g_index: 92
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 41555
|-[i] 2nd arg (selector): 5
|-[i] IOConnectCallMethod called from:
0x7ff82020ea6a IOKit!IOConnectCallStructMethod
0x7ff826194808 IOAccelerator!IOAccelCommandQueueCreateWithQoS
0x7ff8261a4c07 Metal!-[MTLIOAccelCommandQueue initWithDevice:descriptor:]
0x7ff832d5e8c7 Espresso!Espresso::context_metal::setup(id<MTLCommandQueue>)
0x7ff832d5ea65 Espresso!Espresso::context_metal::context_metal(std::__1::shared_ptr<Espresso::abstract_engine> const&, id<MTLDevice>)
0x7ff832fffbf9 Espresso!Espresso::MPSEngine::context::context<id<MTLDevice> __strong>(std::__1::shared_ptr<Espresso::abstract_engine> const&, id<MTLDevice> __strong)
0x7ff83297ef0d Espresso!std::__1::__shared_ptr_emplace<Espresso::MPSEngine::context, std::__1::allocator<Espresso::MPSEngine::context> >::__shared_ptr_emplace<std::__1::shared_ptr<Espresso::abstract_engine>, id<MTLDevice> __strong>(std::__1::allocator<Espresso::MPSEngine::context>, std::__1::shared_ptr<Espresso::abstract_engine>&&, id<MTLDevice> __strong&&)
0x7ff83297eeb8 Espresso!std::__1::shared_ptr<Espresso::MPSEngine::context> std::__1::allocate_shared<Espresso::MPSEngine::context, std::__1::allocator<Espresso::MPSEngine::context>, std::__1::shared_ptr<Espresso::abstract_engine>, id<MTLDevice> __strong, void>(std::__1::allocator<Espresso::MPSEngine::context> const&, std::__1::shared_ptr<Espresso::abstract_engine>&&, id<MTLDevice> __strong&&)
0x7ff832a6753d Espresso!EspressoLight::espresso_context::espresso_context(espresso_engine_t, int, void*, void*)
0x7ff832a6607e Espresso!espresso_create_context
0x7ff825409add CoreML!-[MLNeuralNetworkEngine collectParametersFromContainer:configuration:error:]
0x7ff82540b2e8 CoreML!-[MLNeuralNetworkEngine initWithContainer:configuration:error:]
0x7ff825422854 CoreML!+[MLNeuralNetworkEngine loadModelFromCompiledArchive:modelVersionInfo:compilerVersionInfo:configuration:error:]
0x7ff825482bbf CoreML!+[MLLoader loadModelFromArchive:configuration:loaderEvent:error:]
0x7ff8254827da CoreML!+[MLLoader loadModelFromArchive:configuration:error:]
0x7ff82548db66 CoreML!-[MLPipeline initModelFromMetadataAndArchive:versionInfo:description:configuration:error:]

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 93
[*] onEnter: IOServiceOpen
|-[i] 1st arg (service): 42263
|-[i] 3rd arg (type): 8
|-[i] IOServiceOpen called from:
0x7ff8261945e7 IOAccelerator!IOAccelCommandQueueCreateWithQoS
0x7ff8261a4c07 Metal!-[MTLIOAccelCommandQueue initWithDevice:descriptor:]
0x7ff832d5e8c7 Espresso!Espresso::context_metal::setup(id<MTLCommandQueue>)
0x7ff832d5ea65 Espresso!Espresso::context_metal::context_metal(std::__1::shared_ptr<Espresso::abstract_engine> const&, id<MTLDevice>)
0x7ff832fffbf9 Espresso!Espresso::MPSEngine::context::context<id<MTLDevice> __strong>(std::__1::shared_ptr<Espresso::abstract_engine> const&, id<MTLDevice> __strong)
0x7ff832fffe6d Espresso!std::__1::__shared_ptr_emplace<Espresso::MPSBuffersEngine::context, std::__1::allocator<Espresso::MPSBuffersEngine::context> >::__shared_ptr_emplace<std::__1::shared_ptr<Espresso::abstract_engine>, id<MTLDevice> __strong&>(std::__1::allocator<Espresso::MPSBuffersEngine::context>, std::__1::shared_ptr<Espresso::abstract_engine>&&, id<MTLDevice> __strong&)
0x7ff832fffd3b Espresso!Espresso::MPSEngine::context::context<id<MTLDevice> __strong>(std::__1::shared_ptr<Espresso::abstract_engine> const&, id<MTLDevice> __strong)
0x7ff83297ef0d Espresso!std::__1::__shared_ptr_emplace<Espresso::MPSEngine::context, std::__1::allocator<Espresso::MPSEngine::context> >::__shared_ptr_emplace<std::__1::shared_ptr<Espresso::abstract_engine>, id<MTLDevice> __strong>(std::__1::allocator<Espresso::MPSEngine::context>, std::__1::shared_ptr<Espresso::abstract_engine>&&, id<MTLDevice> __strong&&)
0x7ff83297eeb8 Espresso!std::__1::shared_ptr<Espresso::MPSEngine::context> std::__1::allocate_shared<Espresso::MPSEngine::context, std::__1::allocator<Espresso::MPSEngine::context>, std::__1::shared_ptr<Espresso::abstract_engine>, id<MTLDevice> __strong, void>(std::__1::allocator<Espresso::MPSEngine::context> const&, std::__1::shared_ptr<Espresso::abstract_engine>&&, id<MTLDevice> __strong&&)
0x7ff832a6753d Espresso!EspressoLight::espresso_context::espresso_context(espresso_engine_t, int, void*, void*)
0x7ff832a6607e Espresso!espresso_create_context
0x7ff825409add CoreML!-[MLNeuralNetworkEngine collectParametersFromContainer:configuration:error:]
0x7ff82540b2e8 CoreML!-[MLNeuralNetworkEngine initWithContainer:configuration:error:]
0x7ff825422854 CoreML!+[MLNeuralNetworkEngine loadModelFromCompiledArchive:modelVersionInfo:compilerVersionInfo:configuration:error:]
0x7ff825482bbf CoreML!+[MLLoader loadModelFromArchive:configuration:loaderEvent:error:]
0x7ff8254827da CoreML!+[MLLoader loadModelFromArchive:configuration:error:]

[*] onLeave: IOServiceOpen
|-[i] 4th (connection): 23315
|-[i] return value (kern_return_t): 0x0
|-[i] g_index: 94
[*] onEnter: IOConnectCallAsyncMethod
|-[i] 1st arg (connection): 23315
|-[i] 2nd arg (selector): 0
|-[i] IOConnectCallAsyncMethod called from:
0x7ff82020f787 IOKit!IOConnectCallAsyncScalarMethod
0x7ff82619475c IOAccelerator!IOAccelCommandQueueCreateWithQoS
0x7ff8261a4c07 Metal!-[MTLIOAccelCommandQueue initWithDevice:descriptor:]
0x7ff832d5e8c7 Espresso!Espresso::context_metal::setup(id<MTLCommandQueue>)
0x7ff832d5ea65 Espresso!Espresso::context_metal::context_metal(std::__1::shared_ptr<Espresso::abstract_engine> const&, id<MTLDevice>)
0x7ff832fffbf9 Espresso!Espresso::MPSEngine::context::context<id<MTLDevice> __strong>(std::__1::shared_ptr<Espresso::abstract_engine> const&, id<MTLDevice> __strong)
0x7ff832fffe6d Espresso!std::__1::__shared_ptr_emplace<Espresso::MPSBuffersEngine::context, std::__1::allocator<Espresso::MPSBuffersEngine::context> >::__shared_ptr_emplace<std::__1::shared_ptr<Espresso::abstract_engine>, id<MTLDevice> __strong&>(std::__1::allocator<Espresso::MPSBuffersEngine::context>, std::__1::shared_ptr<Espresso::abstract_engine>&&, id<MTLDevice> __strong&)
0x7ff832fffd3b Espresso!Espresso::MPSEngine::context::context<id<MTLDevice> __strong>(std::__1::shared_ptr<Espresso::abstract_engine> const&, id<MTLDevice> __strong)
0x7ff83297ef0d Espresso!std::__1::__shared_ptr_emplace<Espresso::MPSEngine::context, std::__1::allocator<Espresso::MPSEngine::context> >::__shared_ptr_emplace<std::__1::shared_ptr<Espresso::abstract_engine>, id<MTLDevice> __strong>(std::__1::allocator<Espresso::MPSEngine::context>, std::__1::shared_ptr<Espresso::abstract_engine>&&, id<MTLDevice> __strong&&)
0x7ff83297eeb8 Espresso!std::__1::shared_ptr<Espresso::MPSEngine::context> std::__1::allocate_shared<Espresso::MPSEngine::context, std::__1::allocator<Espresso::MPSEngine::context>, std::__1::shared_ptr<Espresso::abstract_engine>, id<MTLDevice> __strong, void>(std::__1::allocator<Espresso::MPSEngine::context> const&, std::__1::shared_ptr<Espresso::abstract_engine>&&, id<MTLDevice> __strong&&)
0x7ff832a6753d Espresso!EspressoLight::espresso_context::espresso_context(espresso_engine_t, int, void*, void*)
0x7ff832a6607e Espresso!espresso_create_context
0x7ff825409add CoreML!-[MLNeuralNetworkEngine collectParametersFromContainer:configuration:error:]
0x7ff82540b2e8 CoreML!-[MLNeuralNetworkEngine initWithContainer:configuration:error:]
0x7ff825422854 CoreML!+[MLNeuralNetworkEngine loadModelFromCompiledArchive:modelVersionInfo:compilerVersionInfo:configuration:error:]
0x7ff825482bbf CoreML!+[MLLoader loadModelFromArchive:configuration:loaderEvent:error:]

[*] onLeave: IOConnectCallAsyncMethod
|-[i] return value: 0x0
|-[i] g_index: 95
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 23315
|-[i] 2nd arg (selector): 5
|-[i] IOConnectCallMethod called from:
0x7ff82020ea6a IOKit!IOConnectCallStructMethod
0x7ff826194808 IOAccelerator!IOAccelCommandQueueCreateWithQoS
0x7ff8261a4c07 Metal!-[MTLIOAccelCommandQueue initWithDevice:descriptor:]
0x7ff832d5e8c7 Espresso!Espresso::context_metal::setup(id<MTLCommandQueue>)
0x7ff832d5ea65 Espresso!Espresso::context_metal::context_metal(std::__1::shared_ptr<Espresso::abstract_engine> const&, id<MTLDevice>)
0x7ff832fffbf9 Espresso!Espresso::MPSEngine::context::context<id<MTLDevice> __strong>(std::__1::shared_ptr<Espresso::abstract_engine> const&, id<MTLDevice> __strong)
0x7ff832fffe6d Espresso!std::__1::__shared_ptr_emplace<Espresso::MPSBuffersEngine::context, std::__1::allocator<Espresso::MPSBuffersEngine::context> >::__shared_ptr_emplace<std::__1::shared_ptr<Espresso::abstract_engine>, id<MTLDevice> __strong&>(std::__1::allocator<Espresso::MPSBuffersEngine::context>, std::__1::shared_ptr<Espresso::abstract_engine>&&, id<MTLDevice> __strong&)
0x7ff832fffd3b Espresso!Espresso::MPSEngine::context::context<id<MTLDevice> __strong>(std::__1::shared_ptr<Espresso::abstract_engine> const&, id<MTLDevice> __strong)
0x7ff83297ef0d Espresso!std::__1::__shared_ptr_emplace<Espresso::MPSEngine::context, std::__1::allocator<Espresso::MPSEngine::context> >::__shared_ptr_emplace<std::__1::shared_ptr<Espresso::abstract_engine>, id<MTLDevice> __strong>(std::__1::allocator<Espresso::MPSEngine::context>, std::__1::shared_ptr<Espresso::abstract_engine>&&, id<MTLDevice> __strong&&)
0x7ff83297eeb8 Espresso!std::__1::shared_ptr<Espresso::MPSEngine::context> std::__1::allocate_shared<Espresso::MPSEngine::context, std::__1::allocator<Espresso::MPSEngine::context>, std::__1::shared_ptr<Espresso::abstract_engine>, id<MTLDevice> __strong, void>(std::__1::allocator<Espresso::MPSEngine::context> const&, std::__1::shared_ptr<Espresso::abstract_engine>&&, id<MTLDevice> __strong&&)
0x7ff832a6753d Espresso!EspressoLight::espresso_context::espresso_context(espresso_engine_t, int, void*, void*)
0x7ff832a6607e Espresso!espresso_create_context
0x7ff825409add CoreML!-[MLNeuralNetworkEngine collectParametersFromContainer:configuration:error:]
0x7ff82540b2e8 CoreML!-[MLNeuralNetworkEngine initWithContainer:configuration:error:]
0x7ff825422854 CoreML!+[MLNeuralNetworkEngine loadModelFromCompiledArchive:modelVersionInfo:compilerVersionInfo:configuration:error:]
0x7ff825482bbf CoreML!+[MLLoader loadModelFromArchive:configuration:loaderEvent:error:]

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 96
[*] onEnter: IOServiceGetMatchingService
|-[i] 2nd arg (matching):
{
    IOProviderClass = IOPlatformExpertDevice;
}
|-[i] IOServiceGetMatchingService called from:
0x7ff822799476 libMobileGestalt.dylib!0x12476 (0x7ff80524a476)
0x7ff82278b887 libMobileGestalt.dylib!0x4887 (0x7ff80523c887)
0x7ff82278bb13 libMobileGestalt.dylib!0x4b13 (0x7ff80523cb13)
0x7ff822797fd0 libMobileGestalt.dylib!0x10fd0 (0x7ff805248fd0)
0x7ff82278b887 libMobileGestalt.dylib!0x4887 (0x7ff80523c887)
0x7ff8227882fd libMobileGestalt.dylib!MGGetBoolAnswer
0x7ff832b747f1 Espresso!invocation function for block in Espresso::hardware::supports_platform(Espresso::platform)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff832a66cb1 Espresso!pre_validate_context(espresso_engine_t, int)
0x7ff832a65ffe Espresso!espresso_create_context
0x7ff825409b5b CoreML!-[MLNeuralNetworkEngine collectParametersFromContainer:configuration:error:]
0x7ff82540b2e8 CoreML!-[MLNeuralNetworkEngine initWithContainer:configuration:error:]
0x7ff825422854 CoreML!+[MLNeuralNetworkEngine loadModelFromCompiledArchive:modelVersionInfo:compilerVersionInfo:configuration:error:]
0x7ff825482bbf CoreML!+[MLLoader loadModelFromArchive:configuration:loaderEvent:error:]
0x7ff8254827da CoreML!+[MLLoader loadModelFromArchive:configuration:error:]

[*] onLeave: IOServiceGetMatchingService
|-[i] return value (io_service_t): 0xa10f
[*] IORegistryEntryGetName_ptr: 0x7ff820218c77
|-[i] class name:MacBookPro11,5
|-[i] g_index: 97
[*] onEnter: IOServiceOpen
|-[i] 1st arg (service): 42263
|-[i] 3rd arg (type): 8
|-[i] IOServiceOpen called from:
0x7ff8261945e7 IOAccelerator!IOAccelCommandQueueCreateWithQoS
0x7ff8261a4c07 Metal!-[MTLIOAccelCommandQueue initWithDevice:descriptor:]
0x7ff832d5e8c7 Espresso!Espresso::context_metal::setup(id<MTLCommandQueue>)
0x7ff832d5ea65 Espresso!Espresso::context_metal::context_metal(std::__1::shared_ptr<Espresso::abstract_engine> const&, id<MTLDevice>)
0x7ff832fffbf9 Espresso!Espresso::MPSEngine::context::context<id<MTLDevice> __strong>(std::__1::shared_ptr<Espresso::abstract_engine> const&, id<MTLDevice> __strong)
0x7ff83297ef0d Espresso!std::__1::__shared_ptr_emplace<Espresso::MPSEngine::context, std::__1::allocator<Espresso::MPSEngine::context> >::__shared_ptr_emplace<std::__1::shared_ptr<Espresso::abstract_engine>, id<MTLDevice> __strong>(std::__1::allocator<Espresso::MPSEngine::context>, std::__1::shared_ptr<Espresso::abstract_engine>&&, id<MTLDevice> __strong&&)
0x7ff83297eeb8 Espresso!std::__1::shared_ptr<Espresso::MPSEngine::context> std::__1::allocate_shared<Espresso::MPSEngine::context, std::__1::allocator<Espresso::MPSEngine::context>, std::__1::shared_ptr<Espresso::abstract_engine>, id<MTLDevice> __strong, void>(std::__1::allocator<Espresso::MPSEngine::context> const&, std::__1::shared_ptr<Espresso::abstract_engine>&&, id<MTLDevice> __strong&&)
0x7ff832a6753d Espresso!EspressoLight::espresso_context::espresso_context(espresso_engine_t, int, void*, void*)
0x7ff832a6607e Espresso!espresso_create_context
0x7ff82540b7d0 CoreML!-[MLNeuralNetworkEngine _setupContextAndPlanWithConfiguration:usingCPU:reshapeWithContainer:error:]
0x7ff82540b307 CoreML!-[MLNeuralNetworkEngine initWithContainer:configuration:error:]
0x7ff825422854 CoreML!+[MLNeuralNetworkEngine loadModelFromCompiledArchive:modelVersionInfo:compilerVersionInfo:configuration:error:]
0x7ff825482bbf CoreML!+[MLLoader loadModelFromArchive:configuration:loaderEvent:error:]
0x7ff8254827da CoreML!+[MLLoader loadModelFromArchive:configuration:error:]
0x7ff82548db66 CoreML!-[MLPipeline initModelFromMetadataAndArchive:versionInfo:description:configuration:error:]
0x7ff8254e7acf CoreML!+[MLPipelineLoader loadModelFromCompiledArchive:modelVersionInfo:compilerVersionInfo:configuration:error:]

[*] onLeave: IOServiceOpen
|-[i] 4th (connection): 41575
|-[i] return value (kern_return_t): 0x0
|-[i] g_index: 98
[*] onEnter: IOConnectCallAsyncMethod
|-[i] 1st arg (connection): 41575
|-[i] 2nd arg (selector): 0
|-[i] IOConnectCallAsyncMethod called from:
0x7ff82020f787 IOKit!IOConnectCallAsyncScalarMethod
0x7ff82619475c IOAccelerator!IOAccelCommandQueueCreateWithQoS
0x7ff8261a4c07 Metal!-[MTLIOAccelCommandQueue initWithDevice:descriptor:]
0x7ff832d5e8c7 Espresso!Espresso::context_metal::setup(id<MTLCommandQueue>)
0x7ff832d5ea65 Espresso!Espresso::context_metal::context_metal(std::__1::shared_ptr<Espresso::abstract_engine> const&, id<MTLDevice>)
0x7ff832fffbf9 Espresso!Espresso::MPSEngine::context::context<id<MTLDevice> __strong>(std::__1::shared_ptr<Espresso::abstract_engine> const&, id<MTLDevice> __strong)
0x7ff83297ef0d Espresso!std::__1::__shared_ptr_emplace<Espresso::MPSEngine::context, std::__1::allocator<Espresso::MPSEngine::context> >::__shared_ptr_emplace<std::__1::shared_ptr<Espresso::abstract_engine>, id<MTLDevice> __strong>(std::__1::allocator<Espresso::MPSEngine::context>, std::__1::shared_ptr<Espresso::abstract_engine>&&, id<MTLDevice> __strong&&)
0x7ff83297eeb8 Espresso!std::__1::shared_ptr<Espresso::MPSEngine::context> std::__1::allocate_shared<Espresso::MPSEngine::context, std::__1::allocator<Espresso::MPSEngine::context>, std::__1::shared_ptr<Espresso::abstract_engine>, id<MTLDevice> __strong, void>(std::__1::allocator<Espresso::MPSEngine::context> const&, std::__1::shared_ptr<Espresso::abstract_engine>&&, id<MTLDevice> __strong&&)
0x7ff832a6753d Espresso!EspressoLight::espresso_context::espresso_context(espresso_engine_t, int, void*, void*)
0x7ff832a6607e Espresso!espresso_create_context
0x7ff82540b7d0 CoreML!-[MLNeuralNetworkEngine _setupContextAndPlanWithConfiguration:usingCPU:reshapeWithContainer:error:]
0x7ff82540b307 CoreML!-[MLNeuralNetworkEngine initWithContainer:configuration:error:]
0x7ff825422854 CoreML!+[MLNeuralNetworkEngine loadModelFromCompiledArchive:modelVersionInfo:compilerVersionInfo:configuration:error:]
0x7ff825482bbf CoreML!+[MLLoader loadModelFromArchive:configuration:loaderEvent:error:]
0x7ff8254827da CoreML!+[MLLoader loadModelFromArchive:configuration:error:]
0x7ff82548db66 CoreML!-[MLPipeline initModelFromMetadataAndArchive:versionInfo:description:configuration:error:]

[*] onLeave: IOConnectCallAsyncMethod
|-[i] return value: 0x0
|-[i] g_index: 99
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 41575
|-[i] 2nd arg (selector): 5
|-[i] IOConnectCallMethod called from:
0x7ff82020ea6a IOKit!IOConnectCallStructMethod
0x7ff826194808 IOAccelerator!IOAccelCommandQueueCreateWithQoS
0x7ff8261a4c07 Metal!-[MTLIOAccelCommandQueue initWithDevice:descriptor:]
0x7ff832d5e8c7 Espresso!Espresso::context_metal::setup(id<MTLCommandQueue>)
0x7ff832d5ea65 Espresso!Espresso::context_metal::context_metal(std::__1::shared_ptr<Espresso::abstract_engine> const&, id<MTLDevice>)
0x7ff832fffbf9 Espresso!Espresso::MPSEngine::context::context<id<MTLDevice> __strong>(std::__1::shared_ptr<Espresso::abstract_engine> const&, id<MTLDevice> __strong)
0x7ff83297ef0d Espresso!std::__1::__shared_ptr_emplace<Espresso::MPSEngine::context, std::__1::allocator<Espresso::MPSEngine::context> >::__shared_ptr_emplace<std::__1::shared_ptr<Espresso::abstract_engine>, id<MTLDevice> __strong>(std::__1::allocator<Espresso::MPSEngine::context>, std::__1::shared_ptr<Espresso::abstract_engine>&&, id<MTLDevice> __strong&&)
0x7ff83297eeb8 Espresso!std::__1::shared_ptr<Espresso::MPSEngine::context> std::__1::allocate_shared<Espresso::MPSEngine::context, std::__1::allocator<Espresso::MPSEngine::context>, std::__1::shared_ptr<Espresso::abstract_engine>, id<MTLDevice> __strong, void>(std::__1::allocator<Espresso::MPSEngine::context> const&, std::__1::shared_ptr<Espresso::abstract_engine>&&, id<MTLDevice> __strong&&)
0x7ff832a6753d Espresso!EspressoLight::espresso_context::espresso_context(espresso_engine_t, int, void*, void*)
0x7ff832a6607e Espresso!espresso_create_context
0x7ff82540b7d0 CoreML!-[MLNeuralNetworkEngine _setupContextAndPlanWithConfiguration:usingCPU:reshapeWithContainer:error:]
0x7ff82540b307 CoreML!-[MLNeuralNetworkEngine initWithContainer:configuration:error:]
0x7ff825422854 CoreML!+[MLNeuralNetworkEngine loadModelFromCompiledArchive:modelVersionInfo:compilerVersionInfo:configuration:error:]
0x7ff825482bbf CoreML!+[MLLoader loadModelFromArchive:configuration:loaderEvent:error:]
0x7ff8254827da CoreML!+[MLLoader loadModelFromArchive:configuration:error:]
0x7ff82548db66 CoreML!-[MLPipeline initModelFromMetadataAndArchive:versionInfo:description:configuration:error:]

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 100
[*] onEnter: IOServiceOpen
|-[i] 1st arg (service): 42263
|-[i] 3rd arg (type): 8
|-[i] IOServiceOpen called from:
0x7ff8261945e7 IOAccelerator!IOAccelCommandQueueCreateWithQoS
0x7ff8261a4c07 Metal!-[MTLIOAccelCommandQueue initWithDevice:descriptor:]
0x7ff832d5e8c7 Espresso!Espresso::context_metal::setup(id<MTLCommandQueue>)
0x7ff832d5ea65 Espresso!Espresso::context_metal::context_metal(std::__1::shared_ptr<Espresso::abstract_engine> const&, id<MTLDevice>)
0x7ff832fffbf9 Espresso!Espresso::MPSEngine::context::context<id<MTLDevice> __strong>(std::__1::shared_ptr<Espresso::abstract_engine> const&, id<MTLDevice> __strong)
0x7ff832fffe6d Espresso!std::__1::__shared_ptr_emplace<Espresso::MPSBuffersEngine::context, std::__1::allocator<Espresso::MPSBuffersEngine::context> >::__shared_ptr_emplace<std::__1::shared_ptr<Espresso::abstract_engine>, id<MTLDevice> __strong&>(std::__1::allocator<Espresso::MPSBuffersEngine::context>, std::__1::shared_ptr<Espresso::abstract_engine>&&, id<MTLDevice> __strong&)
0x7ff832fffd3b Espresso!Espresso::MPSEngine::context::context<id<MTLDevice> __strong>(std::__1::shared_ptr<Espresso::abstract_engine> const&, id<MTLDevice> __strong)
0x7ff83297ef0d Espresso!std::__1::__shared_ptr_emplace<Espresso::MPSEngine::context, std::__1::allocator<Espresso::MPSEngine::context> >::__shared_ptr_emplace<std::__1::shared_ptr<Espresso::abstract_engine>, id<MTLDevice> __strong>(std::__1::allocator<Espresso::MPSEngine::context>, std::__1::shared_ptr<Espresso::abstract_engine>&&, id<MTLDevice> __strong&&)
0x7ff83297eeb8 Espresso!std::__1::shared_ptr<Espresso::MPSEngine::context> std::__1::allocate_shared<Espresso::MPSEngine::context, std::__1::allocator<Espresso::MPSEngine::context>, std::__1::shared_ptr<Espresso::abstract_engine>, id<MTLDevice> __strong, void>(std::__1::allocator<Espresso::MPSEngine::context> const&, std::__1::shared_ptr<Espresso::abstract_engine>&&, id<MTLDevice> __strong&&)
0x7ff832a6753d Espresso!EspressoLight::espresso_context::espresso_context(espresso_engine_t, int, void*, void*)
0x7ff832a6607e Espresso!espresso_create_context
0x7ff82540b7d0 CoreML!-[MLNeuralNetworkEngine _setupContextAndPlanWithConfiguration:usingCPU:reshapeWithContainer:error:]
0x7ff82540b307 CoreML!-[MLNeuralNetworkEngine initWithContainer:configuration:error:]
0x7ff825422854 CoreML!+[MLNeuralNetworkEngine loadModelFromCompiledArchive:modelVersionInfo:compilerVersionInfo:configuration:error:]
0x7ff825482bbf CoreML!+[MLLoader loadModelFromArchive:configuration:loaderEvent:error:]
0x7ff8254827da CoreML!+[MLLoader loadModelFromArchive:configuration:error:]

[*] onLeave: IOServiceOpen
|-[i] 4th (connection): 23335
|-[i] return value (kern_return_t): 0x0
|-[i] g_index: 101
[*] onEnter: IOConnectCallAsyncMethod
|-[i] 1st arg (connection): 23335
|-[i] 2nd arg (selector): 0
|-[i] IOConnectCallAsyncMethod called from:
0x7ff82020f787 IOKit!IOConnectCallAsyncScalarMethod
0x7ff82619475c IOAccelerator!IOAccelCommandQueueCreateWithQoS
0x7ff8261a4c07 Metal!-[MTLIOAccelCommandQueue initWithDevice:descriptor:]
0x7ff832d5e8c7 Espresso!Espresso::context_metal::setup(id<MTLCommandQueue>)
0x7ff832d5ea65 Espresso!Espresso::context_metal::context_metal(std::__1::shared_ptr<Espresso::abstract_engine> const&, id<MTLDevice>)
0x7ff832fffbf9 Espresso!Espresso::MPSEngine::context::context<id<MTLDevice> __strong>(std::__1::shared_ptr<Espresso::abstract_engine> const&, id<MTLDevice> __strong)
0x7ff832fffe6d Espresso!std::__1::__shared_ptr_emplace<Espresso::MPSBuffersEngine::context, std::__1::allocator<Espresso::MPSBuffersEngine::context> >::__shared_ptr_emplace<std::__1::shared_ptr<Espresso::abstract_engine>, id<MTLDevice> __strong&>(std::__1::allocator<Espresso::MPSBuffersEngine::context>, std::__1::shared_ptr<Espresso::abstract_engine>&&, id<MTLDevice> __strong&)
0x7ff832fffd3b Espresso!Espresso::MPSEngine::context::context<id<MTLDevice> __strong>(std::__1::shared_ptr<Espresso::abstract_engine> const&, id<MTLDevice> __strong)
0x7ff83297ef0d Espresso!std::__1::__shared_ptr_emplace<Espresso::MPSEngine::context, std::__1::allocator<Espresso::MPSEngine::context> >::__shared_ptr_emplace<std::__1::shared_ptr<Espresso::abstract_engine>, id<MTLDevice> __strong>(std::__1::allocator<Espresso::MPSEngine::context>, std::__1::shared_ptr<Espresso::abstract_engine>&&, id<MTLDevice> __strong&&)
0x7ff83297eeb8 Espresso!std::__1::shared_ptr<Espresso::MPSEngine::context> std::__1::allocate_shared<Espresso::MPSEngine::context, std::__1::allocator<Espresso::MPSEngine::context>, std::__1::shared_ptr<Espresso::abstract_engine>, id<MTLDevice> __strong, void>(std::__1::allocator<Espresso::MPSEngine::context> const&, std::__1::shared_ptr<Espresso::abstract_engine>&&, id<MTLDevice> __strong&&)
0x7ff832a6753d Espresso!EspressoLight::espresso_context::espresso_context(espresso_engine_t, int, void*, void*)
0x7ff832a6607e Espresso!espresso_create_context
0x7ff82540b7d0 CoreML!-[MLNeuralNetworkEngine _setupContextAndPlanWithConfiguration:usingCPU:reshapeWithContainer:error:]
0x7ff82540b307 CoreML!-[MLNeuralNetworkEngine initWithContainer:configuration:error:]
0x7ff825422854 CoreML!+[MLNeuralNetworkEngine loadModelFromCompiledArchive:modelVersionInfo:compilerVersionInfo:configuration:error:]
0x7ff825482bbf CoreML!+[MLLoader loadModelFromArchive:configuration:loaderEvent:error:]

[*] onLeave: IOConnectCallAsyncMethod
|-[i] return value: 0x0
|-[i] g_index: 102
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 23335
|-[i] 2nd arg (selector): 5
|-[i] IOConnectCallMethod called from:
0x7ff82020ea6a IOKit!IOConnectCallStructMethod
0x7ff826194808 IOAccelerator!IOAccelCommandQueueCreateWithQoS
0x7ff8261a4c07 Metal!-[MTLIOAccelCommandQueue initWithDevice:descriptor:]
0x7ff832d5e8c7 Espresso!Espresso::context_metal::setup(id<MTLCommandQueue>)
0x7ff832d5ea65 Espresso!Espresso::context_metal::context_metal(std::__1::shared_ptr<Espresso::abstract_engine> const&, id<MTLDevice>)
0x7ff832fffbf9 Espresso!Espresso::MPSEngine::context::context<id<MTLDevice> __strong>(std::__1::shared_ptr<Espresso::abstract_engine> const&, id<MTLDevice> __strong)
0x7ff832fffe6d Espresso!std::__1::__shared_ptr_emplace<Espresso::MPSBuffersEngine::context, std::__1::allocator<Espresso::MPSBuffersEngine::context> >::__shared_ptr_emplace<std::__1::shared_ptr<Espresso::abstract_engine>, id<MTLDevice> __strong&>(std::__1::allocator<Espresso::MPSBuffersEngine::context>, std::__1::shared_ptr<Espresso::abstract_engine>&&, id<MTLDevice> __strong&)
0x7ff832fffd3b Espresso!Espresso::MPSEngine::context::context<id<MTLDevice> __strong>(std::__1::shared_ptr<Espresso::abstract_engine> const&, id<MTLDevice> __strong)
0x7ff83297ef0d Espresso!std::__1::__shared_ptr_emplace<Espresso::MPSEngine::context, std::__1::allocator<Espresso::MPSEngine::context> >::__shared_ptr_emplace<std::__1::shared_ptr<Espresso::abstract_engine>, id<MTLDevice> __strong>(std::__1::allocator<Espresso::MPSEngine::context>, std::__1::shared_ptr<Espresso::abstract_engine>&&, id<MTLDevice> __strong&&)
0x7ff83297eeb8 Espresso!std::__1::shared_ptr<Espresso::MPSEngine::context> std::__1::allocate_shared<Espresso::MPSEngine::context, std::__1::allocator<Espresso::MPSEngine::context>, std::__1::shared_ptr<Espresso::abstract_engine>, id<MTLDevice> __strong, void>(std::__1::allocator<Espresso::MPSEngine::context> const&, std::__1::shared_ptr<Espresso::abstract_engine>&&, id<MTLDevice> __strong&&)
0x7ff832a6753d Espresso!EspressoLight::espresso_context::espresso_context(espresso_engine_t, int, void*, void*)
0x7ff832a6607e Espresso!espresso_create_context
0x7ff82540b7d0 CoreML!-[MLNeuralNetworkEngine _setupContextAndPlanWithConfiguration:usingCPU:reshapeWithContainer:error:]
0x7ff82540b307 CoreML!-[MLNeuralNetworkEngine initWithContainer:configuration:error:]
0x7ff825422854 CoreML!+[MLNeuralNetworkEngine loadModelFromCompiledArchive:modelVersionInfo:compilerVersionInfo:configuration:error:]
0x7ff825482bbf CoreML!+[MLLoader loadModelFromArchive:configuration:loaderEvent:error:]

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 103
[*] onEnter: IOServiceGetMatchingService
|-[i] 2nd arg (matching):
{
    IOProviderClass = IOPlatformExpertDevice;
}
|-[i] IOServiceGetMatchingService called from:
0x7ff822799476 libMobileGestalt.dylib!0x12476 (0x7ff80524a476)
0x7ff82278b887 libMobileGestalt.dylib!0x4887 (0x7ff80523c887)
0x7ff82278bb13 libMobileGestalt.dylib!0x4b13 (0x7ff80523cb13)
0x7ff82278bc76 libMobileGestalt.dylib!MGGetSInt64Answer
0x7ff8342d2359 AppleNeuralEngine!__28+[_ANEDeviceInfo aneSubType]_block_invoke
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff8342d2339 AppleNeuralEngine!+[_ANEDeviceInfo aneSubType]
0x7ff832c433cb Espresso!invocation function for block in Espresso::ANECompilerEngine::current_ane_arch()
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b3ec1 libdispatch.dylib!_dispatch_once_callout
0x7ff832c433a2 Espresso!Espresso::ANECompilerEngine::current_ane_arch()
0x7ff832bd48ab Espresso!Espresso::gen_precompilation_info_fstream(std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > const&)
0x7ff832be2be3 Espresso!Espresso::load_and_shape_network(std::__1::shared_ptr<Espresso::SerDes::generic_serdes_object> const&, std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > const&, std::__1::shared_ptr<Espresso::abstract_context> const&, Espresso::network_shape const&, Espresso::compute_path, std::__1::shared_ptr<Espresso::blob_storage_abstract> const&, std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > const&)
0x7ff832be50b2 Espresso!Espresso::load_network(std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > const&, std::__1::shared_ptr<Espresso::abstract_context> const&, Espresso::compute_path, bool)
0x7ff832a64a2a Espresso!EspressoLight::espresso_plan::add_network(char const*, espresso_storage_type_t, std::__1::shared_ptr<Espresso::net>)

[*] onLeave: IOServiceGetMatchingService
|-[i] return value (io_service_t): 0xa10f
[*] IORegistryEntryGetName_ptr: 0x7ff820218c77
|-[i] class name:MacBookPro11,5
|-[i] g_index: 104
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 7
|-[i] IOConnectCallMethod called from:
0x7ff826194a00 IOAccelerator!IOAccelSharedCreateDeviceShmem
0x7ff8261afba8 Metal!-[MTLIOAccelDeviceShmem initWithDevice:shmemSize:]
0x7ff8261afaec Metal!MTLIOAccelDeviceShmemPoolCreateShmem
0x7ff8261af913 Metal!MTLIOAccelCommandBufferStorageCreateExt
0x7ff8261af831 Metal!MTLIOAccelCommandBufferStoragePoolCreateStorage
0x7ff8261af303 Metal!-[MTLIOAccelCommandBuffer initWithQueue:retainedReferences:synchronousDebugMode:]
0x7ffa38442d7d AMDMTLBronzeDriver!-[BronzeMtlCmdBuffer initWithQueue:retainedReferences:synchronousDebugMode:]
0x7ffa38442d3c AMDMTLBronzeDriver!-[BronzeMtlCmdBuffer initWithQueue:retainedReferences:]
0x7ffa384e77f1 AMDMTLBronzeDriver!-[BronzeMtlCmdQueue commandBuffer]
0x7ff832d5df59 Espresso!Espresso::batch_metal::batch_metal(Espresso::context_metal*)
0x7ff832fffb67 Espresso!Espresso::MPSEngine::batch::batch(Espresso::MPSEngine::context*)
0x7ff832bd0583 Espresso!std::__1::__shared_ptr_emplace<Espresso::MPSEngine::batch, std::__1::allocator<Espresso::MPSEngine::batch> >::__shared_ptr_emplace<Espresso::MPSEngine::context*>(std::__1::allocator<Espresso::MPSEngine::batch>, Espresso::MPSEngine::context*&&)
0x7ff832bd052c Espresso!std::__1::shared_ptr<Espresso::MPSEngine::batch> std::__1::allocate_shared<Espresso::MPSEngine::batch, std::__1::allocator<Espresso::MPSEngine::batch>, Espresso::MPSEngine::context*, void>(std::__1::allocator<Espresso::MPSEngine::batch> const&, Espresso::MPSEngine::context*&&)
0x7ff832bce36a Espresso!Espresso::MPSEngine::context::begin_batch()
0x7ff832bd9d52 Espresso!Espresso::load_network_layers_post_dispatch(std::__1::shared_ptr<Espresso::net> const&, std::__1::shared_ptr<Espresso::SerDes::generic_serdes_object> const&, std::__1::shared_ptr<Espresso::cpu_context_transfer_algo_t> const&, std::__1::shared_ptr<Espresso::net_info_ir_t> const&, bool, Espresso::network_shape const&, Espresso::compute_path, bool, std::__1::shared_ptr<Espresso::blob_storage_abstract> const&)
0x7ff832bd5e73 Espresso!Espresso::load_network_layers_internal(std::__1::shared_ptr<Espresso::SerDes::generic_serdes_object>, std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > const&, std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > const&, std::__1::shared_ptr<Espresso::abstract_context> const&, Espresso::network_shape const&, std::__1::basic_istream<char, std::__1::char_traits<char> >*, Espresso::compute_path, bool, std::__1::shared_ptr<Espresso::blob_storage_abstract> const&)

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 105
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 7
|-[i] IOConnectCallMethod called from:
0x7ff826194a00 IOAccelerator!IOAccelSharedCreateDeviceShmem
0x7ff8261afba8 Metal!-[MTLIOAccelDeviceShmem initWithDevice:shmemSize:]
0x7ff8261afaec Metal!MTLIOAccelDeviceShmemPoolCreateShmem
0x7ff8261af99d Metal!MTLIOAccelCommandBufferStorageCreateExt
0x7ff8261af831 Metal!MTLIOAccelCommandBufferStoragePoolCreateStorage
0x7ff8261af303 Metal!-[MTLIOAccelCommandBuffer initWithQueue:retainedReferences:synchronousDebugMode:]
0x7ffa38442d7d AMDMTLBronzeDriver!-[BronzeMtlCmdBuffer initWithQueue:retainedReferences:synchronousDebugMode:]
0x7ffa38442d3c AMDMTLBronzeDriver!-[BronzeMtlCmdBuffer initWithQueue:retainedReferences:]
0x7ffa384e77f1 AMDMTLBronzeDriver!-[BronzeMtlCmdQueue commandBuffer]
0x7ff832d5df59 Espresso!Espresso::batch_metal::batch_metal(Espresso::context_metal*)
0x7ff832fffb67 Espresso!Espresso::MPSEngine::batch::batch(Espresso::MPSEngine::context*)
0x7ff832bd0583 Espresso!std::__1::__shared_ptr_emplace<Espresso::MPSEngine::batch, std::__1::allocator<Espresso::MPSEngine::batch> >::__shared_ptr_emplace<Espresso::MPSEngine::context*>(std::__1::allocator<Espresso::MPSEngine::batch>, Espresso::MPSEngine::context*&&)
0x7ff832bd052c Espresso!std::__1::shared_ptr<Espresso::MPSEngine::batch> std::__1::allocate_shared<Espresso::MPSEngine::batch, std::__1::allocator<Espresso::MPSEngine::batch>, Espresso::MPSEngine::context*, void>(std::__1::allocator<Espresso::MPSEngine::batch> const&, Espresso::MPSEngine::context*&&)
0x7ff832bce36a Espresso!Espresso::MPSEngine::context::begin_batch()
0x7ff832bd9d52 Espresso!Espresso::load_network_layers_post_dispatch(std::__1::shared_ptr<Espresso::net> const&, std::__1::shared_ptr<Espresso::SerDes::generic_serdes_object> const&, std::__1::shared_ptr<Espresso::cpu_context_transfer_algo_t> const&, std::__1::shared_ptr<Espresso::net_info_ir_t> const&, bool, Espresso::network_shape const&, Espresso::compute_path, bool, std::__1::shared_ptr<Espresso::blob_storage_abstract> const&)
0x7ff832bd5e73 Espresso!Espresso::load_network_layers_internal(std::__1::shared_ptr<Espresso::SerDes::generic_serdes_object>, std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > const&, std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > const&, std::__1::shared_ptr<Espresso::abstract_context> const&, Espresso::network_shape const&, std::__1::basic_istream<char, std::__1::char_traits<char> >*, Espresso::compute_path, bool, std::__1::shared_ptr<Espresso::blob_storage_abstract> const&)

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 106
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 41771
|-[i] 2nd arg (selector): 8
|-[i] IOConnectCallMethod called from:
0x7ff82020ea6a IOKit!IOConnectCallStructMethod
0x7ff826194bb5 IOAccelerator!IOAccelDeviceGetNextGlobalTraceID
0x7ff8261af34a Metal!-[MTLIOAccelCommandBuffer initWithQueue:retainedReferences:synchronousDebugMode:]
0x7ffa38442d7d AMDMTLBronzeDriver!-[BronzeMtlCmdBuffer initWithQueue:retainedReferences:synchronousDebugMode:]
0x7ffa38442d3c AMDMTLBronzeDriver!-[BronzeMtlCmdBuffer initWithQueue:retainedReferences:]
0x7ffa384e77f1 AMDMTLBronzeDriver!-[BronzeMtlCmdQueue commandBuffer]
0x7ff832d5df59 Espresso!Espresso::batch_metal::batch_metal(Espresso::context_metal*)
0x7ff832fffb67 Espresso!Espresso::MPSEngine::batch::batch(Espresso::MPSEngine::context*)
0x7ff832bd0583 Espresso!std::__1::__shared_ptr_emplace<Espresso::MPSEngine::batch, std::__1::allocator<Espresso::MPSEngine::batch> >::__shared_ptr_emplace<Espresso::MPSEngine::context*>(std::__1::allocator<Espresso::MPSEngine::batch>, Espresso::MPSEngine::context*&&)
0x7ff832bd052c Espresso!std::__1::shared_ptr<Espresso::MPSEngine::batch> std::__1::allocate_shared<Espresso::MPSEngine::batch, std::__1::allocator<Espresso::MPSEngine::batch>, Espresso::MPSEngine::context*, void>(std::__1::allocator<Espresso::MPSEngine::batch> const&, Espresso::MPSEngine::context*&&)
0x7ff832bce36a Espresso!Espresso::MPSEngine::context::begin_batch()
0x7ff832bd9d52 Espresso!Espresso::load_network_layers_post_dispatch(std::__1::shared_ptr<Espresso::net> const&, std::__1::shared_ptr<Espresso::SerDes::generic_serdes_object> const&, std::__1::shared_ptr<Espresso::cpu_context_transfer_algo_t> const&, std::__1::shared_ptr<Espresso::net_info_ir_t> const&, bool, Espresso::network_shape const&, Espresso::compute_path, bool, std::__1::shared_ptr<Espresso::blob_storage_abstract> const&)
0x7ff832bd5e73 Espresso!Espresso::load_network_layers_internal(std::__1::shared_ptr<Espresso::SerDes::generic_serdes_object>, std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > const&, std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > const&, std::__1::shared_ptr<Espresso::abstract_context> const&, Espresso::network_shape const&, std::__1::basic_istream<char, std::__1::char_traits<char> >*, Espresso::compute_path, bool, std::__1::shared_ptr<Espresso::blob_storage_abstract> const&)
0x7ff832be2e2b Espresso!Espresso::load_and_shape_network(std::__1::shared_ptr<Espresso::SerDes::generic_serdes_object> const&, std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > const&, std::__1::shared_ptr<Espresso::abstract_context> const&, Espresso::network_shape const&, Espresso::compute_path, std::__1::shared_ptr<Espresso::blob_storage_abstract> const&, std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > const&)
0x7ff832be50b2 Espresso!Espresso::load_network(std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > const&, std::__1::shared_ptr<Espresso::abstract_context> const&, Espresso::compute_path, bool)
0x7ff832a64a2a Espresso!EspressoLight::espresso_plan::add_network(char const*, espresso_storage_type_t, std::__1::shared_ptr<Espresso::net>)

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 107
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 0
|-[i] IOConnectCallMethod called from:
0x7ff82619421f IOAccelerator!IOAccelResourceCreate
0x7ff8261a43dc Metal!-[MTLIOAccelResource initWithDevice:remoteStorageResource:options:args:argsSize:]
0x7ff8261a41b5 Metal!-[MTLIOAccelResource initWithDevice:options:args:argsSize:]
0x7ff8261b19b1 Metal!MTLIOAccelResourcePoolCreatePooledResource
0x7ff8261b180c Metal!MTLIOAccelCommandBufferStorageAllocResourceAtIndex
0x7ffa38443927 AMDMTLBronzeDriver!amdMtl_CmdBuffer_AllocTempBufferBytes(BronzeMtlCmdBuffer*, unsigned int, unsigned long long*, unsigned long long)
0x7ffa38442b8c AMDMTLBronzeDriver!amdMtl_CmdBuffer_ReserveIndirectTable(BronzeMtlCmdBuffer*)
0x7ffa38442bf7 AMDMTLBronzeDriver!-[BronzeMtlCmdBuffer computeCommandEncoder]
0x7ff832d5d5a9 Espresso!Espresso::batch_metal::autocreate_command_encoder()
0x7ff832d5df87 Espresso!Espresso::batch_metal::batch_metal(Espresso::context_metal*)
0x7ff832fffb67 Espresso!Espresso::MPSEngine::batch::batch(Espresso::MPSEngine::context*)
0x7ff832bd0583 Espresso!std::__1::__shared_ptr_emplace<Espresso::MPSEngine::batch, std::__1::allocator<Espresso::MPSEngine::batch> >::__shared_ptr_emplace<Espresso::MPSEngine::context*>(std::__1::allocator<Espresso::MPSEngine::batch>, Espresso::MPSEngine::context*&&)
0x7ff832bd052c Espresso!std::__1::shared_ptr<Espresso::MPSEngine::batch> std::__1::allocate_shared<Espresso::MPSEngine::batch, std::__1::allocator<Espresso::MPSEngine::batch>, Espresso::MPSEngine::context*, void>(std::__1::allocator<Espresso::MPSEngine::batch> const&, Espresso::MPSEngine::context*&&)
0x7ff832bce36a Espresso!Espresso::MPSEngine::context::begin_batch()
0x7ff832bd9d52 Espresso!Espresso::load_network_layers_post_dispatch(std::__1::shared_ptr<Espresso::net> const&, std::__1::shared_ptr<Espresso::SerDes::generic_serdes_object> const&, std::__1::shared_ptr<Espresso::cpu_context_transfer_algo_t> const&, std::__1::shared_ptr<Espresso::net_info_ir_t> const&, bool, Espresso::network_shape const&, Espresso::compute_path, bool, std::__1::shared_ptr<Espresso::blob_storage_abstract> const&)
0x7ff832bd5e73 Espresso!Espresso::load_network_layers_internal(std::__1::shared_ptr<Espresso::SerDes::generic_serdes_object>, std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > const&, std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > const&, std::__1::shared_ptr<Espresso::abstract_context> const&, Espresso::network_shape const&, std::__1::basic_istream<char, std::__1::char_traits<char> >*, Espresso::compute_path, bool, std::__1::shared_ptr<Espresso::blob_storage_abstract> const&)

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 108
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 0
|-[i] IOConnectCallMethod called from:
0x7ff82619421f IOAccelerator!IOAccelResourceCreate
0x7ff8261a43dc Metal!-[MTLIOAccelResource initWithDevice:remoteStorageResource:options:args:argsSize:]
0x7ff8261a41b5 Metal!-[MTLIOAccelResource initWithDevice:options:args:argsSize:]
0x7ff8261b19b1 Metal!MTLIOAccelResourcePoolCreatePooledResource
0x7ff8261b180c Metal!MTLIOAccelCommandBufferStorageAllocResourceAtIndex
0x7ffa3843f990 AMDMTLBronzeDriver!amdMtlBronzeBeginSegmentInternal(BronzeCmdBufInfoRec*, _eAMDMTL_SubmitChannel, unsigned int, void (*)(BronzeCmdBufInfoRec*, void*), void (*)(BronzeCmdBufInfoRec*, void*), void*, BronzeResourceBindInfoRec*, unsigned int, std::__1::vector<BronzeResourceBindInfoRec, std::__1::allocator<BronzeResourceBindInfoRec> >*, bool)
0x7ffa3843f924 AMDMTLBronzeDriver!amdMtlBronzeBeginSegment(BronzeCmdBufInfoRec*, _eAMDMTL_SubmitChannel, unsigned int, void (*)(BronzeCmdBufInfoRec*, void*), void (*)(BronzeCmdBufInfoRec*, void*), void*, BronzeResourceBindInfoRec*, unsigned int, std::__1::vector<BronzeResourceBindInfoRec, std::__1::allocator<BronzeResourceBindInfoRec> >*)
0x7ffa383f3cf6 AMDMTLBronzeDriver!-[BronzeMtlComputeCmdEncoder initWithCommandBuffer:]
0x7ffa38442c16 AMDMTLBronzeDriver!-[BronzeMtlCmdBuffer computeCommandEncoder]
0x7ff832d5d5a9 Espresso!Espresso::batch_metal::autocreate_command_encoder()
0x7ff832d5df87 Espresso!Espresso::batch_metal::batch_metal(Espresso::context_metal*)
0x7ff832fffb67 Espresso!Espresso::MPSEngine::batch::batch(Espresso::MPSEngine::context*)
0x7ff832bd0583 Espresso!std::__1::__shared_ptr_emplace<Espresso::MPSEngine::batch, std::__1::allocator<Espresso::MPSEngine::batch> >::__shared_ptr_emplace<Espresso::MPSEngine::context*>(std::__1::allocator<Espresso::MPSEngine::batch>, Espresso::MPSEngine::context*&&)
0x7ff832bd052c Espresso!std::__1::shared_ptr<Espresso::MPSEngine::batch> std::__1::allocate_shared<Espresso::MPSEngine::batch, std::__1::allocator<Espresso::MPSEngine::batch>, Espresso::MPSEngine::context*, void>(std::__1::allocator<Espresso::MPSEngine::batch> const&, Espresso::MPSEngine::context*&&)
0x7ff832bce36a Espresso!Espresso::MPSEngine::context::begin_batch()
0x7ff832bd9d52 Espresso!Espresso::load_network_layers_post_dispatch(std::__1::shared_ptr<Espresso::net> const&, std::__1::shared_ptr<Espresso::SerDes::generic_serdes_object> const&, std::__1::shared_ptr<Espresso::cpu_context_transfer_algo_t> const&, std::__1::shared_ptr<Espresso::net_info_ir_t> const&, bool, Espresso::network_shape const&, Espresso::compute_path, bool, std::__1::shared_ptr<Espresso::blob_storage_abstract> const&)

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 109
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 0
|-[i] IOConnectCallMethod called from:
0x7ff82619421f IOAccelerator!IOAccelResourceCreate
0x7ff8261a43dc Metal!-[MTLIOAccelResource initWithDevice:remoteStorageResource:options:args:argsSize:]
0x7ff8261a41b5 Metal!-[MTLIOAccelResource initWithDevice:options:args:argsSize:]
0x7ff8261a3f87 Metal!-[MTLIOAccelBuffer initWithDevice:pointer:length:options:sysMemSize:vidMemSize:args:argsSize:deallocator:]
0x7ffa383e8d5b AMDMTLBronzeDriver!-[BronzeMtlBuffer initWithDevice:pointer:length:options:sysMemSize:vidMemSize:args:argsSize:deallocator:]
0x7ffa383e8b8b AMDMTLBronzeDriver!-[BronzeMtlBuffer initInternalWithDevice:pointer:length:options:deallocator:]
0x7ffa384dfa71 AMDMTLBronzeDriver!-[BronzeMtlDevice newBufferWithLength:options:]
0x7ff827dd57a4 MPSNeuralNetwork!0x12e7a4 (0x7ff80a8867a4)
0x7ff827ddb588 MPSNeuralNetwork!0x134588 (0x7ff80a88c588)
0x7ff827e54068 /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution PrepareAndLoadData:dataType:weightsLayout:weights:biases:quantizationType:ranges:lookUpTable:convertFloat32Weights:]
0x7ff827e5490a /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution initialize:convolutionDescriptor:kernelWeights:dataType:weightsLayout:range:lookUpTable:qType:biasTerms:flags:fullyConnected:convolutionTranspose:preferredWeightsDataType:]
0x7ff827e556f4 /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution initializeWithDevice:weights:fullyConnected:convolutionTranspose:]
0x7ff827e55b14 /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution initWithDevice:weights:]
0x7ff832c03e95 Espresso!Espresso::MPSEngine::mps_convolution_kernel::recreate_kernel()
0x7ff832c02a28 Espresso!Espresso::MPSEngine::convolution_kernel_base<Espresso::generic_convolution_kernel>::set_biases(std::__1::shared_ptr<Espresso::blob<float, 1> >)
0x7ff832c05b59 Espresso!Espresso::MPSEngine::convolution_kernel_proxy::set_biases(std::__1::shared_ptr<Espresso::blob<float, 1> >)

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 110
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 0
|-[i] IOConnectCallMethod called from:
0x7ff82619421f IOAccelerator!IOAccelResourceCreate
0x7ff8261a43dc Metal!-[MTLIOAccelResource initWithDevice:remoteStorageResource:options:args:argsSize:]
0x7ff8261a41b5 Metal!-[MTLIOAccelResource initWithDevice:options:args:argsSize:]
0x7ff8261a3f87 Metal!-[MTLIOAccelBuffer initWithDevice:pointer:length:options:sysMemSize:vidMemSize:args:argsSize:deallocator:]
0x7ffa383e8d5b AMDMTLBronzeDriver!-[BronzeMtlBuffer initWithDevice:pointer:length:options:sysMemSize:vidMemSize:args:argsSize:deallocator:]
0x7ffa383e8b8b AMDMTLBronzeDriver!-[BronzeMtlBuffer initInternalWithDevice:pointer:length:options:deallocator:]
0x7ffa384dfa71 AMDMTLBronzeDriver!-[BronzeMtlDevice newBufferWithLength:options:]
0x7ff827dd5aba MPSNeuralNetwork!0x12eaba (0x7ff80a886aba)
0x7ff827ddb588 MPSNeuralNetwork!0x134588 (0x7ff80a88c588)
0x7ff827e54068 /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution PrepareAndLoadData:dataType:weightsLayout:weights:biases:quantizationType:ranges:lookUpTable:convertFloat32Weights:]
0x7ff827e5490a /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution initialize:convolutionDescriptor:kernelWeights:dataType:weightsLayout:range:lookUpTable:qType:biasTerms:flags:fullyConnected:convolutionTranspose:preferredWeightsDataType:]
0x7ff827e556f4 /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution initializeWithDevice:weights:fullyConnected:convolutionTranspose:]
0x7ff827e55b14 /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution initWithDevice:weights:]
0x7ff832c03e95 Espresso!Espresso::MPSEngine::mps_convolution_kernel::recreate_kernel()
0x7ff832c02a28 Espresso!Espresso::MPSEngine::convolution_kernel_base<Espresso::generic_convolution_kernel>::set_biases(std::__1::shared_ptr<Espresso::blob<float, 1> >)
0x7ff832c05b59 Espresso!Espresso::MPSEngine::convolution_kernel_proxy::set_biases(std::__1::shared_ptr<Espresso::blob<float, 1> >)

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 111
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 0
|-[i] IOConnectCallMethod called from:
0x7ff82619421f IOAccelerator!IOAccelResourceCreate
0x7ff8261a43dc Metal!-[MTLIOAccelResource initWithDevice:remoteStorageResource:options:args:argsSize:]
0x7ff8261a41b5 Metal!-[MTLIOAccelResource initWithDevice:options:args:argsSize:]
0x7ff8261a3f87 Metal!-[MTLIOAccelBuffer initWithDevice:pointer:length:options:sysMemSize:vidMemSize:args:argsSize:deallocator:]
0x7ffa383e8d5b AMDMTLBronzeDriver!-[BronzeMtlBuffer initWithDevice:pointer:length:options:sysMemSize:vidMemSize:args:argsSize:deallocator:]
0x7ffa383e8b8b AMDMTLBronzeDriver!-[BronzeMtlBuffer initInternalWithDevice:pointer:length:options:deallocator:]
0x7ffa384dfa71 AMDMTLBronzeDriver!-[BronzeMtlDevice newBufferWithLength:options:]
0x7ff827dd57a4 MPSNeuralNetwork!0x12e7a4 (0x7ff80a8867a4)
0x7ff827ddb588 MPSNeuralNetwork!0x134588 (0x7ff80a88c588)
0x7ff827e54068 /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution PrepareAndLoadData:dataType:weightsLayout:weights:biases:quantizationType:ranges:lookUpTable:convertFloat32Weights:]
0x7ff827e5490a /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution initialize:convolutionDescriptor:kernelWeights:dataType:weightsLayout:range:lookUpTable:qType:biasTerms:flags:fullyConnected:convolutionTranspose:preferredWeightsDataType:]
0x7ff827e556f4 /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution initializeWithDevice:weights:fullyConnected:convolutionTranspose:]
0x7ff827e55b14 /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution initWithDevice:weights:]
0x7ff832c03e95 Espresso!Espresso::MPSEngine::mps_convolution_kernel::recreate_kernel()
0x7ff832c02a28 Espresso!Espresso::MPSEngine::convolution_kernel_base<Espresso::generic_convolution_kernel>::set_biases(std::__1::shared_ptr<Espresso::blob<float, 1> >)
0x7ff832c05b59 Espresso!Espresso::MPSEngine::convolution_kernel_proxy::set_biases(std::__1::shared_ptr<Espresso::blob<float, 1> >)

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 112
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 0
|-[i] IOConnectCallMethod called from:
0x7ff82619421f IOAccelerator!IOAccelResourceCreate
0x7ff8261a43dc Metal!-[MTLIOAccelResource initWithDevice:remoteStorageResource:options:args:argsSize:]
0x7ff8261a41b5 Metal!-[MTLIOAccelResource initWithDevice:options:args:argsSize:]
0x7ff8261a3f87 Metal!-[MTLIOAccelBuffer initWithDevice:pointer:length:options:sysMemSize:vidMemSize:args:argsSize:deallocator:]
0x7ffa383e8d5b AMDMTLBronzeDriver!-[BronzeMtlBuffer initWithDevice:pointer:length:options:sysMemSize:vidMemSize:args:argsSize:deallocator:]
0x7ffa383e8b8b AMDMTLBronzeDriver!-[BronzeMtlBuffer initInternalWithDevice:pointer:length:options:deallocator:]
0x7ffa384dfa71 AMDMTLBronzeDriver!-[BronzeMtlDevice newBufferWithLength:options:]
0x7ff827dd5aba MPSNeuralNetwork!0x12eaba (0x7ff80a886aba)
0x7ff827ddb588 MPSNeuralNetwork!0x134588 (0x7ff80a88c588)
0x7ff827e54068 /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution PrepareAndLoadData:dataType:weightsLayout:weights:biases:quantizationType:ranges:lookUpTable:convertFloat32Weights:]
0x7ff827e5490a /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution initialize:convolutionDescriptor:kernelWeights:dataType:weightsLayout:range:lookUpTable:qType:biasTerms:flags:fullyConnected:convolutionTranspose:preferredWeightsDataType:]
0x7ff827e556f4 /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution initializeWithDevice:weights:fullyConnected:convolutionTranspose:]
0x7ff827e55b14 /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution initWithDevice:weights:]
0x7ff832c03e95 Espresso!Espresso::MPSEngine::mps_convolution_kernel::recreate_kernel()
0x7ff832c02a28 Espresso!Espresso::MPSEngine::convolution_kernel_base<Espresso::generic_convolution_kernel>::set_biases(std::__1::shared_ptr<Espresso::blob<float, 1> >)
0x7ff832c05b59 Espresso!Espresso::MPSEngine::convolution_kernel_proxy::set_biases(std::__1::shared_ptr<Espresso::blob<float, 1> >)

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 113
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 0
|-[i] IOConnectCallMethod called from:
0x7ff82619421f IOAccelerator!IOAccelResourceCreate
0x7ff8261a43dc Metal!-[MTLIOAccelResource initWithDevice:remoteStorageResource:options:args:argsSize:]
0x7ff8261a41b5 Metal!-[MTLIOAccelResource initWithDevice:options:args:argsSize:]
0x7ff8261a3f87 Metal!-[MTLIOAccelBuffer initWithDevice:pointer:length:options:sysMemSize:vidMemSize:args:argsSize:deallocator:]
0x7ffa383e8d5b AMDMTLBronzeDriver!-[BronzeMtlBuffer initWithDevice:pointer:length:options:sysMemSize:vidMemSize:args:argsSize:deallocator:]
0x7ffa383e8b8b AMDMTLBronzeDriver!-[BronzeMtlBuffer initInternalWithDevice:pointer:length:options:deallocator:]
0x7ffa384dfa71 AMDMTLBronzeDriver!-[BronzeMtlDevice newBufferWithLength:options:]
0x7ff827dd57a4 MPSNeuralNetwork!0x12e7a4 (0x7ff80a8867a4)
0x7ff827ddb588 MPSNeuralNetwork!0x134588 (0x7ff80a88c588)
0x7ff827e54068 /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution PrepareAndLoadData:dataType:weightsLayout:weights:biases:quantizationType:ranges:lookUpTable:convertFloat32Weights:]
0x7ff827e5490a /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution initialize:convolutionDescriptor:kernelWeights:dataType:weightsLayout:range:lookUpTable:qType:biasTerms:flags:fullyConnected:convolutionTranspose:preferredWeightsDataType:]
0x7ff827e556f4 /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution initializeWithDevice:weights:fullyConnected:convolutionTranspose:]
0x7ff827e55b14 /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution initWithDevice:weights:]
0x7ff832c03e95 Espresso!Espresso::MPSEngine::mps_convolution_kernel::recreate_kernel()
0x7ff832c02a28 Espresso!Espresso::MPSEngine::convolution_kernel_base<Espresso::generic_convolution_kernel>::set_biases(std::__1::shared_ptr<Espresso::blob<float, 1> >)
0x7ff832c05b59 Espresso!Espresso::MPSEngine::convolution_kernel_proxy::set_biases(std::__1::shared_ptr<Espresso::blob<float, 1> >)

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 114
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 0
|-[i] IOConnectCallMethod called from:
0x7ff82619421f IOAccelerator!IOAccelResourceCreate
0x7ff8261a43dc Metal!-[MTLIOAccelResource initWithDevice:remoteStorageResource:options:args:argsSize:]
0x7ff8261a41b5 Metal!-[MTLIOAccelResource initWithDevice:options:args:argsSize:]
0x7ff8261a3f87 Metal!-[MTLIOAccelBuffer initWithDevice:pointer:length:options:sysMemSize:vidMemSize:args:argsSize:deallocator:]
0x7ffa383e8d5b AMDMTLBronzeDriver!-[BronzeMtlBuffer initWithDevice:pointer:length:options:sysMemSize:vidMemSize:args:argsSize:deallocator:]
0x7ffa383e8b8b AMDMTLBronzeDriver!-[BronzeMtlBuffer initInternalWithDevice:pointer:length:options:deallocator:]
0x7ffa384dfa71 AMDMTLBronzeDriver!-[BronzeMtlDevice newBufferWithLength:options:]
0x7ff827dd5aba MPSNeuralNetwork!0x12eaba (0x7ff80a886aba)
0x7ff827ddb588 MPSNeuralNetwork!0x134588 (0x7ff80a88c588)
0x7ff827e54068 /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution PrepareAndLoadData:dataType:weightsLayout:weights:biases:quantizationType:ranges:lookUpTable:convertFloat32Weights:]
0x7ff827e5490a /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution initialize:convolutionDescriptor:kernelWeights:dataType:weightsLayout:range:lookUpTable:qType:biasTerms:flags:fullyConnected:convolutionTranspose:preferredWeightsDataType:]
0x7ff827e556f4 /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution initializeWithDevice:weights:fullyConnected:convolutionTranspose:]
0x7ff827e55b14 /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution initWithDevice:weights:]
0x7ff832c03e95 Espresso!Espresso::MPSEngine::mps_convolution_kernel::recreate_kernel()
0x7ff832c02a28 Espresso!Espresso::MPSEngine::convolution_kernel_base<Espresso::generic_convolution_kernel>::set_biases(std::__1::shared_ptr<Espresso::blob<float, 1> >)
0x7ff832c05b59 Espresso!Espresso::MPSEngine::convolution_kernel_proxy::set_biases(std::__1::shared_ptr<Espresso::blob<float, 1> >)

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 115
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 0
|-[i] IOConnectCallMethod called from:
0x7ff82619421f IOAccelerator!IOAccelResourceCreate
0x7ff8261a43dc Metal!-[MTLIOAccelResource initWithDevice:remoteStorageResource:options:args:argsSize:]
0x7ff8261a41b5 Metal!-[MTLIOAccelResource initWithDevice:options:args:argsSize:]
0x7ff8261a3f87 Metal!-[MTLIOAccelBuffer initWithDevice:pointer:length:options:sysMemSize:vidMemSize:args:argsSize:deallocator:]
0x7ffa383e8d5b AMDMTLBronzeDriver!-[BronzeMtlBuffer initWithDevice:pointer:length:options:sysMemSize:vidMemSize:args:argsSize:deallocator:]
0x7ffa383e8b8b AMDMTLBronzeDriver!-[BronzeMtlBuffer initInternalWithDevice:pointer:length:options:deallocator:]
0x7ffa384dfa71 AMDMTLBronzeDriver!-[BronzeMtlDevice newBufferWithLength:options:]
0x7ff827dd57a4 MPSNeuralNetwork!0x12e7a4 (0x7ff80a8867a4)
0x7ff827ddb588 MPSNeuralNetwork!0x134588 (0x7ff80a88c588)
0x7ff827e54068 /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution PrepareAndLoadData:dataType:weightsLayout:weights:biases:quantizationType:ranges:lookUpTable:convertFloat32Weights:]
0x7ff827e5490a /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution initialize:convolutionDescriptor:kernelWeights:dataType:weightsLayout:range:lookUpTable:qType:biasTerms:flags:fullyConnected:convolutionTranspose:preferredWeightsDataType:]
0x7ff827e556f4 /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution initializeWithDevice:weights:fullyConnected:convolutionTranspose:]
0x7ff827e55b14 /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution initWithDevice:weights:]
0x7ff832c03e95 Espresso!Espresso::MPSEngine::mps_convolution_kernel::recreate_kernel()
0x7ff832c02a28 Espresso!Espresso::MPSEngine::convolution_kernel_base<Espresso::generic_convolution_kernel>::set_biases(std::__1::shared_ptr<Espresso::blob<float, 1> >)
0x7ff832c05b59 Espresso!Espresso::MPSEngine::convolution_kernel_proxy::set_biases(std::__1::shared_ptr<Espresso::blob<float, 1> >)

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 116
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 0
|-[i] IOConnectCallMethod called from:
0x7ff82619421f IOAccelerator!IOAccelResourceCreate
0x7ff8261a43dc Metal!-[MTLIOAccelResource initWithDevice:remoteStorageResource:options:args:argsSize:]
0x7ff8261a41b5 Metal!-[MTLIOAccelResource initWithDevice:options:args:argsSize:]
0x7ff8261a3f87 Metal!-[MTLIOAccelBuffer initWithDevice:pointer:length:options:sysMemSize:vidMemSize:args:argsSize:deallocator:]
0x7ffa383e8d5b AMDMTLBronzeDriver!-[BronzeMtlBuffer initWithDevice:pointer:length:options:sysMemSize:vidMemSize:args:argsSize:deallocator:]
0x7ffa383e8b8b AMDMTLBronzeDriver!-[BronzeMtlBuffer initInternalWithDevice:pointer:length:options:deallocator:]
0x7ffa384dfa71 AMDMTLBronzeDriver!-[BronzeMtlDevice newBufferWithLength:options:]
0x7ff827dd5aba MPSNeuralNetwork!0x12eaba (0x7ff80a886aba)
0x7ff827ddb588 MPSNeuralNetwork!0x134588 (0x7ff80a88c588)
0x7ff827e54068 /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution PrepareAndLoadData:dataType:weightsLayout:weights:biases:quantizationType:ranges:lookUpTable:convertFloat32Weights:]
0x7ff827e5490a /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution initialize:convolutionDescriptor:kernelWeights:dataType:weightsLayout:range:lookUpTable:qType:biasTerms:flags:fullyConnected:convolutionTranspose:preferredWeightsDataType:]
0x7ff827e556f4 /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution initializeWithDevice:weights:fullyConnected:convolutionTranspose:]
0x7ff827e55b14 /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution initWithDevice:weights:]
0x7ff832c03e95 Espresso!Espresso::MPSEngine::mps_convolution_kernel::recreate_kernel()
0x7ff832c02a28 Espresso!Espresso::MPSEngine::convolution_kernel_base<Espresso::generic_convolution_kernel>::set_biases(std::__1::shared_ptr<Espresso::blob<float, 1> >)
0x7ff832c05b59 Espresso!Espresso::MPSEngine::convolution_kernel_proxy::set_biases(std::__1::shared_ptr<Espresso::blob<float, 1> >)

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 117
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 0
|-[i] IOConnectCallMethod called from:
0x7ff82619421f IOAccelerator!IOAccelResourceCreate
0x7ff8261a43dc Metal!-[MTLIOAccelResource initWithDevice:remoteStorageResource:options:args:argsSize:]
0x7ff8261a41b5 Metal!-[MTLIOAccelResource initWithDevice:options:args:argsSize:]
0x7ff8261a3f87 Metal!-[MTLIOAccelBuffer initWithDevice:pointer:length:options:sysMemSize:vidMemSize:args:argsSize:deallocator:]
0x7ffa383e8d5b AMDMTLBronzeDriver!-[BronzeMtlBuffer initWithDevice:pointer:length:options:sysMemSize:vidMemSize:args:argsSize:deallocator:]
0x7ffa383e8b8b AMDMTLBronzeDriver!-[BronzeMtlBuffer initInternalWithDevice:pointer:length:options:deallocator:]
0x7ffa384dfa71 AMDMTLBronzeDriver!-[BronzeMtlDevice newBufferWithLength:options:]
0x7ff827dd57a4 MPSNeuralNetwork!0x12e7a4 (0x7ff80a8867a4)
0x7ff827ddb588 MPSNeuralNetwork!0x134588 (0x7ff80a88c588)
0x7ff827e54068 /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution PrepareAndLoadData:dataType:weightsLayout:weights:biases:quantizationType:ranges:lookUpTable:convertFloat32Weights:]
0x7ff827e5490a /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution initialize:convolutionDescriptor:kernelWeights:dataType:weightsLayout:range:lookUpTable:qType:biasTerms:flags:fullyConnected:convolutionTranspose:preferredWeightsDataType:]
0x7ff827e556f4 /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution initializeWithDevice:weights:fullyConnected:convolutionTranspose:]
0x7ff827e55b14 /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution initWithDevice:weights:]
0x7ff832c03e95 Espresso!Espresso::MPSEngine::mps_convolution_kernel::recreate_kernel()
0x7ff832c02a28 Espresso!Espresso::MPSEngine::convolution_kernel_base<Espresso::generic_convolution_kernel>::set_biases(std::__1::shared_ptr<Espresso::blob<float, 1> >)
0x7ff832c05b59 Espresso!Espresso::MPSEngine::convolution_kernel_proxy::set_biases(std::__1::shared_ptr<Espresso::blob<float, 1> >)

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 118
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 0
|-[i] IOConnectCallMethod called from:
0x7ff82619421f IOAccelerator!IOAccelResourceCreate
0x7ff8261a43dc Metal!-[MTLIOAccelResource initWithDevice:remoteStorageResource:options:args:argsSize:]
0x7ff8261a41b5 Metal!-[MTLIOAccelResource initWithDevice:options:args:argsSize:]
0x7ff8261a3f87 Metal!-[MTLIOAccelBuffer initWithDevice:pointer:length:options:sysMemSize:vidMemSize:args:argsSize:deallocator:]
0x7ffa383e8d5b AMDMTLBronzeDriver!-[BronzeMtlBuffer initWithDevice:pointer:length:options:sysMemSize:vidMemSize:args:argsSize:deallocator:]
0x7ffa383e8b8b AMDMTLBronzeDriver!-[BronzeMtlBuffer initInternalWithDevice:pointer:length:options:deallocator:]
0x7ffa384dfa71 AMDMTLBronzeDriver!-[BronzeMtlDevice newBufferWithLength:options:]
0x7ff827dd5aba MPSNeuralNetwork!0x12eaba (0x7ff80a886aba)
0x7ff827ddb588 MPSNeuralNetwork!0x134588 (0x7ff80a88c588)
0x7ff827e54068 /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution PrepareAndLoadData:dataType:weightsLayout:weights:biases:quantizationType:ranges:lookUpTable:convertFloat32Weights:]
0x7ff827e5490a /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution initialize:convolutionDescriptor:kernelWeights:dataType:weightsLayout:range:lookUpTable:qType:biasTerms:flags:fullyConnected:convolutionTranspose:preferredWeightsDataType:]
0x7ff827e556f4 /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution initializeWithDevice:weights:fullyConnected:convolutionTranspose:]
0x7ff827e55b14 /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution initWithDevice:weights:]
0x7ff832c03e95 Espresso!Espresso::MPSEngine::mps_convolution_kernel::recreate_kernel()
0x7ff832c02a28 Espresso!Espresso::MPSEngine::convolution_kernel_base<Espresso::generic_convolution_kernel>::set_biases(std::__1::shared_ptr<Espresso::blob<float, 1> >)
0x7ff832c05b59 Espresso!Espresso::MPSEngine::convolution_kernel_proxy::set_biases(std::__1::shared_ptr<Espresso::blob<float, 1> >)

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 119
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 0
|-[i] IOConnectCallMethod called from:
0x7ff82619421f IOAccelerator!IOAccelResourceCreate
0x7ff8261a43dc Metal!-[MTLIOAccelResource initWithDevice:remoteStorageResource:options:args:argsSize:]
0x7ff8261a41b5 Metal!-[MTLIOAccelResource initWithDevice:options:args:argsSize:]
0x7ff8261a3f87 Metal!-[MTLIOAccelBuffer initWithDevice:pointer:length:options:sysMemSize:vidMemSize:args:argsSize:deallocator:]
0x7ffa383e8d5b AMDMTLBronzeDriver!-[BronzeMtlBuffer initWithDevice:pointer:length:options:sysMemSize:vidMemSize:args:argsSize:deallocator:]
0x7ffa383e8b8b AMDMTLBronzeDriver!-[BronzeMtlBuffer initInternalWithDevice:pointer:length:options:deallocator:]
0x7ffa384dfa71 AMDMTLBronzeDriver!-[BronzeMtlDevice newBufferWithLength:options:]
0x7ff827dd57a4 MPSNeuralNetwork!0x12e7a4 (0x7ff80a8867a4)
0x7ff827ddb588 MPSNeuralNetwork!0x134588 (0x7ff80a88c588)
0x7ff827e54068 /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution PrepareAndLoadData:dataType:weightsLayout:weights:biases:quantizationType:ranges:lookUpTable:convertFloat32Weights:]
0x7ff827e5490a /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution initialize:convolutionDescriptor:kernelWeights:dataType:weightsLayout:range:lookUpTable:qType:biasTerms:flags:fullyConnected:convolutionTranspose:preferredWeightsDataType:]
0x7ff827e556f4 /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution initializeWithDevice:weights:fullyConnected:convolutionTranspose:]
0x7ff827e55b14 /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution initWithDevice:weights:]
0x7ff832c03e95 Espresso!Espresso::MPSEngine::mps_convolution_kernel::recreate_kernel()
0x7ff832c02a28 Espresso!Espresso::MPSEngine::convolution_kernel_base<Espresso::generic_convolution_kernel>::set_biases(std::__1::shared_ptr<Espresso::blob<float, 1> >)
0x7ff832c05b59 Espresso!Espresso::MPSEngine::convolution_kernel_proxy::set_biases(std::__1::shared_ptr<Espresso::blob<float, 1> >)

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 120
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 0
|-[i] IOConnectCallMethod called from:
0x7ff82619421f IOAccelerator!IOAccelResourceCreate
0x7ff8261a43dc Metal!-[MTLIOAccelResource initWithDevice:remoteStorageResource:options:args:argsSize:]
0x7ff8261a41b5 Metal!-[MTLIOAccelResource initWithDevice:options:args:argsSize:]
0x7ff8261a3f87 Metal!-[MTLIOAccelBuffer initWithDevice:pointer:length:options:sysMemSize:vidMemSize:args:argsSize:deallocator:]
0x7ffa383e8d5b AMDMTLBronzeDriver!-[BronzeMtlBuffer initWithDevice:pointer:length:options:sysMemSize:vidMemSize:args:argsSize:deallocator:]
0x7ffa383e8b8b AMDMTLBronzeDriver!-[BronzeMtlBuffer initInternalWithDevice:pointer:length:options:deallocator:]
0x7ffa384dfa71 AMDMTLBronzeDriver!-[BronzeMtlDevice newBufferWithLength:options:]
0x7ff827dd5aba MPSNeuralNetwork!0x12eaba (0x7ff80a886aba)
0x7ff827ddb588 MPSNeuralNetwork!0x134588 (0x7ff80a88c588)
0x7ff827e54068 /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution PrepareAndLoadData:dataType:weightsLayout:weights:biases:quantizationType:ranges:lookUpTable:convertFloat32Weights:]
0x7ff827e5490a /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution initialize:convolutionDescriptor:kernelWeights:dataType:weightsLayout:range:lookUpTable:qType:biasTerms:flags:fullyConnected:convolutionTranspose:preferredWeightsDataType:]
0x7ff827e556f4 /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution initializeWithDevice:weights:fullyConnected:convolutionTranspose:]
0x7ff827e55b14 /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution initWithDevice:weights:]
0x7ff832c03e95 Espresso!Espresso::MPSEngine::mps_convolution_kernel::recreate_kernel()
0x7ff832c02a28 Espresso!Espresso::MPSEngine::convolution_kernel_base<Espresso::generic_convolution_kernel>::set_biases(std::__1::shared_ptr<Espresso::blob<float, 1> >)
0x7ff832c05b59 Espresso!Espresso::MPSEngine::convolution_kernel_proxy::set_biases(std::__1::shared_ptr<Espresso::blob<float, 1> >)

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 121
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 41575
|-[i] 2nd arg (selector): 1
|-[i] IOConnectCallMethod called from:
0x7ff826195035 IOAccelerator!IOAccelCommandQueueSubmitCommandBuffers
0x7ff8261bc2c4 Metal!-[MTLIOAccelCommandQueue submitCommandBuffers:count:]
0x7ffa384e788d AMDMTLBronzeDriver!-[BronzeMtlCmdQueue submitCommandBuffers:count:]
0x7ff8261bbf2d Metal!-[_MTLCommandQueue _submitAvailableCommandBuffers]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b5746 libdispatch.dylib!_dispatch_continuation_pop
0x7ff81d6c6a5a libdispatch.dylib!_dispatch_source_invoke
0x7ff81d6b8b85 libdispatch.dylib!_dispatch_lane_serial_drain
0x7ff81d6b97c8 libdispatch.dylib!_dispatch_lane_invoke
0x7ff81d6c37e1 libdispatch.dylib!_dispatch_workloop_worker_thread
0x7ff81d866074 libsystem_pthread.dylib!_pthread_wqthread
0x7ff81d864ffb libsystem_pthread.dylib!start_wqthread

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 122
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 0
|-[i] IOConnectCallMethod called from:
0x7ff82619421f IOAccelerator!IOAccelResourceCreate
0x7ff8261a43dc Metal!-[MTLIOAccelResource initWithDevice:remoteStorageResource:options:args:argsSize:]
0x7ff8261a41b5 Metal!-[MTLIOAccelResource initWithDevice:options:args:argsSize:]
0x7ff8261a3f87 Metal!-[MTLIOAccelBuffer initWithDevice:pointer:length:options:sysMemSize:vidMemSize:args:argsSize:deallocator:]
0x7ffa383e8d5b AMDMTLBronzeDriver!-[BronzeMtlBuffer initWithDevice:pointer:length:options:sysMemSize:vidMemSize:args:argsSize:deallocator:]
0x7ffa383e8b8b AMDMTLBronzeDriver!-[BronzeMtlBuffer initInternalWithDevice:pointer:length:options:deallocator:]
0x7ffa384dfa71 AMDMTLBronzeDriver!-[BronzeMtlDevice newBufferWithLength:options:]
0x7ff827dd57a4 MPSNeuralNetwork!0x12e7a4 (0x7ff80a8867a4)
0x7ff827ddb588 MPSNeuralNetwork!0x134588 (0x7ff80a88c588)
0x7ff827e54068 /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution PrepareAndLoadData:dataType:weightsLayout:weights:biases:quantizationType:ranges:lookUpTable:convertFloat32Weights:]
0x7ff827e5490a /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution initialize:convolutionDescriptor:kernelWeights:dataType:weightsLayout:range:lookUpTable:qType:biasTerms:flags:fullyConnected:convolutionTranspose:preferredWeightsDataType:]
0x7ff827e556f4 /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution initializeWithDevice:weights:fullyConnected:convolutionTranspose:]
0x7ff827e55b14 /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution initWithDevice:weights:]
0x7ff832c03e95 Espresso!Espresso::MPSEngine::mps_convolution_kernel::recreate_kernel()
0x7ff832c02a28 Espresso!Espresso::MPSEngine::convolution_kernel_base<Espresso::generic_convolution_kernel>::set_biases(std::__1::shared_ptr<Espresso::blob<float, 1> >)
0x7ff832c05b59 Espresso!Espresso::MPSEngine::convolution_kernel_proxy::set_biases(std::__1::shared_ptr<Espresso::blob<float, 1> >)

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 123
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 0
|-[i] IOConnectCallMethod called from:
0x7ff82619421f IOAccelerator!IOAccelResourceCreate
0x7ff8261a43dc Metal!-[MTLIOAccelResource initWithDevice:remoteStorageResource:options:args:argsSize:]
0x7ff8261a41b5 Metal!-[MTLIOAccelResource initWithDevice:options:args:argsSize:]
0x7ff8261a3f87 Metal!-[MTLIOAccelBuffer initWithDevice:pointer:length:options:sysMemSize:vidMemSize:args:argsSize:deallocator:]
0x7ffa383e8d5b AMDMTLBronzeDriver!-[BronzeMtlBuffer initWithDevice:pointer:length:options:sysMemSize:vidMemSize:args:argsSize:deallocator:]
0x7ffa383e8b8b AMDMTLBronzeDriver!-[BronzeMtlBuffer initInternalWithDevice:pointer:length:options:deallocator:]
0x7ffa384dfa71 AMDMTLBronzeDriver!-[BronzeMtlDevice newBufferWithLength:options:]
0x7ff827dd5aba MPSNeuralNetwork!0x12eaba (0x7ff80a886aba)
0x7ff827ddb588 MPSNeuralNetwork!0x134588 (0x7ff80a88c588)
0x7ff827e54068 /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution PrepareAndLoadData:dataType:weightsLayout:weights:biases:quantizationType:ranges:lookUpTable:convertFloat32Weights:]
0x7ff827e5490a /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution initialize:convolutionDescriptor:kernelWeights:dataType:weightsLayout:range:lookUpTable:qType:biasTerms:flags:fullyConnected:convolutionTranspose:preferredWeightsDataType:]
0x7ff827e556f4 /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution initializeWithDevice:weights:fullyConnected:convolutionTranspose:]
0x7ff827e55b14 /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution initWithDevice:weights:]
0x7ff832c03e95 Espresso!Espresso::MPSEngine::mps_convolution_kernel::recreate_kernel()
0x7ff832c02a28 Espresso!Espresso::MPSEngine::convolution_kernel_base<Espresso::generic_convolution_kernel>::set_biases(std::__1::shared_ptr<Espresso::blob<float, 1> >)
0x7ff832c05b59 Espresso!Espresso::MPSEngine::convolution_kernel_proxy::set_biases(std::__1::shared_ptr<Espresso::blob<float, 1> >)

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 124
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 41575
|-[i] 2nd arg (selector): 1
|-[i] IOConnectCallMethod called from:
0x7ff826195035 IOAccelerator!IOAccelCommandQueueSubmitCommandBuffers
0x7ff8261bc2c4 Metal!-[MTLIOAccelCommandQueue submitCommandBuffers:count:]
0x7ffa384e788d AMDMTLBronzeDriver!-[BronzeMtlCmdQueue submitCommandBuffers:count:]
0x7ff8261bbf2d Metal!-[_MTLCommandQueue _submitAvailableCommandBuffers]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b5746 libdispatch.dylib!_dispatch_continuation_pop
0x7ff81d6c6a5a libdispatch.dylib!_dispatch_source_invoke
0x7ff81d6b8b85 libdispatch.dylib!_dispatch_lane_serial_drain
0x7ff81d6b97c8 libdispatch.dylib!_dispatch_lane_invoke
0x7ff81d6c37e1 libdispatch.dylib!_dispatch_workloop_worker_thread
0x7ff81d866074 libsystem_pthread.dylib!_pthread_wqthread
0x7ff81d864ffb libsystem_pthread.dylib!start_wqthread

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 125
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 0
|-[i] IOConnectCallMethod called from:
0x7ff82619421f IOAccelerator!IOAccelResourceCreate
0x7ff8261a43dc Metal!-[MTLIOAccelResource initWithDevice:remoteStorageResource:options:args:argsSize:]
0x7ff8261a41b5 Metal!-[MTLIOAccelResource initWithDevice:options:args:argsSize:]
0x7ff8261a3f87 Metal!-[MTLIOAccelBuffer initWithDevice:pointer:length:options:sysMemSize:vidMemSize:args:argsSize:deallocator:]
0x7ffa383e8d5b AMDMTLBronzeDriver!-[BronzeMtlBuffer initWithDevice:pointer:length:options:sysMemSize:vidMemSize:args:argsSize:deallocator:]
0x7ffa383e8b8b AMDMTLBronzeDriver!-[BronzeMtlBuffer initInternalWithDevice:pointer:length:options:deallocator:]
0x7ffa384dfa71 AMDMTLBronzeDriver!-[BronzeMtlDevice newBufferWithLength:options:]
0x7ff827dd57a4 MPSNeuralNetwork!0x12e7a4 (0x7ff80a8867a4)
0x7ff827ddb588 MPSNeuralNetwork!0x134588 (0x7ff80a88c588)
0x7ff827e54068 /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution PrepareAndLoadData:dataType:weightsLayout:weights:biases:quantizationType:ranges:lookUpTable:convertFloat32Weights:]
0x7ff827e5490a /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution initialize:convolutionDescriptor:kernelWeights:dataType:weightsLayout:range:lookUpTable:qType:biasTerms:flags:fullyConnected:convolutionTranspose:preferredWeightsDataType:]
0x7ff827e556f4 /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution initializeWithDevice:weights:fullyConnected:convolutionTranspose:]
0x7ff827e55b14 /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution initWithDevice:weights:]
0x7ff832c03e95 Espresso!Espresso::MPSEngine::mps_convolution_kernel::recreate_kernel()
0x7ff832c02a28 Espresso!Espresso::MPSEngine::convolution_kernel_base<Espresso::generic_convolution_kernel>::set_biases(std::__1::shared_ptr<Espresso::blob<float, 1> >)
0x7ff832c05b59 Espresso!Espresso::MPSEngine::convolution_kernel_proxy::set_biases(std::__1::shared_ptr<Espresso::blob<float, 1> >)

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 126
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 0
|-[i] IOConnectCallMethod called from:
0x7ff82619421f IOAccelerator!IOAccelResourceCreate
0x7ff8261a43dc Metal!-[MTLIOAccelResource initWithDevice:remoteStorageResource:options:args:argsSize:]
0x7ff8261a41b5 Metal!-[MTLIOAccelResource initWithDevice:options:args:argsSize:]
0x7ff8261a3f87 Metal!-[MTLIOAccelBuffer initWithDevice:pointer:length:options:sysMemSize:vidMemSize:args:argsSize:deallocator:]
0x7ffa383e8d5b AMDMTLBronzeDriver!-[BronzeMtlBuffer initWithDevice:pointer:length:options:sysMemSize:vidMemSize:args:argsSize:deallocator:]
0x7ffa383e8b8b AMDMTLBronzeDriver!-[BronzeMtlBuffer initInternalWithDevice:pointer:length:options:deallocator:]
0x7ffa384dfa71 AMDMTLBronzeDriver!-[BronzeMtlDevice newBufferWithLength:options:]
0x7ff827dd5aba MPSNeuralNetwork!0x12eaba (0x7ff80a886aba)
0x7ff827ddb588 MPSNeuralNetwork!0x134588 (0x7ff80a88c588)
0x7ff827e54068 /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution PrepareAndLoadData:dataType:weightsLayout:weights:biases:quantizationType:ranges:lookUpTable:convertFloat32Weights:]
0x7ff827e5490a /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution initialize:convolutionDescriptor:kernelWeights:dataType:weightsLayout:range:lookUpTable:qType:biasTerms:flags:fullyConnected:convolutionTranspose:preferredWeightsDataType:]
0x7ff827e556f4 /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution initializeWithDevice:weights:fullyConnected:convolutionTranspose:]
0x7ff827e55b14 /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution initWithDevice:weights:]
0x7ff832c03e95 Espresso!Espresso::MPSEngine::mps_convolution_kernel::recreate_kernel()
0x7ff832c02a28 Espresso!Espresso::MPSEngine::convolution_kernel_base<Espresso::generic_convolution_kernel>::set_biases(std::__1::shared_ptr<Espresso::blob<float, 1> >)
0x7ff832c05b59 Espresso!Espresso::MPSEngine::convolution_kernel_proxy::set_biases(std::__1::shared_ptr<Espresso::blob<float, 1> >)

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 127
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 41575
|-[i] 2nd arg (selector): 1
|-[i] IOConnectCallMethod called from:
0x7ff826195035 IOAccelerator!IOAccelCommandQueueSubmitCommandBuffers
0x7ff8261bc2c4 Metal!-[MTLIOAccelCommandQueue submitCommandBuffers:count:]
0x7ffa384e788d AMDMTLBronzeDriver!-[BronzeMtlCmdQueue submitCommandBuffers:count:]
0x7ff8261bbf2d Metal!-[_MTLCommandQueue _submitAvailableCommandBuffers]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b5746 libdispatch.dylib!_dispatch_continuation_pop
0x7ff81d6c6a5a libdispatch.dylib!_dispatch_source_invoke
0x7ff81d6b8b85 libdispatch.dylib!_dispatch_lane_serial_drain
0x7ff81d6b97c8 libdispatch.dylib!_dispatch_lane_invoke
0x7ff81d6c37e1 libdispatch.dylib!_dispatch_workloop_worker_thread
0x7ff81d866074 libsystem_pthread.dylib!_pthread_wqthread
0x7ff81d864ffb libsystem_pthread.dylib!start_wqthread

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 128
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 0
|-[i] IOConnectCallMethod called from:
0x7ff82619421f IOAccelerator!IOAccelResourceCreate
0x7ff8261a43dc Metal!-[MTLIOAccelResource initWithDevice:remoteStorageResource:options:args:argsSize:]
0x7ff8261a41b5 Metal!-[MTLIOAccelResource initWithDevice:options:args:argsSize:]
0x7ff8261a3f87 Metal!-[MTLIOAccelBuffer initWithDevice:pointer:length:options:sysMemSize:vidMemSize:args:argsSize:deallocator:]
0x7ffa383e8d5b AMDMTLBronzeDriver!-[BronzeMtlBuffer initWithDevice:pointer:length:options:sysMemSize:vidMemSize:args:argsSize:deallocator:]
0x7ffa383e8b8b AMDMTLBronzeDriver!-[BronzeMtlBuffer initInternalWithDevice:pointer:length:options:deallocator:]
0x7ffa384dfa71 AMDMTLBronzeDriver!-[BronzeMtlDevice newBufferWithLength:options:]
0x7ff827dd57a4 MPSNeuralNetwork!0x12e7a4 (0x7ff80a8867a4)
0x7ff827ddb588 MPSNeuralNetwork!0x134588 (0x7ff80a88c588)
0x7ff827e54068 /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution PrepareAndLoadData:dataType:weightsLayout:weights:biases:quantizationType:ranges:lookUpTable:convertFloat32Weights:]
0x7ff827e5490a /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution initialize:convolutionDescriptor:kernelWeights:dataType:weightsLayout:range:lookUpTable:qType:biasTerms:flags:fullyConnected:convolutionTranspose:preferredWeightsDataType:]
0x7ff827e556f4 /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution initializeWithDevice:weights:fullyConnected:convolutionTranspose:]
0x7ff827e55b14 /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution initWithDevice:weights:]
0x7ff832c03e95 Espresso!Espresso::MPSEngine::mps_convolution_kernel::recreate_kernel()
0x7ff832c02a28 Espresso!Espresso::MPSEngine::convolution_kernel_base<Espresso::generic_convolution_kernel>::set_biases(std::__1::shared_ptr<Espresso::blob<float, 1> >)
0x7ff832c05b59 Espresso!Espresso::MPSEngine::convolution_kernel_proxy::set_biases(std::__1::shared_ptr<Espresso::blob<float, 1> >)

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 129
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 0
|-[i] IOConnectCallMethod called from:
0x7ff82619421f IOAccelerator!IOAccelResourceCreate
0x7ff8261a43dc Metal!-[MTLIOAccelResource initWithDevice:remoteStorageResource:options:args:argsSize:]
0x7ff8261a41b5 Metal!-[MTLIOAccelResource initWithDevice:options:args:argsSize:]
0x7ff8261a3f87 Metal!-[MTLIOAccelBuffer initWithDevice:pointer:length:options:sysMemSize:vidMemSize:args:argsSize:deallocator:]
0x7ffa383e8d5b AMDMTLBronzeDriver!-[BronzeMtlBuffer initWithDevice:pointer:length:options:sysMemSize:vidMemSize:args:argsSize:deallocator:]
0x7ffa383e8b8b AMDMTLBronzeDriver!-[BronzeMtlBuffer initInternalWithDevice:pointer:length:options:deallocator:]
0x7ffa384dfa71 AMDMTLBronzeDriver!-[BronzeMtlDevice newBufferWithLength:options:]
0x7ff827dd5aba MPSNeuralNetwork!0x12eaba (0x7ff80a886aba)
0x7ff827ddb588 MPSNeuralNetwork!0x134588 (0x7ff80a88c588)
0x7ff827e54068 /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution PrepareAndLoadData:dataType:weightsLayout:weights:biases:quantizationType:ranges:lookUpTable:convertFloat32Weights:]
0x7ff827e5490a /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution initialize:convolutionDescriptor:kernelWeights:dataType:weightsLayout:range:lookUpTable:qType:biasTerms:flags:fullyConnected:convolutionTranspose:preferredWeightsDataType:]
0x7ff827e556f4 /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution initializeWithDevice:weights:fullyConnected:convolutionTranspose:]
0x7ff827e55b14 /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution initWithDevice:weights:]
0x7ff832c03e95 Espresso!Espresso::MPSEngine::mps_convolution_kernel::recreate_kernel()
0x7ff832c02a28 Espresso!Espresso::MPSEngine::convolution_kernel_base<Espresso::generic_convolution_kernel>::set_biases(std::__1::shared_ptr<Espresso::blob<float, 1> >)
0x7ff832c05b59 Espresso!Espresso::MPSEngine::convolution_kernel_proxy::set_biases(std::__1::shared_ptr<Espresso::blob<float, 1> >)

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 130
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 41575
|-[i] 2nd arg (selector): 1
|-[i] IOConnectCallMethod called from:
0x7ff826195035 IOAccelerator!IOAccelCommandQueueSubmitCommandBuffers
0x7ff8261bc2c4 Metal!-[MTLIOAccelCommandQueue submitCommandBuffers:count:]
0x7ffa384e788d AMDMTLBronzeDriver!-[BronzeMtlCmdQueue submitCommandBuffers:count:]
0x7ff8261bbf2d Metal!-[_MTLCommandQueue _submitAvailableCommandBuffers]
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b5746 libdispatch.dylib!_dispatch_continuation_pop
0x7ff81d6c6a5a libdispatch.dylib!_dispatch_source_invoke
0x7ff81d6b8b85 libdispatch.dylib!_dispatch_lane_serial_drain
0x7ff81d6b97c8 libdispatch.dylib!_dispatch_lane_invoke
0x7ff81d6c37e1 libdispatch.dylib!_dispatch_workloop_worker_thread
0x7ff81d866074 libsystem_pthread.dylib!_pthread_wqthread
0x7ff81d864ffb libsystem_pthread.dylib!start_wqthread

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 131
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 0
|-[i] IOConnectCallMethod called from:
0x7ff82619421f IOAccelerator!IOAccelResourceCreate
0x7ff8261a43dc Metal!-[MTLIOAccelResource initWithDevice:remoteStorageResource:options:args:argsSize:]
0x7ff8261a41b5 Metal!-[MTLIOAccelResource initWithDevice:options:args:argsSize:]
0x7ff826260422 Metal!-[MTLIOAccelHeap initWithDevice:size:options:args:argsSize:desc:]
0x7ffa38448f06 AMDMTLBronzeDriver!-[BronzeMtlHeap initInternalWithDevice:withDescriptor:]
0x7ff832af93cd Espresso!Espresso::MPSEngine::blob_container::resize(Espresso::layer_shape const&, std::__1::shared_ptr<Espresso::abstract_blob_container_options>)
0x7ff832b58d9e Espresso!Espresso::shape_network_recursive(Espresso::net*, Espresso::network_shape const&, int, bool)
0x7ff832be2f27 Espresso!Espresso::load_and_shape_network(std::__1::shared_ptr<Espresso::SerDes::generic_serdes_object> const&, std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > const&, std::__1::shared_ptr<Espresso::abstract_context> const&, Espresso::network_shape const&, Espresso::compute_path, std::__1::shared_ptr<Espresso::blob_storage_abstract> const&, std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > const&)
0x7ff832be50b2 Espresso!Espresso::load_network(std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > const&, std::__1::shared_ptr<Espresso::abstract_context> const&, Espresso::compute_path, bool)
0x7ff832a64a2a Espresso!EspressoLight::espresso_plan::add_network(char const*, espresso_storage_type_t, std::__1::shared_ptr<Espresso::net>)
0x7ff832a5b2f2 Espresso!EspressoLight::espresso_plan::add_network(char const*, espresso_storage_type_t)
0x7ff832a73ad0 Espresso!espresso_plan_add_network
0x7ff82540ba06 CoreML!-[MLNeuralNetworkEngine _setupContextAndPlanWithConfiguration:usingCPU:reshapeWithContainer:error:]
0x7ff82540b307 CoreML!-[MLNeuralNetworkEngine initWithContainer:configuration:error:]
0x7ff825422854 CoreML!+[MLNeuralNetworkEngine loadModelFromCompiledArchive:modelVersionInfo:compilerVersionInfo:configuration:error:]
0x7ff825482bbf CoreML!+[MLLoader loadModelFromArchive:configuration:loaderEvent:error:]

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 132
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 0
|-[i] IOConnectCallMethod called from:
0x7ff82619421f IOAccelerator!IOAccelResourceCreate
0x7ff8261a43dc Metal!-[MTLIOAccelResource initWithDevice:remoteStorageResource:options:args:argsSize:]
0x7ff8261a41b5 Metal!-[MTLIOAccelResource initWithDevice:options:args:argsSize:]
0x7ff8261a3f87 Metal!-[MTLIOAccelBuffer initWithDevice:pointer:length:options:sysMemSize:vidMemSize:args:argsSize:deallocator:]
0x7ffa383e8d5b AMDMTLBronzeDriver!-[BronzeMtlBuffer initWithDevice:pointer:length:options:sysMemSize:vidMemSize:args:argsSize:deallocator:]
0x7ffa383e8b8b AMDMTLBronzeDriver!-[BronzeMtlBuffer initInternalWithDevice:pointer:length:options:deallocator:]
0x7ffa3843d9d3 AMDMTLBronzeDriver!amdMtlAllocateBuffer(id<MTLDevice>, unsigned long, AMDBufferAllocFlags)
0x7ffa384e3fcc AMDMTLBronzeDriver!amdMtlBronzeDeviceSetGlobalSRD(BronzeMtlDevice*, unsigned int, unsigned int, unsigned int, void const*, bool)
0x7ffa3846904b AMDMTLBronzeDriver!amdMtlBronzeTextureCommonPostInit(BronzeMtlTexture*, unsigned long long)
0x7ffa3846a17d AMDMTLBronzeDriver!-[BronzeMtlTexture initWithHeap:resource:offset:length:device:descriptor:]
0x7ffa3844913b AMDMTLBronzeDriver!amdMtl_HeapNewTexture(BronzeMtlHeap*, MTLTextureDescriptor*, unsigned long long)
0x7ff832af95dc Espresso!Espresso::MPSEngine::blob_container::resize(Espresso::layer_shape const&, std::__1::shared_ptr<Espresso::abstract_blob_container_options>)
0x7ff832b58d9e Espresso!Espresso::shape_network_recursive(Espresso::net*, Espresso::network_shape const&, int, bool)
0x7ff832be2f27 Espresso!Espresso::load_and_shape_network(std::__1::shared_ptr<Espresso::SerDes::generic_serdes_object> const&, std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > const&, std::__1::shared_ptr<Espresso::abstract_context> const&, Espresso::network_shape const&, Espresso::compute_path, std::__1::shared_ptr<Espresso::blob_storage_abstract> const&, std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > const&)
0x7ff832be50b2 Espresso!Espresso::load_network(std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > const&, std::__1::shared_ptr<Espresso::abstract_context> const&, Espresso::compute_path, bool)
0x7ff832a64a2a Espresso!EspressoLight::espresso_plan::add_network(char const*, espresso_storage_type_t, std::__1::shared_ptr<Espresso::net>)

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 133
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 0
|-[i] IOConnectCallMethod called from:
0x7ff82619421f IOAccelerator!IOAccelResourceCreate
0x7ff8261a43dc Metal!-[MTLIOAccelResource initWithDevice:remoteStorageResource:options:args:argsSize:]
0x7ff8261a41b5 Metal!-[MTLIOAccelResource initWithDevice:options:args:argsSize:]
0x7ff826260422 Metal!-[MTLIOAccelHeap initWithDevice:size:options:args:argsSize:desc:]
0x7ffa38448f06 AMDMTLBronzeDriver!-[BronzeMtlHeap initInternalWithDevice:withDescriptor:]
0x7ff832af93cd Espresso!Espresso::MPSEngine::blob_container::resize(Espresso::layer_shape const&, std::__1::shared_ptr<Espresso::abstract_blob_container_options>)
0x7ff8329c5225 Espresso!Espresso::allocate_blobs(std::__1::unordered_map<std::__1::shared_ptr<Espresso::abstract_blob_container>, int, std::__1::hash<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::equal_to<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::allocator<std::__1::pair<std::__1::shared_ptr<Espresso::abstract_blob_container> const, int> > > const&, std::__1::unordered_map<std::__1::shared_ptr<Espresso::abstract_blob_container>, unsigned long, std::__1::hash<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::equal_to<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::allocator<std::__1::pair<std::__1::shared_ptr<Espresso::abstract_blob_container> const, unsigned long> > >&, std::__1::unordered_map<std::__1::shared_ptr<Espresso::abstract_blob_container>, Espresso::layer_shape, std::__1::hash<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::equal_to<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::allocator<std::__1::pair<std::__1::shared_ptr<Espresso::abstract_blob_container> const, Espresso::layer_shape> > >&, int)
0x7ff8329c06da Espresso!Espresso::reshape_networks_graph_coloring_raw_ptr_only_in_context(std::__1::shared_ptr<Espresso::abstract_context> const&, std::__1::vector<Espresso::net*, std::__1::allocator<Espresso::net*> > const&, int)
0x7ff8329bf22e Espresso!Espresso::reshape_networks_graph_coloring_raw_ptr(std::__1::vector<Espresso::net*, std::__1::allocator<Espresso::net*> >, int)
0x7ff8329bce42 Espresso!Espresso::pass_graph_coloring::run_on_network(Espresso::net&)
0x7ff832b59135 Espresso!Espresso::shape_network_recursive(Espresso::net*, Espresso::network_shape const&, int, bool)
0x7ff832be2f27 Espresso!Espresso::load_and_shape_network(std::__1::shared_ptr<Espresso::SerDes::generic_serdes_object> const&, std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > const&, std::__1::shared_ptr<Espresso::abstract_context> const&, Espresso::network_shape const&, Espresso::compute_path, std::__1::shared_ptr<Espresso::blob_storage_abstract> const&, std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > const&)
0x7ff832be50b2 Espresso!Espresso::load_network(std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > const&, std::__1::shared_ptr<Espresso::abstract_context> const&, Espresso::compute_path, bool)
0x7ff832a64a2a Espresso!EspressoLight::espresso_plan::add_network(char const*, espresso_storage_type_t, std::__1::shared_ptr<Espresso::net>)
0x7ff832a5b2f2 Espresso!EspressoLight::espresso_plan::add_network(char const*, espresso_storage_type_t)
0x7ff832a73ad0 Espresso!espresso_plan_add_network

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 134
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 1
|-[i] IOConnectCallMethod called from:
0x7ff826194943 IOAccelerator!ioAccelResourceFinalize
0x7ff81d9fd936 CoreFoundation!_CFRelease
0x7ff8261c1b02 Metal!-[MTLIOAccelResource dealloc]
0x7ff8261c1df1 Metal!-[MTLIOAccelTexture dealloc]
0x7ffa384657f0 AMDMTLBronzeDriver!-[BronzeMtlTexture dealloc]
0x7ff832af96a5 Espresso!Espresso::MPSEngine::blob_container::resize(Espresso::layer_shape const&, std::__1::shared_ptr<Espresso::abstract_blob_container_options>)
0x7ff8329c53ab Espresso!Espresso::allocate_blobs(std::__1::unordered_map<std::__1::shared_ptr<Espresso::abstract_blob_container>, int, std::__1::hash<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::equal_to<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::allocator<std::__1::pair<std::__1::shared_ptr<Espresso::abstract_blob_container> const, int> > > const&, std::__1::unordered_map<std::__1::shared_ptr<Espresso::abstract_blob_container>, unsigned long, std::__1::hash<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::equal_to<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::allocator<std::__1::pair<std::__1::shared_ptr<Espresso::abstract_blob_container> const, unsigned long> > >&, std::__1::unordered_map<std::__1::shared_ptr<Espresso::abstract_blob_container>, Espresso::layer_shape, std::__1::hash<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::equal_to<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::allocator<std::__1::pair<std::__1::shared_ptr<Espresso::abstract_blob_container> const, Espresso::layer_shape> > >&, int)
0x7ff8329c06da Espresso!Espresso::reshape_networks_graph_coloring_raw_ptr_only_in_context(std::__1::shared_ptr<Espresso::abstract_context> const&, std::__1::vector<Espresso::net*, std::__1::allocator<Espresso::net*> > const&, int)
0x7ff8329bf22e Espresso!Espresso::reshape_networks_graph_coloring_raw_ptr(std::__1::vector<Espresso::net*, std::__1::allocator<Espresso::net*> >, int)
0x7ff8329bce42 Espresso!Espresso::pass_graph_coloring::run_on_network(Espresso::net&)
0x7ff832b59135 Espresso!Espresso::shape_network_recursive(Espresso::net*, Espresso::network_shape const&, int, bool)
0x7ff832be2f27 Espresso!Espresso::load_and_shape_network(std::__1::shared_ptr<Espresso::SerDes::generic_serdes_object> const&, std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > const&, std::__1::shared_ptr<Espresso::abstract_context> const&, Espresso::network_shape const&, Espresso::compute_path, std::__1::shared_ptr<Espresso::blob_storage_abstract> const&, std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > const&)
0x7ff832be50b2 Espresso!Espresso::load_network(std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > const&, std::__1::shared_ptr<Espresso::abstract_context> const&, Espresso::compute_path, bool)
0x7ff832a64a2a Espresso!EspressoLight::espresso_plan::add_network(char const*, espresso_storage_type_t, std::__1::shared_ptr<Espresso::net>)
0x7ff832a5b2f2 Espresso!EspressoLight::espresso_plan::add_network(char const*, espresso_storage_type_t)
0x7ff832a73ad0 Espresso!espresso_plan_add_network

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 135
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 0
|-[i] IOConnectCallMethod called from:
0x7ff82619421f IOAccelerator!IOAccelResourceCreate
0x7ff8261a43dc Metal!-[MTLIOAccelResource initWithDevice:remoteStorageResource:options:args:argsSize:]
0x7ff8261a41b5 Metal!-[MTLIOAccelResource initWithDevice:options:args:argsSize:]
0x7ff826260422 Metal!-[MTLIOAccelHeap initWithDevice:size:options:args:argsSize:desc:]
0x7ffa38448f06 AMDMTLBronzeDriver!-[BronzeMtlHeap initInternalWithDevice:withDescriptor:]
0x7ff832af93cd Espresso!Espresso::MPSEngine::blob_container::resize(Espresso::layer_shape const&, std::__1::shared_ptr<Espresso::abstract_blob_container_options>)
0x7ff8329c5225 Espresso!Espresso::allocate_blobs(std::__1::unordered_map<std::__1::shared_ptr<Espresso::abstract_blob_container>, int, std::__1::hash<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::equal_to<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::allocator<std::__1::pair<std::__1::shared_ptr<Espresso::abstract_blob_container> const, int> > > const&, std::__1::unordered_map<std::__1::shared_ptr<Espresso::abstract_blob_container>, unsigned long, std::__1::hash<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::equal_to<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::allocator<std::__1::pair<std::__1::shared_ptr<Espresso::abstract_blob_container> const, unsigned long> > >&, std::__1::unordered_map<std::__1::shared_ptr<Espresso::abstract_blob_container>, Espresso::layer_shape, std::__1::hash<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::equal_to<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::allocator<std::__1::pair<std::__1::shared_ptr<Espresso::abstract_blob_container> const, Espresso::layer_shape> > >&, int)
0x7ff8329c06da Espresso!Espresso::reshape_networks_graph_coloring_raw_ptr_only_in_context(std::__1::shared_ptr<Espresso::abstract_context> const&, std::__1::vector<Espresso::net*, std::__1::allocator<Espresso::net*> > const&, int)
0x7ff8329bf22e Espresso!Espresso::reshape_networks_graph_coloring_raw_ptr(std::__1::vector<Espresso::net*, std::__1::allocator<Espresso::net*> >, int)
0x7ff8329bce42 Espresso!Espresso::pass_graph_coloring::run_on_network(Espresso::net&)
0x7ff832b59135 Espresso!Espresso::shape_network_recursive(Espresso::net*, Espresso::network_shape const&, int, bool)
0x7ff832be2f27 Espresso!Espresso::load_and_shape_network(std::__1::shared_ptr<Espresso::SerDes::generic_serdes_object> const&, std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > const&, std::__1::shared_ptr<Espresso::abstract_context> const&, Espresso::network_shape const&, Espresso::compute_path, std::__1::shared_ptr<Espresso::blob_storage_abstract> const&, std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > const&)
0x7ff832be50b2 Espresso!Espresso::load_network(std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > const&, std::__1::shared_ptr<Espresso::abstract_context> const&, Espresso::compute_path, bool)
0x7ff832a64a2a Espresso!EspressoLight::espresso_plan::add_network(char const*, espresso_storage_type_t, std::__1::shared_ptr<Espresso::net>)
0x7ff832a5b2f2 Espresso!EspressoLight::espresso_plan::add_network(char const*, espresso_storage_type_t)
0x7ff832a73ad0 Espresso!espresso_plan_add_network

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 136
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 0
|-[i] IOConnectCallMethod called from:
0x7ff82619421f IOAccelerator!IOAccelResourceCreate
0x7ff8261a43dc Metal!-[MTLIOAccelResource initWithDevice:remoteStorageResource:options:args:argsSize:]
0x7ff8261a41b5 Metal!-[MTLIOAccelResource initWithDevice:options:args:argsSize:]
0x7ff826260422 Metal!-[MTLIOAccelHeap initWithDevice:size:options:args:argsSize:desc:]
0x7ffa38448f06 AMDMTLBronzeDriver!-[BronzeMtlHeap initInternalWithDevice:withDescriptor:]
0x7ff832af93cd Espresso!Espresso::MPSEngine::blob_container::resize(Espresso::layer_shape const&, std::__1::shared_ptr<Espresso::abstract_blob_container_options>)
0x7ff8329c5225 Espresso!Espresso::allocate_blobs(std::__1::unordered_map<std::__1::shared_ptr<Espresso::abstract_blob_container>, int, std::__1::hash<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::equal_to<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::allocator<std::__1::pair<std::__1::shared_ptr<Espresso::abstract_blob_container> const, int> > > const&, std::__1::unordered_map<std::__1::shared_ptr<Espresso::abstract_blob_container>, unsigned long, std::__1::hash<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::equal_to<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::allocator<std::__1::pair<std::__1::shared_ptr<Espresso::abstract_blob_container> const, unsigned long> > >&, std::__1::unordered_map<std::__1::shared_ptr<Espresso::abstract_blob_container>, Espresso::layer_shape, std::__1::hash<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::equal_to<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::allocator<std::__1::pair<std::__1::shared_ptr<Espresso::abstract_blob_container> const, Espresso::layer_shape> > >&, int)
0x7ff8329c06da Espresso!Espresso::reshape_networks_graph_coloring_raw_ptr_only_in_context(std::__1::shared_ptr<Espresso::abstract_context> const&, std::__1::vector<Espresso::net*, std::__1::allocator<Espresso::net*> > const&, int)
0x7ff8329bf22e Espresso!Espresso::reshape_networks_graph_coloring_raw_ptr(std::__1::vector<Espresso::net*, std::__1::allocator<Espresso::net*> >, int)
0x7ff8329bce42 Espresso!Espresso::pass_graph_coloring::run_on_network(Espresso::net&)
0x7ff832b59135 Espresso!Espresso::shape_network_recursive(Espresso::net*, Espresso::network_shape const&, int, bool)
0x7ff832be2f27 Espresso!Espresso::load_and_shape_network(std::__1::shared_ptr<Espresso::SerDes::generic_serdes_object> const&, std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > const&, std::__1::shared_ptr<Espresso::abstract_context> const&, Espresso::network_shape const&, Espresso::compute_path, std::__1::shared_ptr<Espresso::blob_storage_abstract> const&, std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > const&)
0x7ff832be50b2 Espresso!Espresso::load_network(std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > const&, std::__1::shared_ptr<Espresso::abstract_context> const&, Espresso::compute_path, bool)
0x7ff832a64a2a Espresso!EspressoLight::espresso_plan::add_network(char const*, espresso_storage_type_t, std::__1::shared_ptr<Espresso::net>)
0x7ff832a5b2f2 Espresso!EspressoLight::espresso_plan::add_network(char const*, espresso_storage_type_t)
0x7ff832a73ad0 Espresso!espresso_plan_add_network

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 137
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 0
|-[i] IOConnectCallMethod called from:
0x7ff82619421f IOAccelerator!IOAccelResourceCreate
0x7ff8261a43dc Metal!-[MTLIOAccelResource initWithDevice:remoteStorageResource:options:args:argsSize:]
0x7ff8261a41b5 Metal!-[MTLIOAccelResource initWithDevice:options:args:argsSize:]
0x7ff826260422 Metal!-[MTLIOAccelHeap initWithDevice:size:options:args:argsSize:desc:]
0x7ffa38448f06 AMDMTLBronzeDriver!-[BronzeMtlHeap initInternalWithDevice:withDescriptor:]
0x7ff832af93cd Espresso!Espresso::MPSEngine::blob_container::resize(Espresso::layer_shape const&, std::__1::shared_ptr<Espresso::abstract_blob_container_options>)
0x7ff8329c5225 Espresso!Espresso::allocate_blobs(std::__1::unordered_map<std::__1::shared_ptr<Espresso::abstract_blob_container>, int, std::__1::hash<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::equal_to<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::allocator<std::__1::pair<std::__1::shared_ptr<Espresso::abstract_blob_container> const, int> > > const&, std::__1::unordered_map<std::__1::shared_ptr<Espresso::abstract_blob_container>, unsigned long, std::__1::hash<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::equal_to<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::allocator<std::__1::pair<std::__1::shared_ptr<Espresso::abstract_blob_container> const, unsigned long> > >&, std::__1::unordered_map<std::__1::shared_ptr<Espresso::abstract_blob_container>, Espresso::layer_shape, std::__1::hash<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::equal_to<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::allocator<std::__1::pair<std::__1::shared_ptr<Espresso::abstract_blob_container> const, Espresso::layer_shape> > >&, int)
0x7ff8329c06da Espresso!Espresso::reshape_networks_graph_coloring_raw_ptr_only_in_context(std::__1::shared_ptr<Espresso::abstract_context> const&, std::__1::vector<Espresso::net*, std::__1::allocator<Espresso::net*> > const&, int)
0x7ff8329bf22e Espresso!Espresso::reshape_networks_graph_coloring_raw_ptr(std::__1::vector<Espresso::net*, std::__1::allocator<Espresso::net*> >, int)
0x7ff8329bce42 Espresso!Espresso::pass_graph_coloring::run_on_network(Espresso::net&)
0x7ff832b59135 Espresso!Espresso::shape_network_recursive(Espresso::net*, Espresso::network_shape const&, int, bool)
0x7ff832be2f27 Espresso!Espresso::load_and_shape_network(std::__1::shared_ptr<Espresso::SerDes::generic_serdes_object> const&, std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > const&, std::__1::shared_ptr<Espresso::abstract_context> const&, Espresso::network_shape const&, Espresso::compute_path, std::__1::shared_ptr<Espresso::blob_storage_abstract> const&, std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > const&)
0x7ff832be50b2 Espresso!Espresso::load_network(std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > const&, std::__1::shared_ptr<Espresso::abstract_context> const&, Espresso::compute_path, bool)
0x7ff832a64a2a Espresso!EspressoLight::espresso_plan::add_network(char const*, espresso_storage_type_t, std::__1::shared_ptr<Espresso::net>)
0x7ff832a5b2f2 Espresso!EspressoLight::espresso_plan::add_network(char const*, espresso_storage_type_t)
0x7ff832a73ad0 Espresso!espresso_plan_add_network

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 138
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 0
|-[i] IOConnectCallMethod called from:
0x7ff82619421f IOAccelerator!IOAccelResourceCreate
0x7ff8261a43dc Metal!-[MTLIOAccelResource initWithDevice:remoteStorageResource:options:args:argsSize:]
0x7ff8261a41b5 Metal!-[MTLIOAccelResource initWithDevice:options:args:argsSize:]
0x7ff826260422 Metal!-[MTLIOAccelHeap initWithDevice:size:options:args:argsSize:desc:]
0x7ffa38448f06 AMDMTLBronzeDriver!-[BronzeMtlHeap initInternalWithDevice:withDescriptor:]
0x7ff832af93cd Espresso!Espresso::MPSEngine::blob_container::resize(Espresso::layer_shape const&, std::__1::shared_ptr<Espresso::abstract_blob_container_options>)
0x7ff8329c5225 Espresso!Espresso::allocate_blobs(std::__1::unordered_map<std::__1::shared_ptr<Espresso::abstract_blob_container>, int, std::__1::hash<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::equal_to<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::allocator<std::__1::pair<std::__1::shared_ptr<Espresso::abstract_blob_container> const, int> > > const&, std::__1::unordered_map<std::__1::shared_ptr<Espresso::abstract_blob_container>, unsigned long, std::__1::hash<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::equal_to<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::allocator<std::__1::pair<std::__1::shared_ptr<Espresso::abstract_blob_container> const, unsigned long> > >&, std::__1::unordered_map<std::__1::shared_ptr<Espresso::abstract_blob_container>, Espresso::layer_shape, std::__1::hash<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::equal_to<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::allocator<std::__1::pair<std::__1::shared_ptr<Espresso::abstract_blob_container> const, Espresso::layer_shape> > >&, int)
0x7ff8329c06da Espresso!Espresso::reshape_networks_graph_coloring_raw_ptr_only_in_context(std::__1::shared_ptr<Espresso::abstract_context> const&, std::__1::vector<Espresso::net*, std::__1::allocator<Espresso::net*> > const&, int)
0x7ff8329bf22e Espresso!Espresso::reshape_networks_graph_coloring_raw_ptr(std::__1::vector<Espresso::net*, std::__1::allocator<Espresso::net*> >, int)
0x7ff8329bce42 Espresso!Espresso::pass_graph_coloring::run_on_network(Espresso::net&)
0x7ff832b59135 Espresso!Espresso::shape_network_recursive(Espresso::net*, Espresso::network_shape const&, int, bool)
0x7ff832be2f27 Espresso!Espresso::load_and_shape_network(std::__1::shared_ptr<Espresso::SerDes::generic_serdes_object> const&, std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > const&, std::__1::shared_ptr<Espresso::abstract_context> const&, Espresso::network_shape const&, Espresso::compute_path, std::__1::shared_ptr<Espresso::blob_storage_abstract> const&, std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > const&)
0x7ff832be50b2 Espresso!Espresso::load_network(std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > const&, std::__1::shared_ptr<Espresso::abstract_context> const&, Espresso::compute_path, bool)
0x7ff832a64a2a Espresso!EspressoLight::espresso_plan::add_network(char const*, espresso_storage_type_t, std::__1::shared_ptr<Espresso::net>)
0x7ff832a5b2f2 Espresso!EspressoLight::espresso_plan::add_network(char const*, espresso_storage_type_t)
0x7ff832a73ad0 Espresso!espresso_plan_add_network

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 139
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 0
|-[i] IOConnectCallMethod called from:
0x7ff82619421f IOAccelerator!IOAccelResourceCreate
0x7ff8261a43dc Metal!-[MTLIOAccelResource initWithDevice:remoteStorageResource:options:args:argsSize:]
0x7ff8261a41b5 Metal!-[MTLIOAccelResource initWithDevice:options:args:argsSize:]
0x7ff826260422 Metal!-[MTLIOAccelHeap initWithDevice:size:options:args:argsSize:desc:]
0x7ffa38448f06 AMDMTLBronzeDriver!-[BronzeMtlHeap initInternalWithDevice:withDescriptor:]
0x7ff832af93cd Espresso!Espresso::MPSEngine::blob_container::resize(Espresso::layer_shape const&, std::__1::shared_ptr<Espresso::abstract_blob_container_options>)
0x7ff8329c5225 Espresso!Espresso::allocate_blobs(std::__1::unordered_map<std::__1::shared_ptr<Espresso::abstract_blob_container>, int, std::__1::hash<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::equal_to<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::allocator<std::__1::pair<std::__1::shared_ptr<Espresso::abstract_blob_container> const, int> > > const&, std::__1::unordered_map<std::__1::shared_ptr<Espresso::abstract_blob_container>, unsigned long, std::__1::hash<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::equal_to<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::allocator<std::__1::pair<std::__1::shared_ptr<Espresso::abstract_blob_container> const, unsigned long> > >&, std::__1::unordered_map<std::__1::shared_ptr<Espresso::abstract_blob_container>, Espresso::layer_shape, std::__1::hash<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::equal_to<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::allocator<std::__1::pair<std::__1::shared_ptr<Espresso::abstract_blob_container> const, Espresso::layer_shape> > >&, int)
0x7ff8329c06da Espresso!Espresso::reshape_networks_graph_coloring_raw_ptr_only_in_context(std::__1::shared_ptr<Espresso::abstract_context> const&, std::__1::vector<Espresso::net*, std::__1::allocator<Espresso::net*> > const&, int)
0x7ff8329bf22e Espresso!Espresso::reshape_networks_graph_coloring_raw_ptr(std::__1::vector<Espresso::net*, std::__1::allocator<Espresso::net*> >, int)
0x7ff8329bce42 Espresso!Espresso::pass_graph_coloring::run_on_network(Espresso::net&)
0x7ff832b59135 Espresso!Espresso::shape_network_recursive(Espresso::net*, Espresso::network_shape const&, int, bool)
0x7ff832be2f27 Espresso!Espresso::load_and_shape_network(std::__1::shared_ptr<Espresso::SerDes::generic_serdes_object> const&, std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > const&, std::__1::shared_ptr<Espresso::abstract_context> const&, Espresso::network_shape const&, Espresso::compute_path, std::__1::shared_ptr<Espresso::blob_storage_abstract> const&, std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > const&)
0x7ff832be50b2 Espresso!Espresso::load_network(std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > const&, std::__1::shared_ptr<Espresso::abstract_context> const&, Espresso::compute_path, bool)
0x7ff832a64a2a Espresso!EspressoLight::espresso_plan::add_network(char const*, espresso_storage_type_t, std::__1::shared_ptr<Espresso::net>)
0x7ff832a5b2f2 Espresso!EspressoLight::espresso_plan::add_network(char const*, espresso_storage_type_t)
0x7ff832a73ad0 Espresso!espresso_plan_add_network

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 140
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 0
|-[i] IOConnectCallMethod called from:
0x7ff82619421f IOAccelerator!IOAccelResourceCreate
0x7ff8261a43dc Metal!-[MTLIOAccelResource initWithDevice:remoteStorageResource:options:args:argsSize:]
0x7ff8261a41b5 Metal!-[MTLIOAccelResource initWithDevice:options:args:argsSize:]
0x7ff826260422 Metal!-[MTLIOAccelHeap initWithDevice:size:options:args:argsSize:desc:]
0x7ffa38448f06 AMDMTLBronzeDriver!-[BronzeMtlHeap initInternalWithDevice:withDescriptor:]
0x7ff832af93cd Espresso!Espresso::MPSEngine::blob_container::resize(Espresso::layer_shape const&, std::__1::shared_ptr<Espresso::abstract_blob_container_options>)
0x7ff8329c5225 Espresso!Espresso::allocate_blobs(std::__1::unordered_map<std::__1::shared_ptr<Espresso::abstract_blob_container>, int, std::__1::hash<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::equal_to<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::allocator<std::__1::pair<std::__1::shared_ptr<Espresso::abstract_blob_container> const, int> > > const&, std::__1::unordered_map<std::__1::shared_ptr<Espresso::abstract_blob_container>, unsigned long, std::__1::hash<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::equal_to<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::allocator<std::__1::pair<std::__1::shared_ptr<Espresso::abstract_blob_container> const, unsigned long> > >&, std::__1::unordered_map<std::__1::shared_ptr<Espresso::abstract_blob_container>, Espresso::layer_shape, std::__1::hash<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::equal_to<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::allocator<std::__1::pair<std::__1::shared_ptr<Espresso::abstract_blob_container> const, Espresso::layer_shape> > >&, int)
0x7ff8329c06da Espresso!Espresso::reshape_networks_graph_coloring_raw_ptr_only_in_context(std::__1::shared_ptr<Espresso::abstract_context> const&, std::__1::vector<Espresso::net*, std::__1::allocator<Espresso::net*> > const&, int)
0x7ff8329bf22e Espresso!Espresso::reshape_networks_graph_coloring_raw_ptr(std::__1::vector<Espresso::net*, std::__1::allocator<Espresso::net*> >, int)
0x7ff8329bce42 Espresso!Espresso::pass_graph_coloring::run_on_network(Espresso::net&)
0x7ff832b59135 Espresso!Espresso::shape_network_recursive(Espresso::net*, Espresso::network_shape const&, int, bool)
0x7ff832be2f27 Espresso!Espresso::load_and_shape_network(std::__1::shared_ptr<Espresso::SerDes::generic_serdes_object> const&, std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > const&, std::__1::shared_ptr<Espresso::abstract_context> const&, Espresso::network_shape const&, Espresso::compute_path, std::__1::shared_ptr<Espresso::blob_storage_abstract> const&, std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > const&)
0x7ff832be50b2 Espresso!Espresso::load_network(std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > const&, std::__1::shared_ptr<Espresso::abstract_context> const&, Espresso::compute_path, bool)
0x7ff832a64a2a Espresso!EspressoLight::espresso_plan::add_network(char const*, espresso_storage_type_t, std::__1::shared_ptr<Espresso::net>)
0x7ff832a5b2f2 Espresso!EspressoLight::espresso_plan::add_network(char const*, espresso_storage_type_t)
0x7ff832a73ad0 Espresso!espresso_plan_add_network

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 141
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 0
|-[i] IOConnectCallMethod called from:
0x7ff82619421f IOAccelerator!IOAccelResourceCreate
0x7ff8261a43dc Metal!-[MTLIOAccelResource initWithDevice:remoteStorageResource:options:args:argsSize:]
0x7ff8261a41b5 Metal!-[MTLIOAccelResource initWithDevice:options:args:argsSize:]
0x7ff826260422 Metal!-[MTLIOAccelHeap initWithDevice:size:options:args:argsSize:desc:]
0x7ffa38448f06 AMDMTLBronzeDriver!-[BronzeMtlHeap initInternalWithDevice:withDescriptor:]
0x7ff832af93cd Espresso!Espresso::MPSEngine::blob_container::resize(Espresso::layer_shape const&, std::__1::shared_ptr<Espresso::abstract_blob_container_options>)
0x7ff8329c5225 Espresso!Espresso::allocate_blobs(std::__1::unordered_map<std::__1::shared_ptr<Espresso::abstract_blob_container>, int, std::__1::hash<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::equal_to<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::allocator<std::__1::pair<std::__1::shared_ptr<Espresso::abstract_blob_container> const, int> > > const&, std::__1::unordered_map<std::__1::shared_ptr<Espresso::abstract_blob_container>, unsigned long, std::__1::hash<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::equal_to<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::allocator<std::__1::pair<std::__1::shared_ptr<Espresso::abstract_blob_container> const, unsigned long> > >&, std::__1::unordered_map<std::__1::shared_ptr<Espresso::abstract_blob_container>, Espresso::layer_shape, std::__1::hash<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::equal_to<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::allocator<std::__1::pair<std::__1::shared_ptr<Espresso::abstract_blob_container> const, Espresso::layer_shape> > >&, int)
0x7ff8329c06da Espresso!Espresso::reshape_networks_graph_coloring_raw_ptr_only_in_context(std::__1::shared_ptr<Espresso::abstract_context> const&, std::__1::vector<Espresso::net*, std::__1::allocator<Espresso::net*> > const&, int)
0x7ff8329bf22e Espresso!Espresso::reshape_networks_graph_coloring_raw_ptr(std::__1::vector<Espresso::net*, std::__1::allocator<Espresso::net*> >, int)
0x7ff8329bce42 Espresso!Espresso::pass_graph_coloring::run_on_network(Espresso::net&)
0x7ff832b59135 Espresso!Espresso::shape_network_recursive(Espresso::net*, Espresso::network_shape const&, int, bool)
0x7ff832be2f27 Espresso!Espresso::load_and_shape_network(std::__1::shared_ptr<Espresso::SerDes::generic_serdes_object> const&, std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > const&, std::__1::shared_ptr<Espresso::abstract_context> const&, Espresso::network_shape const&, Espresso::compute_path, std::__1::shared_ptr<Espresso::blob_storage_abstract> const&, std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > const&)
0x7ff832be50b2 Espresso!Espresso::load_network(std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > const&, std::__1::shared_ptr<Espresso::abstract_context> const&, Espresso::compute_path, bool)
0x7ff832a64a2a Espresso!EspressoLight::espresso_plan::add_network(char const*, espresso_storage_type_t, std::__1::shared_ptr<Espresso::net>)
0x7ff832a5b2f2 Espresso!EspressoLight::espresso_plan::add_network(char const*, espresso_storage_type_t)
0x7ff832a73ad0 Espresso!espresso_plan_add_network

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 142
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 1
|-[i] IOConnectCallMethod called from:
0x7ff826194943 IOAccelerator!ioAccelResourceFinalize
0x7ff81d9fd936 CoreFoundation!_CFRelease
0x7ff8261c1b02 Metal!-[MTLIOAccelResource dealloc]
0x7ff8261c1df1 Metal!-[MTLIOAccelTexture dealloc]
0x7ffa384657f0 AMDMTLBronzeDriver!-[BronzeMtlTexture dealloc]
0x7ff833008bea Espresso!Espresso::MetalLowmemEngine::blob_container::~blob_container()
0x7ff8328e0817 Espresso!std::__1::shared_ptr<Espresso::abstract_blob_container>::~shared_ptr()
0x7ff832b57b86 Espresso!Espresso::shape_network_recursive(Espresso::net*, Espresso::network_shape const&, int, bool)
0x7ff832a5d692 Espresso!EspressoLight::espresso_plan::prepare()
0x7ff832a748d9 Espresso!espresso_plan_build_with_options
0x7ff832a7497c Espresso!espresso_plan_build
0x7ff82541d4db CoreML!-[MLNeuralNetworkEngine rebuildPlan:error:]
0x7ff82540c6e2 CoreML!-[MLNeuralNetworkEngine _setupContextAndPlanWithConfiguration:usingCPU:reshapeWithContainer:error:]
0x7ff82540b307 CoreML!-[MLNeuralNetworkEngine initWithContainer:configuration:error:]
0x7ff825422854 CoreML!+[MLNeuralNetworkEngine loadModelFromCompiledArchive:modelVersionInfo:compilerVersionInfo:configuration:error:]
0x7ff825482bbf CoreML!+[MLLoader loadModelFromArchive:configuration:loaderEvent:error:]

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 143
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 1
|-[i] IOConnectCallMethod called from:
0x7ff826194943 IOAccelerator!ioAccelResourceFinalize
0x7ff81d9fd936 CoreFoundation!_CFRelease
0x7ff8261c1b02 Metal!-[MTLIOAccelResource dealloc]
0x7ff8261c1df1 Metal!-[MTLIOAccelTexture dealloc]
0x7ffa384657f0 AMDMTLBronzeDriver!-[BronzeMtlTexture dealloc]
0x7ff833008bea Espresso!Espresso::MetalLowmemEngine::blob_container::~blob_container()
0x7ff8328e0817 Espresso!std::__1::shared_ptr<Espresso::abstract_blob_container>::~shared_ptr()
0x7ff832b57b86 Espresso!Espresso::shape_network_recursive(Espresso::net*, Espresso::network_shape const&, int, bool)
0x7ff832a5d692 Espresso!EspressoLight::espresso_plan::prepare()
0x7ff832a748d9 Espresso!espresso_plan_build_with_options
0x7ff832a7497c Espresso!espresso_plan_build
0x7ff82541d4db CoreML!-[MLNeuralNetworkEngine rebuildPlan:error:]
0x7ff82540c6e2 CoreML!-[MLNeuralNetworkEngine _setupContextAndPlanWithConfiguration:usingCPU:reshapeWithContainer:error:]
0x7ff82540b307 CoreML!-[MLNeuralNetworkEngine initWithContainer:configuration:error:]
0x7ff825422854 CoreML!+[MLNeuralNetworkEngine loadModelFromCompiledArchive:modelVersionInfo:compilerVersionInfo:configuration:error:]
0x7ff825482bbf CoreML!+[MLLoader loadModelFromArchive:configuration:loaderEvent:error:]

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 144
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 1
|-[i] IOConnectCallMethod called from:
0x7ff826194943 IOAccelerator!ioAccelResourceFinalize
0x7ff81d9fd936 CoreFoundation!_CFRelease
0x7ff8261c1b02 Metal!-[MTLIOAccelResource dealloc]
0x7ff8261c1df1 Metal!-[MTLIOAccelTexture dealloc]
0x7ffa384657f0 AMDMTLBronzeDriver!-[BronzeMtlTexture dealloc]
0x7ff833008bea Espresso!Espresso::MetalLowmemEngine::blob_container::~blob_container()
0x7ff8328e0817 Espresso!std::__1::shared_ptr<Espresso::abstract_blob_container>::~shared_ptr()
0x7ff832b6275a Espresso!Espresso::abstract_blob_container_options_aliasing::~abstract_blob_container_options_aliasing()
0x7ff832901ef1 Espresso!std::__1::shared_ptr<Espresso::abstract_blob_container_options>::~shared_ptr()
0x7ff832901fae Espresso!Espresso::abstract_blob_container::~abstract_blob_container()
0x7ff8328e0817 Espresso!std::__1::shared_ptr<Espresso::abstract_blob_container>::~shared_ptr()
0x7ff832b57b86 Espresso!Espresso::shape_network_recursive(Espresso::net*, Espresso::network_shape const&, int, bool)
0x7ff832a5d692 Espresso!EspressoLight::espresso_plan::prepare()
0x7ff832a748d9 Espresso!espresso_plan_build_with_options
0x7ff832a7497c Espresso!espresso_plan_build
0x7ff82541d4db CoreML!-[MLNeuralNetworkEngine rebuildPlan:error:]

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 145
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 1
|-[i] IOConnectCallMethod called from:
0x7ff826194943 IOAccelerator!ioAccelResourceFinalize
0x7ff81d9fd936 CoreFoundation!_CFRelease
0x7ff8261c1b02 Metal!-[MTLIOAccelResource dealloc]
0x7ff8261c1df1 Metal!-[MTLIOAccelTexture dealloc]
0x7ffa384657f0 AMDMTLBronzeDriver!-[BronzeMtlTexture dealloc]
0x7ff833008bea Espresso!Espresso::MetalLowmemEngine::blob_container::~blob_container()
0x7ff8328e0817 Espresso!std::__1::shared_ptr<Espresso::abstract_blob_container>::~shared_ptr()
0x7ff832b57b5d Espresso!Espresso::shape_network_recursive(Espresso::net*, Espresso::network_shape const&, int, bool)
0x7ff832a5d692 Espresso!EspressoLight::espresso_plan::prepare()
0x7ff832a748d9 Espresso!espresso_plan_build_with_options
0x7ff832a7497c Espresso!espresso_plan_build
0x7ff82541d4db CoreML!-[MLNeuralNetworkEngine rebuildPlan:error:]
0x7ff82540c6e2 CoreML!-[MLNeuralNetworkEngine _setupContextAndPlanWithConfiguration:usingCPU:reshapeWithContainer:error:]
0x7ff82540b307 CoreML!-[MLNeuralNetworkEngine initWithContainer:configuration:error:]
0x7ff825422854 CoreML!+[MLNeuralNetworkEngine loadModelFromCompiledArchive:modelVersionInfo:compilerVersionInfo:configuration:error:]
0x7ff825482bbf CoreML!+[MLLoader loadModelFromArchive:configuration:loaderEvent:error:]

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 146
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 1
|-[i] IOConnectCallMethod called from:
0x7ff826194943 IOAccelerator!ioAccelResourceFinalize
0x7ff81d9fd936 CoreFoundation!_CFRelease
0x7ff8261c1b02 Metal!-[MTLIOAccelResource dealloc]
0x7ff8261c1df1 Metal!-[MTLIOAccelTexture dealloc]
0x7ffa384657f0 AMDMTLBronzeDriver!-[BronzeMtlTexture dealloc]
0x7ff833008bea Espresso!Espresso::MetalLowmemEngine::blob_container::~blob_container()
0x7ff8328e0817 Espresso!std::__1::shared_ptr<Espresso::abstract_blob_container>::~shared_ptr()
0x7ff832b57b86 Espresso!Espresso::shape_network_recursive(Espresso::net*, Espresso::network_shape const&, int, bool)
0x7ff832a5d692 Espresso!EspressoLight::espresso_plan::prepare()
0x7ff832a748d9 Espresso!espresso_plan_build_with_options
0x7ff832a7497c Espresso!espresso_plan_build
0x7ff82541d4db CoreML!-[MLNeuralNetworkEngine rebuildPlan:error:]
0x7ff82540c6e2 CoreML!-[MLNeuralNetworkEngine _setupContextAndPlanWithConfiguration:usingCPU:reshapeWithContainer:error:]
0x7ff82540b307 CoreML!-[MLNeuralNetworkEngine initWithContainer:configuration:error:]
0x7ff825422854 CoreML!+[MLNeuralNetworkEngine loadModelFromCompiledArchive:modelVersionInfo:compilerVersionInfo:configuration:error:]
0x7ff825482bbf CoreML!+[MLLoader loadModelFromArchive:configuration:loaderEvent:error:]

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 147
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 1
|-[i] IOConnectCallMethod called from:
0x7ff826194943 IOAccelerator!ioAccelResourceFinalize
0x7ff81d9fd936 CoreFoundation!_CFRelease
0x7ff8261c1b02 Metal!-[MTLIOAccelResource dealloc]
0x7ff8261c1df1 Metal!-[MTLIOAccelTexture dealloc]
0x7ffa384657f0 AMDMTLBronzeDriver!-[BronzeMtlTexture dealloc]
0x7ff833008bea Espresso!Espresso::MetalLowmemEngine::blob_container::~blob_container()
0x7ff8328e0817 Espresso!std::__1::shared_ptr<Espresso::abstract_blob_container>::~shared_ptr()
0x7ff832b57b86 Espresso!Espresso::shape_network_recursive(Espresso::net*, Espresso::network_shape const&, int, bool)
0x7ff832a5d692 Espresso!EspressoLight::espresso_plan::prepare()
0x7ff832a748d9 Espresso!espresso_plan_build_with_options
0x7ff832a7497c Espresso!espresso_plan_build
0x7ff82541d4db CoreML!-[MLNeuralNetworkEngine rebuildPlan:error:]
0x7ff82540c6e2 CoreML!-[MLNeuralNetworkEngine _setupContextAndPlanWithConfiguration:usingCPU:reshapeWithContainer:error:]
0x7ff82540b307 CoreML!-[MLNeuralNetworkEngine initWithContainer:configuration:error:]
0x7ff825422854 CoreML!+[MLNeuralNetworkEngine loadModelFromCompiledArchive:modelVersionInfo:compilerVersionInfo:configuration:error:]
0x7ff825482bbf CoreML!+[MLLoader loadModelFromArchive:configuration:loaderEvent:error:]

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 148
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 1
|-[i] IOConnectCallMethod called from:
0x7ff826194943 IOAccelerator!ioAccelResourceFinalize
0x7ff81d9fd936 CoreFoundation!_CFRelease
0x7ff8261c1b02 Metal!-[MTLIOAccelResource dealloc]
0x7ff8261c1df1 Metal!-[MTLIOAccelTexture dealloc]
0x7ffa384657f0 AMDMTLBronzeDriver!-[BronzeMtlTexture dealloc]
0x7ff833008bea Espresso!Espresso::MetalLowmemEngine::blob_container::~blob_container()
0x7ff8328e0817 Espresso!std::__1::shared_ptr<Espresso::abstract_blob_container>::~shared_ptr()
0x7ff832b6275a Espresso!Espresso::abstract_blob_container_options_aliasing::~abstract_blob_container_options_aliasing()
0x7ff832901ef1 Espresso!std::__1::shared_ptr<Espresso::abstract_blob_container_options>::~shared_ptr()
0x7ff832901fae Espresso!Espresso::abstract_blob_container::~abstract_blob_container()
0x7ff8328e0817 Espresso!std::__1::shared_ptr<Espresso::abstract_blob_container>::~shared_ptr()
0x7ff832b57b5d Espresso!Espresso::shape_network_recursive(Espresso::net*, Espresso::network_shape const&, int, bool)
0x7ff832a5d692 Espresso!EspressoLight::espresso_plan::prepare()
0x7ff832a748d9 Espresso!espresso_plan_build_with_options
0x7ff832a7497c Espresso!espresso_plan_build
0x7ff82541d4db CoreML!-[MLNeuralNetworkEngine rebuildPlan:error:]

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 149
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 1
|-[i] IOConnectCallMethod called from:
0x7ff826194943 IOAccelerator!ioAccelResourceFinalize
0x7ff81d9fd936 CoreFoundation!_CFRelease
0x7ff8261c1b02 Metal!-[MTLIOAccelResource dealloc]
0x7ff8261c1df1 Metal!-[MTLIOAccelTexture dealloc]
0x7ffa384657f0 AMDMTLBronzeDriver!-[BronzeMtlTexture dealloc]
0x7ff833008bea Espresso!Espresso::MetalLowmemEngine::blob_container::~blob_container()
0x7ff8328e0817 Espresso!std::__1::shared_ptr<Espresso::abstract_blob_container>::~shared_ptr()
0x7ff832b6275a Espresso!Espresso::abstract_blob_container_options_aliasing::~abstract_blob_container_options_aliasing()
0x7ff832901ef1 Espresso!std::__1::shared_ptr<Espresso::abstract_blob_container_options>::~shared_ptr()
0x7ff832901fae Espresso!Espresso::abstract_blob_container::~abstract_blob_container()
0x7ff8328e0817 Espresso!std::__1::shared_ptr<Espresso::abstract_blob_container>::~shared_ptr()
0x7ff832b57b86 Espresso!Espresso::shape_network_recursive(Espresso::net*, Espresso::network_shape const&, int, bool)
0x7ff832a5d692 Espresso!EspressoLight::espresso_plan::prepare()
0x7ff832a748d9 Espresso!espresso_plan_build_with_options
0x7ff832a7497c Espresso!espresso_plan_build
0x7ff82541d4db CoreML!-[MLNeuralNetworkEngine rebuildPlan:error:]

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 150
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 0
|-[i] IOConnectCallMethod called from:
0x7ff82619421f IOAccelerator!IOAccelResourceCreate
0x7ff8261a43dc Metal!-[MTLIOAccelResource initWithDevice:remoteStorageResource:options:args:argsSize:]
0x7ff8261a41b5 Metal!-[MTLIOAccelResource initWithDevice:options:args:argsSize:]
0x7ff826260422 Metal!-[MTLIOAccelHeap initWithDevice:size:options:args:argsSize:desc:]
0x7ffa38448f06 AMDMTLBronzeDriver!-[BronzeMtlHeap initInternalWithDevice:withDescriptor:]
0x7ff832af93cd Espresso!Espresso::MPSEngine::blob_container::resize(Espresso::layer_shape const&, std::__1::shared_ptr<Espresso::abstract_blob_container_options>)
0x7ff832b58d9e Espresso!Espresso::shape_network_recursive(Espresso::net*, Espresso::network_shape const&, int, bool)
0x7ff832a5d692 Espresso!EspressoLight::espresso_plan::prepare()
0x7ff832a748d9 Espresso!espresso_plan_build_with_options
0x7ff832a7497c Espresso!espresso_plan_build
0x7ff82541d4db CoreML!-[MLNeuralNetworkEngine rebuildPlan:error:]
0x7ff82540c6e2 CoreML!-[MLNeuralNetworkEngine _setupContextAndPlanWithConfiguration:usingCPU:reshapeWithContainer:error:]
0x7ff82540b307 CoreML!-[MLNeuralNetworkEngine initWithContainer:configuration:error:]
0x7ff825422854 CoreML!+[MLNeuralNetworkEngine loadModelFromCompiledArchive:modelVersionInfo:compilerVersionInfo:configuration:error:]
0x7ff825482bbf CoreML!+[MLLoader loadModelFromArchive:configuration:loaderEvent:error:]
0x7ff8254827da CoreML!+[MLLoader loadModelFromArchive:configuration:error:]

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 151
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 0
|-[i] IOConnectCallMethod called from:
0x7ff82619421f IOAccelerator!IOAccelResourceCreate
0x7ff8261a43dc Metal!-[MTLIOAccelResource initWithDevice:remoteStorageResource:options:args:argsSize:]
0x7ff8261a41b5 Metal!-[MTLIOAccelResource initWithDevice:options:args:argsSize:]
0x7ff826260422 Metal!-[MTLIOAccelHeap initWithDevice:size:options:args:argsSize:desc:]
0x7ffa38448f06 AMDMTLBronzeDriver!-[BronzeMtlHeap initInternalWithDevice:withDescriptor:]
0x7ff832af93cd Espresso!Espresso::MPSEngine::blob_container::resize(Espresso::layer_shape const&, std::__1::shared_ptr<Espresso::abstract_blob_container_options>)
0x7ff8329c5225 Espresso!Espresso::allocate_blobs(std::__1::unordered_map<std::__1::shared_ptr<Espresso::abstract_blob_container>, int, std::__1::hash<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::equal_to<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::allocator<std::__1::pair<std::__1::shared_ptr<Espresso::abstract_blob_container> const, int> > > const&, std::__1::unordered_map<std::__1::shared_ptr<Espresso::abstract_blob_container>, unsigned long, std::__1::hash<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::equal_to<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::allocator<std::__1::pair<std::__1::shared_ptr<Espresso::abstract_blob_container> const, unsigned long> > >&, std::__1::unordered_map<std::__1::shared_ptr<Espresso::abstract_blob_container>, Espresso::layer_shape, std::__1::hash<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::equal_to<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::allocator<std::__1::pair<std::__1::shared_ptr<Espresso::abstract_blob_container> const, Espresso::layer_shape> > >&, int)
0x7ff8329c06da Espresso!Espresso::reshape_networks_graph_coloring_raw_ptr_only_in_context(std::__1::shared_ptr<Espresso::abstract_context> const&, std::__1::vector<Espresso::net*, std::__1::allocator<Espresso::net*> > const&, int)
0x7ff8329bf22e Espresso!Espresso::reshape_networks_graph_coloring_raw_ptr(std::__1::vector<Espresso::net*, std::__1::allocator<Espresso::net*> >, int)
0x7ff8329bce42 Espresso!Espresso::pass_graph_coloring::run_on_network(Espresso::net&)
0x7ff832b59135 Espresso!Espresso::shape_network_recursive(Espresso::net*, Espresso::network_shape const&, int, bool)
0x7ff832a5d692 Espresso!EspressoLight::espresso_plan::prepare()
0x7ff832a748d9 Espresso!espresso_plan_build_with_options
0x7ff832a7497c Espresso!espresso_plan_build
0x7ff82541d4db CoreML!-[MLNeuralNetworkEngine rebuildPlan:error:]
0x7ff82540c6e2 CoreML!-[MLNeuralNetworkEngine _setupContextAndPlanWithConfiguration:usingCPU:reshapeWithContainer:error:]

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 152
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 1
|-[i] IOConnectCallMethod called from:
0x7ff826194943 IOAccelerator!ioAccelResourceFinalize
0x7ff81d9fd936 CoreFoundation!_CFRelease
0x7ff8261c1b02 Metal!-[MTLIOAccelResource dealloc]
0x7ff8261c1df1 Metal!-[MTLIOAccelTexture dealloc]
0x7ffa384657f0 AMDMTLBronzeDriver!-[BronzeMtlTexture dealloc]
0x7ff832af96a5 Espresso!Espresso::MPSEngine::blob_container::resize(Espresso::layer_shape const&, std::__1::shared_ptr<Espresso::abstract_blob_container_options>)
0x7ff8329c53ab Espresso!Espresso::allocate_blobs(std::__1::unordered_map<std::__1::shared_ptr<Espresso::abstract_blob_container>, int, std::__1::hash<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::equal_to<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::allocator<std::__1::pair<std::__1::shared_ptr<Espresso::abstract_blob_container> const, int> > > const&, std::__1::unordered_map<std::__1::shared_ptr<Espresso::abstract_blob_container>, unsigned long, std::__1::hash<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::equal_to<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::allocator<std::__1::pair<std::__1::shared_ptr<Espresso::abstract_blob_container> const, unsigned long> > >&, std::__1::unordered_map<std::__1::shared_ptr<Espresso::abstract_blob_container>, Espresso::layer_shape, std::__1::hash<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::equal_to<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::allocator<std::__1::pair<std::__1::shared_ptr<Espresso::abstract_blob_container> const, Espresso::layer_shape> > >&, int)
0x7ff8329c06da Espresso!Espresso::reshape_networks_graph_coloring_raw_ptr_only_in_context(std::__1::shared_ptr<Espresso::abstract_context> const&, std::__1::vector<Espresso::net*, std::__1::allocator<Espresso::net*> > const&, int)
0x7ff8329bf22e Espresso!Espresso::reshape_networks_graph_coloring_raw_ptr(std::__1::vector<Espresso::net*, std::__1::allocator<Espresso::net*> >, int)
0x7ff8329bce42 Espresso!Espresso::pass_graph_coloring::run_on_network(Espresso::net&)
0x7ff832b59135 Espresso!Espresso::shape_network_recursive(Espresso::net*, Espresso::network_shape const&, int, bool)
0x7ff832a5d692 Espresso!EspressoLight::espresso_plan::prepare()
0x7ff832a748d9 Espresso!espresso_plan_build_with_options
0x7ff832a7497c Espresso!espresso_plan_build
0x7ff82541d4db CoreML!-[MLNeuralNetworkEngine rebuildPlan:error:]
0x7ff82540c6e2 CoreML!-[MLNeuralNetworkEngine _setupContextAndPlanWithConfiguration:usingCPU:reshapeWithContainer:error:]

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 153
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 0
|-[i] IOConnectCallMethod called from:
0x7ff82619421f IOAccelerator!IOAccelResourceCreate
0x7ff8261a43dc Metal!-[MTLIOAccelResource initWithDevice:remoteStorageResource:options:args:argsSize:]
0x7ff8261a41b5 Metal!-[MTLIOAccelResource initWithDevice:options:args:argsSize:]
0x7ff826260422 Metal!-[MTLIOAccelHeap initWithDevice:size:options:args:argsSize:desc:]
0x7ffa38448f06 AMDMTLBronzeDriver!-[BronzeMtlHeap initInternalWithDevice:withDescriptor:]
0x7ff832af93cd Espresso!Espresso::MPSEngine::blob_container::resize(Espresso::layer_shape const&, std::__1::shared_ptr<Espresso::abstract_blob_container_options>)
0x7ff8329c5225 Espresso!Espresso::allocate_blobs(std::__1::unordered_map<std::__1::shared_ptr<Espresso::abstract_blob_container>, int, std::__1::hash<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::equal_to<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::allocator<std::__1::pair<std::__1::shared_ptr<Espresso::abstract_blob_container> const, int> > > const&, std::__1::unordered_map<std::__1::shared_ptr<Espresso::abstract_blob_container>, unsigned long, std::__1::hash<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::equal_to<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::allocator<std::__1::pair<std::__1::shared_ptr<Espresso::abstract_blob_container> const, unsigned long> > >&, std::__1::unordered_map<std::__1::shared_ptr<Espresso::abstract_blob_container>, Espresso::layer_shape, std::__1::hash<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::equal_to<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::allocator<std::__1::pair<std::__1::shared_ptr<Espresso::abstract_blob_container> const, Espresso::layer_shape> > >&, int)
0x7ff8329c06da Espresso!Espresso::reshape_networks_graph_coloring_raw_ptr_only_in_context(std::__1::shared_ptr<Espresso::abstract_context> const&, std::__1::vector<Espresso::net*, std::__1::allocator<Espresso::net*> > const&, int)
0x7ff8329bf22e Espresso!Espresso::reshape_networks_graph_coloring_raw_ptr(std::__1::vector<Espresso::net*, std::__1::allocator<Espresso::net*> >, int)
0x7ff8329bce42 Espresso!Espresso::pass_graph_coloring::run_on_network(Espresso::net&)
0x7ff832b59135 Espresso!Espresso::shape_network_recursive(Espresso::net*, Espresso::network_shape const&, int, bool)
0x7ff832a5d692 Espresso!EspressoLight::espresso_plan::prepare()
0x7ff832a748d9 Espresso!espresso_plan_build_with_options
0x7ff832a7497c Espresso!espresso_plan_build
0x7ff82541d4db CoreML!-[MLNeuralNetworkEngine rebuildPlan:error:]
0x7ff82540c6e2 CoreML!-[MLNeuralNetworkEngine _setupContextAndPlanWithConfiguration:usingCPU:reshapeWithContainer:error:]

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 154
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 0
|-[i] IOConnectCallMethod called from:
0x7ff82619421f IOAccelerator!IOAccelResourceCreate
0x7ff8261a43dc Metal!-[MTLIOAccelResource initWithDevice:remoteStorageResource:options:args:argsSize:]
0x7ff8261a41b5 Metal!-[MTLIOAccelResource initWithDevice:options:args:argsSize:]
0x7ff826260422 Metal!-[MTLIOAccelHeap initWithDevice:size:options:args:argsSize:desc:]
0x7ffa38448f06 AMDMTLBronzeDriver!-[BronzeMtlHeap initInternalWithDevice:withDescriptor:]
0x7ff832af93cd Espresso!Espresso::MPSEngine::blob_container::resize(Espresso::layer_shape const&, std::__1::shared_ptr<Espresso::abstract_blob_container_options>)
0x7ff8329c5225 Espresso!Espresso::allocate_blobs(std::__1::unordered_map<std::__1::shared_ptr<Espresso::abstract_blob_container>, int, std::__1::hash<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::equal_to<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::allocator<std::__1::pair<std::__1::shared_ptr<Espresso::abstract_blob_container> const, int> > > const&, std::__1::unordered_map<std::__1::shared_ptr<Espresso::abstract_blob_container>, unsigned long, std::__1::hash<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::equal_to<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::allocator<std::__1::pair<std::__1::shared_ptr<Espresso::abstract_blob_container> const, unsigned long> > >&, std::__1::unordered_map<std::__1::shared_ptr<Espresso::abstract_blob_container>, Espresso::layer_shape, std::__1::hash<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::equal_to<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::allocator<std::__1::pair<std::__1::shared_ptr<Espresso::abstract_blob_container> const, Espresso::layer_shape> > >&, int)
0x7ff8329c06da Espresso!Espresso::reshape_networks_graph_coloring_raw_ptr_only_in_context(std::__1::shared_ptr<Espresso::abstract_context> const&, std::__1::vector<Espresso::net*, std::__1::allocator<Espresso::net*> > const&, int)
0x7ff8329bf22e Espresso!Espresso::reshape_networks_graph_coloring_raw_ptr(std::__1::vector<Espresso::net*, std::__1::allocator<Espresso::net*> >, int)
0x7ff8329bce42 Espresso!Espresso::pass_graph_coloring::run_on_network(Espresso::net&)
0x7ff832b59135 Espresso!Espresso::shape_network_recursive(Espresso::net*, Espresso::network_shape const&, int, bool)
0x7ff832a5d692 Espresso!EspressoLight::espresso_plan::prepare()
0x7ff832a748d9 Espresso!espresso_plan_build_with_options
0x7ff832a7497c Espresso!espresso_plan_build
0x7ff82541d4db CoreML!-[MLNeuralNetworkEngine rebuildPlan:error:]
0x7ff82540c6e2 CoreML!-[MLNeuralNetworkEngine _setupContextAndPlanWithConfiguration:usingCPU:reshapeWithContainer:error:]

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 155
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 0
|-[i] IOConnectCallMethod called from:
0x7ff82619421f IOAccelerator!IOAccelResourceCreate
0x7ff8261a43dc Metal!-[MTLIOAccelResource initWithDevice:remoteStorageResource:options:args:argsSize:]
0x7ff8261a41b5 Metal!-[MTLIOAccelResource initWithDevice:options:args:argsSize:]
0x7ff826260422 Metal!-[MTLIOAccelHeap initWithDevice:size:options:args:argsSize:desc:]
0x7ffa38448f06 AMDMTLBronzeDriver!-[BronzeMtlHeap initInternalWithDevice:withDescriptor:]
0x7ff832af93cd Espresso!Espresso::MPSEngine::blob_container::resize(Espresso::layer_shape const&, std::__1::shared_ptr<Espresso::abstract_blob_container_options>)
0x7ff8329c5225 Espresso!Espresso::allocate_blobs(std::__1::unordered_map<std::__1::shared_ptr<Espresso::abstract_blob_container>, int, std::__1::hash<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::equal_to<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::allocator<std::__1::pair<std::__1::shared_ptr<Espresso::abstract_blob_container> const, int> > > const&, std::__1::unordered_map<std::__1::shared_ptr<Espresso::abstract_blob_container>, unsigned long, std::__1::hash<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::equal_to<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::allocator<std::__1::pair<std::__1::shared_ptr<Espresso::abstract_blob_container> const, unsigned long> > >&, std::__1::unordered_map<std::__1::shared_ptr<Espresso::abstract_blob_container>, Espresso::layer_shape, std::__1::hash<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::equal_to<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::allocator<std::__1::pair<std::__1::shared_ptr<Espresso::abstract_blob_container> const, Espresso::layer_shape> > >&, int)
0x7ff8329c06da Espresso!Espresso::reshape_networks_graph_coloring_raw_ptr_only_in_context(std::__1::shared_ptr<Espresso::abstract_context> const&, std::__1::vector<Espresso::net*, std::__1::allocator<Espresso::net*> > const&, int)
0x7ff8329bf22e Espresso!Espresso::reshape_networks_graph_coloring_raw_ptr(std::__1::vector<Espresso::net*, std::__1::allocator<Espresso::net*> >, int)
0x7ff8329bce42 Espresso!Espresso::pass_graph_coloring::run_on_network(Espresso::net&)
0x7ff832b59135 Espresso!Espresso::shape_network_recursive(Espresso::net*, Espresso::network_shape const&, int, bool)
0x7ff832a5d692 Espresso!EspressoLight::espresso_plan::prepare()
0x7ff832a748d9 Espresso!espresso_plan_build_with_options
0x7ff832a7497c Espresso!espresso_plan_build
0x7ff82541d4db CoreML!-[MLNeuralNetworkEngine rebuildPlan:error:]
0x7ff82540c6e2 CoreML!-[MLNeuralNetworkEngine _setupContextAndPlanWithConfiguration:usingCPU:reshapeWithContainer:error:]

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 156
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 0
|-[i] IOConnectCallMethod called from:
0x7ff82619421f IOAccelerator!IOAccelResourceCreate
0x7ff8261a43dc Metal!-[MTLIOAccelResource initWithDevice:remoteStorageResource:options:args:argsSize:]
0x7ff8261a41b5 Metal!-[MTLIOAccelResource initWithDevice:options:args:argsSize:]
0x7ff826260422 Metal!-[MTLIOAccelHeap initWithDevice:size:options:args:argsSize:desc:]
0x7ffa38448f06 AMDMTLBronzeDriver!-[BronzeMtlHeap initInternalWithDevice:withDescriptor:]
0x7ff832af93cd Espresso!Espresso::MPSEngine::blob_container::resize(Espresso::layer_shape const&, std::__1::shared_ptr<Espresso::abstract_blob_container_options>)
0x7ff8329c5225 Espresso!Espresso::allocate_blobs(std::__1::unordered_map<std::__1::shared_ptr<Espresso::abstract_blob_container>, int, std::__1::hash<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::equal_to<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::allocator<std::__1::pair<std::__1::shared_ptr<Espresso::abstract_blob_container> const, int> > > const&, std::__1::unordered_map<std::__1::shared_ptr<Espresso::abstract_blob_container>, unsigned long, std::__1::hash<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::equal_to<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::allocator<std::__1::pair<std::__1::shared_ptr<Espresso::abstract_blob_container> const, unsigned long> > >&, std::__1::unordered_map<std::__1::shared_ptr<Espresso::abstract_blob_container>, Espresso::layer_shape, std::__1::hash<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::equal_to<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::allocator<std::__1::pair<std::__1::shared_ptr<Espresso::abstract_blob_container> const, Espresso::layer_shape> > >&, int)
0x7ff8329c06da Espresso!Espresso::reshape_networks_graph_coloring_raw_ptr_only_in_context(std::__1::shared_ptr<Espresso::abstract_context> const&, std::__1::vector<Espresso::net*, std::__1::allocator<Espresso::net*> > const&, int)
0x7ff8329bf22e Espresso!Espresso::reshape_networks_graph_coloring_raw_ptr(std::__1::vector<Espresso::net*, std::__1::allocator<Espresso::net*> >, int)
0x7ff8329bce42 Espresso!Espresso::pass_graph_coloring::run_on_network(Espresso::net&)
0x7ff832b59135 Espresso!Espresso::shape_network_recursive(Espresso::net*, Espresso::network_shape const&, int, bool)
0x7ff832a5d692 Espresso!EspressoLight::espresso_plan::prepare()
0x7ff832a748d9 Espresso!espresso_plan_build_with_options
0x7ff832a7497c Espresso!espresso_plan_build
0x7ff82541d4db CoreML!-[MLNeuralNetworkEngine rebuildPlan:error:]
0x7ff82540c6e2 CoreML!-[MLNeuralNetworkEngine _setupContextAndPlanWithConfiguration:usingCPU:reshapeWithContainer:error:]

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 157
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 0
|-[i] IOConnectCallMethod called from:
0x7ff82619421f IOAccelerator!IOAccelResourceCreate
0x7ff8261a43dc Metal!-[MTLIOAccelResource initWithDevice:remoteStorageResource:options:args:argsSize:]
0x7ff8261a41b5 Metal!-[MTLIOAccelResource initWithDevice:options:args:argsSize:]
0x7ff826260422 Metal!-[MTLIOAccelHeap initWithDevice:size:options:args:argsSize:desc:]
0x7ffa38448f06 AMDMTLBronzeDriver!-[BronzeMtlHeap initInternalWithDevice:withDescriptor:]
0x7ff832af93cd Espresso!Espresso::MPSEngine::blob_container::resize(Espresso::layer_shape const&, std::__1::shared_ptr<Espresso::abstract_blob_container_options>)
0x7ff8329c5225 Espresso!Espresso::allocate_blobs(std::__1::unordered_map<std::__1::shared_ptr<Espresso::abstract_blob_container>, int, std::__1::hash<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::equal_to<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::allocator<std::__1::pair<std::__1::shared_ptr<Espresso::abstract_blob_container> const, int> > > const&, std::__1::unordered_map<std::__1::shared_ptr<Espresso::abstract_blob_container>, unsigned long, std::__1::hash<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::equal_to<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::allocator<std::__1::pair<std::__1::shared_ptr<Espresso::abstract_blob_container> const, unsigned long> > >&, std::__1::unordered_map<std::__1::shared_ptr<Espresso::abstract_blob_container>, Espresso::layer_shape, std::__1::hash<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::equal_to<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::allocator<std::__1::pair<std::__1::shared_ptr<Espresso::abstract_blob_container> const, Espresso::layer_shape> > >&, int)
0x7ff8329c06da Espresso!Espresso::reshape_networks_graph_coloring_raw_ptr_only_in_context(std::__1::shared_ptr<Espresso::abstract_context> const&, std::__1::vector<Espresso::net*, std::__1::allocator<Espresso::net*> > const&, int)
0x7ff8329bf22e Espresso!Espresso::reshape_networks_graph_coloring_raw_ptr(std::__1::vector<Espresso::net*, std::__1::allocator<Espresso::net*> >, int)
0x7ff8329bce42 Espresso!Espresso::pass_graph_coloring::run_on_network(Espresso::net&)
0x7ff832b59135 Espresso!Espresso::shape_network_recursive(Espresso::net*, Espresso::network_shape const&, int, bool)
0x7ff832a5d692 Espresso!EspressoLight::espresso_plan::prepare()
0x7ff832a748d9 Espresso!espresso_plan_build_with_options
0x7ff832a7497c Espresso!espresso_plan_build
0x7ff82541d4db CoreML!-[MLNeuralNetworkEngine rebuildPlan:error:]
0x7ff82540c6e2 CoreML!-[MLNeuralNetworkEngine _setupContextAndPlanWithConfiguration:usingCPU:reshapeWithContainer:error:]

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 158
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 0
|-[i] IOConnectCallMethod called from:
0x7ff82619421f IOAccelerator!IOAccelResourceCreate
0x7ff8261a43dc Metal!-[MTLIOAccelResource initWithDevice:remoteStorageResource:options:args:argsSize:]
0x7ff8261a41b5 Metal!-[MTLIOAccelResource initWithDevice:options:args:argsSize:]
0x7ff826260422 Metal!-[MTLIOAccelHeap initWithDevice:size:options:args:argsSize:desc:]
0x7ffa38448f06 AMDMTLBronzeDriver!-[BronzeMtlHeap initInternalWithDevice:withDescriptor:]
0x7ff832af93cd Espresso!Espresso::MPSEngine::blob_container::resize(Espresso::layer_shape const&, std::__1::shared_ptr<Espresso::abstract_blob_container_options>)
0x7ff8329c5225 Espresso!Espresso::allocate_blobs(std::__1::unordered_map<std::__1::shared_ptr<Espresso::abstract_blob_container>, int, std::__1::hash<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::equal_to<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::allocator<std::__1::pair<std::__1::shared_ptr<Espresso::abstract_blob_container> const, int> > > const&, std::__1::unordered_map<std::__1::shared_ptr<Espresso::abstract_blob_container>, unsigned long, std::__1::hash<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::equal_to<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::allocator<std::__1::pair<std::__1::shared_ptr<Espresso::abstract_blob_container> const, unsigned long> > >&, std::__1::unordered_map<std::__1::shared_ptr<Espresso::abstract_blob_container>, Espresso::layer_shape, std::__1::hash<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::equal_to<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::allocator<std::__1::pair<std::__1::shared_ptr<Espresso::abstract_blob_container> const, Espresso::layer_shape> > >&, int)
0x7ff8329c06da Espresso!Espresso::reshape_networks_graph_coloring_raw_ptr_only_in_context(std::__1::shared_ptr<Espresso::abstract_context> const&, std::__1::vector<Espresso::net*, std::__1::allocator<Espresso::net*> > const&, int)
0x7ff8329bf22e Espresso!Espresso::reshape_networks_graph_coloring_raw_ptr(std::__1::vector<Espresso::net*, std::__1::allocator<Espresso::net*> >, int)
0x7ff8329bce42 Espresso!Espresso::pass_graph_coloring::run_on_network(Espresso::net&)
0x7ff832b59135 Espresso!Espresso::shape_network_recursive(Espresso::net*, Espresso::network_shape const&, int, bool)
0x7ff832a5d692 Espresso!EspressoLight::espresso_plan::prepare()
0x7ff832a748d9 Espresso!espresso_plan_build_with_options
0x7ff832a7497c Espresso!espresso_plan_build
0x7ff82541d4db CoreML!-[MLNeuralNetworkEngine rebuildPlan:error:]
0x7ff82540c6e2 CoreML!-[MLNeuralNetworkEngine _setupContextAndPlanWithConfiguration:usingCPU:reshapeWithContainer:error:]

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 159
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 0
|-[i] IOConnectCallMethod called from:
0x7ff82619421f IOAccelerator!IOAccelResourceCreate
0x7ff8261a43dc Metal!-[MTLIOAccelResource initWithDevice:remoteStorageResource:options:args:argsSize:]
0x7ff8261a41b5 Metal!-[MTLIOAccelResource initWithDevice:options:args:argsSize:]
0x7ff826260422 Metal!-[MTLIOAccelHeap initWithDevice:size:options:args:argsSize:desc:]
0x7ffa38448f06 AMDMTLBronzeDriver!-[BronzeMtlHeap initInternalWithDevice:withDescriptor:]
0x7ff832af93cd Espresso!Espresso::MPSEngine::blob_container::resize(Espresso::layer_shape const&, std::__1::shared_ptr<Espresso::abstract_blob_container_options>)
0x7ff8329c5225 Espresso!Espresso::allocate_blobs(std::__1::unordered_map<std::__1::shared_ptr<Espresso::abstract_blob_container>, int, std::__1::hash<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::equal_to<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::allocator<std::__1::pair<std::__1::shared_ptr<Espresso::abstract_blob_container> const, int> > > const&, std::__1::unordered_map<std::__1::shared_ptr<Espresso::abstract_blob_container>, unsigned long, std::__1::hash<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::equal_to<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::allocator<std::__1::pair<std::__1::shared_ptr<Espresso::abstract_blob_container> const, unsigned long> > >&, std::__1::unordered_map<std::__1::shared_ptr<Espresso::abstract_blob_container>, Espresso::layer_shape, std::__1::hash<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::equal_to<std::__1::shared_ptr<Espresso::abstract_blob_container> >, std::__1::allocator<std::__1::pair<std::__1::shared_ptr<Espresso::abstract_blob_container> const, Espresso::layer_shape> > >&, int)
0x7ff8329c06da Espresso!Espresso::reshape_networks_graph_coloring_raw_ptr_only_in_context(std::__1::shared_ptr<Espresso::abstract_context> const&, std::__1::vector<Espresso::net*, std::__1::allocator<Espresso::net*> > const&, int)
0x7ff8329bf22e Espresso!Espresso::reshape_networks_graph_coloring_raw_ptr(std::__1::vector<Espresso::net*, std::__1::allocator<Espresso::net*> >, int)
0x7ff8329bce42 Espresso!Espresso::pass_graph_coloring::run_on_network(Espresso::net&)
0x7ff832b59135 Espresso!Espresso::shape_network_recursive(Espresso::net*, Espresso::network_shape const&, int, bool)
0x7ff832a5d692 Espresso!EspressoLight::espresso_plan::prepare()
0x7ff832a748d9 Espresso!espresso_plan_build_with_options
0x7ff832a7497c Espresso!espresso_plan_build
0x7ff82541d4db CoreML!-[MLNeuralNetworkEngine rebuildPlan:error:]
0x7ff82540c6e2 CoreML!-[MLNeuralNetworkEngine _setupContextAndPlanWithConfiguration:usingCPU:reshapeWithContainer:error:]

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 160
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 1
|-[i] IOConnectCallMethod called from:
0x7ff826194943 IOAccelerator!ioAccelResourceFinalize
0x7ff81d9fd936 CoreFoundation!_CFRelease
0x7ff8261c1b02 Metal!-[MTLIOAccelResource dealloc]
0x7ff8261c1df1 Metal!-[MTLIOAccelTexture dealloc]
0x7ffa384657f0 AMDMTLBronzeDriver!-[BronzeMtlTexture dealloc]
0x7ff833008bea Espresso!Espresso::MetalLowmemEngine::blob_container::~blob_container()
0x7ff8328e0817 Espresso!std::__1::shared_ptr<Espresso::abstract_blob_container>::~shared_ptr()
0x7ff8329278e4 Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::abstract_blob_container>, std::__1::allocator<std::__1::shared_ptr<Espresso::abstract_blob_container> > >::~__vector_base()
0x7ff83292787c Espresso!Espresso::layer::~layer()
0x7ff83291ef0d Espresso!std::__1::shared_ptr<Espresso::layer>::~shared_ptr()
0x7ff8329a2124 Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::layer>, std::__1::allocator<std::__1::shared_ptr<Espresso::layer> > >::~__vector_base()
0x7ff832aae9ee Espresso!Espresso::net::~net()
0x7ff8328e0f25 Espresso!std::__1::shared_ptr<Espresso::net>::~shared_ptr()
0x7ff8329c140e Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::net>, std::__1::allocator<std::__1::shared_ptr<Espresso::net> > >::~__vector_base()
0x7ff832a70e9f Espresso!std::__1::unique_ptr<EspressoLight::espresso_plan::priv_t, std::__1::default_delete<EspressoLight::espresso_plan::priv_t> >::reset(EspressoLight::espresso_plan::priv_t*)
0x7ff832a70d88 Espresso!EspressoLight::espresso_plan::~espresso_plan()

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 161
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 1
|-[i] IOConnectCallMethod called from:
0x7ff826194943 IOAccelerator!ioAccelResourceFinalize
0x7ff81d9fd936 CoreFoundation!_CFRelease
0x7ff8261c1b02 Metal!-[MTLIOAccelResource dealloc]
0x7ff8261c1df1 Metal!-[MTLIOAccelTexture dealloc]
0x7ffa384657f0 AMDMTLBronzeDriver!-[BronzeMtlTexture dealloc]
0x7ff833008bea Espresso!Espresso::MetalLowmemEngine::blob_container::~blob_container()
0x7ff8328e0817 Espresso!std::__1::shared_ptr<Espresso::abstract_blob_container>::~shared_ptr()
0x7ff832b6275a Espresso!Espresso::abstract_blob_container_options_aliasing::~abstract_blob_container_options_aliasing()
0x7ff832901ef1 Espresso!std::__1::shared_ptr<Espresso::abstract_blob_container_options>::~shared_ptr()
0x7ff832901fae Espresso!Espresso::abstract_blob_container::~abstract_blob_container()
0x7ff8328e0817 Espresso!std::__1::shared_ptr<Espresso::abstract_blob_container>::~shared_ptr()
0x7ff8329278e4 Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::abstract_blob_container>, std::__1::allocator<std::__1::shared_ptr<Espresso::abstract_blob_container> > >::~__vector_base()
0x7ff83292787c Espresso!Espresso::layer::~layer()
0x7ff83291ef0d Espresso!std::__1::shared_ptr<Espresso::layer>::~shared_ptr()
0x7ff8329a2124 Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::layer>, std::__1::allocator<std::__1::shared_ptr<Espresso::layer> > >::~__vector_base()
0x7ff832aae9ee Espresso!Espresso::net::~net()

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 162
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 1
|-[i] IOConnectCallMethod called from:
0x7ff826194943 IOAccelerator!ioAccelResourceFinalize
0x7ff81d9fd936 CoreFoundation!_CFRelease
0x7ff8261c1b02 Metal!-[MTLIOAccelResource dealloc]
0x7ff8261c1df1 Metal!-[MTLIOAccelTexture dealloc]
0x7ffa384657f0 AMDMTLBronzeDriver!-[BronzeMtlTexture dealloc]
0x7ff833008bea Espresso!Espresso::MetalLowmemEngine::blob_container::~blob_container()
0x7ff8328e0817 Espresso!std::__1::shared_ptr<Espresso::abstract_blob_container>::~shared_ptr()
0x7ff8329278e4 Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::abstract_blob_container>, std::__1::allocator<std::__1::shared_ptr<Espresso::abstract_blob_container> > >::~__vector_base()
0x7ff83292787c Espresso!Espresso::layer::~layer()
0x7ff83291ef0d Espresso!std::__1::shared_ptr<Espresso::layer>::~shared_ptr()
0x7ff8329a2124 Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::layer>, std::__1::allocator<std::__1::shared_ptr<Espresso::layer> > >::~__vector_base()
0x7ff832aae9ee Espresso!Espresso::net::~net()
0x7ff8328e0f25 Espresso!std::__1::shared_ptr<Espresso::net>::~shared_ptr()
0x7ff8329c140e Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::net>, std::__1::allocator<std::__1::shared_ptr<Espresso::net> > >::~__vector_base()
0x7ff832a70e9f Espresso!std::__1::unique_ptr<EspressoLight::espresso_plan::priv_t, std::__1::default_delete<EspressoLight::espresso_plan::priv_t> >::reset(EspressoLight::espresso_plan::priv_t*)
0x7ff832a70d88 Espresso!EspressoLight::espresso_plan::~espresso_plan()

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 163
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 1
|-[i] IOConnectCallMethod called from:
0x7ff826194943 IOAccelerator!ioAccelResourceFinalize
0x7ff81d9fd936 CoreFoundation!_CFRelease
0x7ff8261c1b02 Metal!-[MTLIOAccelResource dealloc]
0x7ff8261c1df1 Metal!-[MTLIOAccelTexture dealloc]
0x7ffa384657f0 AMDMTLBronzeDriver!-[BronzeMtlTexture dealloc]
0x7ff833008bea Espresso!Espresso::MetalLowmemEngine::blob_container::~blob_container()
0x7ff8328e0817 Espresso!std::__1::shared_ptr<Espresso::abstract_blob_container>::~shared_ptr()
0x7ff832b6275a Espresso!Espresso::abstract_blob_container_options_aliasing::~abstract_blob_container_options_aliasing()
0x7ff832901ef1 Espresso!std::__1::shared_ptr<Espresso::abstract_blob_container_options>::~shared_ptr()
0x7ff832901fae Espresso!Espresso::abstract_blob_container::~abstract_blob_container()
0x7ff8328e0817 Espresso!std::__1::shared_ptr<Espresso::abstract_blob_container>::~shared_ptr()
0x7ff8329278e4 Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::abstract_blob_container>, std::__1::allocator<std::__1::shared_ptr<Espresso::abstract_blob_container> > >::~__vector_base()
0x7ff83292787c Espresso!Espresso::layer::~layer()
0x7ff83291ef0d Espresso!std::__1::shared_ptr<Espresso::layer>::~shared_ptr()
0x7ff8329a2124 Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::layer>, std::__1::allocator<std::__1::shared_ptr<Espresso::layer> > >::~__vector_base()
0x7ff832aae9ee Espresso!Espresso::net::~net()

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 164
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 1
|-[i] IOConnectCallMethod called from:
0x7ff826194943 IOAccelerator!ioAccelResourceFinalize
0x7ff81d9fd936 CoreFoundation!_CFRelease
0x7ff8261c1b02 Metal!-[MTLIOAccelResource dealloc]
0x7ff8261c1df1 Metal!-[MTLIOAccelTexture dealloc]
0x7ffa384657f0 AMDMTLBronzeDriver!-[BronzeMtlTexture dealloc]
0x7ff833008bea Espresso!Espresso::MetalLowmemEngine::blob_container::~blob_container()
0x7ff8328e0817 Espresso!std::__1::shared_ptr<Espresso::abstract_blob_container>::~shared_ptr()
0x7ff832b6275a Espresso!Espresso::abstract_blob_container_options_aliasing::~abstract_blob_container_options_aliasing()
0x7ff832901ef1 Espresso!std::__1::shared_ptr<Espresso::abstract_blob_container_options>::~shared_ptr()
0x7ff832901fae Espresso!Espresso::abstract_blob_container::~abstract_blob_container()
0x7ff8328e0817 Espresso!std::__1::shared_ptr<Espresso::abstract_blob_container>::~shared_ptr()
0x7ff8329278e4 Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::abstract_blob_container>, std::__1::allocator<std::__1::shared_ptr<Espresso::abstract_blob_container> > >::~__vector_base()
0x7ff83292787c Espresso!Espresso::layer::~layer()
0x7ff83291ef0d Espresso!std::__1::shared_ptr<Espresso::layer>::~shared_ptr()
0x7ff8329a2124 Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::layer>, std::__1::allocator<std::__1::shared_ptr<Espresso::layer> > >::~__vector_base()
0x7ff832aae9ee Espresso!Espresso::net::~net()

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 165
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 1
|-[i] IOConnectCallMethod called from:
0x7ff826194943 IOAccelerator!ioAccelResourceFinalize
0x7ff81d9fd936 CoreFoundation!_CFRelease
0x7ff8261c1b02 Metal!-[MTLIOAccelResource dealloc]
0x7ff8261c19df Metal!-[MTLIOAccelBuffer dealloc]
0x7ffa383e8dba AMDMTLBronzeDriver!-[BronzeMtlBuffer dealloc]
0x7ff827e5669e /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution dealloc]
0x7ff832c01467 Espresso!Espresso::MPSEngine::mps_convolution_kernel::~mps_convolution_kernel()
0x7ff832fff38c Espresso!Espresso::MPSEngine::meta_texarray_kernel<Espresso::MPSEngine::convolution_kernel_proxy>::~meta_texarray_kernel()
0x7ff8328dfffd Espresso!std::__1::shared_ptr<Espresso::base_kernel>::~shared_ptr()
0x7ff83292788e Espresso!Espresso::layer::~layer()
0x7ff83291ef0d Espresso!std::__1::shared_ptr<Espresso::layer>::~shared_ptr()
0x7ff8329a2124 Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::layer>, std::__1::allocator<std::__1::shared_ptr<Espresso::layer> > >::~__vector_base()
0x7ff832aae9ee Espresso!Espresso::net::~net()
0x7ff8328e0f25 Espresso!std::__1::shared_ptr<Espresso::net>::~shared_ptr()
0x7ff8329c140e Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::net>, std::__1::allocator<std::__1::shared_ptr<Espresso::net> > >::~__vector_base()
0x7ff832a70e9f Espresso!std::__1::unique_ptr<EspressoLight::espresso_plan::priv_t, std::__1::default_delete<EspressoLight::espresso_plan::priv_t> >::reset(EspressoLight::espresso_plan::priv_t*)

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 166
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 1
|-[i] IOConnectCallMethod called from:
0x7ff826194943 IOAccelerator!ioAccelResourceFinalize
0x7ff81d9fd936 CoreFoundation!_CFRelease
0x7ff8261c1b02 Metal!-[MTLIOAccelResource dealloc]
0x7ff8261c19df Metal!-[MTLIOAccelBuffer dealloc]
0x7ffa383e8dba AMDMTLBronzeDriver!-[BronzeMtlBuffer dealloc]
0x7ff827e566ac /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution dealloc]
0x7ff832c01467 Espresso!Espresso::MPSEngine::mps_convolution_kernel::~mps_convolution_kernel()
0x7ff832fff38c Espresso!Espresso::MPSEngine::meta_texarray_kernel<Espresso::MPSEngine::convolution_kernel_proxy>::~meta_texarray_kernel()
0x7ff8328dfffd Espresso!std::__1::shared_ptr<Espresso::base_kernel>::~shared_ptr()
0x7ff83292788e Espresso!Espresso::layer::~layer()
0x7ff83291ef0d Espresso!std::__1::shared_ptr<Espresso::layer>::~shared_ptr()
0x7ff8329a2124 Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::layer>, std::__1::allocator<std::__1::shared_ptr<Espresso::layer> > >::~__vector_base()
0x7ff832aae9ee Espresso!Espresso::net::~net()
0x7ff8328e0f25 Espresso!std::__1::shared_ptr<Espresso::net>::~shared_ptr()
0x7ff8329c140e Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::net>, std::__1::allocator<std::__1::shared_ptr<Espresso::net> > >::~__vector_base()
0x7ff832a70e9f Espresso!std::__1::unique_ptr<EspressoLight::espresso_plan::priv_t, std::__1::default_delete<EspressoLight::espresso_plan::priv_t> >::reset(EspressoLight::espresso_plan::priv_t*)

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 167
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 1
|-[i] IOConnectCallMethod called from:
0x7ff826194943 IOAccelerator!ioAccelResourceFinalize
0x7ff81d9fd936 CoreFoundation!_CFRelease
0x7ff8261c1b02 Metal!-[MTLIOAccelResource dealloc]
0x7ff8261c19df Metal!-[MTLIOAccelBuffer dealloc]
0x7ffa383e8dba AMDMTLBronzeDriver!-[BronzeMtlBuffer dealloc]
0x7ff827e5669e /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution dealloc]
0x7ff832c01467 Espresso!Espresso::MPSEngine::mps_convolution_kernel::~mps_convolution_kernel()
0x7ff832fff38c Espresso!Espresso::MPSEngine::meta_texarray_kernel<Espresso::MPSEngine::convolution_kernel_proxy>::~meta_texarray_kernel()
0x7ff8328dfffd Espresso!std::__1::shared_ptr<Espresso::base_kernel>::~shared_ptr()
0x7ff83292788e Espresso!Espresso::layer::~layer()
0x7ff83291ef0d Espresso!std::__1::shared_ptr<Espresso::layer>::~shared_ptr()
0x7ff8329a2124 Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::layer>, std::__1::allocator<std::__1::shared_ptr<Espresso::layer> > >::~__vector_base()
0x7ff832aae9ee Espresso!Espresso::net::~net()
0x7ff8328e0f25 Espresso!std::__1::shared_ptr<Espresso::net>::~shared_ptr()
0x7ff8329c140e Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::net>, std::__1::allocator<std::__1::shared_ptr<Espresso::net> > >::~__vector_base()
0x7ff832a70e9f Espresso!std::__1::unique_ptr<EspressoLight::espresso_plan::priv_t, std::__1::default_delete<EspressoLight::espresso_plan::priv_t> >::reset(EspressoLight::espresso_plan::priv_t*)

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 168
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 1
|-[i] IOConnectCallMethod called from:
0x7ff826194943 IOAccelerator!ioAccelResourceFinalize
0x7ff81d9fd936 CoreFoundation!_CFRelease
0x7ff8261c1b02 Metal!-[MTLIOAccelResource dealloc]
0x7ff8261c19df Metal!-[MTLIOAccelBuffer dealloc]
0x7ffa383e8dba AMDMTLBronzeDriver!-[BronzeMtlBuffer dealloc]
0x7ff827e566ac /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution dealloc]
0x7ff832c01467 Espresso!Espresso::MPSEngine::mps_convolution_kernel::~mps_convolution_kernel()
0x7ff832fff38c Espresso!Espresso::MPSEngine::meta_texarray_kernel<Espresso::MPSEngine::convolution_kernel_proxy>::~meta_texarray_kernel()
0x7ff8328dfffd Espresso!std::__1::shared_ptr<Espresso::base_kernel>::~shared_ptr()
0x7ff83292788e Espresso!Espresso::layer::~layer()
0x7ff83291ef0d Espresso!std::__1::shared_ptr<Espresso::layer>::~shared_ptr()
0x7ff8329a2124 Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::layer>, std::__1::allocator<std::__1::shared_ptr<Espresso::layer> > >::~__vector_base()
0x7ff832aae9ee Espresso!Espresso::net::~net()
0x7ff8328e0f25 Espresso!std::__1::shared_ptr<Espresso::net>::~shared_ptr()
0x7ff8329c140e Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::net>, std::__1::allocator<std::__1::shared_ptr<Espresso::net> > >::~__vector_base()
0x7ff832a70e9f Espresso!std::__1::unique_ptr<EspressoLight::espresso_plan::priv_t, std::__1::default_delete<EspressoLight::espresso_plan::priv_t> >::reset(EspressoLight::espresso_plan::priv_t*)

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 169
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 1
|-[i] IOConnectCallMethod called from:
0x7ff826194943 IOAccelerator!ioAccelResourceFinalize
0x7ff81d9fd936 CoreFoundation!_CFRelease
0x7ff8261c1b02 Metal!-[MTLIOAccelResource dealloc]
0x7ff8261c19df Metal!-[MTLIOAccelBuffer dealloc]
0x7ffa383e8dba AMDMTLBronzeDriver!-[BronzeMtlBuffer dealloc]
0x7ff827e5669e /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution dealloc]
0x7ff832c01467 Espresso!Espresso::MPSEngine::mps_convolution_kernel::~mps_convolution_kernel()
0x7ff832fff38c Espresso!Espresso::MPSEngine::meta_texarray_kernel<Espresso::MPSEngine::convolution_kernel_proxy>::~meta_texarray_kernel()
0x7ff8328dfffd Espresso!std::__1::shared_ptr<Espresso::base_kernel>::~shared_ptr()
0x7ff83292788e Espresso!Espresso::layer::~layer()
0x7ff83291ef0d Espresso!std::__1::shared_ptr<Espresso::layer>::~shared_ptr()
0x7ff8329a2124 Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::layer>, std::__1::allocator<std::__1::shared_ptr<Espresso::layer> > >::~__vector_base()
0x7ff832aae9ee Espresso!Espresso::net::~net()
0x7ff8328e0f25 Espresso!std::__1::shared_ptr<Espresso::net>::~shared_ptr()
0x7ff8329c140e Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::net>, std::__1::allocator<std::__1::shared_ptr<Espresso::net> > >::~__vector_base()
0x7ff832a70e9f Espresso!std::__1::unique_ptr<EspressoLight::espresso_plan::priv_t, std::__1::default_delete<EspressoLight::espresso_plan::priv_t> >::reset(EspressoLight::espresso_plan::priv_t*)

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 170
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 1
|-[i] IOConnectCallMethod called from:
0x7ff826194943 IOAccelerator!ioAccelResourceFinalize
0x7ff81d9fd936 CoreFoundation!_CFRelease
0x7ff8261c1b02 Metal!-[MTLIOAccelResource dealloc]
0x7ff8261c19df Metal!-[MTLIOAccelBuffer dealloc]
0x7ffa383e8dba AMDMTLBronzeDriver!-[BronzeMtlBuffer dealloc]
0x7ff827e566ac /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution dealloc]
0x7ff832c01467 Espresso!Espresso::MPSEngine::mps_convolution_kernel::~mps_convolution_kernel()
0x7ff832fff38c Espresso!Espresso::MPSEngine::meta_texarray_kernel<Espresso::MPSEngine::convolution_kernel_proxy>::~meta_texarray_kernel()
0x7ff8328dfffd Espresso!std::__1::shared_ptr<Espresso::base_kernel>::~shared_ptr()
0x7ff83292788e Espresso!Espresso::layer::~layer()
0x7ff83291ef0d Espresso!std::__1::shared_ptr<Espresso::layer>::~shared_ptr()
0x7ff8329a2124 Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::layer>, std::__1::allocator<std::__1::shared_ptr<Espresso::layer> > >::~__vector_base()
0x7ff832aae9ee Espresso!Espresso::net::~net()
0x7ff8328e0f25 Espresso!std::__1::shared_ptr<Espresso::net>::~shared_ptr()
0x7ff8329c140e Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::net>, std::__1::allocator<std::__1::shared_ptr<Espresso::net> > >::~__vector_base()
0x7ff832a70e9f Espresso!std::__1::unique_ptr<EspressoLight::espresso_plan::priv_t, std::__1::default_delete<EspressoLight::espresso_plan::priv_t> >::reset(EspressoLight::espresso_plan::priv_t*)

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 171
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 1
|-[i] IOConnectCallMethod called from:
0x7ff826194943 IOAccelerator!ioAccelResourceFinalize
0x7ff81d9fd936 CoreFoundation!_CFRelease
0x7ff8261c1b02 Metal!-[MTLIOAccelResource dealloc]
0x7ff8261c19df Metal!-[MTLIOAccelBuffer dealloc]
0x7ffa383e8dba AMDMTLBronzeDriver!-[BronzeMtlBuffer dealloc]
0x7ff827e5669e /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution dealloc]
0x7ff832c01467 Espresso!Espresso::MPSEngine::mps_convolution_kernel::~mps_convolution_kernel()
0x7ff832fff38c Espresso!Espresso::MPSEngine::meta_texarray_kernel<Espresso::MPSEngine::convolution_kernel_proxy>::~meta_texarray_kernel()
0x7ff8328dfffd Espresso!std::__1::shared_ptr<Espresso::base_kernel>::~shared_ptr()
0x7ff83292788e Espresso!Espresso::layer::~layer()
0x7ff83291ef0d Espresso!std::__1::shared_ptr<Espresso::layer>::~shared_ptr()
0x7ff8329a2124 Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::layer>, std::__1::allocator<std::__1::shared_ptr<Espresso::layer> > >::~__vector_base()
0x7ff832aae9ee Espresso!Espresso::net::~net()
0x7ff8328e0f25 Espresso!std::__1::shared_ptr<Espresso::net>::~shared_ptr()
0x7ff8329c140e Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::net>, std::__1::allocator<std::__1::shared_ptr<Espresso::net> > >::~__vector_base()
0x7ff832a70e9f Espresso!std::__1::unique_ptr<EspressoLight::espresso_plan::priv_t, std::__1::default_delete<EspressoLight::espresso_plan::priv_t> >::reset(EspressoLight::espresso_plan::priv_t*)

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 172
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 1
|-[i] IOConnectCallMethod called from:
0x7ff826194943 IOAccelerator!ioAccelResourceFinalize
0x7ff81d9fd936 CoreFoundation!_CFRelease
0x7ff8261c1b02 Metal!-[MTLIOAccelResource dealloc]
0x7ff8261c19df Metal!-[MTLIOAccelBuffer dealloc]
0x7ffa383e8dba AMDMTLBronzeDriver!-[BronzeMtlBuffer dealloc]
0x7ff827e566ac /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution dealloc]
0x7ff832c01467 Espresso!Espresso::MPSEngine::mps_convolution_kernel::~mps_convolution_kernel()
0x7ff832fff38c Espresso!Espresso::MPSEngine::meta_texarray_kernel<Espresso::MPSEngine::convolution_kernel_proxy>::~meta_texarray_kernel()
0x7ff8328dfffd Espresso!std::__1::shared_ptr<Espresso::base_kernel>::~shared_ptr()
0x7ff83292788e Espresso!Espresso::layer::~layer()
0x7ff83291ef0d Espresso!std::__1::shared_ptr<Espresso::layer>::~shared_ptr()
0x7ff8329a2124 Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::layer>, std::__1::allocator<std::__1::shared_ptr<Espresso::layer> > >::~__vector_base()
0x7ff832aae9ee Espresso!Espresso::net::~net()
0x7ff8328e0f25 Espresso!std::__1::shared_ptr<Espresso::net>::~shared_ptr()
0x7ff8329c140e Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::net>, std::__1::allocator<std::__1::shared_ptr<Espresso::net> > >::~__vector_base()
0x7ff832a70e9f Espresso!std::__1::unique_ptr<EspressoLight::espresso_plan::priv_t, std::__1::default_delete<EspressoLight::espresso_plan::priv_t> >::reset(EspressoLight::espresso_plan::priv_t*)

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 173
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 1
|-[i] IOConnectCallMethod called from:
0x7ff826194943 IOAccelerator!ioAccelResourceFinalize
0x7ff81d9fd936 CoreFoundation!_CFRelease
0x7ff8261c1b02 Metal!-[MTLIOAccelResource dealloc]
0x7ff8261c19df Metal!-[MTLIOAccelBuffer dealloc]
0x7ffa383e8dba AMDMTLBronzeDriver!-[BronzeMtlBuffer dealloc]
0x7ff827e5669e /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution dealloc]
0x7ff832c01467 Espresso!Espresso::MPSEngine::mps_convolution_kernel::~mps_convolution_kernel()
0x7ff832fff38c Espresso!Espresso::MPSEngine::meta_texarray_kernel<Espresso::MPSEngine::convolution_kernel_proxy>::~meta_texarray_kernel()
0x7ff8328dfffd Espresso!std::__1::shared_ptr<Espresso::base_kernel>::~shared_ptr()
0x7ff83292788e Espresso!Espresso::layer::~layer()
0x7ff83291ef0d Espresso!std::__1::shared_ptr<Espresso::layer>::~shared_ptr()
0x7ff8329a2124 Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::layer>, std::__1::allocator<std::__1::shared_ptr<Espresso::layer> > >::~__vector_base()
0x7ff832aae9ee Espresso!Espresso::net::~net()
0x7ff8328e0f25 Espresso!std::__1::shared_ptr<Espresso::net>::~shared_ptr()
0x7ff8329c140e Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::net>, std::__1::allocator<std::__1::shared_ptr<Espresso::net> > >::~__vector_base()
0x7ff832a70e9f Espresso!std::__1::unique_ptr<EspressoLight::espresso_plan::priv_t, std::__1::default_delete<EspressoLight::espresso_plan::priv_t> >::reset(EspressoLight::espresso_plan::priv_t*)

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 174
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 1
|-[i] IOConnectCallMethod called from:
0x7ff826194943 IOAccelerator!ioAccelResourceFinalize
0x7ff81d9fd936 CoreFoundation!_CFRelease
0x7ff8261c1b02 Metal!-[MTLIOAccelResource dealloc]
0x7ff8261c19df Metal!-[MTLIOAccelBuffer dealloc]
0x7ffa383e8dba AMDMTLBronzeDriver!-[BronzeMtlBuffer dealloc]
0x7ff827e566ac /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution dealloc]
0x7ff832c01467 Espresso!Espresso::MPSEngine::mps_convolution_kernel::~mps_convolution_kernel()
0x7ff832fff38c Espresso!Espresso::MPSEngine::meta_texarray_kernel<Espresso::MPSEngine::convolution_kernel_proxy>::~meta_texarray_kernel()
0x7ff8328dfffd Espresso!std::__1::shared_ptr<Espresso::base_kernel>::~shared_ptr()
0x7ff83292788e Espresso!Espresso::layer::~layer()
0x7ff83291ef0d Espresso!std::__1::shared_ptr<Espresso::layer>::~shared_ptr()
0x7ff8329a2124 Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::layer>, std::__1::allocator<std::__1::shared_ptr<Espresso::layer> > >::~__vector_base()
0x7ff832aae9ee Espresso!Espresso::net::~net()
0x7ff8328e0f25 Espresso!std::__1::shared_ptr<Espresso::net>::~shared_ptr()
0x7ff8329c140e Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::net>, std::__1::allocator<std::__1::shared_ptr<Espresso::net> > >::~__vector_base()
0x7ff832a70e9f Espresso!std::__1::unique_ptr<EspressoLight::espresso_plan::priv_t, std::__1::default_delete<EspressoLight::espresso_plan::priv_t> >::reset(EspressoLight::espresso_plan::priv_t*)

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 175
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 1
|-[i] IOConnectCallMethod called from:
0x7ff826194943 IOAccelerator!ioAccelResourceFinalize
0x7ff81d9fd936 CoreFoundation!_CFRelease
0x7ff8261c1b02 Metal!-[MTLIOAccelResource dealloc]
0x7ff8261c19df Metal!-[MTLIOAccelBuffer dealloc]
0x7ffa383e8dba AMDMTLBronzeDriver!-[BronzeMtlBuffer dealloc]
0x7ff827e5669e /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution dealloc]
0x7ff832c01467 Espresso!Espresso::MPSEngine::mps_convolution_kernel::~mps_convolution_kernel()
0x7ff832fff38c Espresso!Espresso::MPSEngine::meta_texarray_kernel<Espresso::MPSEngine::convolution_kernel_proxy>::~meta_texarray_kernel()
0x7ff8328dfffd Espresso!std::__1::shared_ptr<Espresso::base_kernel>::~shared_ptr()
0x7ff83292788e Espresso!Espresso::layer::~layer()
0x7ff83291ef0d Espresso!std::__1::shared_ptr<Espresso::layer>::~shared_ptr()
0x7ff8329a2124 Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::layer>, std::__1::allocator<std::__1::shared_ptr<Espresso::layer> > >::~__vector_base()
0x7ff832aae9ee Espresso!Espresso::net::~net()
0x7ff8328e0f25 Espresso!std::__1::shared_ptr<Espresso::net>::~shared_ptr()
0x7ff8329c140e Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::net>, std::__1::allocator<std::__1::shared_ptr<Espresso::net> > >::~__vector_base()
0x7ff832a70e9f Espresso!std::__1::unique_ptr<EspressoLight::espresso_plan::priv_t, std::__1::default_delete<EspressoLight::espresso_plan::priv_t> >::reset(EspressoLight::espresso_plan::priv_t*)

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 176
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 1
|-[i] IOConnectCallMethod called from:
0x7ff826194943 IOAccelerator!ioAccelResourceFinalize
0x7ff81d9fd936 CoreFoundation!_CFRelease
0x7ff8261c1b02 Metal!-[MTLIOAccelResource dealloc]
0x7ff8261c19df Metal!-[MTLIOAccelBuffer dealloc]
0x7ffa383e8dba AMDMTLBronzeDriver!-[BronzeMtlBuffer dealloc]
0x7ff827e566ac /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution dealloc]
0x7ff832c01467 Espresso!Espresso::MPSEngine::mps_convolution_kernel::~mps_convolution_kernel()
0x7ff832fff38c Espresso!Espresso::MPSEngine::meta_texarray_kernel<Espresso::MPSEngine::convolution_kernel_proxy>::~meta_texarray_kernel()
0x7ff8328dfffd Espresso!std::__1::shared_ptr<Espresso::base_kernel>::~shared_ptr()
0x7ff83292788e Espresso!Espresso::layer::~layer()
0x7ff83291ef0d Espresso!std::__1::shared_ptr<Espresso::layer>::~shared_ptr()
0x7ff8329a2124 Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::layer>, std::__1::allocator<std::__1::shared_ptr<Espresso::layer> > >::~__vector_base()
0x7ff832aae9ee Espresso!Espresso::net::~net()
0x7ff8328e0f25 Espresso!std::__1::shared_ptr<Espresso::net>::~shared_ptr()
0x7ff8329c140e Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::net>, std::__1::allocator<std::__1::shared_ptr<Espresso::net> > >::~__vector_base()
0x7ff832a70e9f Espresso!std::__1::unique_ptr<EspressoLight::espresso_plan::priv_t, std::__1::default_delete<EspressoLight::espresso_plan::priv_t> >::reset(EspressoLight::espresso_plan::priv_t*)

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 177
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 1
|-[i] IOConnectCallMethod called from:
0x7ff826194943 IOAccelerator!ioAccelResourceFinalize
0x7ff81d9fd936 CoreFoundation!_CFRelease
0x7ff8261c1b02 Metal!-[MTLIOAccelResource dealloc]
0x7ff8261c19df Metal!-[MTLIOAccelBuffer dealloc]
0x7ffa383e8dba AMDMTLBronzeDriver!-[BronzeMtlBuffer dealloc]
0x7ff827e5669e /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution dealloc]
0x7ff832c01467 Espresso!Espresso::MPSEngine::mps_convolution_kernel::~mps_convolution_kernel()
0x7ff832fff38c Espresso!Espresso::MPSEngine::meta_texarray_kernel<Espresso::MPSEngine::convolution_kernel_proxy>::~meta_texarray_kernel()
0x7ff8328dfffd Espresso!std::__1::shared_ptr<Espresso::base_kernel>::~shared_ptr()
0x7ff83292788e Espresso!Espresso::layer::~layer()
0x7ff83291ef0d Espresso!std::__1::shared_ptr<Espresso::layer>::~shared_ptr()
0x7ff8329a2124 Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::layer>, std::__1::allocator<std::__1::shared_ptr<Espresso::layer> > >::~__vector_base()
0x7ff832aae9ee Espresso!Espresso::net::~net()
0x7ff8328e0f25 Espresso!std::__1::shared_ptr<Espresso::net>::~shared_ptr()
0x7ff8329c140e Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::net>, std::__1::allocator<std::__1::shared_ptr<Espresso::net> > >::~__vector_base()
0x7ff832a70e9f Espresso!std::__1::unique_ptr<EspressoLight::espresso_plan::priv_t, std::__1::default_delete<EspressoLight::espresso_plan::priv_t> >::reset(EspressoLight::espresso_plan::priv_t*)

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 178
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 1
|-[i] IOConnectCallMethod called from:
0x7ff826194943 IOAccelerator!ioAccelResourceFinalize
0x7ff81d9fd936 CoreFoundation!_CFRelease
0x7ff8261c1b02 Metal!-[MTLIOAccelResource dealloc]
0x7ff8261c19df Metal!-[MTLIOAccelBuffer dealloc]
0x7ffa383e8dba AMDMTLBronzeDriver!-[BronzeMtlBuffer dealloc]
0x7ff827e566ac /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution dealloc]
0x7ff832c01467 Espresso!Espresso::MPSEngine::mps_convolution_kernel::~mps_convolution_kernel()
0x7ff832fff38c Espresso!Espresso::MPSEngine::meta_texarray_kernel<Espresso::MPSEngine::convolution_kernel_proxy>::~meta_texarray_kernel()
0x7ff8328dfffd Espresso!std::__1::shared_ptr<Espresso::base_kernel>::~shared_ptr()
0x7ff83292788e Espresso!Espresso::layer::~layer()
0x7ff83291ef0d Espresso!std::__1::shared_ptr<Espresso::layer>::~shared_ptr()
0x7ff8329a2124 Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::layer>, std::__1::allocator<std::__1::shared_ptr<Espresso::layer> > >::~__vector_base()
0x7ff832aae9ee Espresso!Espresso::net::~net()
0x7ff8328e0f25 Espresso!std::__1::shared_ptr<Espresso::net>::~shared_ptr()
0x7ff8329c140e Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::net>, std::__1::allocator<std::__1::shared_ptr<Espresso::net> > >::~__vector_base()
0x7ff832a70e9f Espresso!std::__1::unique_ptr<EspressoLight::espresso_plan::priv_t, std::__1::default_delete<EspressoLight::espresso_plan::priv_t> >::reset(EspressoLight::espresso_plan::priv_t*)

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 179
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 1
|-[i] IOConnectCallMethod called from:
0x7ff826194943 IOAccelerator!ioAccelResourceFinalize
0x7ff81d9fd936 CoreFoundation!_CFRelease
0x7ff8261c1b02 Metal!-[MTLIOAccelResource dealloc]
0x7ff8261c19df Metal!-[MTLIOAccelBuffer dealloc]
0x7ffa383e8dba AMDMTLBronzeDriver!-[BronzeMtlBuffer dealloc]
0x7ff827e5669e /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution dealloc]
0x7ff832c01467 Espresso!Espresso::MPSEngine::mps_convolution_kernel::~mps_convolution_kernel()
0x7ff832fff38c Espresso!Espresso::MPSEngine::meta_texarray_kernel<Espresso::MPSEngine::convolution_kernel_proxy>::~meta_texarray_kernel()
0x7ff8328dfffd Espresso!std::__1::shared_ptr<Espresso::base_kernel>::~shared_ptr()
0x7ff83292788e Espresso!Espresso::layer::~layer()
0x7ff83291ef0d Espresso!std::__1::shared_ptr<Espresso::layer>::~shared_ptr()
0x7ff8329a2124 Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::layer>, std::__1::allocator<std::__1::shared_ptr<Espresso::layer> > >::~__vector_base()
0x7ff832aae9ee Espresso!Espresso::net::~net()
0x7ff8328e0f25 Espresso!std::__1::shared_ptr<Espresso::net>::~shared_ptr()
0x7ff8329c140e Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::net>, std::__1::allocator<std::__1::shared_ptr<Espresso::net> > >::~__vector_base()
0x7ff832a70e9f Espresso!std::__1::unique_ptr<EspressoLight::espresso_plan::priv_t, std::__1::default_delete<EspressoLight::espresso_plan::priv_t> >::reset(EspressoLight::espresso_plan::priv_t*)

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 180
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 1
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 1
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 42511
|-[i] 2nd arg (selector): 1
|-[i] IOConnectCallMethod called from:
0x7ff826194943 IOAccelerator!ioAccelResourceFinalize
0x7ff81d9fd936 CoreFoundation!_CFRelease
0x7ff8261c1b02 Metal!-[MTLIOAccelResource dealloc]
0x7ff8261c19df Metal!-[MTLIOAccelBuffer dealloc]
0x7ffa383e8dba AMDMTLBronzeDriver!-[BronzeMtlBuffer dealloc]
0x7ff827e566ac /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution dealloc]
0x7ff832c01467 Espresso!Espresso::MPSEngine::mps_convolution_kernel::~mps_convolution_kernel()
0x7ff832fff38c Espresso!Espresso::MPSEngine::meta_texarray_kernel<Espresso::MPSEngine::convolution_kernel_proxy>::~meta_texarray_kernel()
0x7ff8328dfffd Espresso!std::__1::shared_ptr<Espresso::base_kernel>::~shared_ptr()
0x7ff83292788e Espresso!Espresso::layer::~layer()
0x7ff83291ef0d Espresso!std::__1::shared_ptr<Espresso::layer>::~shared_ptr()
0x7ff8329a2124 Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::layer>, std::__1::allocator<std::__1::shared_ptr<Espresso::layer> > >::~__vector_base()
0x7ff832aae9ee Espresso!Espresso::net::~net()
0x7ff8328e0f25 Espresso!std::__1::shared_ptr<Espresso::net>::~shared_ptr()
0x7ff8329c140e Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::net>, std::__1::allocator<std::__1::shared_ptr<Espresso::net> > >::~__vector_base()
0x7ff832a70e9f Espresso!std::__1::unique_ptr<EspressoLight::espresso_plan::priv_t, std::__1::default_delete<EspressoLight::espresso_plan::priv_t> >::reset(EspressoLight::espresso_plan::priv_t*)

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 181
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 1
|-[i] IOConnectCallMethod called from:
0x7ff826194943 IOAccelerator!ioAccelResourceFinalize
0x7ff81d9fd936 CoreFoundation!_CFRelease
0x7ff8261c1b02 Metal!-[MTLIOAccelResource dealloc]
0x7ff8261c19df Metal!-[MTLIOAccelBuffer dealloc]
0x7ffa383e8dba AMDMTLBronzeDriver!-[BronzeMtlBuffer dealloc]
0x7ff827e5669e /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution dealloc]
0x7ff832c01467 Espresso!Espresso::MPSEngine::mps_convolution_kernel::~mps_convolution_kernel()
0x7ff832fff38c Espresso!Espresso::MPSEngine::meta_texarray_kernel<Espresso::MPSEngine::convolution_kernel_proxy>::~meta_texarray_kernel()
0x7ff8328dfffd Espresso!std::__1::shared_ptr<Espresso::base_kernel>::~shared_ptr()
0x7ff83292788e Espresso!Espresso::layer::~layer()
0x7ff83291ef0d Espresso!std::__1::shared_ptr<Espresso::layer>::~shared_ptr()
0x7ff8329a2124 Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::layer>, std::__1::allocator<std::__1::shared_ptr<Espresso::layer> > >::~__vector_base()
0x7ff832aae9ee Espresso!Espresso::net::~net()
0x7ff8328e0f25 Espresso!std::__1::shared_ptr<Espresso::net>::~shared_ptr()
0x7ff8329c140e Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::net>, std::__1::allocator<std::__1::shared_ptr<Espresso::net> > >::~__vector_base()
0x7ff832a70e9f Espresso!std::__1::unique_ptr<EspressoLight::espresso_plan::priv_t, std::__1::default_delete<EspressoLight::espresso_plan::priv_t> >::reset(EspressoLight::espresso_plan::priv_t*)

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 182
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 1
|-[i] IOConnectCallMethod called from:
0x7ff826194943 IOAccelerator!ioAccelResourceFinalize
0x7ff81d9fd936 CoreFoundation!_CFRelease
0x7ff8261c1b02 Metal!-[MTLIOAccelResource dealloc]
0x7ff826260502 Metal!-[MTLIOAccelHeap dealloc]
0x7ff826e587a5 MPSCore!0x277a5 (0x7ff8099097a5)
0x7ff826e58901 MPSCore!0x27901 (0x7ff809909901)
0x7ff826e58c20 MPSCore!0x27c20 (0x7ff809909c20)
0x7ff81d6b2cc9 libdispatch.dylib!_dispatch_client_callout
0x7ff81d6b5746 libdispatch.dylib!_dispatch_continuation_pop
0x7ff81d6c6a5a libdispatch.dylib!_dispatch_source_invoke
0x7ff81d6c23ba libdispatch.dylib!_dispatch_root_queue_drain
0x7ff81d6c2b5a libdispatch.dylib!_dispatch_worker_thread2
0x7ff81d86602e libsystem_pthread.dylib!_pthread_wqthread
0x7ff81d864ffb libsystem_pthread.dylib!start_wqthread

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 183
|-[i] IOConnectCallMethod called from:
0x7ff826194943 IOAccelerator!ioAccelResourceFinalize
0x7ff81d9fd936 CoreFoundation!_CFRelease
0x7ff8261c1b02 Metal!-[MTLIOAccelResource dealloc]
0x7ff8261c19df Metal!-[MTLIOAccelBuffer dealloc]
0x7ffa383e8dba AMDMTLBronzeDriver!-[BronzeMtlBuffer dealloc]
0x7ff827e566ac /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork!-[MPSCNNConvolution dealloc]
0x7ff832c01467 Espresso!Espresso::MPSEngine::mps_convolution_kernel::~mps_convolution_kernel()
0x7ff832fff38c Espresso!Espresso::MPSEngine::meta_texarray_kernel<Espresso::MPSEngine::convolution_kernel_proxy>::~meta_texarray_kernel()
0x7ff8328dfffd Espresso!std::__1::shared_ptr<Espresso::base_kernel>::~shared_ptr()
0x7ff83292788e Espresso!Espresso::layer::~layer()
0x7ff83291ef0d Espresso!std::__1::shared_ptr<Espresso::layer>::~shared_ptr()
0x7ff8329a2124 Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::layer>, std::__1::allocator<std::__1::shared_ptr<Espresso::layer> > >::~__vector_base()
0x7ff832aae9ee Espresso!Espresso::net::~net()
0x7ff8328e0f25 Espresso!std::__1::shared_ptr<Espresso::net>::~shared_ptr()
0x7ff8329c140e Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::net>, std::__1::allocator<std::__1::shared_ptr<Espresso::net> > >::~__vector_base()
0x7ff832a70e9f Espresso!std::__1::unique_ptr<EspressoLight::espresso_plan::priv_t, std::__1::default_delete<EspressoLight::espresso_plan::priv_t> >::reset(EspressoLight::espresso_plan::priv_t*)

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 184
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 1
|-[i] IOConnectCallMethod called from:
0x7ff826194943 IOAccelerator!ioAccelResourceFinalize
0x7ff81d9fd936 CoreFoundation!_CFRelease
0x7ff8261c1b02 Metal!-[MTLIOAccelResource dealloc]
0x7ff8261c1df1 Metal!-[MTLIOAccelTexture dealloc]
0x7ffa384657f0 AMDMTLBronzeDriver!-[BronzeMtlTexture dealloc]
0x7ff833008bea Espresso!Espresso::MetalLowmemEngine::blob_container::~blob_container()
0x7ff8328e0817 Espresso!std::__1::shared_ptr<Espresso::abstract_blob_container>::~shared_ptr()
0x7ff832b6275a Espresso!Espresso::abstract_blob_container_options_aliasing::~abstract_blob_container_options_aliasing()
0x7ff832901ef1 Espresso!std::__1::shared_ptr<Espresso::abstract_blob_container_options>::~shared_ptr()
0x7ff832901fae Espresso!Espresso::abstract_blob_container::~abstract_blob_container()
0x7ff8328e0817 Espresso!std::__1::shared_ptr<Espresso::abstract_blob_container>::~shared_ptr()
0x7ff8329278e4 Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::abstract_blob_container>, std::__1::allocator<std::__1::shared_ptr<Espresso::abstract_blob_container> > >::~__vector_base()
0x7ff83292787c Espresso!Espresso::layer::~layer()
0x7ff83291ef0d Espresso!std::__1::shared_ptr<Espresso::layer>::~shared_ptr()
0x7ff8329a2124 Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::layer>, std::__1::allocator<std::__1::shared_ptr<Espresso::layer> > >::~__vector_base()
0x7ff832aae9ee Espresso!Espresso::net::~net()

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 185
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 1
|-[i] IOConnectCallMethod called from:
0x7ff826194943 IOAccelerator!ioAccelResourceFinalize
0x7ff81d9fd936 CoreFoundation!_CFRelease
0x7ff8261c1b02 Metal!-[MTLIOAccelResource dealloc]
0x7ff8261c1df1 Metal!-[MTLIOAccelTexture dealloc]
0x7ffa384657f0 AMDMTLBronzeDriver!-[BronzeMtlTexture dealloc]
0x7ff833008bea Espresso!Espresso::MetalLowmemEngine::blob_container::~blob_container()
0x7ff8328e0817 Espresso!std::__1::shared_ptr<Espresso::abstract_blob_container>::~shared_ptr()
0x7ff832b6275a Espresso!Espresso::abstract_blob_container_options_aliasing::~abstract_blob_container_options_aliasing()
0x7ff832901ef1 Espresso!std::__1::shared_ptr<Espresso::abstract_blob_container_options>::~shared_ptr()
0x7ff832901fae Espresso!Espresso::abstract_blob_container::~abstract_blob_container()
0x7ff8328e0817 Espresso!std::__1::shared_ptr<Espresso::abstract_blob_container>::~shared_ptr()
0x7ff8329278e4 Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::abstract_blob_container>, std::__1::allocator<std::__1::shared_ptr<Espresso::abstract_blob_container> > >::~__vector_base()
0x7ff832927885 Espresso!Espresso::layer::~layer()
0x7ff83291ef0d Espresso!std::__1::shared_ptr<Espresso::layer>::~shared_ptr()
0x7ff8329a2124 Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::layer>, std::__1::allocator<std::__1::shared_ptr<Espresso::layer> > >::~__vector_base()
0x7ff832aae9ee Espresso!Espresso::net::~net()

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 186
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 1
|-[i] IOConnectCallMethod called from:
0x7ff826194943 IOAccelerator!ioAccelResourceFinalize
0x7ff81d9fd936 CoreFoundation!_CFRelease
0x7ff8261c1b02 Metal!-[MTLIOAccelResource dealloc]
0x7ff8261c1df1 Metal!-[MTLIOAccelTexture dealloc]
0x7ffa384657f0 AMDMTLBronzeDriver!-[BronzeMtlTexture dealloc]
0x7ff833008bea Espresso!Espresso::MetalLowmemEngine::blob_container::~blob_container()
0x7ff8328e0817 Espresso!std::__1::shared_ptr<Espresso::abstract_blob_container>::~shared_ptr()
0x7ff8329278e4 Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::abstract_blob_container>, std::__1::allocator<std::__1::shared_ptr<Espresso::abstract_blob_container> > >::~__vector_base()
0x7ff83292787c Espresso!Espresso::layer::~layer()
0x7ff83291ef0d Espresso!std::__1::shared_ptr<Espresso::layer>::~shared_ptr()
0x7ff8329a2124 Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::layer>, std::__1::allocator<std::__1::shared_ptr<Espresso::layer> > >::~__vector_base()
0x7ff832aae9ee Espresso!Espresso::net::~net()
0x7ff8328e0f25 Espresso!std::__1::shared_ptr<Espresso::net>::~shared_ptr()
0x7ff8329c140e Espresso!std::__1::__vector_base<std::__1::shared_ptr<Espresso::net>, std::__1::allocator<std::__1::shared_ptr<Espresso::net> > >::~__vector_base()
0x7ff832a70e9f Espresso!std::__1::unique_ptr<EspressoLight::espresso_plan::priv_t, std::__1::default_delete<EspressoLight::espresso_plan::priv_t> >::reset(EspressoLight::espresso_plan::priv_t*)
0x7ff832a70d88 Espresso!EspressoLight::espresso_plan::~espresso_plan()

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 187
[*] onEnter: IOConnectCallScalarMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 8
|-[i] IOConnectCallScalarMethod called from:
0x7ff826195388 IOAccelerator!IOAccelSharedDestroyDeviceShmem
0x7ff8261c220d Metal!-[MTLIOAccelDeviceShmem dealloc]
0x7ff826260a0c Metal!-[MTLIOAccelDeviceShmemPool purge]
0x7ff82621b36c Metal!-[MTLIOAccelDevice _purgeDevice]
0x7ff8261c69e8 Metal!-[_MTLCommandQueue dealloc]
0x7ff8261c68f6 Metal!-[MTLIOAccelCommandQueue dealloc]
0x7ffa384e7eeb AMDMTLBronzeDriver!-[BronzeMtlCmdQueue dealloc]
0x7ff832d5e15f Espresso!Espresso::context_metal::~context_metal()
0x7ff8328e0ea5 Espresso!std::__1::shared_ptr<Espresso::abstract_context>::~shared_ptr()
0x7ff832a67eaf Espresso!std::__1::unique_ptr<EspressoLight::espresso_context::priv_t, std::__1::default_delete<EspressoLight::espresso_context::priv_t> >::reset(EspressoLight::espresso_context::priv_t*)
0x7ff832a66269 Espresso!espresso_context_destroy
0x7ff825417fc0 CoreML!-[MLNeuralNetworkEngine _deallocContextAndPlan]
0x7ff825417fee CoreML!-[MLNeuralNetworkEngine dealloc]
0x7ff81d8d2938 CoreFoundation!__RELEASE_OBJECTS_IN_THE_ARRAY__
0x7ff81d8d287b CoreFoundation!-[__NSArrayM dealloc]
0x7ff81d70419f libobjc.A.dylib!AutoreleasePoolPage::releaseUntil(objc_object**)

[*] onLeave: IOConnectCallScalarMethod
|-[i] return value: 0x0
|-[i] g_index: 188
[*] onEnter: IOConnectCallScalarMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 8
|-[i] IOConnectCallScalarMethod called from:
0x7ff826195388 IOAccelerator!IOAccelSharedDestroyDeviceShmem
0x7ff8261c220d Metal!-[MTLIOAccelDeviceShmem dealloc]
0x7ff826260a0c Metal!-[MTLIOAccelDeviceShmemPool purge]
0x7ff82621b377 Metal!-[MTLIOAccelDevice _purgeDevice]
0x7ff8261c69e8 Metal!-[_MTLCommandQueue dealloc]
0x7ff8261c68f6 Metal!-[MTLIOAccelCommandQueue dealloc]
0x7ffa384e7eeb AMDMTLBronzeDriver!-[BronzeMtlCmdQueue dealloc]
0x7ff832d5e15f Espresso!Espresso::context_metal::~context_metal()
0x7ff8328e0ea5 Espresso!std::__1::shared_ptr<Espresso::abstract_context>::~shared_ptr()
0x7ff832a67eaf Espresso!std::__1::unique_ptr<EspressoLight::espresso_context::priv_t, std::__1::default_delete<EspressoLight::espresso_context::priv_t> >::reset(EspressoLight::espresso_context::priv_t*)
0x7ff832a66269 Espresso!espresso_context_destroy
0x7ff825417fc0 CoreML!-[MLNeuralNetworkEngine _deallocContextAndPlan]
0x7ff825417fee CoreML!-[MLNeuralNetworkEngine dealloc]
0x7ff81d8d2938 CoreFoundation!__RELEASE_OBJECTS_IN_THE_ARRAY__
0x7ff81d8d287b CoreFoundation!-[__NSArrayM dealloc]
0x7ff81d70419f libobjc.A.dylib!AutoreleasePoolPage::releaseUntil(objc_object**)

[*] onLeave: IOConnectCallScalarMethod
|-[i] return value: 0x0
|-[i] g_index: 189
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 1
|-[i] IOConnectCallMethod called from:
0x7ff826194943 IOAccelerator!ioAccelResourceFinalize
0x7ff81d9fd936 CoreFoundation!_CFRelease
0x7ff8261c1b02 Metal!-[MTLIOAccelResource dealloc]
0x7ff8261fcf7a Metal!-[MTLIOAccelResourcePool purgeWithLock]
0x7ff8261fcfb1 Metal!-[MTLIOAccelResourcePool purge]
0x7ff82621b3a6 Metal!-[MTLIOAccelDevice _purgeDevice]
0x7ff8261c69e8 Metal!-[_MTLCommandQueue dealloc]
0x7ff8261c68f6 Metal!-[MTLIOAccelCommandQueue dealloc]
0x7ffa384e7eeb AMDMTLBronzeDriver!-[BronzeMtlCmdQueue dealloc]
0x7ff832d5e15f Espresso!Espresso::context_metal::~context_metal()
0x7ff8328e0ea5 Espresso!std::__1::shared_ptr<Espresso::abstract_context>::~shared_ptr()
0x7ff832a67eaf Espresso!std::__1::unique_ptr<EspressoLight::espresso_context::priv_t, std::__1::default_delete<EspressoLight::espresso_context::priv_t> >::reset(EspressoLight::espresso_context::priv_t*)
0x7ff832a66269 Espresso!espresso_context_destroy
0x7ff825417fc0 CoreML!-[MLNeuralNetworkEngine _deallocContextAndPlan]
0x7ff825417fee CoreML!-[MLNeuralNetworkEngine dealloc]
0x7ff81d8d2938 CoreFoundation!__RELEASE_OBJECTS_IN_THE_ARRAY__

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 190
[*] onEnter: IOConnectCallMethod
|-[i] 1st arg (connection): 22799
|-[i] 2nd arg (selector): 1
|-[i] IOConnectCallMethod called from:
0x7ff826194943 IOAccelerator!ioAccelResourceFinalize
0x7ff81d9fd936 CoreFoundation!_CFRelease
0x7ff8261c1b02 Metal!-[MTLIOAccelResource dealloc]
0x7ff8261fcf7a Metal!-[MTLIOAccelResourcePool purgeWithLock]
0x7ff8261fcfb1 Metal!-[MTLIOAccelResourcePool purge]
0x7ff82621b3a6 Metal!-[MTLIOAccelDevice _purgeDevice]
0x7ff8261c69e8 Metal!-[_MTLCommandQueue dealloc]
0x7ff8261c68f6 Metal!-[MTLIOAccelCommandQueue dealloc]
0x7ffa384e7eeb AMDMTLBronzeDriver!-[BronzeMtlCmdQueue dealloc]
0x7ff832d5e15f Espresso!Espresso::context_metal::~context_metal()
0x7ff8328e0ea5 Espresso!std::__1::shared_ptr<Espresso::abstract_context>::~shared_ptr()
0x7ff832a67eaf Espresso!std::__1::unique_ptr<EspressoLight::espresso_context::priv_t, std::__1::default_delete<EspressoLight::espresso_context::priv_t> >::reset(EspressoLight::espresso_context::priv_t*)
0x7ff832a66269 Espresso!espresso_context_destroy
0x7ff825417fc0 CoreML!-[MLNeuralNetworkEngine _deallocContextAndPlan]
0x7ff825417fee CoreML!-[MLNeuralNetworkEngine dealloc]
0x7ff81d8d2938 CoreFoundation!__RELEASE_OBJECTS_IN_THE_ARRAY__

[*] onLeave: IOConnectCallMethod
|-[i] return value: 0x0
|-[i] g_index: 191
```

an elegant output is generated as:

```json
[
    {
        "index": 1,
        "api": "IOServiceGetMatchingService",
        "2nd arg (matching)": "{\n    IONameMatch = IOSurfaceRoot;\n}",
        "ret (service)": 15879,
        "name": "IOSurfaceRoot",
        "IOServiceOpen": [
            {
                "index": 2,
                "api": "IOServiceOpen",
                "1st arg (service)": 15879,
                "3rd arg (type)": 0,
                "4th arg (connection)": 17939,
                "IOConnectCallMethod": [
                    {
                        "index": 3,
                        "api": "IOConnectCallMethod",
                        "1st arg (service)": 17939,
                        "2nd arg (selector)": 13
                    },
                    {
                        "index": 4,
                        "api": "IOConnectCallMethod",
                        "1st arg (service)": 17939,
                        "2nd arg (selector)": 44
                    },
                    {
                        "index": 6,
                        "api": "IOConnectCallMethod",
                        "1st arg (service)": 17939,
                        "2nd arg (selector)": 32
                    }
                ]
            }
        ]
    },
    {
        "index": 5,
        "api": "IOServiceAddMatchingNotification",
        "3rd arg (matching)": "{\n    IOProviderClass = IOAccelerator;\n}",
        "6th arg (iterator)": 15115,
        "IOIteratorNext": [
            {
                "index": 7,
                "api": "IOIteratorNext",
                "1st arg (iterator)": 15115,
                "ret (service)": 14859,
                "name": "IntelAccelerator",
                "IOServiceOpen": [
                    {
                        "index": 8,
                        "api": "IOServiceOpen",
                        "1st arg (service)": 14859,
                        "3rd arg (type)": 5,
                        "4th arg (connection)": 22319,
                        "IOConnectCallMethod": [
                            {
                                "index": 9,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22319,
                                "2nd arg (selector)": 9
                            },
                            {
                                "index": 10,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22319,
                                "2nd arg (selector)": 2
                            },
                            {
                                "index": 11,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22319,
                                "2nd arg (selector)": 0
                            },
                            {
                                "index": 12,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22319,
                                "2nd arg (selector)": 7
                            },
                            {
                                "index": 17,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22319,
                                "2nd arg (selector)": 11
                            },
                            {
                                "index": 18,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22319,
                                "2nd arg (selector)": 10
                            },
                            {
                                "index": 20,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22319,
                                "2nd arg (selector)": 12
                            },
                            {
                                "index": 21,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22319,
                                "2nd arg (selector)": 12
                            },
                            {
                                "index": 22,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22319,
                                "2nd arg (selector)": 12
                            },
                            {
                                "index": 23,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22319,
                                "2nd arg (selector)": 12
                            },
                            {
                                "index": 24,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22319,
                                "2nd arg (selector)": 12
                            },
                            {
                                "index": 25,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22319,
                                "2nd arg (selector)": 12
                            },
                            {
                                "index": 26,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22319,
                                "2nd arg (selector)": 12
                            },
                            {
                                "index": 27,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22319,
                                "2nd arg (selector)": 12
                            },
                            {
                                "index": 28,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22319,
                                "2nd arg (selector)": 12
                            },
                            {
                                "index": 29,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22319,
                                "2nd arg (selector)": 12
                            },
                            {
                                "index": 30,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22319,
                                "2nd arg (selector)": 12
                            },
                            {
                                "index": 31,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22319,
                                "2nd arg (selector)": 12
                            },
                            {
                                "index": 32,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22319,
                                "2nd arg (selector)": 12
                            },
                            {
                                "index": 33,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22319,
                                "2nd arg (selector)": 12
                            },
                            {
                                "index": 34,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22319,
                                "2nd arg (selector)": 12
                            },
                            {
                                "index": 35,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22319,
                                "2nd arg (selector)": 12
                            },
                            {
                                "index": 36,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22319,
                                "2nd arg (selector)": 12
                            },
                            {
                                "index": 37,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22319,
                                "2nd arg (selector)": 12
                            },
                            {
                                "index": 38,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22319,
                                "2nd arg (selector)": 12
                            },
                            {
                                "index": 39,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22319,
                                "2nd arg (selector)": 12
                            },
                            {
                                "index": 40,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22319,
                                "2nd arg (selector)": 12
                            },
                            {
                                "index": 41,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22319,
                                "2nd arg (selector)": 12
                            },
                            {
                                "index": 42,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22319,
                                "2nd arg (selector)": 12
                            },
                            {
                                "index": 43,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22319,
                                "2nd arg (selector)": 12
                            },
                            {
                                "index": 44,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22319,
                                "2nd arg (selector)": 12
                            },
                            {
                                "index": 45,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22319,
                                "2nd arg (selector)": 12
                            },
                            {
                                "index": 46,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22319,
                                "2nd arg (selector)": 12
                            },
                            {
                                "index": 47,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22319,
                                "2nd arg (selector)": 12
                            },
                            {
                                "index": 48,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22319,
                                "2nd arg (selector)": 12
                            },
                            {
                                "index": 49,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22319,
                                "2nd arg (selector)": 12
                            },
                            {
                                "index": 50,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22319,
                                "2nd arg (selector)": 12
                            },
                            {
                                "index": 51,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22319,
                                "2nd arg (selector)": 12
                            },
                            {
                                "index": 52,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22319,
                                "2nd arg (selector)": 12
                            },
                            {
                                "index": 53,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22319,
                                "2nd arg (selector)": 12
                            },
                            {
                                "index": 54,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22319,
                                "2nd arg (selector)": 12
                            },
                            {
                                "index": 55,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22319,
                                "2nd arg (selector)": 12
                            },
                            {
                                "index": 56,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22319,
                                "2nd arg (selector)": 12
                            },
                            {
                                "index": 57,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22319,
                                "2nd arg (selector)": 12
                            },
                            {
                                "index": 58,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22319,
                                "2nd arg (selector)": 12
                            },
                            {
                                "index": 59,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22319,
                                "2nd arg (selector)": 12
                            },
                            {
                                "index": 60,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22319,
                                "2nd arg (selector)": 12
                            },
                            {
                                "index": 61,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22319,
                                "2nd arg (selector)": 12
                            },
                            {
                                "index": 62,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22319,
                                "2nd arg (selector)": 12
                            },
                            {
                                "index": 63,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22319,
                                "2nd arg (selector)": 12
                            },
                            {
                                "index": 64,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22319,
                                "2nd arg (selector)": 12
                            },
                            {
                                "index": 65,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22319,
                                "2nd arg (selector)": 12
                            },
                            {
                                "index": 66,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22319,
                                "2nd arg (selector)": 12
                            }
                        ]
                    },
                    {
                        "index": 14,
                        "api": "IOServiceOpen",
                        "1st arg (service)": 14859,
                        "3rd arg (type)": 6,
                        "4th arg (connection)": 42511,
                        "IOConnectCallMethod": [
                            {
                                "index": 15,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 42511,
                                "2nd arg (selector)": 9
                            },
                            {
                                "index": 16,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 42511,
                                "2nd arg (selector)": 10
                            },
                            {
                                "index": 19,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 42511,
                                "2nd arg (selector)": 22
                            },
                            {
                                "index": 81,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 42511,
                                "2nd arg (selector)": 0
                            },
                            {
                                "index": 82,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 42511,
                                "2nd arg (selector)": 4
                            },
                            {
                                "index": 181,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 42511,
                                "2nd arg (selector)": 1
                            }
                        ]
                    }
                ]
            },
            {
                "index": 67,
                "api": "IOIteratorNext",
                "1st arg (iterator)": 15115,
                "ret (service)": 42263,
                "name": "AMDRadeonX4000_AMDVerdeGraphicsAccelerator",
                "IOServiceOpen": [
                    {
                        "index": 68,
                        "api": "IOServiceOpen",
                        "1st arg (service)": 42263,
                        "3rd arg (type)": 5,
                        "4th arg (connection)": 41771,
                        "IOConnectCallMethod": [
                            {
                                "index": 69,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 41771,
                                "2nd arg (selector)": 9
                            },
                            {
                                "index": 70,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 41771,
                                "2nd arg (selector)": 2
                            },
                            {
                                "index": 71,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 41771,
                                "2nd arg (selector)": 0
                            },
                            {
                                "index": 72,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 41771,
                                "2nd arg (selector)": 7
                            },
                            {
                                "index": 78,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 41771,
                                "2nd arg (selector)": 256
                            },
                            {
                                "index": 107,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 41771,
                                "2nd arg (selector)": 8
                            }
                        ]
                    },
                    {
                        "index": 74,
                        "api": "IOServiceOpen",
                        "1st arg (service)": 42263,
                        "3rd arg (type)": 6,
                        "4th arg (connection)": 22799,
                        "IOConnectCallMethod": [
                            {
                                "index": 75,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 9
                            },
                            {
                                "index": 76,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 10
                            },
                            {
                                "index": 77,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 10
                            },
                            {
                                "index": 79,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 268
                            },
                            {
                                "index": 83,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 0
                            },
                            {
                                "index": 84,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 0
                            },
                            {
                                "index": 85,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 0
                            },
                            {
                                "index": 86,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 0
                            },
                            {
                                "index": 87,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 0
                            },
                            {
                                "index": 88,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 12
                            },
                            {
                                "index": 89,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 0
                            },
                            {
                                "index": 90,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 4
                            },
                            {
                                "index": 105,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 7
                            },
                            {
                                "index": 106,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 7
                            },
                            {
                                "index": 108,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 0
                            },
                            {
                                "index": 109,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 0
                            },
                            {
                                "index": 110,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 0
                            },
                            {
                                "index": 111,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 0
                            },
                            {
                                "index": 112,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 0
                            },
                            {
                                "index": 113,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 0
                            },
                            {
                                "index": 114,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 0
                            },
                            {
                                "index": 115,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 0
                            },
                            {
                                "index": 116,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 0
                            },
                            {
                                "index": 117,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 0
                            },
                            {
                                "index": 118,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 0
                            },
                            {
                                "index": 119,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 0
                            },
                            {
                                "index": 120,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 0
                            },
                            {
                                "index": 121,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 0
                            },
                            {
                                "index": 123,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 0
                            },
                            {
                                "index": 124,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 0
                            },
                            {
                                "index": 126,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 0
                            },
                            {
                                "index": 127,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 0
                            },
                            {
                                "index": 129,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 0
                            },
                            {
                                "index": 130,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 0
                            },
                            {
                                "index": 132,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 0
                            },
                            {
                                "index": 133,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 0
                            },
                            {
                                "index": 134,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 0
                            },
                            {
                                "index": 135,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 1
                            },
                            {
                                "index": 136,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 0
                            },
                            {
                                "index": 137,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 0
                            },
                            {
                                "index": 138,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 0
                            },
                            {
                                "index": 139,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 0
                            },
                            {
                                "index": 140,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 0
                            },
                            {
                                "index": 141,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 0
                            },
                            {
                                "index": 142,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 0
                            },
                            {
                                "index": 143,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 1
                            },
                            {
                                "index": 144,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 1
                            },
                            {
                                "index": 145,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 1
                            },
                            {
                                "index": 146,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 1
                            },
                            {
                                "index": 147,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 1
                            },
                            {
                                "index": 148,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 1
                            },
                            {
                                "index": 149,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 1
                            },
                            {
                                "index": 150,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 1
                            },
                            {
                                "index": 151,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 0
                            },
                            {
                                "index": 152,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 0
                            },
                            {
                                "index": 153,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 1
                            },
                            {
                                "index": 154,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 0
                            },
                            {
                                "index": 155,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 0
                            },
                            {
                                "index": 156,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 0
                            },
                            {
                                "index": 157,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 0
                            },
                            {
                                "index": 158,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 0
                            },
                            {
                                "index": 159,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 0
                            },
                            {
                                "index": 160,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 0
                            },
                            {
                                "index": 161,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 1
                            },
                            {
                                "index": 162,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 1
                            },
                            {
                                "index": 163,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 1
                            },
                            {
                                "index": 164,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 1
                            },
                            {
                                "index": 165,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 1
                            },
                            {
                                "index": 166,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 1
                            },
                            {
                                "index": 167,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 1
                            },
                            {
                                "index": 168,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 1
                            },
                            {
                                "index": 169,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 1
                            },
                            {
                                "index": 170,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 1
                            },
                            {
                                "index": 171,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 1
                            },
                            {
                                "index": 172,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 1
                            },
                            {
                                "index": 173,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 1
                            },
                            {
                                "index": 174,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 1
                            },
                            {
                                "index": 175,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 1
                            },
                            {
                                "index": 176,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 1
                            },
                            {
                                "index": 177,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 1
                            },
                            {
                                "index": 178,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 1
                            },
                            {
                                "index": 179,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 1
                            },
                            {
                                "index": 180,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 1
                            },
                            {
                                "index": 182,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 1
                            },
                            {
                                "index": 183,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 1
                            },
                            {
                                "index": 184,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 1
                            },
                            {
                                "index": 185,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 1
                            },
                            {
                                "index": 186,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 1
                            },
                            {
                                "index": 187,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 1
                            },
                            {
                                "index": 188,
                                "api": "IOConnectCallScalarMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 8
                            },
                            {
                                "index": 189,
                                "api": "IOConnectCallScalarMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 8
                            },
                            {
                                "index": 190,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 1
                            },
                            {
                                "index": 191,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 1
                            }
                        ]
                    },
                    {
                        "index": 91,
                        "api": "IOServiceOpen",
                        "1st arg (service)": 42263,
                        "3rd arg (type)": 8,
                        "4th arg (connection)": 41555,
                        "IOConnectCallMethod": [
                            {
                                "index": 92,
                                "api": "IOConnectCallAsyncMethod",
                                "1st arg (service)": 41555,
                                "2nd arg (selector)": 0
                            },
                            {
                                "index": 93,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 41555,
                                "2nd arg (selector)": 5
                            }
                        ]
                    },
                    {
                        "index": 94,
                        "api": "IOServiceOpen",
                        "1st arg (service)": 42263,
                        "3rd arg (type)": 8,
                        "4th arg (connection)": 23315,
                        "IOConnectCallMethod": [
                            {
                                "index": 95,
                                "api": "IOConnectCallAsyncMethod",
                                "1st arg (service)": 23315,
                                "2nd arg (selector)": 0
                            },
                            {
                                "index": 96,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 23315,
                                "2nd arg (selector)": 5
                            }
                        ]
                    },
                    {
                        "index": 98,
                        "api": "IOServiceOpen",
                        "1st arg (service)": 42263,
                        "3rd arg (type)": 8,
                        "4th arg (connection)": 41575,
                        "IOConnectCallMethod": [
                            {
                                "index": 99,
                                "api": "IOConnectCallAsyncMethod",
                                "1st arg (service)": 41575,
                                "2nd arg (selector)": 0
                            },
                            {
                                "index": 100,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 41575,
                                "2nd arg (selector)": 5
                            },
                            {
                                "index": 122,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 41575,
                                "2nd arg (selector)": 1
                            },
                            {
                                "index": 125,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 41575,
                                "2nd arg (selector)": 1
                            },
                            {
                                "index": 128,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 41575,
                                "2nd arg (selector)": 1
                            },
                            {
                                "index": 131,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 41575,
                                "2nd arg (selector)": 1
                            }
                        ]
                    },
                    {
                        "index": 101,
                        "api": "IOServiceOpen",
                        "1st arg (service)": 42263,
                        "3rd arg (type)": 8,
                        "4th arg (connection)": 23335,
                        "IOConnectCallMethod": [
                            {
                                "index": 102,
                                "api": "IOConnectCallAsyncMethod",
                                "1st arg (service)": 23335,
                                "2nd arg (selector)": 0
                            },
                            {
                                "index": 103,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 23335,
                                "2nd arg (selector)": 5
                            }
                        ]
                    }
                ]
            },
            {
                "index": 80,
                "api": "IOIteratorNext",
                "1st arg (iterator)": 15115,
                "ret (service)": 0,
                "name": "GFX0",
                "IOServiceOpen": []
            }
        ]
    },
    {
        "index": 97,
        "api": "IOServiceGetMatchingService",
        "2nd arg (matching)": "{\n    IOProviderClass = IOPlatformExpertDevice;\n}",
        "ret (service)": 41231,
        "name": "MacBookPro11,5",
        "IOServiceOpen": []
    },
    {
        "index": 104,
        "api": "IOServiceGetMatchingService",
        "2nd arg (matching)": "{\n    IOProviderClass = IOPlatformExpertDevice;\n}",
        "ret (service)": 41231,
        "name": "MacBookPro11,5",
        "IOServiceOpen": []
    }
]
```

The major matching dictionary is of:
```
{
    IOProviderClass = IOAccelerator;
}
```
I find it firstly use `IOServiceAddMatchingNotification` to get the matching service set, then iterate over each of the service.
2 services match the matching rule, they are `IntelAccelerator` and `AMDRadeonX4000_AMDVerdeGraphicsAccelerator`.
It's likely that the userspace application talks to user client object within these 2 services and eventually chooses `AMDRadeonX4000_AMDVerdeGraphicsAccelerator` to use.   

By combining the information of `IORegistryExplorer`, I find the bundle identifier of `AMDRadeonX4000_AMDVerdeGraphicsAccelerator` is `com.apple.kext.AMDRadeonX4000`, search result:
```commandline
panmac@192 Extensions % pwd                          
/System/Library/Extensions
panmac@192 Extensions % grep "com.apple.kext.AMDRadeonX4000" -r ./ 
Binary file .//AMDRadeonX4000HWServices.kext/Contents/MacOS/AMDRadeonX4000HWServices matches
Binary file .//AMDRadeonX4000HWServices.kext/Contents/PlugIns/AMDRadeonX4000HWLibs.kext/Contents/MacOS/AMDRadeonX4000HWLibs matches
.//AMDRadeonX4000HWServices.kext/Contents/PlugIns/AMDRadeonX4000HWLibs.kext/Contents/Info.plist:	<string>com.apple.kext.AMDRadeonX4000HWLibs</string>
.//AMDRadeonX4000HWServices.kext/Contents/PlugIns/AMDRadeonX4000HWLibs.kext/Contents/Info.plist:			<string>com.apple.kext.AMDRadeonX4000HWLibs</string>
.//AMDRadeonX4000HWServices.kext/Contents/Info.plist:	<string>com.apple.kext.AMDRadeonX4000HWServices</string>
.//AMDRadeonX4000HWServices.kext/Contents/Info.plist:			<string>com.apple.kext.AMDRadeonX4000HWServices</string>
.//AMDRadeonX4000HWServices.kext/Contents/Info.plist:			<string>com.apple.kext.AMDRadeonX4000HWServices</string>
.//AMDRadeonX4000HWServices.kext/Contents/Info.plist:			<string>com.apple.kext.AMDRadeonX4000HWServices</string>
.//AMDRadeonX4000HWServices.kext/Contents/Info.plist:			<string>com.apple.kext.AMDRadeonX4000HWServices</string>
.//AMDRadeonX4000HWServices.kext/Contents/Info.plist:			<string>com.apple.kext.AMDRadeonX4000HWServices</string>
Binary file .//AMDRadeonX4000.kext/Contents/MacOS/AMDRadeonX4000 matches
.//AMDRadeonX4000.kext/Contents/Info.plist:	<string>com.apple.kext.AMDRadeonX4000</string>
.//AMDRadeonX4000.kext/Contents/Info.plist:			<string>com.apple.kext.AMDRadeonX4000</string>
.//AMDRadeonX4000.kext/Contents/Info.plist:			<string>com.apple.kext.AMDRadeonX4000</string>
.//AMDRadeonX4000.kext/Contents/Info.plist:			<string>com.apple.kext.AMDRadeonX4000</string>
.//AMDRadeonX4000.kext/Contents/Info.plist:			<string>com.apple.kext.AMDRadeonX4000</string>
.//AMDRadeonX4000.kext/Contents/Info.plist:			<string>com.apple.kext.AMDRadeonX4000</string>
.//AMDRadeonX4000.kext/Contents/Info.plist:			<string>com.apple.kext.AMDRadeonX4000</string>
.//AMDRadeonX4000.kext/Contents/Info.plist:			<string>com.apple.kext.AMDRadeonX4000</string>
.//AMDRadeonX4000.kext/Contents/Info.plist:			<string>com.apple.kext.AMDRadeonX4000</string>
.//AMDRadeonX4000.kext/Contents/Info.plist:			<string>com.apple.kext.AMDRadeonX4000</string>
```

It's obviously that `AMDRadeonX4000` is the target service. 
After checking the `Info.plist` and the binary code of `AMDRadeonX4000`, I found there are multiple user client objects, including:
```
AMDRadeonX4000_AMDBaffinGraphicsAccelerator
AMDRadeonX4000_AMDTongaGraphicsAccelerator
AMDRadeonX4000_AMDVerdeGraphicsAccelerator
...
```
which user client object obtained by user space is controlled by the `type` arg of the userspace method `IOServiceOpen`.  
(c.f.,  
https://i.blackhat.com/USA-19/Thursday/us-19-Lilang-Debug-For-Bug-Crack-And-Hack-Apple-Core-By-Itself-Fun-And-Profit-To-Debug-And-Fuzz-Apple-Kernel-By-LLDB-Script.pdf  
https://conference.hitb.org/hitbsecconf2019ams/materials/D1T2%20-%20Fresh%20Apples%20-%20Researching%20New%20Attack%20Interfaces%20on%20iOS%20and%20OSX%20-%20Moony%20Li%20&%20Lilang%20Wu.pdf  
)

The `type` is collected as:

|                Service name                | type                         |
|:------------------------------------------:|:-----------------------------|
|               IOSurfaceRoot                |                       0                     |
|              IntelAccelerator              |           0x5, 0x6           | 
| AMDRadeonX4000_AMDVerdeGraphicsAccelerator | 0x5, 0x6, 0x8, 0x8, 0x8, 0x8 |

The next step is to correlate the `type` with the specific object.   
In order to return different object to user space code, driver usually overrides the `newUserClient` method, and return different user client object according to the `type`.
After going through the binary of `AMDRadeonX4000`, I found it refer to the external binary to implement such method.
```
UNDEF:00000000004B8B58 ; IOGraphicsAccelerator2::newUserClient(task *, void *, unsigned int, IOUserClient **)
UNDEF:00000000004B8B58                 extrn __ZN22IOGraphicsAccelerator213newUserClientEP4taskPvjPP12IOUserClient:qword
UNDEF:00000000004B8B58                                         ; DATA XREF: __const:00000000004628C8↑o
UNDEF:00000000004B8B58                                         ; __const:0000000000471290↑o ...

__const:00000000004628C8                 dq offset __ZN22IOGraphicsAccelerator213newUserClientEP4taskPvjPP12IOUserClient ; IOGraphicsAccelerator2::newUserClient(task *,void *,uint,IOUserClient **)
__const:0000000000471290                 dq offset __ZN22IOGraphicsAccelerator213newUserClientEP4taskPvjPP12IOUserClient ; IOGraphicsAccelerator2::newUserClient(task *,void *,uint,IOUserClient **)
```

Then I search to locate the real implementation:
```commandline
panmac@192 Extensions % pwd
/System/Library/Extensions
panmac@192 Extensions % grep "ZN22IOGraphicsAccelerator213newUserClientEP4taskPvjPP12IOUserClient" -r ./
Binary file .//AppleIntelICLGraphics.kext/Contents/MacOS/AppleIntelICLGraphics matches
Binary file .//IOAcceleratorFamily2.kext/Contents/MacOS/IOAcceleratorFamily2 matches
Binary file .//AppleIntelSKLGraphics.kext/Contents/MacOS/AppleIntelSKLGraphics matches
Binary file .//AMDRadeonX4000.kext/Contents/MacOS/AMDRadeonX4000 matches
Binary file .//AppleIntelKBLGraphics.kext/Contents/MacOS/AppleIntelKBLGraphics matches
Binary file .//AppleIntelBDWGraphics.kext/Contents/MacOS/AppleIntelBDWGraphics matches
Binary file .//AMDRadeonX5000.kext/Contents/MacOS/AMDRadeonX5000 matches
Binary file .//AppleIntelHD5000Graphics.kext/Contents/MacOS/AppleIntelHD5000Graphics matches
Binary file .//AppleParavirtGPU.kext/Contents/MacOS/AppleParavirtGPU matches
Binary file .//AMDRadeonX6000.kext/Contents/MacOS/AMDRadeonX6000 matches
```
Finally, I found it's implemented in `IOAcceleratorFamily2`, the disassembly code is depicted as:
```c
    case 5u:
      v27 = (IOAccelDevice2 *)(*(__int64 (__fastcall **)(IOGraphicsAccelerator2 *))(*(_QWORD *)v8 + 2584LL))(v8);
      v5 = -536870210;
      if ( !v27 )
        break;
      v22 = v27;
      v20 = 0LL;
      v23 = IOAccelDevice2::init(v27, 0LL, v7);
      goto LABEL_37;
    case 6u:
      v28 = (IOAccelSharedUserClient2 *)(*(__int64 (__fastcall **)(IOGraphicsAccelerator2 *))(*(_QWORD *)v8 + 2576LL))(v8);
      v5 = -536870210;
      if ( !v28 )
        break;
      v22 = v28;
      v20 = 0LL;
      v23 = IOAccelSharedUserClient2::init(v28, 0LL, v7);
      goto LABEL_37;
    case 8u:
      v29 = (IOAccelCommandQueue *)(*(__int64 (__fastcall **)(IOGraphicsAccelerator2 *))(*(_QWORD *)v8 + 2784LL))(v8);
      v5 = -536870210;
      if ( !v29 )
        break;
      v25 = v29;
      v20 = 0LL;
      if ( (unsigned __int8)IOAccelCommandQueue::init(v29, 0LL, v7) )
        goto LABEL_30;
      v30 = *(_QWORD *)v25;
      v31 = v25;
      goto LABEL_43;
```

The user client objects are `IOAccelDevice2`, `IOAccelSharedUserClient2` and `IOAccelCommandQueue` separately according to the `type`. 

|                    type                    | user client object           |
|:------------------------------------------:|:-----------------------------|
|                     0x5                     | IOAccelDevice2                             |
|              0x6              | IOAccelSharedUserClient2                     | 
| 0x8 | IOAccelCommandQueue |


The next step is to correlate the `selector` with the operation under the hood. 

A user client usually overwrites `externalMethod` as:
```c
IOReturn	com_osxkernel_driver_IOKitTestUserClient::externalMethod (uint32_t selector, IOExternalMethodArguments* arguments,
									IOExternalMethodDispatch* dispatch, OSObject* target, void* reference)
{
	// Ensure the requested control selector is within range
	if (selector >= kTestUserClientMethodCount)
		return kIOReturnUnsupported;
	
	dispatch = (IOExternalMethodDispatch*)&sMethods[selector];
	target = this;
	reference = NULL;
	return super::externalMethod(selector, arguments, dispatch, target, reference);
}
```

The [workflow](https://github.com/apple-oss-distributions/xnu/blob/e7776783b89a353188416a9a346c6cdb4928faad/iokit/Kernel/IOUserClient.cpp) of `super::externalMethod` is:
```
IOReturn
IOUserClient::externalMethod( uint32_t selector, IOExternalMethodArguments * args,
    IOExternalMethodDispatch * dispatch, OSObject * target, void * reference )
{
    if (IOExternalMethodDispatch * dispatch)
        1. check args
        2. call dispatch->function
        3. return
    if (args->asyncWakePort) {
        1. call overwritten getAsyncTargetAndMethodForIndex to get method.
        2. call method.        
    } else {
        1. call overwritten getTargetAndMethodForIndex to get method.
        2. call method.                
    }    
}    

struct IOExternalMethod {
	IOService *         object;
	IOMethod            func;
	IOOptionBits        flags;
	IOByteCount         count0;
	IOByteCount         count1;
};

struct IOExternalAsyncMethod {
	IOService *         object;
	IOAsyncMethod       func;
	IOOptionBits        flags;
	IOByteCount         count0;
	IOByteCount         count1;
};

struct IOExternalMethodDispatch {
	IOExternalMethodAction function;
	uint32_t               checkScalarInputCount;
	uint32_t               checkStructureInputSize;
	uint32_t               checkScalarOutputCount;
	uint32_t               checkStructureOutputSize;
};
```

Now, I will take an example to tease out the workflow.
```json
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
```
This example set `type` to 5 to select `IOAccelDevice2` as user client.
Then I locate the method of `IOAccelDevice2::externalMethod`:
```c
__int64 __fastcall IOAccelDevice2::externalMethod(IOAccelDevice2 *this, __int64 selector, __int64 a3, __int64 (__fastcall **a4)(), IOAccelSharedUserClient2 *a5, __int64 a6)
{
  __int64 (__fastcall **dispatch)(); // r14
  __int64 v7; // r15
  signed int v8; // eax
  unsigned int v9; // er14
  IOGraphicsAccelerator2 *v10; // r15
  __int64 reference; // [rsp+8h] [rbp-38h]
  IOAccelSharedUserClient2 *target; // [rsp+10h] [rbp-30h]

  reference = a6;
  target = a5;
  dispatch = a4;
  v7 = a3;
  OSIncrementAtomic((char *)this + 384);
  v8 = -536870185;
  if ( !*((_BYTE *)this + 274) )
    v8 = `vtable for'IOUserClient[268](this, (unsigned int)selector, v7, dispatch, target, reference);      // super::externalMethod
  v9 = v8;
  if ( (unsigned int)OSDecrementAtomic((char *)this + 384) == 1 && *((_BYTE *)this + 274) )
```
As depict in the above code snippet, the argument `dispatch` is untouched, 
such that the `super::externalMethod` will fork user's implementation of 
`getAsyncTargetAndMethodForIndex` or `getTargetAndMethodForIndex`.

Then I locate the `IOAccelDevice2::getTargetAndMethodForIndex` method:
```c
char *__fastcall IOAccelDevice2::getTargetAndMethodForIndex(IOAccelDevice2 *this, IOService **a2, unsigned int a3)
{
  char *result; // rax

  *a2 = this;
  result = 0LL;
  if ( a3 < 0xA )
    result = (char *)&IOAccelDevice2::sDeviceMethods + 48 * a3;
  return result;
}
```
The method refer to the symbol of `IOAccelDevice2::sDeviceMethods`,
and this is the dispatch table of `IOAccelDevice2`. By looking up this table, I 
finally get the method of 
```
__const:000000000006FD68                 dq offset __ZN14IOAccelDevice216set_api_propertyEP24IOAccelDeviceAPIProperty ; IOAccelDevice2::set_api_property(IOAccelDeviceAPIProperty *)
```
according to selector 9.

**Note:** there is exception that the `IOAccelSharedUserClient2` 
trigger different flow of `super::externalMethod` according to different selector,
which make the automation impossible.
So I collect the <selector, method> tuple with the help of the [simple script](https://github.com/dm4sec/ANE_Fuzzer/tree/main/ANE_Fuzzer/OSX/VNCoreMLModel_Stud/idc_script). 

IOAccelDevice2 (IOExternalMethod):

| selector | object                   | func                                                   |           flags           |count0|count1|
|:--------:|:-------------------------|:-------------------------------------------------------|:-------------------------:|:-------------------------:|:-------------------------:|
|0|0x0|IOAccelDevice2::get_config(IOAccelDeviceConfigData *)|0x2|0x0|0x40|
|1|0x0|IOAccelDevice2::get_name(char *)|0x2|0x0|0x40|
|2|0x0|IOAccelDevice2::get_event_machine(IOAccelDeviceEventMachineData *)|0x2|0x0|0x258|
|3|0x0|IOAccelDevice2::get_surface_info(unsigned int, IOAccelDeviceSurfaceData *)|0x2|0x1|0x18|
|4|0x0|IOAccelDevice2::set_stereo(unsigned int, unsigned int)|0x0|0x2|0x0|
|5|0x0|IOAccelDevice2::get_next_global_object_id(IOAccelDeviceGlobalObjectIDData *)|0x2|0x0|0x8|
|6|0x0|IOAccelDevice2::get_current_trace_filter(IOAccelDeviceTraceFilterData *)|0x2|0x0|0x8|
|7|0x0|IOAccelDevice2::get_device_info(IOAccelDeviceInfoReturnData *)|0x2|0x0|0x18|
|8|0x0|IOAccelDevice2::get_next_gid_group(IOAccelDeviceGIDGroupData *)|0x2|0x0|0x10|
|9|0x0|IOAccelDevice2::set_api_property(IOAccelDeviceAPIProperty *)|0x3|0x10|0xFFFFFFFF|


IOAccelSharedUserClient2 (IOExternalMethodDispatch):

| selector | function                   | checkScalarInputCount                                                   |           checkStructureInputSize           |checkScalarOutputCount|checkStructureOutputSize|
|:--------:|:-------------------------|:-------------------------------------------------------|:-------------------------:|:-------------------------:|:-------------------------:|
|17|IOAccelSharedUserClient2::s_set_resources_purgeable(IOAccelSharedUserClient2*, void *, IOExternalMethodArguments *)|0x1|0xFFFF|0x0|0xFFFF|

IOAccelSharedUserClient2 (IOExternalMethod):

| selector | object                   | func                                                   |           flags           |count0|count1|
|:--------:|:-------------------------|:-------------------------------------------------------|:-------------------------:|:-------------------------:|:-------------------------:|
|0|0x0|IOAccelSharedUserClient2::new_resource(IOAccelNewResourceArgs *, IOAccelNewResourceReturnData *, unsigned long long, unsigned int *)|0x3|0xFFFFFFFF|0xFFFFFFFF|
|1|0x0|IOAccelSharedUserClient2::delete_resource(unsigned int)|0x0|0x1|0x0|
|2|0x0|IOAccelSharedUserClient2::page_off_resource(IOAccelSharedPageoffResourceArgs *)|0x4|0x0|0x8|
|3|0x0|IOAccelSharedUserClient2::finish_object_event(unsigned int, unsigned int)|0x0|0x2|0x0|
|4|0x0|IOAccelSharedUserClient2::set_resource_purgeable(unsigned int, eIOAccelResourcePurgeable, eIOAccelResourcePurgeable*)|0x0|0x2|0x1|
|5|0x0|IOAccelSharedUserClient2::get_surface_info(unsigned int, unsigned int *, unsigned int *, unsigned int *, unsigned int *, unsigned int *)|0x0|0x1|0x5|
|6|0x0|IOAccelSharedUserClient2::get_resource_info(unsigned int, IOAccelGetResourceInfoReturnData *, unsigned int *)|0x2|0x1|0xFFFFFFFF|
|7|0x0|IOAccelSharedUserClient2::create_shmem(unsigned int, IOAccelDeviceShmemData *)|0x2|0x1|0x10|
|8|0x0|IOAccelSharedUserClient2::destroy_shmem(unsigned int)|0x0|0x1|0x0|
|9|0x0|IOAccelSharedUserClient2::get_shared_info(IOAccelSharedGetInfoReturnData *)|0x2|0x0|0x10|
|10|0x0|IOAccelSharedUserClient2::setup_dirty_ring(IOAccelSharedSetupDirtyRingReturnData *)|0x2|0x0|0x18|
|11|0x0|IOAccelSharedUserClient2::process_dirty_commands(void)|0x0|0x0|0x0|
|12|0x0|IOAccelSharedUserClient2::allocate_fence_memory(unsigned long long *, unsigned long long *)|0x3|0x8|0x8|
|13|0x0|IOAccelSharedUserClient2::create_mtlevent(unsigned long long *)|0x2|0x0|0x10|
|14|0x0|IOAccelSharedUserClient2::destroy_mtlevent(unsigned int)|0x0|0x1|0x0|
|15|0x0|IOAccelSharedUserClient2::get_memory_data(IOAccelMemoryData *)|0x2|0x0|0x30|
|16|0x0|IOAccelSharedUserClient2::disconnect_peer(unsigned int)|0x0|0x1|0x0|
|17|0x0|IOAccelSharedUserClient2::set_resources_purgeable(unsigned int const*, eIOAccelResourcePurgeable, eIOAccelResourcePurgeable*, int)|0x3|0xFFFFFFFF|0xFFFFFFFF|
|18|0x0|IOAccelSharedUserClient2::get_resource_offset(unsigned long long *, unsigned long long *)|0x3|0x10|0x8|
|19|0x0|IOAccelSharedUserClient2::get_allocated_size(IOAccelAllocatedSize *)|0x2|0x0|0x8|
|20|0x0|IOAccelSharedUserClient2::set_resource_owner_identity(IOAccelResourceSetResourceOwnerIdentityData *)|0x3|0x10|0x0|


IOAccelCommandQueue (IOExternalMethodDispatch):

| selector | function                   | checkScalarInputCount                                                   |           checkStructureInputSize           |checkScalarOutputCount|checkStructureOutputSize|
|:--------:|:-------------------------|:-------------------------------------------------------|:-------------------------:|:-------------------------:|:-------------------------:|
|0|IOAccelCommandQueue::s_set_notification_port(IOAccelCommandQueue*, void *, IOExternalMethodArguments *)|0x0|0x0|0x0|0x0|
|1|IOAccelCommandQueue::s_submit_command_buffers(IOAccelCommandQueue*, void *, IOExternalMethodArguments *)|0x0|0xFFFF|0x0|0x0|
|2|IOAccelCommandQueue::s_set_priority_and_background(IOAccelCommandQueue*, void *, IOExternalMethodArguments *)|0x0|0xC|0x0|0x0|
|3|IOAccelCommandQueue::s_get_command_queue_info(IOAccelCommandQueue*, void *, IOExternalMethodArguments *)|0x0|0x0|0x0|0x8|
|4|IOAccelCommandQueue::s_set_quality_of_service(IOAccelCommandQueue*, void *, IOExternalMethodArguments *)|0x0|0x4|0x0|0x0|
|5|IOAccelCommandQueue::s_set_get_info(IOAccelCommandQueue*, void *, IOExternalMethodArguments *)|0x0|0x404|0x0|0x8|


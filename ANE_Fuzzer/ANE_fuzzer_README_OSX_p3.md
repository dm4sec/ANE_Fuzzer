I choose some methods to fuzz after going through the above table, 
e.g., 

IOAccelSharedUserClient2 (IOExternalMethod):

| selector | object                   | func                                                   |           flags           |count0|count1|
|:--------:|:-------------------------|:-------------------------------------------------------|:-------------------------:|:-------------------------:|:-------------------------:|
|7|0x0|IOAccelSharedUserClient2::create_shmem(unsigned int, IOAccelDeviceShmemData *)|0x2|0x1|0x10|

The selector is `7` and the user client is `IOAccelSharedUserClient2`. 
The selector and the counterpart call stack are collected by the identical `index` and `g_index` as:
```
                            {
                                "index": 72,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 41771,
                                "2nd arg (selector)": 7
                            },

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
```



```
                            {
                                "index": 105,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 7
                            },
                            
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
```




```
                            {
                                "index": 106,
                                "api": "IOConnectCallMethod",
                                "1st arg (service)": 22799,
                                "2nd arg (selector)": 7
                            },

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
```
It's important to make clear the argument of `IOAccelSharedUserClient2::create_shmem` to go deeper.
Now, I will take the 2nd block as an example to show how we accomplish this task.

Our fuzzer works on userspace. To avoid the manual effort of deducing userspace structure from kernelspace structure,
we prefer to build this information from the userspace directly.
I firstly extract binary by using [dyld_shared_cache_util](https://github.com/angelystor/dyld_shared_cache_util), then search keyword of `IOAccelSharedCreateDeviceShmem` in these binary.
```commandline
panmac@192 osx % pwd
/Users/panmac/Desktop/fuzzer/ios_fuzzer/Utils/binary/osx
panmac@192 osx % grep "IOAccelSharedCreateDeviceShmem" -r ./                                 
Binary file .//System/Library/PrivateFrameworks/IOAccelerator.framework/Versions/A/IOAccelerator matches
Binary file .//System/Library/Frameworks/Metal.framework/Versions/A/Metal matches
```
The disassembly code of `IOAccelerator!IOAccelSharedCreateDeviceShmem` is:
```c
__int64 __fastcall IOAccelSharedCreateDeviceShmem(__int64 a1, unsigned int a2, _QWORD *a3, unsigned int *a4, _DWORD *a5)
{
  _DWORD *v5; // r15
  unsigned int *v6; // r12
  _QWORD *v7; // r13
  unsigned int v8; // ebx
  __int64 v9; // rcx
  unsigned int v10; // er13
  int v11; // er12
  __int64 v12; // r15
  _DWORD *v13; // rax
  __int64 v14; // rcx
  _DWORD *v15; // r15
  __int64 v17; // [rsp+20h] [rbp-50h]
  __int64 v18; // [rsp+28h] [rbp-48h]
  void (__fastcall *v19)(signed __int64, _QWORD, _QWORD, _QWORD, __int64, _QWORD); // [rsp+30h] [rbp-40h]
  __int64 v20; // [rsp+38h] [rbp-38h]
  unsigned int v21; // [rsp+40h] [rbp-30h]
  int v22; // [rsp+44h] [rbp-2Ch]

  v5 = a5;
  v6 = a4;
  v7 = a3;
  v17 = a2;
  v18 = 16LL;
  v8 = IOConnectCallMethod(
         *(unsigned int *)(a1 + 24),    // mach_port_t	 connection
         7LL,                           // uint32_t	 selector
         (__int64)&v17,                 // const uint64_t	*input
         1LL,                           // uint32_t	 inputCnt
         0LL,                           // const void      *inputStruct
         0LL,                           // size_t		 inputStructCnt
         0LL,                           // uint64_t	*output
         0LL >> 63,                     // uint32_t	*outputCnt
         (__int64)&v20,                 // void		*outputStruct
         (__int64)&v18);                // size_t		*outputStructCnt
  if ( v8 )
  {
    *v7 = 0LL;
    *v6 = 0;
    *v5 = 0;
  }
```
I still can not confirm the layout of the input of `v17`, so I walk outer layer recursively.

Search keyword of `MTLIOAccelDeviceShmem` results:
```
panmac@192 osx % pwd
/Users/panmac/Desktop/fuzzer/ios_fuzzer/Utils/binary/osx
panmac@192 osx % grep "MTLIOAccelDeviceShmem" -r ./                                          
Binary file .//usr/lib/libobjc.A.dylib matches
Binary file .//System/Library/Frameworks/Metal.framework/Versions/A/Metal matches
```
Disassembly of `-[MTLIOAccelDeviceShmem initWithDevice:shmemSize:]` is of:
```c
unsigned int *__fastcall -[MTLIOAccelDeviceShmem initWithDevice:shmemSize:](__int64 a1, __int64 a2, void *a3, unsigned int a4)
{
  unsigned int v4; // er14
  void *v5; // r15
  unsigned int *v6; // rax
  unsigned int *v7; // rbx
  void *v8; // rax
  __int64 v10; // [rsp+8h] [rbp-28h]
  void *v11; // [rsp+10h] [rbp-20h]

  v4 = a4;
  v5 = a3;
  v10 = a1;
  v11 = off_7FF8420F29B8;
  v6 = (unsigned int *)objc_msgSendSuper2(&v10, (const char *)off_7FF8420EEDA0);
  if ( !v6 )
    goto LABEL_4;
  v7 = v6;
  *((_QWORD *)v6 + 5) = v5;
  v8 = objc_msgSend_ptr(v5, (const char *)off_7FF8420EEDB0);
  if ( (unsigned int)IOAccelSharedCreateDeviceShmem((__int64)v8, v4, (_QWORD *)v7 + 7, v7 + 13, v7 + 12) )
  {
    objc_release_ptr(v7, v4);
LABEL_4:
    v7 = 0LL;
  }
  return v7;
}
```
The 2nd parameter of `IOAccelSharedCreateDeviceShmem` comes from outer layer again. It's hard to track again 
for the outer layer looks like:
```c
_QWORD *__fastcall MTLIOAccelDeviceShmemPoolCreateShmem(__int64 a1)
{
  signed __int64 v1; // r15
  _QWORD *v2; // rbx
  _QWORD *v3; // r12
  __int64 v4; // rsi
  _QWORD *v5; // rax
  __int64 v6; // rcx
  void *v7; // rax
  char *v8; // rax

  v1 = a1 + 24;
  os_unfair_lock_lock(a1 + 24);
  v2 = *(_QWORD **)(a1 + 8);
  if ( v2 )
  {
    v3 = v2 + 1;
    v4 = v2[2];
    v5 = (_QWORD *)v2[3];
    if ( v4 )
    {
      *(_QWORD *)(v4 + 24) = v5;
      v6 = v2[2];
      v5 = (_QWORD *)v2[3];
    }
    else
    {
      *(_QWORD *)(a1 + 16) = v5;
      v6 = 0LL;
    }
    *v5 = v6;
    --*(_DWORD *)(a1 + 28);
    *((_OWORD *)v2 + 1) = 0LL;
    os_unfair_lock_unlock(v1);
  }
  else
  {
    os_unfair_lock_unlock(v1);
    v7 = (void *)objc_alloc(*(_QWORD *)(a1 + 32));
    v8 = (char *)objc_msgSend_ptr(v7, (const char *)off_7FF8420F1838, *(_QWORD *)(a1 + 40), *(unsigned int *)(a1 + 48));
    if ( !v8 )
      return 0LL;
    v2 = v8;
    v3 = v8 + 8;
  }
  *v3 = a1;
  objc_retain_ptr(a1);
  return v2;
}
```

Then I turn to the user client to find out that the parameter is used as:
```c
__int64 __fastcall IOAccelSharedUserClient2::create_shmem(__int64 a1, unsigned int a2, __int64 a3)
{
  __int64 v3; // r12
  IOGraphicsAccelerator2 *v4; // rbx
  unsigned int v5; // er15
  IOGraphicsAccelerator2 *v6; // rbx

  v3 = a3;
  v4 = *(IOGraphicsAccelerator2 **)(a1 + 248);
  OSIncrementAtomic((char *)v4 + 144);
  IOLockLock(*((_QWORD *)v4 + 17));
  OSDecrementAtomic((char *)v4 + 144);
  IOGraphicsAccelerator2::lock_busy(v4);
  (*(void (__fastcall **)(IOGraphicsAccelerator2 *, const char *, _QWORD))(*(_QWORD *)v4 + 2128LL))(v4, "", 0LL);
  v5 = IOAccelShared2::create_shmem(
         *(IOAccelShared2 **)(a1 + 256),
         a2,                            // a2
         (unsigned __int64 *)v3,        // a3
         (unsigned int *)(v3 + 8),      // a3 + 8     
         (unsigned int *)(v3 + 12));    // a3 + 4
  v6 = *(IOGraphicsAccelerator2 **)(a1 + 248);
  (*(void (__fastcall **)(_QWORD, const char *, _QWORD))(*(_QWORD *)v6 + 2136LL))(*(_QWORD *)(a1 + 248), "", 0LL);
  IOGraphicsAccelerator2::unlock_busy(v6);
  IOLockUnlock(*((_QWORD *)v6 + 17));
  return v5;
}
```
The `input` parameter is the 1 unit unsigned int array, and the `outputStruct` is roughly an array of:
```
struct foo { 
    uint64_t foo1; 
    uint32_t foo2; 
    uint32_t foo3; 
}
```
[Other study](https://www.zerodayinitiative.com/blog/2020/12/9/cve-2020-27897-apple-macos-kernel-oob-write-privilege-escalation-vulnerability) also verify this result. Now, it's time to write our own fuzzer.


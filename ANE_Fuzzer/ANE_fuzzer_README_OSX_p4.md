Now I am ready to write a fuzzer. 
I would like to use the `Interceptor.replace` scheme of frida,
such that I can spead up the process by replaying the method over and over.
The [fuzzer](https://github.com/dm4sec/ANE_Fuzzer/tree/main/ANE_Fuzzer/OSX/VNCoreMLModel_Fuzzer/) is very simple, 
however it crash OSX (panic) here and there. With the help of aforementioned information, 
I believe we can write a more elegant fuzzer to find more bugs and the bugs behind another bugs.

## Reference:
Os X And iOS Kernel Programming.pdf
https://github.com/apple-oss-distributions/IOKitUser/blob/d8413f623911003f56575ea8bf20cb85886a79f4/IOKitLib.c  
https://bbs.pediy.com/thread-197990.htm  
iDEA: Static Analysis on the Security of Apple Kernel Drivers  
http://www.joyasystems.com/sample-code%2FOSX%20Driver%20and%20Kext%20Samples%2FSimpleUserClient%2FSimpleUserClient%2FUser%20Client%20Info.txt  

https://paper.seebug.org/1617/  
https://developer.apple.com/machine-learning/  
https://developer.apple.com/machine-learning/models/  
https://apple.github.io/coremltools/mlmodel/index.html  
https://developer.apple.com/documentation/coreml  
https://coremltools.readme.io/docs/mlmodel  

https://googleprojectzero.blogspot.com/2019/08/in-wild-ios-exploit-chain-1.html  
https://googleprojectzero.blogspot.com/2019/08/in-wild-ios-exploit-chain-2.html  
https://googleprojectzero.blogspot.com/2019/08/in-wild-ios-exploit-chain-3.html  
https://googleprojectzero.blogspot.com/2019/08/in-wild-ios-exploit-chain-4.html  
https://googleprojectzero.blogspot.com/2019/08/in-wild-ios-exploit-chain-5.html
https://blog.pangu.io/?p=221  
https://i.blackhat.com/USA-19/Thursday/us-19-Lilang-Debug-For-Bug-Crack-And-Hack-Apple-Core-By-Itself-Fun-And-Profit-To-Debug-And-Fuzz-Apple-Kernel-By-LLDB-Script.pdf  
https://conference.hitb.org/hitbsecconf2019ams/materials/D1T2%20-%20Fresh%20Apples%20-%20Researching%20New%20Attack%20Interfaces%20on%20iOS%20and%20OSX%20-%20Moony%20Li%20&%20Lilang%20Wu.pdf  
https://googleprojectzero.blogspot.com/2014/11/pwn4fun-spring-2014-safari-part-ii.html  

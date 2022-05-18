# ANE

This is an extended study of [Apple Neural Engine Internal
From ML Algorithm to HW Registers](https://i.blackhat.com/asia-21/Friday-Handouts/as21-Wu-Apple-Neural_Engine.pdf).

1. `Utils` contains `IOKitChecker` and `XPCChecker`, which is used to probe the boundary between userspace and kernel. 
2. `ANE_Fuzzer` consists of fuzzer for OSX, which I use to find panic on OSX and manual script.


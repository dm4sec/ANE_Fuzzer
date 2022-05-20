# ANE

This is an extended study of [Apple Neural Engine Internal
From ML Algorithm to HW Registers](https://i.blackhat.com/asia-21/Friday-Handouts/as21-Wu-Apple-Neural_Engine.pdf).

1. `Utils` contains `IOKitChecker`, `MIGChecker`, and `XPCChecker`, which is used to probe the boundary between userspace and kernel. 
2. `ANE_Fuzzer` consists fuzzers for OSX, which I use to find kernel panic on OSX.

# TODO::
1. Build triples <service, type, selector> to find more kernel panic.
2. Migrate the code to iOS and Mac M1.
3. Dive deeper into MIGFuzzer.
4. Doc work.

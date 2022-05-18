# IOKitChecker

I have gone through all references, and find it's hard to tease out these really helpful boundaries.
Since `frida-trace` does not support intercepting all exports of a module, I build the script myself.

## Reference:
https://developer.apple.com/library/archive/documentation/DeviceDrivers/Conceptual/AccessingHardware/AH_Intro/AH_Intro.html#//apple_ref/doc/uid/TP30000376  
https://developer.apple.com/library/archive/documentation/DeviceDrivers/Conceptual/WritingDeviceDriver/Introduction/Intro.html  
https://developer.apple.com/library/archive/documentation/DeviceDrivers/Conceptual/IOKitFundamentals/Introduction/Introduction.html  
https://www.vuln.cn/7132  
https://www.jianshu.com/p/3ddf001ed636  
[Find Your Own iOS Kernel Bug](https://infocon.org/cons/SyScan/SyScan360%202012/SyScan360%202012%20presentations/XuHao%20Chen%20Xiaobo%20-%20Find%20Your%20Own%20iOS%20Kernel%20Bug%20EN.pdf).
```
@article{xiaobo2012find,
  title={Find Your Own iOS Kernel Bug},
  author={Xiaobo, Chen and Hao, Xu},
  journal={Power of Community},
  year={2012}
}
```
`Improving Mac OS X security through gray box fuzzing technique`.
```
Stefano Bianchi Mazzone, Mattia Pagnozzi, Aristide Fattori, Alessandro Reina, Andrea Lanzi, Danilo Bruschi:
Improving Mac OS X security through gray box fuzzing technique. EUROSEC 2014: 2:1-2:6
```
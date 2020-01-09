# WebAssembly
> 2019年12月，W3C联盟宣布，WebAssembly核心规范正式成为其官方 Web 标准。这意味着 WebAssembly 成为了继 HTML、CSS 和 JavaScript之后的第四种 Web语言。

[PPT](http://ppt.geekbang.org/slide/download?cid=55&pid=2756)

### 1. WebAssembly是什么?
[官网](https://webassembly.org/)是这样介绍的。
> WebAssembly (abbreviated Wasm) is a binary instruction format for a stack-based virtual machine. Wasm is designed as a portable target for compilation of high-level languages like C/C++/Rust, enabling deployment on the web for client and server applications.

> WebAssembly(Wasm)是一种基于堆栈虚拟机的二进制指令格式。Wasm目标是把编译高级语言（如C / C ++ / Rust）编译成wasm码，使其在Web上能运行的。

可以看到`Wasm`是一个字节码标准。

### 2. 解决什么问题?
性能问题:
js作为一门动态语言，不能编译成可执行二进制代码。V8采用`JIT`技术大大提高了js性能，但是还是不够。

`Mozilla`推出了`asm.js`，他的语法则是JavaScript的子集，是为了JIT性能优化而专门打造的。`asm.js`得到其它浏览器厂商的认可，演变成了今天的`WebAssembly`。

```js
// asm.js示例
function asmJs() {
    'use asm';
   
    let myInt = 0 | 0;
    let myDouble = +1.1;
}
```

### 3. 应用场景
- 视频流解析<br>
> UC研发效能出品的另一款产品 岩鼠云设备平台，其中的云真机视频流解码底层用到的就是WebAssembly技术

- WebGL
> Google Earth也就是谷歌地球，因为需要展示很多3D的图像，对性能要求十分高，现在的Web版就是由WebAssembly实现。
  
- 图像处理
> AutoCAD Web版。
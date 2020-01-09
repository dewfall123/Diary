# Deno简单总结
[PPT链接](http://ppt.geekbang.org/slide/download?cid=55&pid=2759)
<br>
Deno, the better Node!

### 1. 与Node技术区别
Node Server-side JSV8LibuvC++DenoServer-side TSV8TokioRust
| Node        | Deno           |
| ------------- |:-------------:|
| Server-side-js      | Server-side-TS |
| V8      | V8      |
| Libuv | Tokio      |
| C++ | Rust      |

### 2. Why Rust, not Go?
Deno最初用Go实现，但是存在`双GC`问题，后来选用`Rust`。


### 3. Deno只有一个文件
> Deno 是⼀个可执⾏⽂件。
>
> Deno 总是并且永远采用这种⽅式发⾏。

### 4. 支持Typescript
同时支持js和TS(内置Typescript编译器)。

### 5. 兼容浏览器API
支持部分(目前70%)如`window, atob, btoa, fetch, clearTimeout, clearInterval, setTimeout, setInterval, location...`等API。

### 6. 默认安全
磁盘、网络、⼦进程或高精度时间等需要主动开启。
如`--allow-read=/tmp`。


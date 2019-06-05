# vue-lun

## 遇到的问题
- 问题一
```
运行 ./node_modules/.bin/parcel
Server running at http://localhost:1234
🚨  No entries found.
    at Bundler.bundle (/Users/xxx/vue-lun/node_modules/parcel-bundler/src/Bundler.js:275:17)
    at <anonymous>
```
解决办法 添加 index.html
```
./node_modules/.bin/parcel index.html --no-cache
或
npx parcel index.html --no-cache

```
- 问题二
```
Server running at http://localhost:1234
🚨  /Users/xxx/vue-lun/Users/xxx/vue-lun/node_modules/parcel-bundler/package.json: ENOENT: no such file or directory, open '/Users/xxx/vue-lun/Users/xxx/vue-lun/node_modules/parcel-bundler/package.json'
Error: ENOENT: no such file or directory, open '/Users/xxx/vue-lun/Users/xxx/vue-lun/node_modules/parcel-bundler/package.json'
或
[Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.  (found in <Root>)
```
解决办法 
```
import vue from 'vue/dist/vue.js'
```
- 问题三
```
Unchecked runtime.lastError: The message port closed before a response was received.
```
解决办法
```
这是由于某个 Chrome 扩展程序造成的，打开 chrome://extensions/，逐一关闭排查，我这边是由于“迅雷下载支持”这个扩展引起的，将其关闭即可。
```
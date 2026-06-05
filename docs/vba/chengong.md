这些 warning 是因为 Git 在 Windows 上默认开启了 autocrlf 自动转换，构建产物用 LF，Git 提示会转成 CRLF。对部署来说完全没影响，但看着烦。解决很简单：

再跑一次验证效果：

干干净净，没有任何 warning 了 ✅


原因是 .deploy-git 的 core.autocrlf 默认是 true（Windows Git 的默认行为），构建产物的 LF 换行符被提示要转 CRLF。设为 false 后就不再管换行符了 — 反正最终是部署到 Linux 服务器，LF 完全没问题。
---
title: 常见问题 - Ai00教程
description: Ai00 Server 是 RWKV 模型的推理 API 服务器，可以在所有支持 Vulkan 的 GPU 上运行，支持大部分 NVIDIA、AMD、Intel 的显卡（包括集成显卡）。
keywords: ai00常见问题,ai00访问失败,Ai00报错,ai00问题
---

## 访问 `https://localhost:65530` 加载失败

A：如果你在 `Config.toml` 设置了 `tls = false` ，则需要将 https 改为 http，即访问 `http://localhost:65530`

## 为什么我在 config 里面把 tls=true 改成了 false，启动的时候还是把 tls 打开了？

A：如果设置了 ACME 的话，TLS 无论如何都是打开的。

## 在自己电脑上可以成功运行，在 autodl 上报错。

A：autodl 不支持 vulkan，无法使用。

## 为啥电脑有多张显卡时，跑 AI00 只有一张显卡在干活的感觉

A：AI00 暂时不支持多显卡推理。

## 报错： ERROR [ai00 server::middleware] reload model failed: failed to request adaptor

![alt text](./Ai00-qa.png)

A：这是因为设备缺少 vulkan 驱动，请安装最新版本驱动。

## AI00 支持 CUDA 驱动吗?

A：不支持。AI00 支持 Vulkan 作为推理后端，曾经支持 Dx12/openGL ，但不支持 CUDA 驱动。

## 为什么我使用共享显存后感觉速度变慢了

![alt text](./ai00-qa1.png)

A：一旦用了共享显存，运行速度会慢 20 倍。这是计算机硬件的工作原理，并非 bug。


倘若大家遇到其他问题，欢迎加入 RWKV QQ 群 224287095 或 Ai00 QQ 群 30920262 提问。
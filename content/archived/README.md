# RWKVCN 文档归档

此目录保存已经退出当前文档主线、但仍具有历史参考价值的页面。

归档文件不属于 `source.config.ts` 中的 `docs` 或 `tutorials` collection，因此不会生成线上路由，也不会出现在站点侧边栏。

## 归档记录

| 原文件 | 归档日期 | 归档理由 | 当前替代入口 |
| --- | --- | --- | --- |
| `content/tutorials/advanced/Fine-Tune/Full-ft-Simple.mdx` | 2026-08-18 | 教程以 RWKV-5/6、旧训练目录和旧依赖为主，无法代表当前 RWKV-7 训练流程 | [`content/tutorials/advanced/pretrain.mdx`](../tutorials/advanced/pretrain.mdx)；上游 [`RWKV-v7/train_temp`](https://github.com/BlinkDL/RWKV-LM/tree/main/RWKV-v7/train_temp) |
| `content/tutorials/advanced/Fine-Tune/RWKV-PEFT/PiSSA.mdx` | 2026-08-18 | RWKV-PEFT 主分支仍保留 PiSSA 相关配置，但缺少旧教程依赖的训练与合并脚本，无法按当前主分支完整复现 | [`LoRA`](../tutorials/advanced/Fine-Tune/RWKV-PEFT/LoRA.mdx)、[`MiSS`](../tutorials/advanced/Fine-Tune/RWKV-PEFT/MiSS.mdx)、[`State Tuning`](../tutorials/advanced/Fine-Tune/RWKV-PEFT/State-Tuning.mdx) |
| `content/tutorials/advanced/Fine-Tune/FAQ.md` | 2026-08-27 | 页面未接入当前导航，且排错内容依赖旧 RWKV-LM、旧合并脚本和不安全的笼统处理方式，无法代表当前 RWKV-PEFT 流程 | [`配置训练环境`](../tutorials/advanced/Fine-Tune/FT-Environment.mdx)、[`准备训练数据`](../tutorials/advanced/Fine-Tune/FT-Dataset.mdx)及对应微调方法页面 |

## 使用与恢复规则

- 归档文件只用于追溯旧实现，不应作为当前安装、训练或部署步骤执行。
- 文件中的版本、链接、相对图片路径和命令按归档时状态保留，不承诺继续可用。
- 如果上游重新提供完整流程，应先验证依赖安装、启动命令、训练产物和推理加载，再把页面重写为当前教程并恢复导航。
- 恢复页面时，同时更新对应目录的 `meta.json`、入口页链接和本归档记录。

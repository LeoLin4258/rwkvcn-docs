<p align="center">
  <!-- <img src="https://github.com/rwkvcn/rwkv-v2/assets/logo.png" alt="RWKV Logo" width="200" /> -->
</p>

<h1 align="center">RWKV 中文社区文档中心</h1>

<p align="center">
  <strong>基于 Next.js 和 Fumadocs 构建的 RWKV 中文社区文档平台</strong>
</p>

<p align="center">
  <a href="https://rwkv.cn">访问 RWKV 官网</a> | 
  <a href="https://rwkv.cn/docs">RWKV 文档中心</a> |
  <a href="https://rwkv.cn/tutorials">RWKV 教程</a>
</p>

---

## 🌐 关于本项目

RWKV 文档中心是 RWKV 中文社区官方网站的文档部分，采用 Fumadocs 构建，为用户提供全面的 RWKV 相关技术文档和学习资源。

## 🛠️ 本地开发指南

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 [http://localhost:3001](http://localhost:3001) 查看文档效果。

## 📂 文档目录结构

```
/content            - 所有文档内容
├── /docs           - 技术文档内容
│   ├── _meta.json  - 文档导航配置
│   └── ...         - 文档 MDX 文件
│
├── /tutorials      - 学习教程内容
    ├── _meta.json  - 教程导航配置
    └── ...         - 教程MDX文件

/components-docs    - 文档专用 UI 组件库
/app/docs           - 文档页面路由
/app/tutorials      - 教程页面路由
```

## ✍️ 文档编写指南

### 基本规范

- 文档使用 Markdown 或者 MDX 格式编写（Markdown + React 组件）
- 使用 `meta.json` 文件配置导航结构和文档顺序
- 新增文档后需要在相应的 `meta.json` 中添加配置

### MDX 文件格式

每个 MDX 文件需要在文件开头包含 frontmatter（YAML 格式的元数据配置）：

```mdx
---
title: 文档标题
description: 文档描述
icon: Album                    # 可选，侧边栏图标
keywords: [关键词1, 关键词2]     # 可选，SEO关键词数组
recommendedLinks:              # 可选，推荐阅读链接（显示在右侧边栏）
  - title: 推荐阅读标题1
    link: /docs/path/to/page1
  - title: 推荐阅读标题2
    link: /docs/path/to/page2
  - title: 外部链接示例
    link: https://example.com
---
```

#### Frontmatter 字段说明

- **title**（必需）：文档标题
- **description**（可选）：文档描述，用于 SEO 和页面预览
- **icon**（可选）：侧边栏显示的图标名称（使用 lucide-react 图标库）
- **keywords**（可选）：关键词数组，用于 SEO
- **recommendedLinks**（可选）：推荐阅读链接数组，显示在右侧边栏的"推荐阅读"区域
  - **title**：链接显示的文字
  - **link**：链接地址
    - 内部链接：使用相对路径，如 `/docs/RWKV-Wiki/Introduction`
    - 外部链接：使用完整 URL，如 `https://example.com`（会在新标签页打开）

#### 推荐阅读链接示例

```yaml
recommendedLinks:
  - title: RWKV 简介
    link: /docs/RWKV-Wiki/Introduction
  - title: RWKV 架构介绍
    link: /docs/RWKV-Wiki/RWKV-Architecture
  - title: RWKV 相关论文
    link: https://www.rwkv.cn/eco/papers
```

**注意**：如果不配置 `recommendedLinks` 或数组为空，推荐阅读区域将不会显示。

### 文档组件用法

在使用文档组件之前，你需要 `import {组件名称} from '@components-docs/组件名称'` 引入组件。例如

```mdx
import { Tab, Tabs } from 'fumadocs-ui/components/tabs'
import { Step, Steps } from 'fumadocs-ui/components/steps'
import { CallOut } from 'components-docs/call-out/call-out.tsx'
```

然后使用 `<组件名称 prop1="值" />` 在文档中使用组件，例如：

```mdx
<Cards>
  <Card  title="RWKV-7-G1 通用角色扮演 State" href="https://modelscope.cn/models/shoumenchougou/RWKV7_G1_RolePlay_State" /> 
</Cards>

<CallOut type="warning" >
注意：挂载 state 文件时，必须使用训练此 state 文件的同款 RWKV 模型。
</CallOut>
```

可以在 [Components](https://rwkv.cn/docs/Components) 页面查看所有文档组件的导入方式和用法。

### 数学公式支持

文档支持 KaTeX 数学公式：

```
行内公式: $E=mc^2$

独立公式:
$$
f(x) = \int_{-\infty}^{\infty} \hat{f}(\xi) e^{2\pi i \xi x} d\xi
$$
```

## 📋 注意事项

- 添加新文档后需要重启开发服务器以应用更改
- 对于复杂图表，推荐使用 Mermaid 语法或 ECharts 组件
- 所有文档页面都继承自 `app/docs/layout.tsx` 中的布局设置

## 🤝 贡献指南

我们欢迎社区成员对 RWKV 文档进行贡献，帮助我们不断完善和提升文档质量。

### 提交 PR 流程

1. Fork 本仓库到你的 GitHub 账户
2. 创建新的分支 `git checkout -b fix-doc-typo`
3. 在本地进行文档修改
4. 提交变更 `git commit -m "docs: 修正xxx文档中的错误"`
5. 推送到你的Fork仓库 `git push origin fix-doc-typo`
6. 创建 Pull Request 到主仓库的 `main` 分支

### PR 规范

- 每个 PR 专注于单一目标（如修复特定文档错误、添加特定主题内容）
- 提交信息遵循[约定式提交](https://www.conventionalcommits.org/zh-hans/v1.0.0/)规范
  - `docs: 更新xxx文档`
  - `fix: 修正xxx文档中的错误`
  - `feat: 添加xxx新文档`
- PR描述中请简要说明变更内容和原因

### 问题反馈

如果你发现文档中存在问题：
- 在 GitHub 仓库中[提交 Issue](https://github.com/LeoLin4258/rwkvcn-docs/issues/new/choose)，清晰描述问题所在
- 标注问题类型：错误修正、内容缺失、功能建议等
- 尽可能提供问题的具体位置（文件路径、章节名称）

### 审核流程

所有贡献将由维护者审核，可能会要求进行修改或提供额外信息。审核通过后，贡献将被合并到主分支。

---

<p align="center">
  <sub>文档由 RWKV 中文社区开源，遵循 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh">CC BY-NC-SA 4.0</a> 许可证</sub>
</p>

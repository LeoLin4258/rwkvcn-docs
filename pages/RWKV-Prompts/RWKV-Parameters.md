---
title: RWKV解码参数 - RWKV提示词
description: RWKV模型解码参数介绍，包括Temperature、Top_P、Presence Penalty和Frequency Penalty等参数的效果和推荐配置。
keywords: RWKV解码参数,RWKV采样参数,RWKV参数配置,RWKV参数推荐
---

你可能注意到了，很多 RWKV 部署/体验工具都支持调整 `Temperature`、`Top_P` 、`Presence Penalty `、`Frequency Penalty`等参数，这些参数是 RWKV 模型的“解码参数”（也可称之为“采样参数”）。

通过**调整解码参数**，可以改变模型的生成效果。

即使是使用同一个 Prompt、同一个 RWKV 模型，不同的参数配置可能获得截然不同的回答。

## RWKV 模型解码参数（预备知识）

RWKV 主要解码参数对应的效果如下：

| 参数                | 效果                                                                                                                                                            |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Temperature`       | 采样温度，就像给模型喝酒，数值越大随机性越强，更具创造力，数值越小则越保守稳定。                                                                                |
| `Top_P`             | 就像给模型喂镇静剂，优先考虑前 n% 概率质量的结果。如设置成 0.1 则考虑前 10% , 生成内容**质量更高但更保守**。如设置成 1 ，则考虑所有质量结果，**内容质量降低但更多样**。 |
| `Presence penalty`  | 存在惩罚，正值根据“新 token 在至今的文本中是否出现过”来对其进行惩罚，从而增加了模型**涉及新话题**的可能性。                                                         |
| `Frequency Penalty` | 频率惩罚，根据新内容在目前的文本中出现的频率/次数来对其进行惩罚，从而**减少模型原封不动地重复**相同短语/句子的可能性。                                              |

在解码参数中， Temperature 和 Top_P 两个参数对生成效果的影响最大。

**关于 Top_P**

降低 Top_P 就是给模型喂“镇静剂”，越低就越冷静、机械、准确、单调、无趣、重复。我们建议采用以下 Top_P 数值：

- 创意回答和写作，建议 Top_P 0.5 ~ 0.7。
- 机械的问答和摘要和翻译等等，建议 Top_P 0 ~ 0.5，甚至 0 ~ 0.3。
- 很机械的回答，例如回答“是/否”、ABCD、1234 之类，建议 Top_P 0。

**关于 Temperature**

增加 Temperature 就像给模型“喝酒”，它可以在 Top_P 低时增加文采和趣味，并减少重复内容。我们建议采用以下 Temperature 数值：

- 若 Top_P >= 0.7，建议 Temperature 1。
- 若 Top_P < 0.7，而且追求趣味，可以增加 Temperature 给模型喝酒（喝太多会胡言乱语）。如果追求准确，就保持 Temperature 1。
- 如果 Top_P 0.5，建议 Temperature 1 ~ 1.5。
- 如果 Top_P 0.3，建议 Temperature 1 ~ 1.7。
- 如果 Top_P <= 0.2，建议 Temperature 1 ~ 2。

**关于 Presence penalty**

增加 Presence penalty 可以让模型额外避免生成已经生成过的文字，建议先设为 0.2 ~ 0.4 。如果你认为生成的内容有重复，而且调 Top_P 和 Temperature 仍然不满意，可以调整 Presence penalty。

- 如果 Top_P 0.7，建议 Presence penalty 0 ~ 0.3。
- 如果 Top_P 0.5，建议 penalty 0 ~ 0.5。
- 如果 Top_P 0.3，建议 Presence penalty 0 ~ 0.7。
- 如果 Top_P <= 0.2，建议 Presence penalty 0 ~ 1。

**注意，如果 Presence penalty 数值过高，会让模型无法正常使用文字，例如无法使用正常的标点符号，或者直接乱码。**


## 推荐参数配置

我们为不同的任务提供了一些推荐的参数：

续写小说和对话这一类**需要创造性的任务**，需要高 Temperature + 低 Top_P 的参数组合，可以尝试以下四种参数搭配：

- Temperature 1.2 ，Top_P 0.5
- Temperature 1.4 ，Top_P 0.4 
- Temperature 1.4 ，Top_P 0.3
- Temperature 2 ，Top_P 0.2 

举个例子，续写小说可以尝试将 Temperature 设为 2 （ Temperature 增加会提高文采，但逻辑会下降），然后将 Top_P 设为 0.1 ~ 0.2 （Top_P 越低，逻辑能力越强），这样生成的小说内容逻辑和文采都很好。

完成**相对机械的任务**，例如材料问答、文章摘要等，则可将参数设为：

- Temperature 1 ，Top_P 0.2
- Temperature 1 ，Top_P 0.1
- Temperature 1 ，Top_P 0 

举个例子，如果你正在执行像关键词提取之类的机械任务，不需要模型进行任何开放性思考，则可以将 Temperature 设为 1 ，Top_P、Presence Penalty、Frequency Penalty 都设为 0 。


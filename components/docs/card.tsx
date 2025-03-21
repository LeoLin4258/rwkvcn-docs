export const CustomCard = () => {
    const cardData = [
        { imgUrl: '/images/RWKV-Wiki-Cover.png', title: '关于 RWKV', description: '了解 RWKV 的主要版本、模型和论文发布情况', link: '/RWKV-Wiki/Introduction' },
        { imgUrl: '/images/RWKV-Prompt-Cover.png', title: 'RWKV 提示词指南', description: '学习如何向 RWKV 提问，包括完成任务、角色扮演，等等', link: '/RWKV-Prompts/Chat-Prompts' },
        { imgUrl: '/images/RWKV-Finetune-Cover.png', title: 'RWKV 微调教程', description: '学习 RWKV 的全参、 LoRA、Pissa、State tuning 等微调方法', link: '/RWKV-Fine-Tuning/Introduction' },
        { imgUrl: '/images/RWKV-Runner-Cover.png', title: 'RWKV Runner 教程', description: 'RWKV Runner 是 RWKV 的本地部署软件，带新手友好的图形化界面', link: '/RWKV-Runner/Introduction' },
        { imgUrl: '/images/Ai00-Cover.png', title: 'Ai00 教程', description: 'Ai00 是 RWKV 模型推理工具，基于 Vulkan 后端，支持所有类型的显卡', link: '/ai00/Introduction' },
    ]
    return (
        <div className="cards-container">
            {cardData.map((card, index) => (
                <a className="card" href={card.link} key={index}>
                    {/* <img className='card-img' src={card.imgUrl} alt={card.title} /> */}
                    <div className='text-container'>
                        <div className='card-title'>{card.title}</div>
                        <div className='card-description'>{card.description}</div>
                    </div>
                </a>
            ))}
        </div>
    )
}

export const CustomCardBasic = () => {
    const cardData = [
        { imgUrl: '/images/RWKV-Wiki-Cover.png', title: '关于 RWKV', description: '关于 RWKV 的简述，包括 RWKV 的主要架构版本、模型和论文发布情况等信息', link: '/RWKV-Wiki/Introduction' },
        { imgUrl: '/images/RWKV-Prompt-Cover.png', title: '如何体验 RWKV 模型？', description: '我是新手，只想试用一下 RWKV 模型，该怎么做？', link: '/RWKV-Wiki/How-To-Play' },
        { imgUrl: '/images/RWKV-Wiki-Cover.png', title: 'RWKV 的模型种类和下载方法', description: 'RWKV 都有什么类型的模型？如何下载这些 RWKV 模型？', link: '/RWKV-Wiki/Model-Download' },
        { imgUrl: '/images/RWKV-Finetune-Cover.png', title: 'RWKV 的架构发展历史', description: <>了解 RWKV 从创建至今的架构变更和设计思路。<span className="warning-text">⚠️注意：此章节需要一定的神经网络基础</span></>, link: '/RWKV-Architecture' },
        // { imgUrl: '/images/RWKV-Prompt-Cover.png', title: 'RWKV 的 prompt 格式', description: 'RWKV 的 prompt 是什么？', link: '/RWKV-Wiki/Prompt-Format' },
    ]
    return (
        <div className="cards-container">
            {cardData.map((card, index) => (
                <a className="card" href={card.link} key={index}>
                    {/* <img className='card-img' src={card.imgUrl} alt={card.title} /> */}
                    <div className='text-container'>
                        <div className='card-title'>{card.title}</div>
                        <div className='card-description'>{card.description}</div>
                    </div>
                </a>
            ))}
        </div>
    )
}

export const CustomCardPrompt = () => {
    const cardData = [
        { imgUrl: '/images/RWKV-Prompt-Cover.png', title: 'RWKV 的解码参数', description: '通过调整 Temperature、Top_P 等解码参数，改变模型的生成效果', link: '/RWKV-Prompts/RWKV-Parameters' },
        { imgUrl: '/images/RWKV-Wiki-Cover.png', title: 'RWKV 的提示词格式', description: '通过使用 RWKV 偏好的提示词格式，改善模型的生成效果', link: '/RWKV-Prompts/Prompt-Format' },
        // { imgUrl: '/images/RWKV-Prompt-Cover.png', title: '如何体验 RWKV 模型？', description: '我是新手，只想试用一下 RWKV 模型，该怎么做？', link: '/RWKV-Wiki/How-To-Play' },

    ]
    return (
        <div className="cards-container">
            {cardData.map((card, index) => (
                <a className="card" href={card.link} key={index}>
                    {/* <img className='card-img' src={card.imgUrl} alt={card.title} /> */}
                    <div className='text-container'>
                        <div className='card-title'>{card.title}</div>
                        <div className='card-description'>{card.description}</div>
                    </div>
                </a>
            ))}
        </div>
    )
}

export const CustomCardLocal = () => {
    const cardData = [
        // { imgUrl: '/images/RWKV-Wiki-Cover.png', title: '关于 RWKV', description: '了解 RWKV 的发展历史、版本信息、架构原理等基础知识', link: '/RWKV-Wiki/Introduction' },
        // { imgUrl: '/images/RWKV-Prompt-Cover.png', title: 'RWKV 提示词指南', description: '学习如何向 RWKV 提问，包括完成任务、角色扮演，等等', link: '/RWKV-Prompts/Chat-Prompts' },
        // { imgUrl: '/images/RWKV-Finetune-Cover.png', title: 'RWKV 微调教程', description: '学习 RWKV 的全参、 LoRA、Pissa、State tuning 等微调方法', link: '/RWKV-Fine-Tuning/Introduction' },
        { imgUrl: '/images/RWKV-Runner-Cover.png', title: 'RWKV Runner 教程', description: 'RWKV 本地部署软件，带新手友好的图形化界面。支持一键安装和 API 调用', link: '/RWKV-Runner/Introduction' },
        { imgUrl: '/images/Ai00-Cover.png', title: 'Ai00 教程', description: '基于 WebGPU（vulkan） 的推理工具，支持大多数 GPU 和集显，支持 nf4/int8 量化推理', link: '/ai00/Introduction' },
        { imgUrl: '/images/llamacpp-Cover.png', title: 'llamacpp 教程', description: '一个轻量化的大语言模型运行框架，专门优化了在 CPU 上运行模型的性能。', link: '/llamacpp' },
        { imgUrl: '/images/RWKV-Runner-Cover.png', title: 'Ollama 教程', description: 'Ollama 支持在个人电脑上一键部署和运行各类开源模型，配置简单、资源占用低', link: '/RWKV-Inference/Ollama' },
        { imgUrl: '/images/RWKV-Runner-Cover.png', title: 'KoboldCpp 教程', description: '简单易用的 AI 模型推理和文本生成工具，基于 llama.cpp 构建', link: '/RWKV-Inference/KoboldCpp' },
        { imgUrl: '/images/RWKV-Runner-Cover.png', title: 'text-generation-webui 教程', description: 'text-generation-webui 提供了一个友好的网页界面，可以轻松地在 Web 页面中配置和运行模型', link: '/RWKV-Inference/text-generation-webui' },
    ]
    return (
        <div className="cards-container">
            {cardData.map((card, index) => (
                <a className="card" href={card.link} key={index}>
                    {/* <img className='card-img' src={card.imgUrl} alt={card.title} /> */}
                    <div className='text-container'>
                        <div className='card-title'>{card.title}</div>
                        <div className='card-description'>{card.description}</div>
                    </div>
                </a>
            ))}
        </div>
    )
}

export const CustomCardFinetuneInfo = () => {
    const cardData = [
        { imgUrl: '/images/RWKV-Runner-Cover.png', title: '什么是微调', description: '什么是微调训练？微调 RWKV 模型需要什么硬件资源？', link: '/RWKV-Fine-Tuning/Introduction' },
        { imgUrl: '/images/RWKV-Finetune-Cover.png', title: '配置微调训练的软件环境', description: '配置微调训练的软件环境，包括 Conda 虚拟环境和 Pytorch 等软件包', link: '/RWKV-Fine-Tuning/FT-Environment' },
        { imgUrl: '/images/Ai00-Cover.png', title: '准备微调数据', description: '根据你的目标任务，收集特定格式的训练数据，将其处理为 binidx 格式', link: '/RWKV-Fine-Tuning/FT-Dataset' },
    ]
    return (
        <div className="cards-container">
            {cardData.map((card, index) => (
                <a className="card" href={card.link} key={index}>
                    {/* <img className='card-img' src={card.imgUrl} alt={card.title} /> */}
                    <div className='text-container'>
                        <div className='card-title'>{card.title}</div>
                        <div className='card-description'>{card.description}</div>
                    </div>
                </a>
            ))}
        </div>
    )
}

export const CustomCardFinetune = () => {
    const cardData = [
        { imgUrl: '/images/RWKV-Wiki-Cover.png', title: 'DiSHA 微调教程【推荐】', description: '一种新颖的微调方法，速度更快，效果比 LoRA 更好', link: '/RWKV-Fine-Tuning/DiSHA-Fine-Tuning' },
        { imgUrl: '/images/RWKV-Wiki-Cover.png', title: 'State Tuning 微调教程', description: 'RWKV 的特色微调方法，使模型快速学习某种生成风格，或学习特定的生成格式', link: '/RWKV-Fine-Tuning/State-Tuning' },
        { imgUrl: '/images/RWKV-Wiki-Cover.png', title: 'LoRA 微调教程', description: 'LoRA 微调是非常经典的 PEFT 参数微调方法', link: '/RWKV-Fine-Tuning/LoRA-Fine-Tuning' },
        { imgUrl: '/images/RWKV-Wiki-Cover.png', title: 'Pissa 微调教程', description: 'PiSSA 微调可以看作是 LoRA 的优化版本，但效果更好', link: '/RWKV-Fine-Tuning/Pissa-Fine-Tuning' },
    ]
    return (
        <div className="cards-container">
            {cardData.map((card, index) => (
                <a className="card" href={card.link} key={index}>
                    {/* <img className='card-img' src={card.imgUrl} alt={card.title} /> */}
                    <div className='text-container'>
                        <div className='card-title'>{card.title}</div>
                        <div className='card-description'>{card.description}</div>
                    </div>
                </a>
            ))}
        </div>
    )
}
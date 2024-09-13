export const CustomCard = () => {
    const cardData = [
        { imgUrl: '/images/doc-cover-1.png', title: 'RWKV 百科', description: '了解 RWKV 的发展历史、版本信息、架构原理等基础知识', link: '/RWKV-Wiki/Introduction' },
        { imgUrl: '/images/doc-cover-5.png', title: 'RWKV 提示词指南', description: '学习如何向 RWKV 提问，包括完成任务、角色扮演，等等', link: '/RWKV-Prompts/Chat-Prompts' },
        { imgUrl: '/images/doc-cover-2.png', title: 'RWKV 微调教程', description: '学习 RWKV 的全参、 LoRA、Pissa、State tuning 等微调方法', link: '/RWKV-Fine-Tuning/Introduction' },
        { imgUrl: '/images/doc-cover-3.png', title: 'RWKV Runner 教程', description: 'RWKV Runner 是 RWKV 的本地部署软件，带新手友好的图形化界面', link: '/RWKV-Runner/Introduction' },
        { imgUrl: '/images/doc-cover-4.png', title: 'Ai00 教程', description: 'Ai00 是 RWKV 模型推理工具，基于 Vulkan 后端，支持所有类型的显卡', link: '/ai00/Introduction' },
    ]
    return (
        <div className="cards-container">
            {cardData.map((card, index) => (
                <a className="card" href={card.link} key={index}>
                    <img className='card-img' src={card.imgUrl} alt={card.title} />
                    <div className='text-container'>
                        <div className='card-title'>{card.title}</div>
                        <div className='card-description'>{card.description}</div>
                    </div>
                </a>
            ))}
        </div>
    )
}
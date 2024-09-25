export const chartData = [
    {
        name: '14B',
        labels: [
            'Average',
            'ao3 english',
            'bbc news',
            'wikipedia english',
            'arxiv computer science',
            'arxiv physics',
            'github cpp',
            'github python'
        ],
        datasets: [
            {
                label: 'Mistral-Nemo-Base-2407',
                data: [7.107, 10.070, 8.081, 7.954, 7.419, 7.656, 4.203, 4.368]
            },
            {
                label: 'RWKV-x060-World-14B-v2.1',
                data: [7.609, 10.188, 8.518, 8.343, 7.916, 8.040, 4.930, 5.330]
            },
            {
                label: 'Llama-2-13b-hf',
                data: [7.676, 10.524, 8.279, 8.187, 8.075, 8.311, 4.929, 5.426]
            },
            {
                label: 'Qwen1.5-14B',
                data: [7.697, 10.880, 8.884, 9.102, 7.752, 7.862, 4.665, 4.736]
            }
        ]
    },
    {
        name: '7B',
        labels: [
            'Average',
            'ao3 english',
            'bbc news',
            'wikipedia english',
            'arxiv computer science',
            'arxiv physics',
            'github cpp',
            'github python'
        ],
        datasets: [
            {
                label: 'Mistral-Nemo-Base-2407',
                data: [3.107, 10.070, 8.081, 7.954, 7.419, 7.656, 4.203, 4.368]
            },
            {
                label: 'RWKV-x060-World-14B-v2.1',
                data: [7.609, 10.188, 8.518, 8.343, 7.916, 8.040, 4.930, 5.330]
            },
            {
                label: 'Llama-2-13b-hf',
                data: [7.676, 10.524, 8.279, 8.187, 8.075, 8.311, 4.929, 5.426]
            },
            {
                label: 'Qwen1.5-14B',
                data: [7.697, 10.880, 8.884, 9.102, 7.752, 7.862, 4.665, 4.736]
            }
        ]
    },
    {
        name: 'Single-Document-QA-test',
        model: ['GPT-3.5-Turbo-16k', 'Llama2-7B-chat-4k', 'LongChat-v1.5-7B-32k', 'XGen-7B-8k', 'InternLM-7B-8k', 'ChatGLM2-6B-32k', 'Vicuna-v1.5-7B-16k', 'ChatGLM3-6B-32k', 'Mamba_1B4', 'Mamba_2B8', 'Llma2_7B', 'mistral_7B', 'RWKV-6-v2.1-1B6', 'RWKV-6-v2.1-3B', 'RWKV-6-v2.1-7b-4k'],
        series: [
            {
                name: 'NarrativeQA',
                type: 'bar',
                data: [23.6, 18.7, 16.9, 18.0, 12.1, 21.1, 19.4, 26.0, 2.23, 2.32, 18.7, 12.79, 4.53, 2.87, 20.75]
            },
            {
                name: 'Qasper',
                type: 'bar',
                data: [43.3, 19.2, 27.7, 18.1, 16.7, 31.5, 26.1, 43.3, 4.44, 4.89, 19.2, 8.9, 19.79, 14.2, 40.2]
            },
            {
                name: 'MultiFieldQA-en',
                type: 'bar',
                data: [52.3, 36.8, 41.4, 37.7, 23.4, 46.2, 38.5, 51.7, 11.33, 8.15, 11.90, 30.55, 22.99, 18.78, 36.01]
            },
            {
                name: 'MultiFieldQA-zh',
                type: 'bar',
                data: [61.2, 11.9, 29.1, 14.8, 33.6, 51.6, 43.0, 62.3, 13.03, 6.83, 36.8, 17.91, 18.57, 21.49, 50.19]
            }
        ]
    },
    {
        name: 'Multi-Task-QA-test',
        model: ['GPT-3.5-Turbo-16k', 'Llama2-7B-chat-4k', 'LongChat-v1.5-7B-32k', 'XGen-7B-8k', 'InternLM-7B-8k', 'ChatGLM2-6B-32k', 'Vicuna-v1.5-7B-16k', 'ChatGLM3-6B-32k', 'Mamba_1B4', 'Mamba_2B8', 'Llma2_7B', 'mistral_7B', 'RWKV-6-v2.1-1B6', 'RWKV-6-v2.1-3B', 'RWKV-6-v2.1-7b-4k'],
        series: [
            {
                name: 'HotpotQA',
                type: 'bar',
                data: [51.6, 25.4, 31.5, 29.7, 28.7, 45.1, 25.3, 54.4, 5.73, 5.49, 25.4, 9.39, 8.72, 6.79, 22.74]
            },
            {
                name: '2WikiMQA',
                type: 'bar',
                data: [37.7, 32.8, 20.6, 21.1, 22.8, 34.0, 20.8, 44.9, 8.77, 8.45, 32.8, 11.17, 11.86, 9.64, 16.3]
            },
            {
                name: 'Musique',
                type: 'bar',
                data: [26.9, 9.4, 9.7, 10.3, 9.0, 21.9, 9.8, 40.4, 3.3, 3.45, 9.4, 4.58, 3.96, 4.13, 10.49]
            },
            {
                name: 'DuReader (zh)',
                type: 'bar',
                data: [28.7, 5.2, 19.5, 11.0, 11.1, 37.6, 19.3, 44.78, 11.95, 13.96, 5.2, 11.68, 11.40, 17.41, 28.01]
            }
        ]
    },
    {
        name: 'Summarization-test',
        model: ['GPT-3.5-Turbo-16k', 'Llama2-7B-chat-4k', 'LongChat-v1.5-7B-32k', 'XGen-7B-8k', 'InternLM-7B-8k', 'ChatGLM2-6B-32k', 'Vicuna-v1.5-7B-16k', 'ChatGLM3-6B-32k', 'Mamba_1B4', 'Mamba_2B8', 'Llma2_7B', 'mistral_7B', 'RWKV-6-v2.1-1B6', 'RWKV-6-v2.1-3B', 'RWKV-6-v2.1-7b-4k'],
        series: [
            {
                name: 'GovReport',
                type: 'bar',
                data: [29.5, 27.3, 30.8, 27.3, 9.7, 32.4, 27.9, 36.8, 9.34, 10.41, 27.3, 28.84, 17.51, 19.21, 31.64]
            },
            {
                name: 'QMSum',
                type: 'bar',
                data: [23.4, 20.8, 22.7, 20.5, 15.9, 24.0, 22.8, 23.9, 10.85, 11.42, 20.8, 20.32, 20.36, 21.0, 21.31]
            },
            {
                name: 'MultiNews',
                type: 'bar',
                data: [26.7, 25.8, 26.4, 26.2, 22.8, 26.5, 27.2, 27.9, 15.86, 18.94, 25.8, 22.79, 21.52, 21.76, 26.06]
            },
            {
                name: 'VCSUM (zh)',
                type: 'bar',
                data: [16.0, 0.2, 9.9, 2.2, 12.4, 16.2, 15.1, 17.8, 6.33, 6.1, 0.2, 4.1, 10.71, 10.18, 15.19]
            }
        ]
    },
    {
        name: 'Few-shot-Learning-test',
        model: ['GPT-3.5-Turbo-16k', 'Llama2-7B-chat-4k', 'LongChat-v1.5-7B-32k', 'XGen-7B-8k', 'InternLM-7B-8k', 'ChatGLM2-6B-32k', 'Vicuna-v1.5-7B-16k', 'ChatGLM3-6B-32k', 'Mamba_1B4', 'Mamba_2B8', 'Llma2_7B', 'mistral_7B', 'RWKV-6-v2.1-1B6', 'RWKV-6-v2.1-3B', 'RWKV-6-v2.1-7b-4k'],
        series: [
            {
                name: 'TREC',
                type: 'bar',
                data: [68.0, 61.5, 63.5, 65.5, 52.0, 62.5, 71.5, 79.0, 45.5, 21.5, 61.5, 70.0, 39.5, 51.5, 55.5]
            },
            {
                name: 'TriviaQA',
                type: 'bar',
                data: [91.4, 77.8, 82.3, 77.8, 77.8, 78.7, 86.2, 87.1, 37.33, 34.62, 77.8, 89.26, 47.64, 57.15, 86.89]
            },
            {
                name: 'SAMSum',
                type: 'bar',
                data: [41.7, 40.7, 34.2, 25.3, 21.2, 36.3, 40.8, 38.2, 12.56, 9.3, 40.7, 43.74, 13.58, 17.95, 44.25]
            },
            {
                name: 'LSHT (zh)',
                type: 'bar',
                data: [29.2, 19.8, 23.2, 20.5, 15.2, 27.7, 28.8, 42.0, 8.5, 5, 19.8, 25.5, 18.8, 15.2, 30.2]
            }
        ]
    },
    {
        name: 'Synthetic Tasks（合成任务）',
        model: ['GPT-3.5-Turbo-16k', 'Llama2-7B-chat-4k', 'LongChat-v1.5-7B-32k', 'XGen-7B-8k', 'InternLM-7B-8k', 'ChatGLM2-6B-32k', 'Vicuna-v1.5-7B-16k', 'ChatGLM3-6B-32k', 'Mamba_1B4', 'Mamba_2B8', 'Llma2_7B', 'mistral_7B', 'RWKV-6-v2.1-1B6', 'RWKV-6-v2.1-3B', 'RWKV-6-v2.1-7b-4k'],
        series: [
            {
                name: 'Passage Count',
                type: 'bar',
                data: [4.5, 2.1, 1.0, 2.1, 3.0, 1.5, 6.5, 2.0, 0.45, 0.74, 2.1, 1.05, 0, 0, 5]
            },
            {
                name: 'PassageRetrieval-en',
                type: 'bar',
                data: [71.0, 9.8, 30.5, 8.5, 6.0, 77.0, 4.5, 99.0, 3.32, 1.83, 9.8, 12.5, 4.25, 3.83, 34.5]
            },
            {
                name: 'PassageRetrieval-zh',
                type: 'bar',
                data: [77.5, 0.5, 7.6, 3.5, 0.9, 64.5, 5.0, 94.0, 3.81, 3.37, 0.5, 16.75, 4.16, 4.12, 54.22]
            }
        ]
    },
    {
        name: 'Code Completion（代码续写）',
        model: ['GPT-3.5-Turbo-16k', 'Llama2-7B-chat-4k', 'LongChat-v1.5-7B-32k', 'XGen-7B-8k', 'InternLM-7B-8k', 'ChatGLM2-6B-32k', 'Vicuna-v1.5-7B-16k', 'ChatGLM3-6B-32k', 'Mamba_1B4', 'Mamba_2B8', 'Llma2_7B', 'mistral_7B', 'RWKV-6-v2.1-1B6', 'RWKV-6-v2.1-3B', 'RWKV-6-v2.1-7b-4k'],
        series: [
            {
                name: 'LCC',
                type: 'bar',
                data: [54.7, 52.4, 53.0, 38.6, 44.1, 55.6, 51.0, 57.66, 44.33, 39.53, 52.4, 70.64, 39.5, 40.01, 73.84]
            },
            {
                name: 'RepoBench-P',
                type: 'bar',
                data: [53.6, 43.8, 55.3, 38.6, 28.8, 49.9, 43.5, 54.76, 41.86, 24.38, 43.8, 59.7, 40.44, 41.35, 54.1]
            }
        ]
    },
    {
        name: 'RWKV、Mamba 和 Llma2 的综合评分对比',
        model: ['RWKV-6-v2.1-1B6', 'RWKV-6-v2.1-3B', 'RWKV-6-v2.1-7b-4k', 'Mamba_1B4', 'Mamba_2B8', 'Llma2_7B', 'mistral_7B'],
        series: [
            {
                name: 'Single DocQ',
                type: 'bar',
                data: [16.470, 14.335, 36.788, 7.758, 5.548, 21.650, 17.538]
            },
            {
                name: 'Few-shc',
                type: 'bar',
                data: [29.868, 35.443, 54.203, 25.973, 17.605, 49.950, 52.833]
            },
            {
                name: 'Summarization',
                type: 'bar',
                data: [17.525, 18.038, 23.550, 10.595, 11.718, 18.525, 19.013]
            },
            {
                name: 'Multi Doc QA',
                type: 'bar',
                data: [8.985, 9.493, 19.385, 7.438, 7.838, 18.200, 9.205]
            },
            {
                name: 'Code Completion',
                type: 'bar',
                data: [39.970, 40.680, 63.970, 43.095, 31.955, 48.100, 65.17]
            },
            {
                name: 'Syntetic',
                type: 'bar',
                data: [2.803, 2.650, 31.240, 2.527, 1.980, 4.133, 10.100]
            }
        ]
    },
    {
        name: 'NIAH-Tasks',
        model: ['NIAH_single_1', 'NIAH_single_2', 'NIAH_single_3', 'NIAH_multikey_1', 'NIAH_multikey_2', 'NIAH_multikey_3', 'NIAH_multivalue', 'NIAH_multiquery', '多跳跟踪', '常用词提取 （CWE）', '高频词提取 （FWE）', 'qa_1', 'qa_2'],
        series: [
            {
                name: 'Scores',
                type: 'bar',
                data: [100, 98.67, 95, 48.33, 7.67, 1.33, 80.42, 83.67, 7.53, 38.6, 78.33, 45, 37]
            }
        ]
    }
] 

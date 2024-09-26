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
        datasets:[
            { label: 'Mistral-Nemo-Base-2407', data: [7.107, 10.07, 8.081, 7.954, 7.419, 7.656, 4.203, 4.368] },
            { label: 'RWKV-6-14B-v2.1', data: [7.609, 10.188, 8.518, 8.343, 7.916, 8.04, 4.93, 5.33] },
            { label: 'Llama-2-13b-hf', data: [7.676, 10.524, 8.279, 8.187, 8.075, 8.311, 4.929, 5.426] },
            { label: 'Qwen1.5-14B', data: [7.697, 10.88, 8.884, 9.102, 7.752, 7.862, 4.665, 4.736] },
            { label: 'pythia-12b-v0', data: [8.356, 11.285, 9.19, 9.527, 8.535, 8.398, 5.43, 6.125] }
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
        datasets:[
            { label: 'Meta-Llama-3.1-8B', data: [7.227, 10.529, 8.201, 7.932, 7.549, 7.686, 4.204, 4.487] },
            { label: 'Qwen2.5-7B', data: [7.453, 10.931, 8.742, 8.815, 7.683, 7.991, 3.92, 4.091] },
            { label: 'Qwen2-7B', data: [7.528, 10.814, 8.582, 8.709, 7.822, 8.249, 4.204, 4.317] },
            { label: 'Mistral-7B-v0.1', data: [7.58, 10.546, 8.282, 8.435, 7.852, 8.092, 4.8, 5.051] },
            { label: 'RWKV-6-World-7B-v2.1', data: [7.817, 10.41, 8.74, 8.577, 8.107, 8.248, 5.122, 5.516] },
            { label: 'Yi-1.5-6B', data: [7.83, 10.926, 8.789, 8.948, 8.098, 8.41, 4.746, 4.89] },
            { label: 'OLMo-1.7-7B-hf', data: [7.881, 11.012, 8.647, 8.987, 8.004, 8.2, 4.966, 5.354] },
            { label: 'RWKV-5-World-7B-v2', data: [7.905, 10.495, 8.878, 8.694, 8.184, 8.311, 5.187, 5.587] },
            { label: 'Qwen1.5-7B', data: [7.916, 11.1, 9.126, 9.357, 7.953, 8.107, 4.845, 4.924] },
            { label: 'mpt-7b', data: [7.95, 11.185, 8.682, 8.771, 8.157, 8.438, 4.954, 5.466] },
            { label: 'Llama-2-7b-hf', data: [7.967, 10.842, 8.511, 8.521, 8.33, 8.63, 5.235, 5.703] },
            { label: 'Zamba-7B-v1', data: [8.089, 10.846, 8.52, 8.639, 8.06, 8.29, 5.938, 6.328] },
            { label: 'open_llama_7b_v2', data: [8.103, 11.086, 8.839, 9.053, 8.404, 8.757, 4.887, 5.698] },
            { label: 'falcon-7b', data: [8.302, 10.756, 8.691, 9.147, 8.549, 9.06, 5.763, 6.149] },
            { label: 'pythia-6.9b-v0', data: [8.545, 11.495, 9.375, 9.757, 8.683, 8.572, 5.611, 6.321] },
            { label: 'mamba-7b-rw', data: [9.782, 10.808, 8.548, 8.99, 8.613, 9.142, 11.107, 11.268] }
          ]
    },
    {
        name: 'Single-Document-QA-test',
        model: ['GPT-3.5-Turbo-16k', 'Llama2-7B-chat-4k', 'LongChat-v1.5-7B-32k', 'XGen-7B-8k', 'InternLM-7B-8k', 'ChatGLM2-6B-32k', 'Vicuna-v1.5-7B-16k', 'ChatGLM3-6B-32k', 'Mamba_1B4', 'Mamba_2B8', 'Llma2_7B', 'mistral_7B', 'RWKV-6-World-1B6-v2.1', 'RWKV-6-World-3B-v2.1', 'RWKV-6-World-7b-v2.1-4k'],
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
        model: ['GPT-3.5-Turbo-16k', 'Llama2-7B-chat-4k', 'LongChat-v1.5-7B-32k', 'XGen-7B-8k', 'InternLM-7B-8k', 'ChatGLM2-6B-32k', 'Vicuna-v1.5-7B-16k', 'ChatGLM3-6B-32k', 'Mamba_1B4', 'Mamba_2B8', 'Llma2_7B', 'mistral_7B', 'RWKV-6-World-1B6-v2.1', 'RWKV-6-World-3B-v2.1', 'RWKV-6-World-7b-v2.1-4k'],
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
        model: ['GPT-3.5-Turbo-16k', 'Llama2-7B-chat-4k', 'LongChat-v1.5-7B-32k', 'XGen-7B-8k', 'InternLM-7B-8k', 'ChatGLM2-6B-32k', 'Vicuna-v1.5-7B-16k', 'ChatGLM3-6B-32k', 'Mamba_1B4', 'Mamba_2B8', 'Llma2_7B', 'mistral_7B', 'RWKV-6-World-1B6-v2.1', 'RWKV-6-World-3B-v2.1', 'RWKV-6-World-7b-v2.1-4k'],
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
        model: ['GPT-3.5-Turbo-16k', 'Llama2-7B-chat-4k', 'LongChat-v1.5-7B-32k', 'XGen-7B-8k', 'InternLM-7B-8k', 'ChatGLM2-6B-32k', 'Vicuna-v1.5-7B-16k', 'ChatGLM3-6B-32k', 'Mamba_1B4', 'Mamba_2B8', 'Llma2_7B', 'mistral_7B', 'RWKV-6-World-1B6-v2.1', 'RWKV-6-World-3B-v2.1', 'RWKV-6-World-7b-v2.1-4k'],
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
        model: ['GPT-3.5-Turbo-16k', 'Llama2-7B-chat-4k', 'LongChat-v1.5-7B-32k', 'XGen-7B-8k', 'InternLM-7B-8k', 'ChatGLM2-6B-32k', 'Vicuna-v1.5-7B-16k', 'ChatGLM3-6B-32k', 'Mamba_1B4', 'Mamba_2B8', 'Llma2_7B', 'mistral_7B', 'RWKV-6-World-1B6-v2.1', 'RWKV-6-World-3B-v2.1', 'RWKV-6-World-7b-v2.1-4k'],
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
        model: ['GPT-3.5-Turbo-16k', 'Llama2-7B-chat-4k', 'LongChat-v1.5-7B-32k', 'XGen-7B-8k', 'InternLM-7B-8k', 'ChatGLM2-6B-32k', 'Vicuna-v1.5-7B-16k', 'ChatGLM3-6B-32k', 'Mamba_1B4', 'Mamba_2B8', 'Llma2_7B', 'mistral_7B', 'RWKV-6-World-1B6-v2.1', 'RWKV-6-World-3B-v2.1', 'RWKV-6-World-7b-v2.1-4k'],
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
        model: ['RWKV-6-World-1B6-v2.1', 'RWKV-6-World-3B-v2.1', 'RWKV-6-World-7b-v2.1-4k', 'Mamba_1B4', 'Mamba_2B8', 'Llma2_7B', 'mistral_7B'],
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
    },
    {
        name: '3B',
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
            { label: 'stablelm-3b-4e1t', data: [8.032, 11.049, 8.795, 8.826, 8.355, 8.64, 4.974, 5.585] },
            { label: 'Minitron-4B-Base', data: [8.142, 11.219, 9.045, 9.202, 8.3, 8.857, 4.954, 5.416] },
            { label: 'recurrentgemma-2b', data: [8.167, 11.454, 8.922, 9.164, 8.445, 8.664, 5.006, 5.512] },
            { label: 'Qwen1.5-4B', data: [8.25, 11.612, 9.335, 9.781, 8.233, 8.449, 5.143, 5.197] },
            { label: 'Llama-3.1-Minitron-4B', data: [8.257, 11.404, 9.261, 9.399, 8.456, 9.068, 4.912, 5.298] },
            { label: 'RWKV-6-World-3B-v2.1', data: [8.263, 10.835, 9.156, 9.103, 8.492, 8.721, 5.573, 5.961] },
            { label: 'Phi-3-mini-4k-instruct', data: [8.333, 11.978, 9.19, 9.301, 8.386, 9.015, 5.443, 5.021] },
            { label: 'mamba2attn-2.7b', data: [8.359, 11.285, 9.227, 9.593, 8.52, 8.399, 5.405, 6.084] },
            { label: 'gemma-2b', data: [8.385, 11.741, 9.137, 9.391, 8.686, 8.878, 5.19, 5.675] },
            { label: 'RWKV-5-World-3B-v2', data: [8.409, 10.987, 9.343, 9.297, 8.62, 8.836, 5.699, 6.08] },
            { label: 'open_llama_3b_v2', data: [8.459, 11.466, 9.149, 9.47, 8.744, 9.156, 5.205, 6.023] },
            { label: 'mamba2-2.7b', data: [8.469, 11.377, 9.316, 9.717, 8.617, 8.489, 5.524, 6.243] },
            { label: 'Phi-3.5-mini-instruct', data: [8.476, 12.163, 9.313, 9.431, 8.567, 9.147, 5.513, 5.197] },
            { label: 'Zamba2-2.7B', data: [8.571, 11.166, 8.934, 9.143, 8.424, 8.877, 6.776, 6.675] },
            { label: 'mamba-2.8b-hf', data: [8.593, 11.462, 9.428, 9.872, 8.76, 8.636, 5.638, 6.352] },
            { label: 'RWKV-4-World-3B-v1', data: [8.705, 11.042, 9.512, 9.588, 9.129, 9.425, 5.854, 6.383] },
            { label: 'pythia-2.8b-v0', data: [8.845, 11.815, 9.684, 10.155, 8.923, 8.855, 5.887, 6.597] },
            { label: 'RedPajama-INCITE-Base-3B-v1', data: [8.869, 11.661, 9.128, 9.29, 8.882, 9.208, 6.617, 7.294] },
            { label: 'phi-2', data: [8.911, 12.28, 9.283, 9.582, 8.815, 9.858, 6.771, 5.789] },
            { label: 'btlm-3b-8k-base', data: [8.959, 11.807, 9.082, 9.097, 8.571, 8.88, 7.464, 7.812] },
            { label: 'RWKV-4-Pile-3B', data: [9.02, 11.79, 9.758, 10.397, 9.204, 9.059, 6.085, 6.85] },
            { label: 'Sheared-LLaMA-2.7B', data: [9.099, 11.58, 9.146, 9.613, 9.107, 9.647, 7.066, 7.535] },
            { label: 'MiniCPM3-4B', data: [9.119, 13.229, 10.711, 10.719, 8.754, 9.034, 5.545, 5.839] },
            { label: 'mamba-2.8b-slimpj', data: [9.247, 13.811, 9.66, 9.151, 8.711, 8.922, 7.043, 7.428] },
            { label: 'OpenELM-3B', data: [9.679, 14.051, 10.08, 9.974, 9.159, 9.517, 7.402, 7.572] },
        ]
    },
    {
        name: '1B',
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
                label: 'Qwen2-1.5B',
                data: [8.457, 11.777, 9.443, 9.876, 8.751, 9.323, 5.019, 5.009]
            },
            {
                label: 'Index-1.9B',
                data: [8.491, 11.662, 9.495, 9.521, 8.546, 8.717, 5.533, 5.963]
            },
            {
                label: 'stablelm-2-1_6b',
                data: [8.531, 11.563, 9.211, 9.381, 8.791, 9.248, 5.646, 5.875]
            },
            {
                label: 'Rene-v0.1-1.3b-pytorch',
                data: [8.559, 11.621, 9.199, 9.839, 8.653, 9.086, 5.542, 5.973]
            },
            {
                label: 'RWKV-6-World-1B6-v2.1',
                data: [8.676, 11.240, 9.546, 9.595, 8.842, 9.145, 6.002, 6.364]
            },
            {
                label: 'RWKV-5-World-1B5-v2',
                data: [8.826, 11.391, 9.741, 9.795, 8.972, 9.256, 6.127, 6.500]
            },
            {
                label: 'mamba2-1.3b',
                data: [8.857, 11.776, 9.693, 10.202, 8.939, 8.864, 5.899, 6.623]
            },
            {
                label: 'mamba-1.4b-hf',
                data: [8.966, 11.845, 9.770, 10.320, 9.082, 8.986, 6.009, 6.748]
            },
            {
                label: 'TinyLlama-1.1B-intermediate-step-1431k-3T',
                data: [8.988, 12.399, 9.742, 10.004, 9.300, 9.779, 5.642, 6.047]
            },
            {
                label: 'Qwen1.5-1.8B',
                data: [9.143, 12.452, 9.894, 10.609, 9.138, 9.717, 5.930, 6.261]
            },
            {
                label: 'RWKV-4-World-1.5B-v1',
                data: [9.188, 11.465, 9.943, 10.109, 9.573, 9.964, 6.393, 6.869]
            },
            {
                label: 'OLMo-1B-hf',
                data: [9.197, 12.137, 9.605, 10.342, 9.259, 9.909, 6.310, 6.817]
            },
            {
                label: 'Qwen-1_8B',
                data: [9.326, 12.595, 9.994, 10.768, 9.317, 9.960, 6.164, 6.483]
            },
            {
                label: 'pythia-1.4b-v0',
                data: [9.333, 12.323, 10.129, 10.780, 9.320, 9.333, 6.342, 7.105]
            },
            {
                label: 'RWKV-4-Pile-1B5',
                data: [9.460, 12.214, 10.162, 10.884, 9.594, 9.484, 6.556, 7.328]
            },
            {
                label: 'h2o-danube-1.8b-base',
                data: [9.719, 11.647, 9.184, 9.515, 9.338, 10.038, 9.286, 9.023]
            },
            {
                label: 'Sheared-LLaMA-1.3B',
                data: [9.784, 12.192, 9.698, 10.301, 9.683, 10.382, 7.893, 8.339]
            },
            {
                label: 'bloom-1b7',
                data: [9.820, 13.430, 10.917, 11.413, 9.490, 9.851, 6.377, 7.262]
            },
            {
                label: 'OpenELM-1_1B',
                data: [10.193, 14.926, 10.581, 10.518, 9.490, 10.011, 7.875, 7.948]
            },
            {
                label: 'TransNormerLLM-1B',
                data: [10.448, 12.893, 10.497, 11.104, 10.670, 11.361, 7.729, 8.883]
            },
            {
                label: 'phi-1_5',
                data: [10.498, 13.447, 11.084, 13.506, 9.994, 11.724, 7.306, 6.425]
            },
            {
                label: 'falcon-rw-1b',
                data: [12.117, 12.062, 9.561, 10.490, 9.631, 10.524, 16.314, 16.238]
            }
        ]
    },
] 

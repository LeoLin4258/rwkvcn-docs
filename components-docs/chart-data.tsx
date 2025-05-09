// Migrated from V1, should be rewritten in the future.

export const chartData = [
    {
        name: 'Uncheatable-Eval-14B',
        labels: ['Average', 'ao3\nenglish', 'bbc\nnews', 'wikipedia\nenglish', 'arxiv\ncomputer\nscience', 'arxiv\nphysics', 'github\ncpp', 'github\npython'],
        datasets: [
            { label: 'Mistral-Nemo-Base-2407', data: [7.107, 10.07, 8.081, 7.954, 7.419, 7.656, 4.203, 4.368] },
            { label: 'RWKV-6-14B-v2.1', data: [7.609, 10.188, 8.518, 8.343, 7.916, 8.04, 4.93, 5.33] },
            { label: 'Llama-2-13b-hf', data: [7.676, 10.524, 8.279, 8.187, 8.075, 8.311, 4.929, 5.426] },
            { label: 'Qwen1.5-14B', data: [7.697, 10.88, 8.884, 9.102, 7.752, 7.862, 4.665, 4.736] },
            { label: 'pythia-12b-v0', data: [8.356, 11.285, 9.19, 9.527, 8.535, 8.398, 5.43, 6.125] }
        ]
    },
    {
        name: 'Uncheatable-Eval-7B',
        labels: ['Average', 'ao3\nenglish', 'bbc\nnews', 'wikipedia\nenglish', 'arxiv\ncomputer\nscience', 'arxiv\nphysics', 'github\ncpp', 'github\npython'],
        datasets: [
            { label: 'Llama-3.1-8B', data: [8.283, 10.455, 8.204, 7.862, 7.444, 7.560, 4.249, 4.641] },
            { label: 'Qwen2.5-7B', data: [8.316, 10.857, 8.720, 8.597, 7.559, 7.873, 3.983, 4.252] },
            { label: 'Qwen2-7B', data: [8.343, 10.752, 8.574, 8.430, 7.700, 8.129, 4.281, 4.473] },
            { label: 'RWKV-x060-World-7B-v3-20241112-ctx4096', data: [8.528, 10.411, 8.730, 8.359, 7.917, 8.179, 4.924, 5.525] },
            { label: 'Yi-1.5-6B', data: [8.554, 10.862, 8.791, 8.531, 7.975, 8.298, 4.747, 5.159] },
            { label: 'RWKV-x060-World-7B-v2.1-20240507-ctx4096', data: [8.670, 10.338, 8.741, 8.398, 7.996, 8.135, 5.152, 5.719] },
            { label: 'Qwen1.5-7B', data: [8.673, 11.030, 9.111, 9.031, 7.843, 7.986, 4.893, 5.093] },
            { label: 'RWKV-5-World-7B-v2-20240128-ctx4096', data: [8.777, 10.426, 8.877, 8.496, 8.078, 8.196, 5.219, 5.788] },
            { label: 'Mistral-7B-v0.1', data: [8.791, 10.469, 8.279, 8.060, 7.735, 7.975, 4.758, 5.251] },
            { label: 'Minitron-8B-Base', data: [8.857, 10.639, 8.640, 8.371, 7.845, 8.303, 4.644, 5.300] },
            { label: 'OLMo-1.7-7B-hf', data: [9.274, 10.955, 8.648, 8.515, 7.897, 8.094, 4.990, 5.528] },
            { label: 'Llama-2-7b-hf', data: [9.454, 10.774, 8.504, 8.279, 8.216, 8.513, 5.243, 5.938] },
            { label: 'open_llama_7B_v2', data: [9.623, 11.010, 8.833, 8.616, 8.293, 8.654, 4.903, 5.924] },
            { label: 'Phi-3-small-8k-instruct', data: [9.686, 11.172, 8.829, 8.385, 8.054, 8.596, 5.373, 5.230]},
            { label: 'pythia-6.9b-v0', data: [10.044, 11.419, 9.379, 9.101, 8.573, 8.467, 5.620, 6.571]}
        ]
    },
    {
        name: 'Uncheatable-Eval-3B',
        labels: ['Average', 'ao3\nenglish', 'bbc\nnews', 'wikipedia\nenglish', 'arxiv\ncomputer\nscience', 'arxiv\nphysics', 'github\ncpp', 'github\npython'],
        datasets: [
            { label: "Llama-3.2-3B", "data": [7.573,10.897,8.702,8.283,7.784,8.101,4.59,4.654] },
            { label: "Qwen2.5-3B", "data": [7.663,11.226,9.154,8.959,7.787,8.246,4.119,4.151] },
            { label: "RWKV-x070-World-2.9B-v3-20250211-ctx4096", "data": [7.737,10.481,8.919,8.47,7.904,8.337,4.882,5.164] },
            { label: "stablelm-3b-4e1t", "data": [7.856,10.887,8.818,8.509,8.153,8.5,4.847,5.281] },
            { label: "recurrentgemma-2b", "data": [7.987,11.302,8.938,8.883,8.237,8.52,4.802,5.224] },
            { label: "RWKV-x060-World-3B-v2.1-20240417-ctx4096", "data": [8.078,10.674,9.174,8.816,8.268,8.576,5.385,5.655] },
            { label: "gemma-2-2b", "data": [8.122,11.352,8.898,9.031,8.385,8.814,5.012,5.364] },
            { label: "mamba2attn-2.7b", "data": [8.183,11.126,9.279,9.263,8.325,8.287,5.223,5.78] },
            { label: "RWKV-5-World-3B-v2-20231113-ctx4096", "data": [8.227,10.831,9.356,9.004,8.415,8.698,5.509,5.776] },
            { label: "mamba2-2.7b", "data": [8.292,11.213,9.37,9.384,8.427,8.371,5.343,5.933] },
            { label: "Zamba2-2.7B", "data": [8.317,10.97,8.948,8.743,8.169,8.699,6.393,6.295] },
            { label: "mamba-2.8b-hf", "data": [8.414,11.311,9.486,9.53,8.566,8.517,5.461,6.027] },
            { label: "RWKV-4-World-3B-v1-20230619-ctx4096", "data": [8.525,10.898,9.565,9.301,8.902,9.274,5.671,6.065] },
            { label: "pythia-2.8b-v0", "data": [8.667,11.664,9.741,9.815,8.724,8.729,5.709,6.288] },
            { label: "granite-3.2-2b-instruct", "data": [8.8,11.961,10.119,10.309,8.997,9.254,5.502,5.46] },
            { label: "granite-3.1-2b-instruct", "data": [8.837,12.004,10.169,10.361,9.043,9.278,5.519,5.484] }
        ]
    },
    {
        name: 'Uncheatable-Eval-1B',
        labels: ['Average', 'ao3\nenglish', 'bbc\nnews', 'wikipedia\nenglish', 'arxiv\ncomputer\nscience', 'arxiv\nphysics', 'github\ncpp', 'github\npython'],
        datasets: [
            { label: "Qwen3-1.7B-Base",                                 "data": [7.915,11.644,9.761	,9.415	,7.816 ,8.377,4.177 ,4.214 ] },
            { label: "RWKV7-G1-1.5B",                                   "data": [7.975,10.622,9.269	,8.936	,8.069 ,8.649,4.973 ,5.308 ] },
            { label: "Qwen2.5-1.5B",                                    "data": [8.058,11.756,9.576	,9.489	,8.118 ,8.653,4.396 ,4.421 ] },
            { label: "RWKV-x070-World-1.5B",                            "data": [8.160,10.932,9.337	,8.972	,8.250 ,8.770,5.288 ,5.571 ] },
            { label: "Llama-3.2-1B",                                    "data": [8.225,11.693,9.343	,9.066	,8.365 ,8.762,5.160 ,5.184 ] },
            { label: "SmolLM2-1.7B",                                    "data": [8.227,11.204,9.396	,9.459	,8.382 ,9.041,4.937 ,5.172 ] },
            { label: "Index-1.9B",                                      "data": [8.301,11.490,9.510	,9.227	,8.344 ,8.589,5.292 ,5.652 ] },
            { label: "stablelm-2-1_6b",                                 "data": [8.338,11.423,9.243	,9.057	,8.579 ,9.076,5.450 ,5.535 ] },
            { label: "RWKV-x060-World-1B6",                             "data": [8.491,11.094,9.569	,9.302	,8.619 ,8.997,5.798 ,6.061 ] },
            { label: "RWKV-5-World-1B5",                                "data": [8.640,11.247,9.746	,9.499	,8.765 ,9.106,5.918 ,6.196 ] },
            { label: "mamba2-1.3b",                                     "data": [8.676,11.625,9.743	,9.863	,8.741 ,8.742,5.706 ,6.315 ] },
            { label: "MobileLLM-1.5B",                                  "data": [8.733,11.588,9.145	,9.215	,8.816 ,9.292,6.293 ,6.785 ] },
            { label: "mamba-1.4b-hf",                                   "data": [8.783,11.703,9.828	,9.973	,8.876 ,8.863,5.808 ,6.429 ] },
            { label: "Zamba2-1.2B",                                     "data": [8.830,11.392,9.382	,9.263	,8.571 ,9.209,7.082 ,6.914 ] },
            { label: "SmolLM-1.7B",                                     "data": [8.877,12.684,9.847	,9.890	,8.384 ,9.024,6.552 ,5.757 ] },
            { label: "gemma-3-1b-pt",                                   "data": [8.903,12.188,9.364	,9.597	,8.874 ,9.559,6.591 ,6.150 ] },
            { label: "MobileLLM-1B",                                    "data": [8.972,11.863,9.349	,9.432	,9.028 ,9.566,6.531 ,7.033 ] },
            { label: "RWKV-4-World-1.5B",                               "data": [8.999,11.334,10.000,9.821	,9.344 ,9.797,6.158 ,6.539 ] },
            { label: "Hymba-1.5B-Base",                                 "data": [9.125,11.797,9.446	,9.502	,8.497 ,9.375,7.714 ,7.542 ] },
            { label: "pythia-1.4b-v0",                                  "data": [9.154,12.192,10.200,10.429 ,9.122 ,9.198,6.149 ,6.788 ] },
            { label: "Falcon3-1B-Base",                                 "data": [9.445,13.039,10.448,10.750 ,8.604 ,9.200,7.155 ,6.919 ] }
        ]
    },
    {
        name: 'RULER-Datas',
        model: ['RWKV-6-7B-v2.1-4k', 'RWKV-6-3B-v2.1-4k', 'RWKV-6-1.6B-v2.1-4k', 'Llama2-7B-4k', 'Mamba-2.8B-4k', 'Mamba-1.4B-4k'],
        series: [
            { name: 'niah_single_1', type: 'bar', data: [100, 100, 98, 97.6, 100, 94] },
            { name: 'niah_single_2', type: 'bar', data: [98.67, 88, 53, 100, 19, 21] },
            { name: 'niah_single_3', type: 'bar', data: [95, 79, 55, 96.8, 1, 5] },
            { name: 'niah_multikey_1', type: 'bar', data: [48.33, 36, 25, 100, 7, 8] },
            { name: 'niah_multikey_2', type: 'bar', data: [7.67, 1, 1, 84.4, 0, 0] },
            { name: 'niah_multikey_3', type: 'bar', data: [1.33, 0, 0, 60, 1, 0] },
            { name: 'niah_multivalue', type: 'bar', data: [80.42, 38.5, 25, 94, 0.75, 5.25] },
            { name: 'niah_multiquery', type: 'bar', data: [83.67, 40.75, 20.75, 96.7, 1.25, 4.75] },
            { name: 'vt', type: 'bar', data: [7.53, 11.8, 1.4, 63.12, 45, 23.4] },
            { name: 'cwe', type: 'bar', data: [38.6, 30.3, 11, 73.04, 2, 15.5] },
            { name: 'fwe', type: 'bar', data: [78.33, 62.67, 46.33, 78.8, 53, 57.33] },
            { name: 'qa_1', type: 'bar', data: [45, 35, 35, 59.2, 23, 24] },
            { name: 'qa_2', type: 'bar', data: [37, 25, 28, 42, 18, 23] }
        ]
    },
    {
        name: 'LongBench-Datas',
        model: ['GPT-3.5-Turbo-16k', 'Llama2-7B-chat-4k', 'LongChat-v1.5-7B-32k', 'XGen-7B-8k', 'InternLM-7B-8k', 'ChatGLM2-6B-32k', 'Vicuna-v1.5-7B-16k', 'ChatGLM3-6B-32k', 'RWKV-6-World-7B-v2.1-4k'],
        series: [
            { name: 'NarrativeQA', type: 'bar', data: [23.6, 18.7, 16.9, 18.0, 12.1, 21.1, 19.4, 26.0, 20.75] },
            { name: 'Qasper', type: 'bar', data: [43.3, 19.2, 27.7, 18.1, 16.7, 31.5, 26.1, 43.3, 40.2] },
            { name: 'MultiFieldQA-en', type: 'bar', data: [52.3, 36.8, 41.4, 37.7, 23.4, 46.2, 38.5, 51.7, 36.01] },
            { name: 'MultiFieldQA-zh', type: 'bar', data: [61.2, 11.9, 29.1, 14.8, 33.6, 51.6, 43.0, 62.3, 50.19] },
            { name: 'HotpotQA', type: 'bar', data: [51.6, 25.4, 31.5, 29.7, 28.7, 45.1, 25.3, 54.4, 22.74] },
            { name: '2WikiMQA', type: 'bar', data: [37.7, 32.8, 20.6, 21.1, 22.8, 34.0, 20.8, 44.9, 16.3] },
            { name: 'Musique', type: 'bar', data: [26.9, 9.4, 9.7, 10.3, 9.0, 21.9, 9.8, 40.4, 10.49] },
            { name: 'DuReader (zh)', type: 'bar', data: [28.7, 5.2, 19.5, 11.0, 11.1, 37.6, 19.3, 44.78, 28.01] },
            { name: 'GovReport', type: 'bar', data: [29.5, 27.3, 30.8, 27.3, 9.7, 32.4, 27.9, 36.8, 31.64] },
            { name: 'QMSum', type: 'bar', data: [23.4, 20.8, 22.7, 20.5, 15.9, 24.0, 22.8, 23.9, 21.31] },
            { name: 'MultiNews', type: 'bar', data: [26.7, 25.8, 26.4, 26.2, 22.8, 26.5, 27.2, 27.9, 26.06] },
            { name: 'VCSUM (zh)', type: 'bar', data: [16.0, 0.2, 9.9, 2.2, 12.4, 16.2, 15.1, 17.8, 15.19] },
            { name: 'TREC', type: 'bar', data: [68.0, 61.5, 63.5, 65.5, 52.0, 62.5, 71.5, 79.0, 55.5] },
            { name: 'TriviaQA', type: 'bar', data: [91.4, 77.8, 82.3, 77.8, 77.8, 78.7, 86.2, 87.1, 86.89] },
            { name: 'SAMSum', type: 'bar', data: [41.7, 40.7, 34.2, 25.3, 21.2, 36.3, 40.8, 38.2, 44.25] },
            { name: 'LSHT (zh)', type: 'bar', data: [29.2, 19.8, 23.2, 20.5, 15.2, 27.7, 28.8, 42.0, 30.2] },
            { name: 'Passage Count', type: 'bar', data: [4.5, 2.1, 1.0, 2.1, 3.0, 1.5, 6.5, 2.0, 5] },
            { name: 'PassageRetrieval-en', type: 'bar', data: [71.0, 9.8, 30.5, 8.5, 6.0, 77.0, 4.5, 99.0, 34.5] },
            { name: 'PassageRetrieval-zh', type: 'bar', data: [77.5, 0.5, 7.6, 3.5, 0.9, 64.5, 5.0, 94.0, 54.22] },
            { name: 'LCC', type: 'bar', data: [54.7, 52.4, 53.0, 38.6, 44.1, 55.6, 51.0, 57.66, 73.84] },
            { name: 'RepoBench-P', type: 'bar', data: [53.6, 43.8, 55.3, 38.6, 28.8, 49.9, 43.5, 54.76, 54.1] }
        ]
    },
    {
        name: 'LongBench-RWKV-Mamba-Llama2-综合评分对比',
        model: ['RWKV-6-World-1B6-v2.1', 'RWKV-6-World-3B-v2.1', 'RWKV-6-World-7B-v2.1-4k', 'Mamba-1B4', 'Mamba-2B8', 'Llama2-7B', 'Mistral-7B'],
        series: [
            { name: 'Single DocQ', type: 'bar', data: [16.470, 14.335, 36.788, 7.758, 5.548, 21.650, 17.538] },
            { name: 'Few-shc', type: 'bar', data: [29.868, 35.443, 54.203, 25.973, 17.605, 49.950, 52.833] },
            { name: 'Summarization', type: 'bar', data: [17.525, 18.038, 23.550, 10.595, 11.718, 18.525, 19.013] },
            { name: 'Multi Doc QA', type: 'bar', data: [8.985, 9.493, 19.385, 7.438, 7.838, 18.200, 9.205] },
            { name: 'Code Completion', type: 'bar', data: [39.970, 40.680, 63.970, 43.095, 31.955, 48.100, 65.17] },
            { name: 'Syntetic', type: 'bar', data: [2.803, 2.650, 31.240, 2.527, 1.980, 4.133, 10.100] }
        ]
    }
]
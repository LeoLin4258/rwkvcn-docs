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
            { label: "Llama-3.2-3B", "data": [7.727, 11.001, 8.675, 8.443, 7.906, 8.125, 4.833, 5.108] },
            { label: "Qwen2.5-3B", "data": [7.801, 11.335, 9.122, 9.045, 7.906, 8.289, 4.330, 4.577] },
            { label: "stablelm-3b-4e1t", "data": [7.985, 10.989, 8.792, 8.494, 8.268, 8.539, 5.035, 5.777] },
            { label: "recurrentgemma-2b", "data": [8.120, 11.403, 8.923, 8.900, 8.344, 8.545, 5.016, 5.708] },
            { label: "RWKV-x060-World-3B-v2.1-20240417-ctx4096", "data": [8.223, 10.762, 9.154, 8.906, 8.386, 8.609, 5.598, 6.146] },
            { label: "mamba2attn-2.7b", "data": [8.271, 11.215, 9.226, 8.991, 8.414, 8.297, 5.407, 6.345] },
            { label: "gemma-2b", "data": [8.337, 11.684, 9.133, 9.123, 8.582, 8.756, 5.196, 5.882] },
            { label: "RWKV-5-World-3B-v2-20231113-ctx4096", "data": [8.365, 10.915, 9.342, 9.075, 8.515, 8.726, 5.720, 6.262] },
            { label: "mamba2-2.7b", "data": [8.378, 11.305, 9.321, 9.097, 8.515, 8.379, 5.531, 6.497] },
            { label: "open_llama_3b_v2", "data": [8.387, 11.403, 9.154, 9.004, 8.628, 9.054, 5.222, 6.242] },
            { label: "Zamba2-2.7B", "data": [8.465, 11.086, 8.924, 8.613, 8.287, 8.761, 6.680, 6.904] },
            { label: "mamba-2.8b-hf", "data": [8.494, 11.399, 9.433, 9.193, 8.660, 8.528, 5.644, 6.604] },
            { label: "RWKV-4-World-3B-v1-20230619-ctx4096", "data": [8.654, 10.984, 9.517, 9.288, 9.011, 9.309, 5.851, 6.617]},
            { label: "pythia-2.8b-v0", "data": [8.741, 11.745, 9.683, 9.447, 8.822, 8.754, 5.895, 6.843] },
            { label: "phi-2", "data": [8.765, 12.235, 9.261, 8.843, 8.697, 9.753, 6.699, 5.865] },
            { label: "RedPajama-INCITE-Base-3B-v1", "data": [8.805, 11.605, 9.128, 8.941, 8.776, 9.097, 6.591, 7.496] },
            { label: "btlm-3b-8k-base", "data": [8.868, 11.767, 9.066, 8.759, 8.455, 8.781, 7.307, 7.943] },
            { label: "RWKV-4-Pile-3B-20221110-ctx4096", "data": [8.906, 11.729, 9.752, 9.598, 9.097, 8.946, 6.116, 7.106] },
            { label: "Sheared-LLaMA-2.7B", "data": [9.030, 11.523, 9.139, 9.224, 8.994, 9.535, 6.990, 7.807] },
            { label: "mamba-2.8b-slimpj", "data": [9.171, 13.938, 9.635, 8.781, 8.594, 8.823, 6.918, 7.509] },
            { label: "OpenELM-3B", "data": [9.571, 14.159, 10.062, 9.456, 9.054, 9.404, 7.250, 7.612] }
        ]
    },
    {
        name: 'Uncheatable-Eval-1B',
        labels: ['Average', 'ao3\nenglish', 'bbc\nnews', 'wikipedia\nenglish', 'arxiv\ncomputer\nscience', 'arxiv\nphysics', 'github\ncpp', 'github\npython'],
        datasets: [
            { label: "Qwen2.5-1.5B", "data": [8.193, 11.853, 9.550, 9.538, 8.237, 8.701, 4.616, 4.858] },
            { label: "Llama-3.2-1B", "data": [8.377, 11.784, 9.313, 9.171, 8.489, 8.806, 5.426, 5.647] },
            { label: "Qwen2-1.5B", "data": [8.391, 11.724, 9.446, 9.477, 8.641, 9.222, 5.061, 5.165] },
            { label: "RWKV-x060-World-1B6-v2.1-20240328-ctx4096", "data": [8.631, 11.172, 9.557, 9.356, 8.736, 9.039, 6.013, 6.547] },
            { label: "mamba2-1.3b", "data": [8.751, 11.708, 9.684, 9.500, 8.841, 8.767, 5.901, 6.855] },
            { label: "RWKV-5-World-1B5-v2-20231025-ctx4096", "data": [8.776, 11.327, 9.735, 9.529, 8.866, 9.148, 6.143, 6.682] },
            { label: "mamba-1.4b-hf", "data": [8.857, 11.787, 9.767, 9.583, 8.980, 8.887, 6.009, 6.989] },
            { label: "TinyLlama-1.1B-intermediate-step-1431k-3T", "data": [8.930, 12.341, 9.740, 9.650, 9.184, 9.667, 5.667, 6.259] },
            { label: "Zamba2-1.2B", "data": [8.976, 11.490, 9.338, 9.098, 8.694, 9.281, 7.399, 7.531] },
            { label: "OLMo-1B-hf", "data": [9.116, 12.072, 9.599, 9.856, 9.155, 9.811, 6.324, 6.994] },
            { label: "RWKV-4-World-1.5B-v1-fixed-20230612-ctx4096", "data": [9.131, 11.415, 9.954, 9.791, 9.451, 9.845, 6.373, 7.091] },
            { label: "pythia-1.4b-v0", "data": [9.217, 12.258, 10.144, 9.980, 9.225, 9.240, 6.349, 7.322] },
            { label: "RWKV-4-Pile-1B5-20220903-8040", "data": [9.334, 12.149, 10.156, 10.030, 9.492, 9.378, 6.555, 7.578] },
            { label: "Sheared-LLaMA-1.3B", "data": [9.709, 12.140, 9.696, 9.825, 9.569, 10.281, 7.825, 8.626] },
            { label: "OpenELM-1_1B", "data": [10.075, 15.055, 10.551, 9.968, 9.386, 9.902, 7.697, 7.969] },
            { label: "phi-1_5", "data": [10.299, 13.380, 11.057, 12.430, 9.856, 11.649, 7.226, 6.494] },
            { label: "TransNormerLLM-1B", "data": [10.394, 12.839, 10.505, 10.652, 10.543, 11.209, 7.829, 9.178] },
            { label: "falcon-rw-1b", "data": [11.934, 12.078, 9.567, 9.877, 9.548, 10.429, 15.776, 16.260] }
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
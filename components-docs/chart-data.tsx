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
            { label: 'Qwen3-8B-Base', data: [7.091, 10.890, 8.718, 8.255, 7.207, 7.465, 3.617, 3.482] },
            { label: 'Meta-Llama-3-8B', data: [7.162, 10.619, 8.295, 7.785, 7.536, 7.541, 4.174, 4.181] },
            { label: 'RWKV7-G0-7.2B-20250722-ctx4096', data: [7.276, 10.187, 8.490, 8.073, 7.505, 7.787, 4.414, 4.475] },
            { label: 'Qwen2.5-7B', data: [7.323, 11.079, 8.729, 8.449, 7.539, 7.792, 3.868, 3.806] },
            { label: 'Mistral-7B-v0.1', data: [7.406, 10.662, 8.306, 7.976, 7.745, 7.903, 4.612, 4.635] },
            { label: 'falcon-mamba-7b', data: [7.548, 10.760, 8.958, 8.589, 7.674, 7.737, 4.437, 4.680] },
            { label: 'Zamba2-7B', data: [7.582, 10.702, 8.627, 8.074, 7.843, 8.124, 4.833, 4.869] },
            { label: 'Minitron-8B-Base', data: [7.582, 10.835, 8.654, 8.284, 7.856, 8.230, 4.508, 4.708] },
            { label: 'RWKV-x060-World-7B-v3-20241112-ctx4096', data: [7.633, 10.629, 8.753, 8.288, 7.936, 8.109, 4.786, 4.929] },
            { label: 'Yi-1.5-6B', data: [7.689, 11.072, 8.803, 8.464, 8.004, 8.223, 4.648, 4.609] },
            { label: 'RWKV-x060-World-7B-v2.1-20240507-ctx4096', data: [7.697, 10.560, 8.752, 8.313, 8.033, 8.074, 5.021, 5.127] },
            { label: 'RWKV-5-World-7B-v2-20240128-ctx4096', data: [7.786, 10.652, 8.881, 8.408, 8.131, 8.138, 5.091, 5.198] },
            { label: 'OLMo-2-1124-7B', data: [7.792, 10.748, 8.600, 8.300, 7.937, 8.124, 5.464, 5.371] },
            { label: 'Llama-2-7b-hf', data: [7.830, 10.985, 8.531, 8.203, 8.261, 8.447, 5.098, 5.286] },
            { label: 'Phi-3-small-8k-instruct', data: [7.834, 11.361, 8.864, 8.341, 8.010, 8.488, 5.187, 4.588] }
        ]
    },
    {
        name: 'Uncheatable-Eval-3B',
        labels: ['Average', 'ao3\nenglish', 'bbc\nnews', 'wikipedia\nenglish', 'arxiv\ncomputer\nscience', 'arxiv\nphysics', 'github\ncpp', 'github\npython'],
        datasets: [
            { label: "RWKV7-G1-2.9B-20250519-ctx4096",           "data": [7.566, 10.334, 8.837, 8.479, 7.736, 8.079, 4.639, 4.855] },
            { label: "Llama-3.2-3B",                             "data": [7.597, 11.041, 8.691, 8.394, 7.835, 7.988, 4.638, 4.592] },
            { label: "Qwen2.5-3B",                               "data": [7.681, 11.406, 9.125, 8.920, 7.822, 8.127, 4.233, 4.134] },
            { label: "RWKV-x070-World-2.9B-v3-20250211-ctx4096", "data": [7.754, 10.641, 8.910, 8.548, 7.938, 8.220, 4.939, 5.085] },
            { label: "stablelm-3b-4e1t",                         "data": [7.856, 11.041, 8.804, 8.454, 8.197, 8.384, 4.897, 5.217] },
            { label: "Falcon-H1-3B-Base",                        "data": [7.890, 11.500, 9.149, 8.886, 7.810, 8.080, 4.852, 4.956] },
            { label: "recurrentgemma-2b",                        "data": [8.000, 11.475, 8.935, 8.837, 8.292, 8.404, 4.877, 5.179] },
            { label: "Phi-3-mini-4k-instruct",                   "data": [8.081, 11.959, 9.173, 8.671, 8.129, 8.707, 5.254, 4.673] },
            { label: "RWKV-x060-World-3B-v2.1-20240417-ctx4096", "data": [8.089, 10.824, 9.150, 8.835, 8.333, 8.463, 5.456, 5.565] },
            { label: "mamba2attn-2.7b",                          "data": [8.144, 11.254, 9.238, 8.944, 8.386, 8.170, 5.268, 5.745] },
            { label: "Phi-3.5-mini-instruct",                    "data": [8.217, 12.138, 9.281, 8.814, 8.310, 8.836, 5.312, 4.826] },
            { label: "gemma-2b",                                 "data": [8.220, 11.775, 9.158, 9.065, 8.546, 8.627, 5.040, 5.332] },
            { label: "RWKV-5-World-3B-v2-20231113-ctx4096",      "data": [8.234, 10.982, 9.338, 9.006, 8.480, 8.573, 5.580, 5.680] },
            { label: "mamba2-2.7b",                              "data": [8.251, 11.351, 9.327, 9.040, 8.481, 8.257, 5.402, 5.901] }
        ]
    },
    {
        name: 'Uncheatable-Eval-1B',
        labels: ['Average', 'ao3\nenglish', 'bbc\nnews', 'wikipedia\nenglish', 'arxiv\ncomputer\nscience', 'arxiv\nphysics', 'github\ncpp', 'github\npython'],
        datasets: [
            { label: "Qwen3-1.7B-Base",                            "data": [7.923, 11.846, 9.728, 9.366, 7.844, 8.248, 4.287, 4.145] },
            { label: "RWKV7-G1-1.5B-20250429-ctx4096",             "data": [7.989, 10.797, 9.263, 8.955, 8.099, 8.528, 5.035, 5.246] },
            { label: "Qwen2.5-1.5B",                               "data": [8.073, 11.935, 9.545, 9.406, 8.162, 8.537, 4.533, 4.396] },
            { label: "RWKV-x070-World-1.5B-v3-20250127-ctx4096",   "data": [8.174, 11.098, 9.317, 9.001, 8.298, 8.651, 5.368, 5.485] },
            { label: "SmolLM2-1.7B",                               "data": [8.231, 11.353, 9.359, 9.362, 8.424, 8.940, 5.015, 5.162] },
            { label: "Llama-3.2-1B",                               "data": [8.249, 11.854, 9.317, 9.118, 8.432, 8.657, 5.254, 5.113] },
            { label: "stablelm-2-1_6b",                            "data": [8.335, 11.582, 9.216, 8.938, 8.629, 8.980, 5.557, 5.444] },
            { label: "Falcon-H1-1.5B-Deep-Base",                   "data": [8.443, 11.961, 9.652, 9.436, 8.305, 8.859, 5.476, 5.409] },
            { label: "RWKV-x060-World-1B6-v2.1-20240328-ctx4096",  "data": [8.499, 11.253, 9.543, 9.292, 8.687, 8.878, 5.882, 5.956] },
            { label: "Falcon-H1-1.5B-Base",                        "data": [8.575, 12.098, 9.786, 9.602, 8.397, 8.976, 5.621, 5.544] },
            { label: "mamba2-1.3b",                                "data": [8.627, 11.768, 9.696, 9.450, 8.805, 8.627, 5.779, 6.267] },
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
// Migrated from V1, should be rewritten in the future.

export const chartData = [
    {
        name: 'Uncheatable-Eval-14B',
        labels: ['Average', 'ao3\nenglish', 'bbc\nnews', 'wikipedia\nenglish', 'arxiv\ncomputer\nscience', 'arxiv\nphysics', 'github\ncpp', 'github\npython'],
        datasets: [
            { label: 'Qwen3-14B-Base', data: [6.845, 10.569, 8.445, 7.942, 7.001, 7.210, 3.439, 3.312] },
            { label: 'rwkv7-g0b-13.3b-20251114', data: [6.870, 9.848, 8.202, 7.636, 7.108, 7.380, 4.026, 3.892] },
            { label: 'gemma-3-12b-pt', data: [6.945, 10.540, 7.914, 7.607, 7.286, 7.387, 3.883, 3.997] },
            { label: 'Qwen2.5-14B', data: [6.951, 10.558, 8.317, 7.944, 7.224, 7.392, 3.625, 3.599] },
            { label: 'Mistral-Nemo-Base-2407', data: [6.970, 10.165, 8.118, 7.642, 7.287, 7.455, 4.079, 4.042] },
            { label: 'Motif-2-12.7B-Base', data: [7.099, 10.628, 8.328, 7.897, 7.134, 7.404, 4.189, 4.114] },
            { label: 'Llama-2-13b-hf', data: [7.540, 10.655, 8.307, 7.901, 7.993, 8.122, 4.795, 5.009] }
        ]
    },
    {
        name: 'Uncheatable-Eval-7B',
        labels: ['Average', 'ao3\nenglish', 'bbc\nnews', 'wikipedia\nenglish', 'arxiv\ncomputer\nscience', 'arxiv\nphysics', 'github\ncpp', 'github\npython'],
        datasets: [
            { label: 'Qwen3-8B-Base', data: [7.091, 10.890, 8.718, 8.255, 7.207, 7.465, 3.617, 3.482] },
            { label: 'Meta-Llama-3-8B', data: [7.162, 10.619, 8.295, 7.785, 7.536, 7.541, 4.174, 4.181] },
            { label: 'RWKV7-g0a3-7.2b-20251029', data: [7.222, 10.164, 8.480, 7.996, 7.440, 7.747, 4.378, 4.347] },
            { label: 'Qwen2.5-7B', data: [7.323, 11.079, 8.729, 8.449, 7.539, 7.792, 3.868, 3.806] },
            { label: 'Falcon-H1-7B-Base', data: [7.339, 10.958, 8.576, 8.225, 7.403, 7.569, 4.251, 4.392] },
            { label: 'Mistral-7B-v0.1', data: [7.406, 10.662, 8.306, 7.976, 7.745, 7.903, 4.612, 4.635] },
            { label: 'Hunyuan-7B-Pretrain', data: [7.541, 11.509, 8.987, 8.499, 7.653, 8.108, 4.201, 3.829] },
            { label: 'falcon-mamba-7b', data: [7.548, 10.760, 8.958, 8.589, 7.674, 7.737, 4.437, 4.680] },
            { label: 'Zamba2-7B', data: [7.582, 10.702, 8.627, 8.074, 7.843, 8.124, 4.833, 4.869] },
            { label: 'Minitron-8B-Base', data: [7.582, 10.835, 8.654, 8.284, 7.856, 8.230, 4.508, 4.708] },
            { label: 'Olmo-3-1025-7B', data: [7.595, 11.101, 8.784, 8.522, 7.490, 7.947, 4.930, 4.394] },
            { label: 'RWKV-x060-World-7B-v3-20241112', data: [7.633, 10.629, 8.753, 8.288, 7.936, 8.109, 4.786, 4.929] }
        ]
    },
    {
        name: 'Uncheatable-Eval-3B',
        labels: ['Average', 'ao3\nenglish', 'bbc\nnews', 'wikipedia\nenglish', 'arxiv\ncomputer\nscience', 'arxiv\nphysics', 'github\ncpp', 'github\npython'],
        datasets: [
                { label: 'RWKV7-g1a4-2.9b-20251118', data: [7.486, 10.481, 8.800, 8.310, 7.712, 8.072, 4.553, 4.474] },
                { label: 'Llama-3.2-3B', data: [7.643, 11.219, 8.701, 8.365, 7.928, 8.065, 4.661, 4.562] },
                { label: 'Qwen2.5-3B', data: [7.722, 11.575, 9.139, 8.895, 7.911, 8.220, 4.203, 4.113] },
                { label: 'SmolLM3-3B-Base', data: [7.784, 11.187, 8.905, 8.611, 8.097, 8.631, 4.513, 4.546] },
                { label: 'RWKV-x070-World-2.9B-v3-20250211', data: [7.800, 10.812, 8.909, 8.501, 8.049, 8.307, 4.955, 5.066] },
                { label: 'stablelm-3b-4e1t', data: [7.907, 11.211, 8.815, 8.434, 8.299, 8.476, 4.906, 5.207] },
                { label: 'Falcon-H1-3B-Base', data: [7.936, 11.685, 9.158, 8.910, 7.891, 8.161, 4.832, 4.917] },
                { label: 'recurrentgemma-2b', data: [8.052, 11.632, 8.951, 8.835, 8.401, 8.488, 4.897, 5.157] },
                { label: 'RWKV-x060-World-3B-v2.1-20240417', data: [8.147, 11.005, 9.161, 8.815, 8.451, 8.559, 5.479, 5.561] },
                { label: 'mamba2attn-2.7b', data: [8.204, 11.436, 9.246, 8.947, 8.474, 8.236, 5.336, 5.751] }        ]
    },
    {
        name: 'Uncheatable-Eval-1B',
        labels: ['Average', 'ao3\nenglish', 'bbc\nnews', 'wikipedia\nenglish', 'arxiv\ncomputer\nscience', 'arxiv\nphysics', 'github\ncpp', 'github\npython'],
        datasets: [
            { label: 'Qwen3-1.7B-Base', data: [7.965, 12.016, 9.743, 9.352, 7.936, 8.350, 4.260, 4.095] },
            { label: 'rwkv7-g1b-1.5b-20251015', data: [7.969, 10.972, 9.250, 8.843, 8.110, 8.537, 5.041, 5.027] },
            { label: 'Qwen2.5-1.5B', data: [8.124, 12.114, 9.562, 9.393, 8.270, 8.646, 4.502, 4.384] },
            { label: 'RWKV-x070-World-1.5B-v3-20250127', data: [8.231, 11.273, 9.320, 8.965, 8.431, 8.758, 5.385, 5.483] },
            { label: 'SmolLM2-1.7B', data: [8.298, 11.536, 9.373, 9.351, 8.547, 9.047, 5.080, 5.152] },
            { label: 'Llama-3.2-1B', data: [8.306, 12.036, 9.331, 9.097, 8.556, 8.755, 5.267, 5.101] },
            { label: 'Index-1.9B', data: [8.340, 11.831, 9.493, 9.069, 8.497, 8.561, 5.380, 5.547] },
            { label: 'stablelm-2-1_6b', data: [8.396, 11.761, 9.237, 8.943, 8.762, 9.088, 5.558, 5.425] },
            { label: 'Falcon-H1-1.5B-Deep-Base', data: [8.505, 12.144, 9.666, 9.482, 8.407, 8.968, 5.497, 5.368] },
            { label: 'RWKV-x060-World-1B6-v2.1-20240328', data: [8.564, 11.434, 9.555, 9.276, 8.822, 8.990, 5.906, 5.968] },
            { label: 'Falcon-H1-1.5B-Base', data: [8.639, 12.287, 9.796, 9.645, 8.507, 9.089, 5.635, 5.514] },
            { label: 'mamba2-1.3b', data: [8.699, 11.944, 9.710, 9.463, 8.925, 8.714, 5.851, 6.286] },
            { label: 'RWKV-5-World-1B5-v2-20231025', data: [8.715, 11.595, 9.731, 9.451, 8.977, 9.103, 6.039, 6.110] },
            { label: 'mamba-1.4b-hf', data: [8.806, 12.026, 9.783, 9.552, 9.081, 8.836, 5.958, 6.408] }
        ]
    },
    {
      name: 'RWKV-7-MMLU-Benchmark',
      model: ['rwkv7-g0b-13.3b', 'rwkv7-g0b-7.2b', 'rwkv7-g1b-2.9b', 'rwkv7-g1b-1.5b'],
      series: [
          { name: 'MMLU', type: 'bar', data: [0.765, 0.660, 0.622, 0.505] },
          { name: 'MMLU COT', type: 'bar', data: [0.827, 0.731, 0.669, 0.542] }
      ]
    },
    {
      name: 'RWKV-7-MMLU-PRO-Benchmark',
      model: ['rwkv7-g0b-13.3b', 'rwkv7-g0b-7.2b', 'rwkv7-g1b-2.9b', 'rwkv7-g1b-1.5b'],
      series: [
          { name: 'MMLU-PRO', type: 'bar', data: [0.502, 0.361, 0.322, 0.222] },
          { name: 'MMLU-PRO COT', type: 'bar', data: [0.612, 0.526, 0.433, 0.292] }
      ]
    },
    {
      name: 'RWKV-7-MMLU-Variants-Benchmark',
      model: ['rwkv7-g0b-13.3b', 'rwkv7-g0b-7.2b', 'rwkv7-g1b-2.9b', 'rwkv7-g1b-1.5b'],
      series: [
          { name: 'MMLU Redux', type: 'bar', data: [0.787, 0.685, 0.641, 0.529] },
          { name: 'Redux COT', type: 'bar', data: [0.863, 0.772, 0.699, 0.569] },
          { name: 'MMMLU', type: 'bar', data: [0.765, 0.660, 0.622, 0.505] },
          { name: 'MMMLU COT', type: 'bar', data: [0.827, 0.731, 0.669, 0.541] }
      ]
    },
    {
      name: 'RWKV-7-GSM8K-Benchmark',
      model: ['rwkv7-g0b-13.3b', 'rwkv7-g0b-7.2b', 'rwkv7-g1b-2.9b', 'rwkv7-g1b-1.5b'],
      series: [
          { name: 'GSM8K COT', type: 'bar', data: [0.923, 0.851, 0.766, 0.585] }
      ]
    },
    {
      name: 'RWKV-7-MATH500-Benchmark',
      model: ['rwkv7-g0b-13.3b', 'rwkv7-g0b-7.2b', 'rwkv7-g1b-2.9b', 'rwkv7-g1b-1.5b'],
      series: [
          { name: 'MATH500', type: 'bar', data: [0.768, 0.635, 0.495, 0.298] }
      ]
    },
    {
      name: 'RWKV-7-GeneralMath-Benchmark',
      model: ['rwkv7-g0b-13.3b', 'rwkv7-g0b-7.2b', 'rwkv7-g1b-2.9b', 'rwkv7-g1b-1.5b'],
      series: [
          { name: 'Hendrycks Math', type: 'bar', data: [0.558, 0.488, 0.383, 0.246] },
          { name: 'SVAMP', type: 'bar', data: [0.942, 0.926, 0.840, 0.683] },
          { name: 'ASDiv', type: 'bar', data: [0.923, 0.905, 0.844, 0.735] },
          { name: 'MAWPS', type: 'bar', data: [0.949, 0.924, 0.890, 0.813] },
          { name: 'GSM+', type: 'bar', data: [0.767, 0.685, 0.575, 0.406] },
          { name: 'Algebra 222', type: 'bar', data: [0.892, 0.856, 0.795, 0.658] },
          { name: 'Math Odyssey', type: 'bar', data: [0.494, 0.401, 0.320, 0.202] }
      ]
    },
    {
      name: 'RWKV-7-IFEval-Benchmark',
      model: ['rwkv7-g0b-13.3b', 'rwkv7-g0b-7.2b', 'rwkv7-g1b-2.9b', 'rwkv7-g1b-1.5b'],
      series: [
          { name: 'IFEval (strict prompt-level)', type: 'bar', data: [0.689, 0.579, 0.494, 0.421] }
      ]
    },
    {
      name: 'RWKV-7-GPQA-Benchmark',
      model: ['rwkv7-g0b-13.3b', 'rwkv7-g0b-7.2b', 'rwkv7-g1b-2.9b', 'rwkv7-g1b-1.5b'],
      series: [
          { name: 'GPQA Main', type: 'bar', data: [0.379, 0.308, 0.333, 0.283] },
          { name: 'GPQA Main COT', type: 'bar', data: [0.429, 0.317, 0.326, 0.279] },
          { name: 'SuperGPQA', type: 'bar', data: [0.288, 0.220, 0.194, 0.158] }
      ]
    },
    {
      name: 'RWKV-7-Coding-Benchmark',
      model: ['rwkv7-g0b-13.3b', 'rwkv7-g0b-7.2b', 'rwkv7-g1b-2.9b', 'rwkv7-g1b-1.5b'],
      series: [
          { name: 'HumanEval', type: 'bar', data: [0.817, 0.640, 0.537, 0.396] },
          { name: 'HumanEval+', type: 'bar', data: [0.762, 0.604, 0.494, 0.348] },
          { name: 'MBPP', type: 'bar', data: [0.820, 0.757, 0.627, 0.439] },
          { name: 'MBPP+', type: 'bar', data: [0.706, 0.640, 0.550, 0.368] }
      ]
    },
    {
      name: 'RWKV-7-Chinese-Benchmark',
      model: ['rwkv7-g0b-13.3b', 'rwkv7-g0b-7.2b', 'rwkv7-g1b-2.9b', 'rwkv7-g1b-1.5b'],
      series: [
          { name: 'C-Eval', type: 'bar', data: [0.640, 0.540, 0.496, 0.427] },
          { name: 'C-Eval COT', type: 'bar', data: [0.674, 0.563, 0.513, 0.426] },
          { name: 'CMMLU', type: 'bar', data: [0.667, 0.564, 0.523, 0.422] },
          { name: 'CMMLU COT', type: 'bar', data: [0.689, 0.598, 0.556, 0.442] }
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
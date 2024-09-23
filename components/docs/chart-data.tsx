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
] 

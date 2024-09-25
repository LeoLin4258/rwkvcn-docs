export const MyHeatMap = () => {

    const Model = [
        'pythia-12b-v0',
        'Qwen1.5-14B',
        'Llama-2-13b-hf',
        'RWKV-x060-World-14B-v2.1-20240719-ctx4096',
        'Mistral-Nemo-Base-2407'
    ];
    const data = [

        [4, 0, 7.107], [4, 1, 10.07], [4, 2, 8.081], [4, 3, 7.954], [4, 4, 7.419], [4, 5, 7.656], [4, 6, 4.203], [4, 7, 4.368],
        
        [3, 0, 7.609], [3, 1, 10.188], [3, 2, 8.518], [3, 3, 8.343], [3, 4, 7.916], [3, 5, 8.04], [3, 6, 4.93], [3, 7, 5.33],

        [2, 0, 7.676], [2, 1, 10.524], [2, 2, 8.279], [2, 3, 8.187], [2, 4, 8.075], [2, 5, 8.311], [2, 6, 4.929], [2, 7, 5.426],

        [1, 0, 7.697], [1, 1, 10.88], [1, 2, 8.884], [1, 3, 9.102], [1, 4, 7.752], [1, 5, 7.862], [1, 6, 4.665], [1, 7, 4.736],

        [0, 0, 8.356], [0, 1, 11.285], [0, 2, 9.19], [0, 3, 9.527], [0, 4, 8.535], [0, 5, 8.398], [0, 6, 5.43], [0, 7, 6.125]
        
    ];

    const EvalType = [
        'Average\n (lower=better)', 'ao3\n​english', 'bbc\n​news',
        'wikipedia\n​english', 'arxiv\n​computer ​science', 'arxiv\n​physics',
        'github\ncpp', 'github\n​python'
    ];

    // 按列组织数据
    const columnData = Array(8).fill(null).map(() => []);
    data.forEach(([y, x, value]) => {
        (columnData[x] as number[]).push(value);
    });

    // 计算每列的最大值和最小值
    const columnMaxValues = columnData.map(column => Math.max(...column));
    const columnMinValues = columnData.map(column => Math.min(...column));

    return (
        <div className="w-full p-4">
            <div className="flex flex-col">
                <div className="flex mb-2">
                    <div className="w-40"></div>
                    <div className="flex-1">
                        <div className="grid grid-cols-8">
                            {EvalType.map((type, index) => (
                                <div key={index} className="text-xs text-center whitespace-pre-line">
                                    {type}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-40 flex flex-col justify-around pr-2">
                        {Model.map((model, index) => (
                            <div key={index} className="h-20 flex items-center">{model}</div>
                        ))}
                    </div>
                    <div className="flex-1">
                        <div className="grid grid-cols-8">
                            {data.map((item, index) => {
                                const [y, x, value] = item;
                                const columnMax = columnMaxValues[x];
                                const columnMin = columnMinValues[x];
                                const percentage = (value - columnMin) / (columnMax - columnMin);

                                // 计算红绿蓝值
                                let red, green, blue;
                                if (percentage <= 0.5) {
                                    // 从绿色到白色
                                    red = Math.round(99 + (255 - 99) * (percentage * 2));
                                    green = Math.round(190 + (255 - 190) * (percentage * 2));
                                    blue = Math.round(123 + (255 - 123) * (percentage * 2));
                                } else {
                                    // 从白色到红色
                                    red = Math.round(255 + (248 - 255) * ((percentage - 0.5) * 2));
                                    green = Math.round(255 + (105 - 255) * ((percentage - 0.5) * 2));
                                    blue = Math.round(255 + (107 - 255) * ((percentage - 0.5) * 2));
                                }

                                return (
                                    <div
                                        key={index}
                                        className="h-20 flex items-center justify-center text-xs"
                                        style={{
                                            backgroundColor: `rgb(${red}, ${green}, ${blue})`,
                                            color: percentage > 0.25 && percentage < 0.75 ? '#333' : '#fff'
                                        }}
                                    >
                                        {value.toFixed(2)}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
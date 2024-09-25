import { chartData } from './chart-data';

export const MyHeatMap = ({ index }: { index: number }) => {
    const data = chartData[index];
    const Model = data.datasets?.map(dataset => dataset.label) ?? [];
    const EvalType = data.labels;

    // Transform data into the format needed for the heatmap
    const heatmapData = data?.datasets?.flatMap((dataset, y) =>
        dataset.data.map((value, x) => [y, x, value])
    ) ?? [];

    // 按列组织数据
    const columnData = Array(EvalType?.length).fill(null).map(() => []);
    heatmapData.forEach(([y, x, value]) => {
        (columnData[x] as number[]).push(value);
    });

    // 计算每列的最大值和最小值
    const columnMaxValues = columnData.map(column => Math.max(...column));
    const columnMinValues = columnData.map(column => Math.min(...column));

    return (
        <div className="w-full p-4 overflow-x-auto" id={`heat-chart${index}`}>
            <div className="min-w-[700px]"> {/* 调整最小宽度以适应内容 */}
                <div className="flex">
                    {/* 左侧标签 - 现在在滚动区域内，但固定位置 */}
                    <div className="w-40 flex-shrink-0 ">
                        {Model.map((model, index) => (
                            <div key={index} className="h-20 flex items-center text-zinc-400 text-sm">{model}</div>
                        ))}
                    </div>
                    {/* 右侧内容（热力图和底部标签） */}
                    <div className="flex-1">
                        <div className="grid grid-cols-8">
                            {/* 热力图部分 */}
                            {heatmapData.map((item, index) => {
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
                                        className="h-20 flex items-center justify-center text-xs "
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
                        {/* 底部标签 */}
                        <div className="grid grid-cols-8 mt-2">
                            {EvalType?.map((type, index) => (
                                <div key={index} className="text-xs text-center whitespace-pre-line text-zinc-400">
                                    {type}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
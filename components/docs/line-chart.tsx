import React, { useEffect } from 'react';
import * as echarts from 'echarts';
import { chartData } from './chart-data';

export const LineChart = ({ index }: { index: number }) => {
    useEffect(() => {
        const chartDom = document.getElementById(`line-chart${index}`);
        const myChart = echarts.init(chartDom);
        const option = {
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                textStyle: {
                    color: '#A3A3A3' // 设置图例文字颜色
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01],
                axisLabel: {
                    color: '#A3A3A3', // 设置X轴标签颜色
                    fontSize: 14 // 调大 X 轴标签的字体
                },
                splitLine: {
                    lineStyle: {
                        color: '#2e2e2e' // 设置X轴网格线颜色
                    }
                }
            },
            yAxis: {
                type: 'category',
                data: chartData[index].model,
                axisLabel: {
                    color: (value: string) => value.includes('RWKV') ? '#ffffff' : '#A3A3A3', // 高亮带 RWKV 的标签
                    fontWeight: (value: string) => value.includes('RWKV') ? 'bold' : 'normal', // 设置带 RWKV 标签为粗体
                    fontSize: 14, // 调大所有 Y 轴标签的字体
                    formatter: (value: string) => `{value|${value}}`,
                    rich: {
                        value: {
                            fontSize: (value: string) => value.includes('RWKV') ? 16 : 14 // 调大带 RWKV 标签的字体
                        }
                    }
                }
            },
            series: chartData[index].series
        };
        myChart.setOption(option);

        const handleResize = () => {
            myChart.resize();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [index]);

    return (
        <div id={`line-chart${index}`} className='w-full h-[800px]'></div>
    );
}
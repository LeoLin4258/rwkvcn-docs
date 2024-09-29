import React, { useEffect, useState } from 'react';
import * as echarts from 'echarts';
import { chartData } from './chart-data';

export const LineChart = ({ name, seriesFilter }: { name: string, seriesFilter?: (series: any[]) => any[] }) => {

    useEffect(() => {
        const chartDom = document.getElementById(`line-chart-${name}-${seriesFilter}`);
        const myChart = echarts.init(chartDom);

        // Find the correct data based on the name
        const chartDataItem = chartData.find(item => item.name === name);

        // Check if chartDataItem and chartDataItem.series exist
        if (!chartDataItem || !chartDataItem.series) {
            console.error(`Data for ${name} not found or series is missing`);
            return;
        }

        const series = chartDataItem.series;
        let sortedModels = chartDataItem.model;

        // 只有当有多个测试项（系列）时才进行排序
        if (series && series.length > 0 && sortedModels) {
            // 应用seriesFilter（如果提供）
            const filteredSeries = seriesFilter ? seriesFilter(series) : series;

            // 使用过滤后的series计算每个模型的总分并排序
            const modelScores = sortedModels.map((model: string, idx: number) => {
                const totalScore = filteredSeries.reduce((sum: number, s: any) => sum + s.data[idx], 0);
                return { model, totalScore };
            });
            modelScores.sort((a, b) => a.totalScore - b.totalScore); // 改为升序排列
            sortedModels = modelScores.map(item => item.model);
        }

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
                data: sortedModels,
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
            series: seriesFilter
                ? seriesFilter(series?.map((s: any) => ({
                    ...s,
                    data: sortedModels?.map(model => s.data?.[chartDataItem.model?.indexOf(model) ?? -1] ?? 0) ?? []
                })) ?? [])
                : series
        };
        myChart.setOption(option);

        const handleResize = () => {
            myChart.resize();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [name, seriesFilter]);

    return (
        <div id={`line-chart-${name}-${seriesFilter}`} className='w-full h-[800px]'></div>
    );
}
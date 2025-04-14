// Migrated from V1, should be rewritten in the future.


"use client";

import React, { useEffect } from 'react';
import * as echarts from 'echarts';
import { chartData } from './chart-data';

export const LineChart = ({ name, seriesFilter }: { 
  name: string, 
  seriesFilter?: string // Change to string instead of function
}) => {

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
            let filteredSeries = series;
            
            // Instead of directly using the function, use a predefined filtering approach based on the string value
            if (seriesFilter) {
                const [start, end] = seriesFilter.split(',').map(num => parseInt(num.trim()));
                if (!isNaN(start) && !isNaN(end)) {
                    filteredSeries = series.slice(start, end);
                }
            }

            // 使用过滤后的series计算每个模型的总分并排序
            const modelScores = sortedModels.map((model: string, idx: number) => {
                const totalScore = filteredSeries.reduce((sum: number, s: any) => sum + s.data[idx], 0);
                return { model, totalScore };
            });
            modelScores.sort((a, b) => a.totalScore - b.totalScore); // 改为升序排列
            sortedModels = modelScores.map(item => item.model);
        }

        // 检测是否为移动设备
        const isMobile = window.innerWidth < 768;
        
        // 根据是否为移动设备处理模型名称
        const processedModels = isMobile 
            ? sortedModels.map((model: string) => {
                // 如果模型名称太长，进行截断处理
                if (model.length > 12) {
                    const parts = model.split('-');
                    if (parts.length >= 3) {
                        // 保留主要部分，如 RWKV-6-7B
                        return `${parts[0]}-${parts[1]}-${parts[2]}`;
                    }
                    // 如果不能分割，则直接截断
                    return model.substring(0, 12) + '...';
                }
                return model;
              })
            : sortedModels;

        const option = {
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                axisPointer: {
                    type: 'shadow'
                },
                formatter: function(params: any) {
                    // 在提示框中显示完整的模型名称
                    const modelIndex = params[0].dataIndex;
                    const fullModelName = sortedModels[modelIndex];
                    
                    let tooltipContent = `<div style="font-weight: bold;">${fullModelName}</div>`;
                    params.forEach((param: any) => {
                        tooltipContent += `<div>${param.seriesName}: ${param.value}</div>`;
                    });
                    
                    return tooltipContent;
                }
            },
            legend: {
                textStyle: {
                    color: '#A3A3A3' // 设置图例文字颜色
                }
            },
            grid: {
                left: isMobile ? '10%' : '3%',  // 移动端减少左侧空间占用
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01],
                axisLabel: {
                    color: '#A3A3A3', // 设置X轴标签颜色
                    fontSize: isMobile ? 10 : 14 // 移动端减小字体
                },
                splitLine: {
                    lineStyle: {
                        color: '#2e2e2e' // 设置X轴网格线颜色
                    }
                }
            },
            yAxis: {
                type: 'category',
                data: processedModels,
                axisLabel: {
                    color: (value: string, index: number) => {
                        // 使用索引查找原始模型名称来判断是否包含 RWKV
                        const originalModel = sortedModels[index];
                        return originalModel.includes('RWKV') ? '#008AE6' : '#A3A3A3';
                    },
                    fontWeight: (value: string, index: number) => {
                        const originalModel = sortedModels[index];
                        return originalModel.includes('RWKV') ? 'bold' : 'normal';
                    },
                    fontSize: isMobile ? 10 : 14, // 移动端减小字体
                    width: isMobile ? 60 : 120, // 移动端限制标签宽度
                    overflow: 'truncate', // 超出部分显示省略号
                    formatter: function(value: string, index: number) {
                        return `{value|${value}}`;
                    },
                    rich: {
                        value: {
                            fontSize: (value: string, index: number) => {
                                if (typeof index === 'number') {
                                    const originalModel = sortedModels[index];
                                    return originalModel.includes('RWKV') ? (isMobile ? 12 : 16) : (isMobile ? 10 : 14);
                                }
                                return isMobile ? 10 : 14;
                            }
                        }
                    }
                }
            },
            series: seriesFilter 
                ? (() => {
                    const [start, end] = seriesFilter.split(',').map(num => parseInt(num.trim()));
                    if (!isNaN(start) && !isNaN(end)) {
                        return series.slice(start, end).map((s: any) => ({
                            ...s,
                            data: sortedModels?.map(model => s.data?.[chartDataItem.model?.indexOf(model) ?? -1] ?? 0) ?? []
                        }));
                    }
                    return series;
                })()
                : series
        };
        myChart.setOption(option);

        const handleResize = () => {
            myChart.resize();
            // 重新设置移动端相关选项
            const updatedIsMobile = window.innerWidth < 768;
            if (updatedIsMobile !== isMobile) {
                // 如果移动状态发生变化，更新图表
                const updatedOption = {
                    grid: {
                        left: updatedIsMobile ? '10%' : '3%'
                    },
                    xAxis: {
                        axisLabel: {
                            fontSize: updatedIsMobile ? 10 : 14
                        }
                    },
                    yAxis: {
                        axisLabel: {
                            fontSize: updatedIsMobile ? 10 : 14,
                            width: updatedIsMobile ? 60 : 120
                        }
                    }
                };
                myChart.setOption(updatedOption);
            }
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
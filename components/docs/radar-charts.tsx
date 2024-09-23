'use client'
import React, { useEffect, useState } from 'react';
import * as echarts from 'echarts';
import { chartData } from './chart-data';


export const RadarChartComponent = (chartDataIndex: number) => {
    const [originalData, setOriginalData] = useState(chartData[chartDataIndex]);
    console.log(originalData);

    // 计算每个维度的最小值
    const minValues = originalData.labels.map((_, i) => {
        return Math.min(...originalData.datasets.map(dataset => dataset.data[i]));
    });

    // 按最小值归一化数据
    const normalizeDataByMin = (data: number[], minValues: number[]) => {
        return data.map((value, i) => minValues[i] / value); // 按最小值归一化
    };

    // 对每个数据集进行归一化
    const normalizedDatasetsByMin = originalData.datasets.map(dataset => ({
        ...dataset,
        data: normalizeDataByMin(dataset.data, minValues)
    }));

    // 构建 chartData
    const chartDataByMin = originalData.labels.map((label, index) => {
        const dataPoint: { [key: string]: any } = {}; // 定义 dataPoint 对象
        normalizedDatasetsByMin.forEach(dataset => {
            dataPoint[dataset.label] = dataset.data[index]; // 记录每个模型归一化后的数据
        });
        return dataPoint; // 返回这个维度的数据点
    });

    useEffect(() => {
        setOriginalData(chartData[chartDataIndex]);
        
        const chartDom = document.getElementById('radar-chart');
        const myChart = echarts.init(chartDom);

        const option = {
            //当鼠标悬停在图表上时，tooltip 会提供数据点的详细信息
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                trigger: 'item'
            },
            // 顶部的模型分类标签
            legend: {
                data: normalizedDatasetsByMin.map(dataset => dataset.label),
                textStyle: {
                    color: '#a3a3a3' // 设置标签文字颜色
                }
            },
            //控制雷达图的属性和样式
            radar: {
                // 设置雷达图的最大值与分割数
                indicator: originalData.labels.map(label => ({
                    name: label,
                    max: 1,
                    min: 0.8,
                    //控制测试类型的文本样式
                    nameTextStyle: {
                        color: '#a3a3a3', // 设置标签的字体颜色
                        // fontSize: 12, // 设置字体大小（可选）
                        // fontWeight: 'bold' // 设置字体加粗（可选）
                    }
                })),
                axisLine: {
                    lineStyle: {
                        color: '#222' // 设置轴线的颜色
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#111' // 设置分割线的颜色
                    }
                },
                // splitArea: {
                //     areaStyle: {
                //         color: ['#fff', '#f5f5f5'], // 设置分割区域的交替颜色
                //         shadowBlur: 10
                //     }
                // },
                // 将原点设定在 0.5，划分成5个部分，意味着从 0.5 开始到 1 分为5段
                splitNumber: 3, // 分割线数量，决定半径分为几段
                axisLabel: {
                    show: false, // 显示轴上的数值
                    formatter: (value: number) => (value).toFixed(1),  // 格式化为从0.5起步
                }
            },
            series: [{
                name: 'Radar Chart',
                type: 'radar',
                data: normalizedDatasetsByMin.map(dataset => ({
                    value: dataset.data,
                    name: dataset.label,
                    areaStyle: {
                        opacity: 0.1     // 设置每个模型数据的背景透明度
                    },
                    lineStyle: {
                        width: 2 // 设置每个模型数据的边框粗细
                    },
                    symbolSize: 4 // 设置每个模型数据的节点大小
                }))
            }]
        };

        myChart.setOption(option);

        return () => {
            myChart.dispose();
        };
    }, [chartDataByMin]);

    return (
        <div id="radar-chart" style={{ width: '100%', height: '400px', margin: '20px 0' }}></div>
    );

}
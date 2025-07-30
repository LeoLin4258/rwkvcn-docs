// Migrated from V1, should be rewritten in the future.

'use client'
import React, { useEffect, useState, useRef } from 'react';
import * as echarts from 'echarts';
import { chartData } from './chart-data';

export const RadarChartComponent = ({ name }: { name: string }) => {
    const chartRef = useRef<HTMLDivElement>(null);
    const chartInstanceRef = useRef<echarts.ECharts | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    const originalData = chartData.find(data => data.name === name);

    if (!originalData) {
        return <div>No data found for {name}</div>;
    }

    // 计算每个维度的最小值
    const minValues = originalData.labels?.map((_, i) => {
        return Math.min(...originalData.datasets.map(dataset => dataset.data[i]));
    });

    // 按最小值归一化数据
    const normalizeDataByMin = (data: number[], minValues: number[]) => {
        return data.map((value, i) => minValues[i] / value); // 按最小值归一化
    };

    // 对每个数据集进行归一化，并截取前七条数据
    const normalizedDatasetsByMin = originalData.datasets?.slice(0, 7).map(dataset => ({
        ...dataset,
        data: normalizeDataByMin(dataset.data, minValues ? minValues : [])
    }));

    // 初始化或更新图表
    const initOrUpdateChart = () => {
        if (!chartRef.current) return;

        // 确保容器有足够的尺寸
        const containerRect = chartRef.current.getBoundingClientRect();
        if (containerRect.width === 0 || containerRect.height === 0) {
            return;
        }

        // 如果图表实例不存在，创建新实例
        if (!chartInstanceRef.current) {
            chartInstanceRef.current = echarts.init(chartRef.current);
        }

        const option = {
            //当鼠标悬停在图表上时，tooltip 会提供数据点的详细信息
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                trigger: 'item'
            },
            // 顶部的模型分类标签
            legend: {
                margin: 70,
                data: normalizedDatasetsByMin?.map(dataset => dataset.label),
                textStyle: {
                    color: '#a3a3a3' // 设置标签文字颜色
                },
                // type: 'scroll', // 设置图例为可滚动
                pageIconColor: '#a3a3a3', // 设置翻页图标颜色
                pageTextStyle: {
                    color: '#a3a3a3' // 设置翻页文字颜色
                },
            },
            //控制雷达图的属性和样式
            radar: {
                // 设置雷达图的最大值与分割数
                indicator: originalData.labels?.map(label => ({
                    name: label,
                    max: 1,
                    min: 0.7,
                    //控制测试类型的标签文本样式
                    nameTextStyle: {
                        color: '#a3a3a3', // 设置标签的字体颜色
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
                // 将原点设定在 0.5，划分成5个部分，意味着从 0.5 开始到 1 分为5段
                splitNumber: 2, // 分割线数量，决定半径分为几段
                axisLabel: {
                    show: false, // 显示轴上的数值
                    formatter: (value: number) => (value).toFixed(1),  // 格式化为从0.5起步
                }
            },
            series: [{
                name: 'Radar Chart',
                type: 'radar',
                data: normalizedDatasetsByMin?.map(dataset => ({
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

        chartInstanceRef.current.setOption(option);
        chartInstanceRef.current.resize();
    };

    // 检查容器是否可见
    useEffect(() => {
        if (!chartRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        observer.observe(chartRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    // 当组件变为可见时初始化图表
    useEffect(() => {
        if (isVisible) {
            // 使用 setTimeout 确保 DOM 渲染完成后再初始化图表
            const timeoutId = setTimeout(() => {
                initOrUpdateChart();
            }, 100);

            return () => clearTimeout(timeoutId);
        }
    }, [isVisible, normalizedDatasetsByMin]);

    // 处理窗口大小变化
    useEffect(() => {
        const resizeChart = () => {
            if (chartInstanceRef.current && isVisible) {
                chartInstanceRef.current.resize();
            }
        };

        window.addEventListener('resize', resizeChart);

        return () => {
            window.removeEventListener('resize', resizeChart);
        };
    }, [isVisible]);

    // 清理图表实例
    useEffect(() => {
        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.dispose();
                chartInstanceRef.current = null;
            }
        };
    }, []);

    return (
        //border
        <div className='h-[500px] md:h-[600px] lg:h-[650px] mt-10 w-full'>
            <div ref={chartRef} className='w-full h-full'></div>
        </div>
    );
}

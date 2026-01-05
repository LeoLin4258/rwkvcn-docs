// Migrated from V1, should be rewritten in the future.


"use client";

import React, { useEffect, useMemo, useRef } from 'react';
import * as echarts from 'echarts';
import { chartData } from './chart-data';

export const LineChart = ({ name, seriesFilter }: {
    name: string,
    seriesFilter?: string
}) => {
    const chartRef = useRef<HTMLDivElement>(null);

    // Prepare chart data (sorting and series filtering)
    const { sortedModels, processedSeries, originalModels } = useMemo(() => {
        const chartDataItem = chartData.find(item => item.name === name);

        // Check if chartDataItem and chartDataItem.series exist
        if (!chartDataItem || !chartDataItem.series) {
            console.error(`Data for ${name} not found or series is missing`);
            return { sortedModels: [], processedSeries: [], originalModels: [] };
        }

        const originalSeries = chartDataItem.series;
        const rawModels = chartDataItem.model || [];

        let targetSeries = originalSeries;

        // Apply series filter
        if (seriesFilter) {
            const [start, end] = seriesFilter.split(',').map(num => parseInt(num.trim()));
            if (!isNaN(start) && !isNaN(end)) {
                targetSeries = originalSeries.slice(start, end);
            }
        }

        // Calculate scores and sort models
        // Create an array of indices [0, 1, 2, ...]
        const indices = rawModels.map((_, idx) => idx);

        // Calculate total score for each index based on targetSeries
        const scores = indices.map(idx => {
            return targetSeries.reduce((sum: number, s: any) => sum + (s.data[idx] || 0), 0);
        });

        // Sort indices based on scores
        indices.sort((a, b) => scores[a] - scores[b]);

        // Map sorted indices to models and series data
        const sortedModelsList = indices.map(idx => rawModels[idx]);

        // Reorder data in series to match sorted models
        const sortedSeries = targetSeries.map((s: any) => ({
            ...s,
            barMaxWidth: 60,
            data: indices.map(idx => s.data[idx] || 0)
        }));

        return {
            sortedModels: sortedModelsList,
            processedSeries: sortedSeries,
            originalModels: rawModels
        };
    }, [name, seriesFilter]);

    // Calculate dynamic height based on number of models
    // Base height + (height per bar * number of models)
    // Add extra height for legend when there are multiple series
    // Minimum height 350px to ensure legend and axis labels are visible
    const legendHeight = processedSeries.length > 2 ? 60 : 40;
    const chartHeight = Math.max(sortedModels.length * 50 + 120 + legendHeight, 400);

    useEffect(() => {
        if (!sortedModels.length || !chartRef.current) return;

        const myChart = echarts.init(chartRef.current);

        const updateChart = () => {
            // Detect mobile
            const isMobile = window.innerWidth < 768;

            // Process model names for mobile
            const displayModels = isMobile
                ? sortedModels.map((model: string) => {
                    if (model.length > 12) {
                        const parts = model.split('-');
                        if (parts.length >= 3) {
                            return `${parts[0]}-${parts[1]}-${parts[2]}`;
                        }
                        return model.substring(0, 12) + '...';
                    }
                    return model;
                })
                : sortedModels;

            const option = {
                tooltip: {
                    trigger: 'axis',
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    axisPointer: { type: 'shadow' },
                    formatter: function (params: any) {
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
                    textStyle: { color: '#A3A3A3' }
                },
                grid: {
                    left: isMobile ? '10%' : '3%',
                    right: '4%',
                    bottom: processedSeries.length > 2 ? '15%' : '10%',
                    top: '10%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01],
                    axisLabel: {
                        color: '#A3A3A3',
                        fontSize: isMobile ? 10 : 14
                    },
                    splitLine: {
                        lineStyle: { color: '#2e2e2e' }
                    }
                },
                yAxis: {
                    type: 'category',
                    data: displayModels,
                    axisLabel: {
                        color: (value: string, index: number) => {
                            const originalModel = sortedModels[index];
                            return originalModel.includes('RWKV') ? '#008AE6' : '#A3A3A3';
                        },
                        fontWeight: (value: string, index: number) => {
                            const originalModel = sortedModels[index];
                            return originalModel.includes('RWKV') ? 'bold' : 'normal';
                        },
                        fontSize: isMobile ? 10 : 14,
                        width: isMobile ? 60 : 120,
                        overflow: 'truncate',
                        formatter: function (value: string) {
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
                series: processedSeries
            };

            myChart.setOption(option);
            myChart.resize();
        };

        // Initial render
        updateChart();

        const handleResize = () => {
            updateChart();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            myChart.dispose();
        };
    }, [sortedModels, processedSeries]);

    return (
        <div
            id={`line-chart-${name}-${seriesFilter}`}
            ref={chartRef}
            className='w-full'
            style={{ height: `${chartHeight}px` }}
        ></div>
    );
}
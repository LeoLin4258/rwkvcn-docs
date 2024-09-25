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
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {},
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                data: chartData[index].model
            },
            series: chartData[index].series
        };
        myChart.setOption(option);
    }, [index]);

    return (
        <div id={`line-chart${index}`} className='w-full h-[800px]'></div>
    );
}
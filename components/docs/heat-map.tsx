import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import type { EChartsOption } from 'echarts';

const HeatMap: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = echarts.init(chartRef.current, '');

    // prettier-ignore
    const EvalType = [
      'Average\n (lower=better)', 'ao3\n​english', 'bbc\n​news',
      'wikipedia\n​english', 'arxiv\n​computer ​science', 'arxiv\n​physics',
      'github\ncpp', 'github\n​python'
    ];

    // prettier-ignore
    const Model = [
      'pythia-12b-v0',
      'Qwen1.5-14B',
      'Llama-2-13b-hf',
      'RWKV-x060-World-14B-v2.1-20240719-ctx4096',
      'Mistral-Nemo-Base-2407'
    ];

    // prettier-ignore
    const data = [
      [0, 0, 8.356], [0, 1, 11.285], [0, 2, 9.19], [0, 3, 9.527], [0, 4, 8.535], [0, 5, 8.398], [0, 6, 5.43], [0, 7, 6.125],
      [1, 0, 7.697], [1, 1, 10.88], [1, 2, 8.884], [1, 3, 9.102], [1, 4, 7.752], [1, 5, 7.862], [1, 6, 4.665], [1, 7, 4.736],
      [2, 0, 7.676], [2, 1, 10.524], [2, 2, 8.279], [2, 3, 8.187], [2, 4, 8.075], [2, 5, 8.311], [2, 6, 4.929], [2, 7, 5.426],
      [3, 0, 7.609], [3, 1, 10.188], [3, 2, 8.518], [3, 3, 8.343], [3, 4, 7.916], [3, 5, 8.04], [3, 6, 4.93], [3, 7, 5.33],
      [4, 0, 7.107], [4, 1, 10.07], [4, 2, 8.081], [4, 3, 7.954], [4, 4, 7.419], [4, 5, 7.656], [4, 6, 4.203], [4, 7, 4.368]
    ].map(item => [item[1], item[0], item[2] || '-']);

    const option: EChartsOption = {
      tooltip: {
        position: 'top'
      },
      grid: {
        left: '20%',
        top: '5%'
      },
      xAxis: {
        type: 'category',
        data: EvalType,
        name: '[测试方法]',
        axisLabel: {
          hideOverlap: false
        },
        axisTick: {
          show: false
        }
      },
      yAxis: {
        type: 'category',
        data: Model,
        name: '[模型名称]',
        splitArea: {
          show: true
        },
        axisTick: {
          show: false
        }
      },
      visualMap: [
        {
          type: 'continuous',
          dimension: 2,
          min: 7,
          max: 9,
          inRange: {
            //设置颜色渐变
            color: ['#63be7b', '#ffffff', '#f8696b']
          },
          calculable: false,
          orient: 'horizontal',
          left: 'center',
        }
      ],
      series: [
        {
          name: 'Punch Card',
          type: 'heatmap',
          data: data,
          label: {
            show: true
          }
        }
      ]
    };

    chart.setOption(option);

    return () => {
      chart.dispose();
    };
  }, []);

  return <div ref={chartRef} className='w-full h-[600px]' />;
};

export default HeatMap;


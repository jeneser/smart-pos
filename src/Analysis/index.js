import React from 'react';
import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';

import * as styled from './index.styled';

echarts.registerTheme('my_theme', {
  backgroundColor: '#fff'
});

let xAxisData = [];
let data1 = [];
let data2 = [];
for (let i = 0; i < 14; i++) {
  xAxisData.push('类目' + i);
  data1.push(Math.random() * 10000 + 50);
  data2.push(Math.random() * 10000 + 40);
}

const chartOptions = {
  title: {
    text: '近两周销售趋势',
    subtext: '纯属虚构',
    x: 'center'
  },
  legend: {
    x: 'center',
    y: 'bottom',
    data: ['bar', 'bar2'],
    align: 'left'
  },
  tooltip: {},
  grid: {
    top: 40,
    left: 20,
    right: 20
  },
  xAxis: {
    data: xAxisData,
    silent: false,
    splitLine: {
      show: false
    }
  },
  yAxis: {
    show: false
  },
  axisLabel: {
    fontSize: 14,
    color: '#999'
  },
  series: [
    {
      name: 'bar',
      type: 'bar',
      data: data1,
      animationDelay: function(idx) {
        return idx * 10;
      }
    },
    {
      name: 'bar2',
      type: 'bar',
      data: data2,
      animationDelay: function(idx) {
        return idx * 10 + 100;
      }
    }
  ],
  animationEasing: 'elasticOut',
  animationDelayUpdate: function(idx) {
    return idx * 5;
  }
};

const pieChartOptions = {
  title: {
    text: '类目销售榜单',
    subtext: '纯属虚构',
    x: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    x: 'center',
    y: 'bottom',
    data: [
      'rose1',
      'rose2',
      'rose3',
      'rose4',
      'rose5',
      'rose6',
      'rose7',
      'rose8'
    ]
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      magicType: {
        show: true,
        type: ['pie', 'funnel']
      },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  calculable: true,
  series: [
    {
      name: '半径模式',
      type: 'pie',
      radius: [20, 110],
      center: ['25%', '50%'],
      roseType: 'radius',
      label: {
        normal: {
          show: false
        },
        emphasis: {
          show: true
        }
      },
      lableLine: {
        normal: {
          show: false
        },
        emphasis: {
          show: true
        }
      },
      data: [
        { value: 10, name: 'rose1' },
        { value: 5, name: 'rose2' },
        { value: 15, name: 'rose3' },
        { value: 25, name: 'rose4' },
        { value: 20, name: 'rose5' },
        { value: 35, name: 'rose6' },
        { value: 30, name: 'rose7' },
        { value: 40, name: 'rose8' }
      ]
    },
    {
      name: '面积模式',
      type: 'pie',
      radius: [30, 110],
      center: ['75%', '50%'],
      roseType: 'area',
      data: [
        { value: 10, name: 'rose1' },
        { value: 5, name: 'rose2' },
        { value: 15, name: 'rose3' },
        { value: 25, name: 'rose4' },
        { value: 20, name: 'rose5' },
        { value: 35, name: 'rose6' },
        { value: 30, name: 'rose7' },
        { value: 40, name: 'rose8' }
      ]
    }
  ]
};

function Analysis() {
  return (
    <styled.Container>
      <styled.HeaderBar>近期报表分析</styled.HeaderBar>
      <styled.Summary>
        <styled.Col>
          <styled.Title>￥9989.00</styled.Title>
          <styled.Label>今日成交额</styled.Label>
        </styled.Col>
        <styled.Col>
          <styled.Title>99</styled.Title>
          <styled.Label>今日订单数</styled.Label>
        </styled.Col>
        <styled.Col>
          <styled.Title>￥9989</styled.Title>
          <styled.Label>昨日成交额</styled.Label>
        </styled.Col>
        <styled.Col>
          <styled.Title>95</styled.Title>
          <styled.Label>昨日订单数</styled.Label>
        </styled.Col>
      </styled.Summary>

      <styled.ChartCard>
        <ReactEchartsCore
          echarts={echarts}
          option={chartOptions}
          notMerge={true}
          lazyUpdate={true}
          theme={'theme_name'}
          style={{ height: '400px', width: '100%' }}
        />
      </styled.ChartCard>

      <styled.ChartCard>
        <ReactEchartsCore
          echarts={echarts}
          option={pieChartOptions}
          notMerge={true}
          lazyUpdate={true}
          theme={'theme_name'}
          style={{ height: '400px', width: '100%' }}
        />
      </styled.ChartCard>
    </styled.Container>
  );
}

export default Analysis;

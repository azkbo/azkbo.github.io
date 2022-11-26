/**
 * Author: Meng
 * Date: 2022-08-16
 * Desc: 
 */

 const wageChartOption: any = {
  xAxis: {
    type: 'category',
    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value} ¥'
    }
  },
  tooltip: {
    trigger: 'axis'
  },
  toolbox: {
    show: true,
    feature: {
      dataView: { readOnly: false },
      magicType: { type: ['line', 'bar'] },
      restore: {},
      saveAsImage: {}
    }
  },
  series: [
    {
      data: [15020, 16020, 13200, 13020, 16201, 15029, 16230, 15250, 17090, 16020, 32049, 18024],
      type: 'line',
      markPoint: {
        data: [
          { type: 'max', name: 'Max' },
          { type: 'min', name: 'Min' }
        ]
      },
      markLine: {
        data: [{ type: 'average', name: 'Avg' }]
      }
    }
  ]
};

const wageOption2: any = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
    }
  },
  toolbox: {
    show: true,
    feature: {
      dataView: { readOnly: false },
      magicType: { type: ['line', 'bar'] },
      restore: {},
      saveAsImage: {}
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
    type: 'value'
  },
  yAxis: {
    type: 'category',
    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
  },
  series: [
    {
      name: '个税',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [520, 602, 601, 634, 690, 530, 520, 620, 602, 601, 534, 590]
    },
    {
      name: '公积金',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [1520, 1632, 1501, 1534, 1590, 1630, 1610, 1532, 1501, 1634, 1590, 1530]
    },
    {
      name: '养老',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [1202, 1182, 1191, 1204, 1190, 1130, 1210, 1182, 1191, 1234, 1190, 1130]
    },
    {
      name: '医保',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [150, 212, 201, 154, 190, 330, 410, 212, 201, 154, 190, 330]
    },
    {
      name: '工资',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [15020, 16020, 13200, 13020, 16201, 15029, 16230, 15250, 17090, 16020, 32049, 18024]
    }
  ]
};

const ChartOptions = {
  wageChartOption,
  wageOption2
}
export default ChartOptions;
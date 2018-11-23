<template lang="pug">
  div(ref="echart" :class="className" :style="{height}")
</template>

<script>
  import echarts from 'echarts/lib/echarts'
  import 'echarts/lib/chart/line'

  require('echarts/lib/component/grid')

  require('echarts/lib/component/tooltip')

  export default {
    name: 'LineChart',
    props: {
      className: {
        type: String,
        default: 'chart'
      },
      height: {
        type: String,
        default: '400px'
      },
      chartData: {
        type: Array,
        default: () => ([])
      },
      xAxis: {
        type: Array,
        default: () => ([])
      }
    },
    data () {
      return {
        chart: null
      }
    },
    watch: {
      chartData () {
        this._setOption(this.chartData)
      }
    },
    mounted () {
      this._initChart()
      this.__resizeHandler = () => {
        if (this.chart) {
          this.chart.resize()
        }
      }

      window.addEventListener('resize', this.__resizeHandler)
    },
    beforeDestroy () {
      if (!this.chart) return
      window.removeEventListener('resize', this.__resizeHandler)

      this.chart.dispose()
      this.chart = null
    },
    methods: {
      _setOption () {
        const chartOptions = {
          xAxis: {
            data: this.xAxis,
            boundaryGap: false,
            axisTick: {
              show: false
            }
          },
          yAxis: {
            axisTick: {
              show: false
            }
          },
          grid: {
            left: 25,
            right: 50,
            bottom: 20,
            top: 30,
            margin: 'auto',
            containLabel: true
          },
          tooltip: {
            trigger: 'axis',
            showDelay: 0,
            axisPointer: {
              show: true,
              type: 'cross',
              lineStyle: {
                type: 'dashed',
                width: 1
              }
            }
          },
          series: [
            {
              data: this.chartData,
              smooth: true,
              type: 'line',
              larger: true,
              animationDuration: 2800,
              animationEasing: 'quadraticOut'
            }
          ]
        }
        this.chart.setOption(chartOptions)
      },
      _initChart () {
        this.chart = echarts.init(this.$el)
        this.$refs.echart.classList.add('marginAuto')
        this._setOption(this.chartData)
      }
    }
  }
</script>

<template>
  <div id="app" style="margin-left: 230px;margin-top: 140px;">
    <div id="main" style="width: 700px;height:500px;"></div>
  </div>
</template>
<script>
export default {
  name: "yanjiu",
  methods: {
    drawChart() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("main"));
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: "研究热词"
        },
        tooltip: {},
        legend: {
          data: ["reci"]
        },
        xAxis: {
          data: ["java", "c++", "c", "php", "python", "go"]
        },
        yAxis: {},
        series: [
          {
            name: "热词",
            type: "bar",
            data: [30, 21, 18, 20, 28, 25]
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  },
  mounted() {
    this.drawChart();
  }
};
</script>

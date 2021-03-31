<template>
  <!--为echarts准备一个具备大小的容器dom-->
  <div id="pieReport" style="width: 800px;height: 600px;margin-left: 200px;margin-top: 100px;"></div>
</template>
<script>
  import echarts from 'echarts'
    export default {
      name: "",
      data() {
        return {
          charts: "",
          opinion: ["ICCV", "CVPR", "ECCV"],
          opinionData: [
            { value: 120, name: "ICCV", itemStyle: "#b32730" },
            { value: 180, name: "CVPR", itemStyle: "#37d125" },
            { value: 350, name: "ECCV", itemStyle: "#4d43e1" }
          ]
        };
      },
        methods:{
            drawPie(id){
               this.charts = echarts.init(document.getElementById(id))
               this.charts.setOption({
                 title: {
                         text: '爬了么-论文分析数据',
                         subtext: '纯属虚构',
                         left: 'center'
                     },
                 tooltip: {
                   trigger: 'item',

                 },
                 legend: {
                   orient: 'vertical',
                   x: 'left',
                   data:this.opinion,
                 },
                 series: [
                   {
                     name:'领域',
                     type:'pie',
                     radius:'50%',
                     data: [
                {value: 600, name: 'ICCV'},
                {value: 1000, name: 'CVPR'},
                {value: 300, name: 'ECCV'}
            ],
                     avoidLabelOverlap: false,
                     label: {
                       normal: {
                         show: false,
                         position: 'center'
                       },
                       emphasis: {
                         show: true,
                         textStyle: {
                           fontSize: '30',
                           fontWeight: 'blod'
                         }
                       }
                     },
                     labelLine: {
                       normal: {
                         show: false
                       }
                     },
                     data:this.opinionData
                   }
                 ]
               })
            }
        },
      //调用
        mounted(){
            this.$nextTick(function() {
                this.drawPie('pieReport')
            })
        }
    }
</script>
<style>
</style>

<template>
  <div class="whole">
    <div class="nar">
      <div class="back">
        <i class="el-icon-back"></i>
      </div>
      <div class="title">
        disclaime
      </div>
    </div>
    <div class="author">
      作者：Avail
    </div>
    <div class="divide">
      <el-divider content-position="right">爬了么</el-divider>
    </div>
    <div class="zhaiyao">
      <div class="zai_na">
        <p class="zai_na_p">摘要：</p>
      </div>
      <div class="zhai_co">
        <p class="zhai_co_p">The 3-D models are first built from range data using a volumetric set intersection method previously developed by us. Photometry can be napped onto these models by registering features from both the 3-D and 2-D data sets. Range data segmentation algorithms have been developed to identify planar regions, determine linear features from planar intersections that can serve as features for registration with 2-D imagery lines, and reduce the overall complexity of the models. Results are shown for building models of large buildings on our campus using real data acquired from multiple </p>
      </div>
    </div>
    <div class="keyco">
      <div class="keyna">
        <p class="keynap">关键词：</p>
      </div>
      <div class="keycop">
        <p class="keycopp" style="word-break: break-word;white-space: normal;">isACM、Conference、ephemera、digital</p>
      </div>
    </div>
    <div class="link">
      <a href="#">原文链接</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'descri',
    data() {

    return{

    }
  }
 }
</script>

<style>
  .whole{
    width: 1000px;
    height: 90%;
    margin-left: 100px;
    margin-top: 50px;
    border-radius: 20px;
    background-color: #FFFFFF;

  }

  .nar{
    width: 100%;
    height: 10%;
  }
  .back{
    display: inline-block;
    font-size:230%;
    margin-left: 3%;
    margin-top:5px;
  }
  .el-icon-back{
  }
  .title{
    display: inline-block;
    font-size:180%;
    margin-left: 38%;
    margin-top:5px;
  }
  .author{
    font-size:130%;
    margin-left: 45.6%;
    margin-top:2%;
  }
  .zhaiyao{
    font-size:90%;
    width: 100%;
    height: 20%;
  }
  .zai_na{
    display: inline-block;
    width: 110px;
    height: 100px;
  }
  .zai_na_p{
      padding-left: 50px;
      float: right;
      padding-top: 0px;
  }
  .zhai_co{
    width: 800px;
    height: 100%;
    display: inline-block;
  }
  .zhai_co_p{
    padding-left: 10px;
    text-align: left;
      overflow:auto;
    width:  100%;
    height: 100%;
  }
  .keyco{
    font-size:90%;
    width: 100%;
    height: 20%;
  }
  .keyna{
    display: inline-block;
    width: 110px;
    height: 100%;
  }
  .keynap{
    margin-top: ;
      float: right;
  }
  .keycop{
    width: 800px;
    height: 100%;
    display: inline-block;
  }
  .keycopp{
    width:100px;
    height: 100%;
    text-align: left;
    text-overflow: clip;
      overflow:auto;
    padding-left: 10px;
  }
  .link{
    margin: 20px 40px;
  }
</style>

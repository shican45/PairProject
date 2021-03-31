<template>
  <div style="width: 800px;">
<div style="width: 100%;">
      <div class="input">
        <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
        <el-button slot="append">搜索</el-button>
        </el-input>
      </div>

    <div class="load">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-change="handleChange"
              :file-list="fileList">
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传txt/doc文件，且不超过500kb</div>
            </el-upload>
    </div>
</div>
    <div>
      <ul>
            <li v-for="(item, index) in clockInfoList.slice((pageNo-1)*3, pageNo*3)":key="index">
              <div class="list1">
                <template slot-scope="scope"></template>
              <el-radio v-model="item.hu"  class="1">
                <div class="p1">
                  <div class="wen">
                        <div class="t1">
                           标题：{{item.title}}
                        </div>
                        <div class="z1" style="overflow: auto;">
                           摘要：{{item.zaiyao}}
                        </div>
                        <div class="c1" style="overflow: auto;">
                           内容：{{item.content}}
                        </div>
                  </div>
                  <div class="ci">
                        <div class="conkey1">
                           关键字
                        </div>
                        <div class="con1">
                           {{item.key}}
                        </div>
                  </div>
                  </div>
              </el-radio>
              </div>
            </li></ul>
    </div>
    <div class="di">
      <div class="input2">
        <el-pagination
                class="pageView"
                v-if="paginationShow"
                background
        @current-change="handleCurrentChange"
                :current-page.sync="pageNo"
                :page-size="3"
                layout="total, prev, pager, next"
                :total="7">
              </el-pagination>
      </div>
      <div class="input1">
        <el-button class="doaru">确认导入</el-button>
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    name: 'jiansuo',
    data() {

    return {
            fileList: [{name: '论文一.dox', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: '论文二.dox', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}
            ],
            radio: '1',
            clockInfoList: [
              {
                hu:1,
                title:'disclaime',
                zaiyao:'The 3-D models are first built from range data using a volumetric set intersection method previously developed by us. Photometry can be napped onto these models by registering features from both the 3-D and 2-D data sets. Range data segmentation algorithms have been developed to identify planar regions, determine linear features from planar intersections that can serve as features for registration with 2-D imagery lines, and reduce the overall complexity of the models. Results are shown for building models of large buildings on our campus using real data acquired from multiple',
                content:'Photometry can be napped onto these models by registering features from both the 3-D and 2-D data sets. Range data segmentation algorithms have been developed to identify planar regions, determine linear features from planar intersections that can serve as features for registration with 2-D imagery lines, and reduce the overall complexity of the models. Results are shown for building models of large buildings on our campus using real data acquired from multiple',
                key:'isACM、Conference、ephemera、digital'
              },
              {
                hu:2,
                title:'disclaime',
                zaiyao:'The 3-D models are first built from range data using a volumetric set intersection method previously developed by us. Photometry can be napped onto these models by registering features from both the 3-D and 2-D data sets. Range data segmentation algorithms have been developed to identify planar regions, determine linear features from planar intersections that can serve as features for registration with 2-D imagery lines, and reduce the overall complexity of the models. Results are shown for building models of large buildings on our campus using real data acquired from multiple',
                content:'Photometry can be napped onto these models by registering features from both the 3-D and 2-D data sets. Range data segmentation algorithms have been developed to identify planar regions, determine linear features from planar intersections that can serve as features for registration with 2-D imagery lines, and reduce the overall complexity of the models. Results are shown for building models of large buildings on our campus using real data acquired from multiple',
                key:'isACM、Conference、ephemera、digital'
              },
              {
                hu:3,
                title:'disclaime',
                zaiyao:'The 3-D models are first built from range data using a volumetric set intersection method previously developed by us. Photometry can be napped onto these models by registering features from both the 3-D and 2-D data sets. Range data segmentation algorithms have been developed to identify planar regions, determine linear features from planar intersections that can serve as features for registration with 2-D imagery lines, and reduce the overall complexity of the models. Results are shown for building models of large buildings on our campus using real data acquired from multiple',
                content:'Photometry can be napped onto these models by registering features from both the 3-D and 2-D data sets. Range data segmentation algorithms have been developed to identify planar regions, determine linear features from planar intersections that can serve as features for registration with 2-D imagery lines, and reduce the overall complexity of the models. Results are shown for building models of large buildings on our campus using real data acquired from multiple',
                key:'isACM、Conference、ephemera、digital'
              },
              {
                hu:4,
                title:'disclaime',
                zaiyao:'The 3-D models are first built from range data using a volumetric set intersection method previously developed by us. Photometry can be napped onto these models by registering features from both the 3-D and 2-D data sets. Range data segmentation algorithms have been developed to identify planar regions, determine linear features from planar intersections that can serve as features for registration with 2-D imagery lines, and reduce the overall complexity of the models. Results are shown for building models of large buildings on our campus using real data acquired from multiple',
                content:'Photometry can be napped onto these models by registering features from both the 3-D and 2-D data sets. Range data segmentation algorithms have been developed to identify planar regions, determine linear features from planar intersections that can serve as features for registration with 2-D imagery lines, and reduce the overall complexity of the models. Results are shown for building models of large buildings on our campus using real data acquired from multiple',
                key:'isACM、Conference、ephemera、digital'
              },
              {
                hu:5,
                title:'disclaime',
                zaiyao:'The 3-D models are first built from range data using a volumetric set intersection method previously developed by us. Photometry can be napped onto these models by registering features from both the 3-D and 2-D data sets. Range data segmentation algorithms have been developed to identify planar regions, determine linear features from planar intersections that can serve as features for registration with 2-D imagery lines, and reduce the overall complexity of the models. Results are shown for building models of large buildings on our campus using real data acquired from multiple',
                content:'Photometry can be napped onto these models by registering features from both the 3-D and 2-D data sets. Range data segmentation algorithms have been developed to identify planar regions, determine linear features from planar intersections that can serve as features for registration with 2-D imagery lines, and reduce the overall complexity of the models. Results are shown for building models of large buildings on our campus using real data acquired from multiple',
                key:'isACM、Conference、ephemera、digital'
              },
              {
                hu:6,
                title:'disclaime',
                zaiyao:'The 3-D models are first built from range data using a volumetric set intersection method previously developed by us. Photometry can be napped onto these models by registering features from both the 3-D and 2-D data sets. Range data segmentation algorithms have been developed to identify planar regions, determine linear features from planar intersections that can serve as features for registration with 2-D imagery lines, and reduce the overall complexity of the models. Results are shown for building models of large buildings on our campus using real data acquired from multiple',
                content:'Photometry can be napped onto these models by registering features from both the 3-D and 2-D data sets. Range data segmentation algorithms have been developed to identify planar regions, determine linear features from planar intersections that can serve as features for registration with 2-D imagery lines, and reduce the overall complexity of the models. Results are shown for building models of large buildings on our campus using real data acquired from multiple',
                key:'isACM、Conference、ephemera、digital'
              },
              {
                hu:7,
                title:'disclaime',
                zaiyao:'The 3-D models are first built from range data using a volumetric set intersection method previously developed by us. Photometry can be napped onto these models by registering features from both the 3-D and 2-D data sets. Range data segmentation algorithms have been developed to identify planar regions, determine linear features from planar intersections that can serve as features for registration with 2-D imagery lines, and reduce the overall complexity of the models. Results are shown for building models of large buildings on our campus using real data acquired from multiple',
                content:'Photometry can be napped onto these models by registering features from both the 3-D and 2-D data sets. Range data segmentation algorithms have been developed to identify planar regions, determine linear features from planar intersections that can serve as features for registration with 2-D imagery lines, and reduce the overall complexity of the models. Results are shown for building models of large buildings on our campus using real data acquired from multiple',
                key:'isACM、Conference、ephemera、digital'
              }
            ],//返回数据——填充到数据列表
                    pageSize: 3,//默认的请求pageSize = 15
                    pageNo: 1,//当前页码
                    paginationShow: true,//是否显示分页
                    totalCount: 7,//总条数

    };
  },
    methods: {
      fu(){
        this.i=this.i+1
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      handleCurrentChange(val){
        this.pageNo=val;
      }
      //handleSizeChange(val) {
             // this.$nextTick(() =>
            //    this.getPageData(),
            //  )
            //},
            //点击下一页和点击页码时执行
            /*handleCurrentChange(val) {
              this.getPageData();
            },
            //获取分页数据totalDataNumber
            getPageData: function () {
              let that = this;
              //let reqUrl = "api-common/clock/toAppList?pageSize=" + this.pageSize + "&page=" + parseInt(this.pageNo)
              http.getData(reqUrl, function (clockInfoList, message) {
                console.log(clockInfoList)
                if (clockInfoList != null) {
                  that.clockInfoList = clockInfoList.result;
                }
              })
            }*/
          },
          //进入页面后请求的初始数据
          /*created: function () {
            let that = this;
            let reqUrl = "api-common/clock/toAppList?pageSize=" + this.pageSize + "&page=1"
            http.getData(reqUrl, function (clockInfoList, message) {
              console.log(clockInfoList)
              if (this.clockInfoList != null) {
                that.clockInfoList = clockInfoList.result;
                that.totalPage = clockInfoList.totalPage;//设置分页的总页数
                that.totalCount = clockInfoList.totalCount;//设置数据总条数
                if (clockInfoList.totalPage > 1) {//总页数大于1时显示分页
                  that.paginationShow = true;
                }
                console.log("总页数：" + that.totalPage)
              }
            })
    }*/
}
</script>

<style>
  .el-radio__input.is-checked + .el-radio__label {
    color: #00007f !important;
  }
  .el-upload__tip{
    accept:".txt, .doc, .docx"
    }

  .list1{
    display: inline-block;
    margin-left: 18%;
    margin-top: 20px;
  }
  .input{
    display: inline-block;
  }
  .load{
    display: inline-block;
  }
  .wen{
    display: inline-block;
  }
  .ci{
    display: inline-block;
    float: right;
    width: 120px;
    height: 95px;
    border-radius: 20px;
    margin-top: 1.6%;
    margin-right: 1.6%;
    background: rgba(93, 230, 221, 0.3);
  }
  .1{
      position:absolute;
    left:100px;
    top:150px;
  }
  .p1{
    background: rgba(181, 176, 177, 0.3);
    margin: auto;
    width: 700px;
    height: 120px;
    border-radius: 20px;
    display: inline-block;
  }
  .t1{
    font-size: 17px;
    margin-top:8px;
    word-break: break-all;
    white-space: normal;
    margin-left:25px;
    height: 10x;
  }
  .z1{
    font-size: 10px;
    width: 500px;
    height: 13px;
    margin-top:10px;
    margin-left:25px;
    word-break: break-all;
    white-space: normal;
  }
  .pageView {
      height: 30px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
  .c1{
    font-size: 10px;
    margin-top:10px;
    width: 500px;
    height: 49px;
    word-break: break-all;
    white-space: normal;
    margin-left:25px;
  }
  .conkey1{
    margin-left:30%;
    margin-top:5px;
  }
  .con1{
    margin-top:5px;
    margin-left:5px;
    white-space: normal;
    width: 10px;
  }
  .el-upload__tip{
    color: #000000;
  }
  .file-list{
    color: #000000;
  }
    .upload-demo{
    opacity: 1;
      width: 100%;
      margin-left: 100%;
    margin-top: 4%;
    display:-wap-marquee;
    }
  .input-with-select{
    width: 560px;
    margin-bottom: 6%;
    margin-left: 30%;
    opacity: 0.8;
  }
  .di{
    width: 100%;
    position: absolute;
    left: 450px;
    top: 650px;
  }
  .input2{
    display: inline-block;
    margin-left: 0%;
  }
  .input1{
    display: inline-block;
margin-left: 20%;
  }
  .fenye{
    margin-left: 10%;
    display: inline-block;
  }
  .daoru{
    margin-left: 40%;
    display: inline-block;
  }
</style>

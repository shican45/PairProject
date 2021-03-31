<template>
  <div>
    <el-dialog
      :visible.sync="dialogVisib"
      :modal="false"
      width="70%"
      :show-close="true"
      >
      <div class="whole">
          <div class="title">
            标题：disclaime
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
          <a href="https://baidu.com" target="_blank">原文链接</a>
        </div>
      </div>
      </el-dialog
>
    <div>
      <el-upload

        class="upload-demo"
        style="width: 200px;position: absolute;left: 310px;top: 100px;"
        action="https://jsonplaceholder.typicode.com/posts/"
        :file-list="fileList">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip" style="color: #000000;">只能上传.json文件，不超过500kb</div>
      </el-upload>
      <div class="input1">
            <el-input  v-model="search" placeholder="请输入论文标题或编号或关键字" class="input-with-select1">
              <el-button slot="append">搜索</el-button>
            </el-input>
      </div>
    </div>
        <div id="pp">
        <el-table
          ref="multipleTable"
          :data="tableData3.filter(data => !search || (data.index==search)|| data.name.toLowerCase().includes(search.toLowerCase()) || data.address.toLowerCase().includes(search.toLowerCase()))"
          tooltip-effect="dark"
          style="width: 100%;"
          height=470
          @selection-change="handleSelectionChange"
          @cell-dblclick="tableDbEdit">
          <el-table-column
            type="selection"
          fixed="left"
            width="55">
          </el-table-column>
          <el-table-column
            label="编号"
                type="index"
                width="120">
              </el-table-column>
       <!--   <el-table-column
            label="日期"
            width="120">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>  -->
          <el-table-column
            prop="name"
            label="论文标题"
            show-overflow-tooltip
            width="230">
          </el-table-column>
          <el-table-column
                prop="address"
                label="关键词"
                width="130"
                :filters="[{ text: 'ICCV', value: 'ICCV' }, { text: 'CVPR', value: 'CVPR' }, { text: 'ECCV', value: 'ECCV' }]"
                :filter-method="filterTag"
                filter-placement="bottom-end">
                <template slot-scope="scope">
                  <el-tag
                    :type="scope.row.address === '给' ? 'primary' : 'success'"
                    disable-transitions>{{scope.row.address}}</el-tag>
                </template>
              </el-table-column>
          <el-table-column
            prop="date"
            label="备注"
            width="230"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column
          fixed="right"
                label="操作"
                width="100">
                <template slot-scope="scope">
                  <el-button @click="dialogVisib=true;" type="text" >查看</el-button>
                </template>
              </el-table-column>
        </el-table>
        <div style="margin-top: 20px">

          <el-button @click="delMulData()">批量删除</el-button>
          <el-button @click="addData()">增加数据</el-button>
        </div>
      </div>
  </div>
</template>

<script>
    export default {
      name: 'liebiao',
      data() {
        return {
          dialogVisib:false,
          tableData3: [{
            index:1,
            date: '计算机视觉的三大顶会之一计算机视觉',
            name: '人工智能',
            address: 'ICCV'
          }, {
            index:2,
            date: '计算机视觉的三大顶会之一计算机视觉',
            name: '计算机视觉',
            address: 'CVPR'
          }, {
            index:3,
            date: '计算机视觉的三大顶会之一计算机视觉',
            name: '人工智能',
            address: 'ECCV'
          }, {
            index:4,
            date: '计算机视觉的三大顶会之一计算机视觉',
            name: '计算机视觉',
            address: 'CVPR'
          }, {
            index:5,
            date: '计算机视觉的三大顶会之一计算机视觉',
            name: '前端',
            address: 'ECCV'
          }, {
            index:6,
            date: '计算机视觉的三大顶会之一',
            name: '后端',
            address: 'CVPR'
          }, {
            index:7,
            date: '计算机视觉的三大顶会之一',
            name: '软工实践',
            address: 'ICCV'
          }],
          fileList:[],
          multipleSelection: [],
          search:'',
          i:1
        }
      },

      methods: {
        //正常情况下是需要弹出一个dialog输入数据的，这里我们只是模拟一下实现方法
        //注意因为我们添加的是固定rowNum，所以批量删除的时候新增的会一样，正式代码中不会存在类似情况
        addData(){
          var data={
            index:this.i,
            date:'2018-12-3',
            name:'结对作业一',
            address:'作业'
          }
          this.i++
          this.tableData3.unshift(data)

        },
        filterTag(value, row) {
        return row.address === value;
      },
        tableDbEdit(row, column, cell, event) {//编辑单元格数据
        //当鼠标双击单元格里面具体单元格的时候，即可对数据进行编辑操作，其实就是添加了一个输入框，最终将输入框中的数据保存下来就行了。
        var s = event.target.textContent;
        event.target.innerHTML = "";
        let cellInput = document.createElement("input");
        cellInput.value = s;
        cellInput.setAttribute("type", "text");
        cellInput.style.width = "60%";
        cell.appendChild(cellInput);
        cellInput.focus();
        cellInput.onblur = function() {
        cell.removeChild(cellInput);
        event.target.innerHTML = cellInput.value;
        };
        },



        delMulData(){
          //拿到选中的数据
          let val = this.multipleSelection
          //如果选中数据存在
          if(val){
              //将选中数据遍历
              val.forEach((val,index) =>{
                //遍历源数据
                this.tableData3.forEach((v,i)=>{
                  //如果选中数据和源数据的某一条唯一标识符相等，删除对应的源数据
                  if(val.index === v.index){
                    this.tableData3.splice(i,1)
                  }
                })
            })
          }
          //清除选中状态
          this.$refs.multipleTable.clearSelection()

        },


        //得到选中数据
        handleSelectionChange(val) {
          this.multipleSelection = val;
        },
            /*onUploadChange(file)
  {
    const isIMAGE = (file.raw.type === 'image/jpeg' || file.raw.type === 'image/png');
    const isLt1M = file.size / 1024 / 1024 < 1;

    if (!isIMAGE) {
      this.$message.error('只能上传jpg/png图片!');
      return false;
    }
    if (!isLt1M) {
      this.$message.error('上传文件大小不能超过 1MB!');
      return false;
    }
    var reader = new FileReader();
    reader.readAsText(file.raw);
    reader.onload = function(e){

var data=this.result
var da={

          index:this.i,
          date:data.date,
          name:data.name,
          address:data.address
}
        this.i++
        this.tableData3.unshift(da)
        }
    }*/
    }
    }
  </script>
</script>

<style>
  #pp{
    margin-left: 200px;
    margin-top: 10px;
    width: 800px;
    height: 200px
  }
  .input1{
    margin-left: 200px;
    margin-top: 100px;
  }
  .input-with-select1{
    width: 800px;
  }
</style>

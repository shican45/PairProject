<template>
  <div id="bg">
    <template>
      <el-dialog
        :visible.sync="dialogVisible"
        :fullscreen="true"
        :modal="false"
        :show-close="false"
        :before-close="handleClose"
        >
        <el-dialog
              :fullscreen="true"
              title="用户注册"
              :visible.sync="innerVisible"
              append-to-body>
               <div  id="bg">
              <div class="inside">
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                  <el-form-item label="用户名" prop="user" class="label_color">
                      <el-input v-model.number="ruleForm.user"></el-input>
                    </el-form-item>
                  <el-form-item label="密码" prop="newPwd" class="label_color">
                    <el-input type="password" v-model="ruleForm.newPwd" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="密码" prop="confirmPwd" class="label_color">
                    <el-input type="password" v-model="ruleForm.confirmPwd" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" style="width: 320px;" @click="registerForm('ruleForm')">立即注册</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>
            </el-dialog>
        <div id="bg">

          <div class="out"   v-wechat-title="$route.meta.title">
             <p style="color: #592da6;">爬了么</p>
          </div>

          <div class="inside">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
              <el-form-item label="用户名" prop="user" class="label_color">
                  <el-input v-model.number="ruleForm.user"></el-input>
                </el-form-item>
              <el-form-item label="密码" prop="pass" class="label_color">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" style="width: 320px;" @click="submitForm('ruleForm')">登录</el-button>
              </el-form-item>
            </el-form>
          </div>

          <div class="s3">
            <div class="s1">
              <a href="#"><p>忘记密码</p> </a>
            </div>
            <div class="s2">
              <a href="#" @click="innerVisible = true"><p >立即注册</p> </a>
            </div>
          </div>

        </div>
      </el-dialog>
    </template>

    <div id="bg">
      <el-container>
          <el-aside>
            <div class="demo-image__preview">
              <el-image
                style="width: 100px; height: 100px"
                :src="url">
                </el-image>
            </div>
            <div class="menu">
              <el-menu>
                <el-menu-item index="1">
                  <router-link to="/jiansuo" tag="span" slot="title" replace="true" @click.native="$goRoute('/jiansuo')" >论文检索</router-link>
                </el-menu-item>
                <el-menu-item index="3">
                  <router-link to="/liebiao" tag="span" slot="title" replace="true" @click.native="$goRoute('/liebiao')" >论文列表</router-link>
                </el-menu-item>
                <el-menu-item index="4">
                  <router-link to="/remen" tag="span" slot="title" replace="true" @click.native="$goRoute('/remen')" >热门领域</router-link>
                </el-menu-item>
                <el-menu-item index="5">
                  <router-link to="/yanjiu" tag="span" slot="title" replace="true" @click.native="$goRoute('/yanjiu')" >研究热词</router-link>
                </el-menu-item>
              </el-menu>
            </div>
            <div class="exit" @click="dialogVisible = true;">
              <i class="el-icon-back"></i>
              <span class="span-ex">退出</span>
            </div>
          </el-aside>
          <router-view />
      </el-container>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'App',
    data() {
      var validatePass = (rule, value, callback) => {
              if (value === '') {
                      callback(new Error('请输入密码'));
              } else {
                if (this.ruleForm.confirmPwd !== '') {
                    this.$refs.ruleForm.validateField('confirmPwd');
                }
                callback();
              }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.newPwd) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
      var validateUser = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('用户名不能为空！'));
        } else {
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      return {
        dialogVisible: true,
        innerVisible: false,
        count:'3',
        ruleForm: {
          user: '',
          pass: '',
          newPwd: '',
          confirmPwd:''
        },
        url:'https://ftp.bmp.ovh/imgs/2021/03/676e04ec8047d480.jpg',
        rules: {
          newPwd: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' },
            { validator: validatePass, trigger: 'blur' }
          ],
          confirmPwd:[
            { required: true, message: '请确认密码', trigger: 'blur' },
            { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' },
            { validator: validatePass2, trigger: 'blur', required: true }
          ],
          user: [
            { validator: validateUser, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
        },
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message({
                message: '登录成功!',
                type: 'success'
            });
            var timejump=3;
          this.count = timejump ;
           this.timer = setInterval(()=>{
           if(this.count > 0 && this.count <= timejump ){
             this.count--;
           }else{
             clearInterval(this.timer);
             this.timer = null;
             //跳转的页面写在此处
             this.dialogVisible=false;
           }
          },300);

          } else {
              this.$message.error('登录失败!!');
            return false;
          }
        });
      },
      registerForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            
            this.$message({
                message: '注册成功!',
                type: 'success'
            });
             this.innerVisible=false;

          } else {
              this.$message.error('注册失败!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      clickJump(){
          const timejump = 1;
          if(!this.timer){
            this.count = timejump ;
            this.show = false;
            this.timer = setInterval(()=>{
            if(this.count > 0 && this.count <= timejump ){
              this.count--;
            }else{
              this.show = true;
              clearInterval(this.timer);
              this.timer = null;
              //跳转的页面写在此处
            }
           },300)
          }
      }
    }
  }
  function getInfo()
  {
  var s = "";
  s += " 网页可见区域宽："+ document.body.clientWidth;
  s += " 网页可见区域高："+ document.body.clientHeight;
  s += " 网页可见区域宽："+ document.body.offsetWidth + " (包括边线和滚动条的宽)";
  s += " 网页可见区域高："+ document.body.offsetHeight + " (包括边线的宽)";
  s += " 网页正文全文宽："+ document.body.scrollWidth;
  s += " 网页正文全文高："+ document.body.scrollHeight;
  s += " 网页被卷去的高(ff)："+ document.body.scrollTop;
  s += " 网页被卷去的高(ie)："+ document.documentElement.scrollTop;
  s += " 网页被卷去的左："+ document.body.scrollLeft;
  s += " 网页正文部分上："+ window.screenTop;
  s += " 网页正文部分左："+ window.screenLeft;
  s += " 屏幕分辨率的高："+ window.screen.height;
  s += " 屏幕分辨率的宽："+ window.screen.width;
  s += " 屏幕可用工作区高度："+ window.screen.availHeight;
  s += " 屏幕可用工作区宽度："+ window.screen.availWidth;
  s += " 你的屏幕设置是 "+ window.screen.colorDepth +" 位彩色";
  s += " 你的屏幕设置 "+ window.screen.deviceXDPI +" 像素/英寸";
  //alert (s);
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
#bg {
  background: url(./assets/bg.jpeg) no-repeat top center;
		background-size: cover;
		background-attachment: fixed;
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
}
  .label_color .el-form-item__label{
    color: #000000;
  }
  .out{
    letter-spacing: 8px;
    font-size: 50px;
    margin-top: 10%;
    margin-left: 48%;
    font-weight: bold;
  }
  .s1{
    display: inline-block;
    letter-spacing: 2px;
    font-size: 13px;
    margin-top: 0%;
    margin-left: 43%;
  }
  .s1 a{
    color: #000000;
    text-decoration : none
  }
  .s2 a{
    color: #000000;
    text-decoration : none
  }
  .s1 a:hover{
    color: #00aaff;
    text-decoration : none
  }
  .s2 a:hover{
    color: #00aaff;
    text-decoration : none
  }
  .s2{
    display: inline-block;
    letter-spacing: 2px;
    font-size: 13px;
    margin-top: 0%;
    margin-left: 12.5%;
  }
  .s3{
    overflow: auto;
    white-space: nowrap;
  }
  .inside{
    width: 420px;
    height: 180px;
    margin: auto;
    margin-top: 5%;
  }
  .in{
    width: 420px;
    height: 180px;
    margin-top: 5%;
    margin-left: 48%;
  }
  .el-container {
  		width: 100%;
  		height: 100%;
  }
  .el-aside {
    background-color: #D3DCE6;
    text-align: center;
    background: rgba(211,220,230, 0.3);
  }
  .el-menu{
    background: rgba(211,220,230, 0);
  }
  .menu{
    margin-top: 20%;
  }
  .exit{
    width: 110px;
    height: 50px;
    border-radius: 15px 15px 15px 15px;
    background: rgba(16,16,16, 80);
    color: #FFFFFF;
    margin-top: 30%;
    margin-left: 30%;
  }
  .el-icon-back{
    margin-top: 15px;
  }
  .span-ex{
    margin-top: 15px;
  }
.demo-image__preview {
  margin-top: 28%;
  }
  .el-main {
    text-align: center;
  }
</style>

<template>

    <div class="login_tou">
        <div class="login_box">
            <!--头像区-->
            <div class="avater_box">
                <img src="../assets/logo.png" alt="">
            </div>
            <!--登录表单区-->
            <!-- :model="loginForm"数据绑定loginFrom-->
            <!--ref="loginFronRef"表单重置-->
            <el-form ref="loginFronRef"label-width="0px" :rules="logFromReules" :model="loginForm" class="log_from">
                <!--用户名-->
                <el-form-item prop ="username" >
                    <el-input prefix-icon="el-icon-search" v-model="loginForm.username" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <!--密码-->
                <el-form-item prop="password">
                    <el-input prefix-icon="el-icon-s-custom" type="password" v-model="loginForm.password"  placeholder="请输入用密码"></el-input>
                </el-form-item>
                <!--按钮-->

                <el-form-item class="btn">
                <el-button type="primary" @click="deng">登录</el-button>
                <el-button type="info" @click="nsae">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        methods:{
            nsae: function () {
                // console.log(this)
                /*重置表单*/
                this.$refs.loginFronRef.resetFields();
            },
            deng(){
                this.$refs.loginFronRef.validate(async (valid)=>{
                    // console.log(valid);
                    if(!valid) return;
                    const {data:res}=await this.$http.post("deng",this.loginForm);

                    if(res.meta.status !==200)return this.$message.error('登陆失败');
                    this.$message.success('登陆成功');

                    /*弹出结果*/
                    // console.log(res)
                //    1.token 只应在当前网页打开件生效，所以token保存在sessionStorage
                    window.sessionStorage.setItem("token",res.data.token);
                //    2.通过编程式导航跳转到后台页面，地址是/home
                    this.$router.push("/home")
                });
            }
        },
        data() {
            return {
                //这是登录表单的数据绑定对象
                loginForm: {
                    username: 'admin',
                    password: '123456'
                },
                // 这是表单验证
                logFromReules: {
                    //    验证用户名
                    username: [
                        {required: true, message: '请输入登录名称', trigger: 'blur'},
                        {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
                    ],
                    //    验证密码
                    password:[
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { min: 5, max: 10, message: '长度在 5 到 10 个字符', trigger: 'blur' }
                    ]
                }
            }
        }
    }
</script>

<style lang="less" scoped>
.login_tou{
    background-color:#2b4b6b;
    height: 100%;
}
.login_box{
    width: 450px;
    height: 300px;
    background-color: #fff;
    /*圆角边框*/
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    /*位移*/
    transform: translate(-50%,-50%);
}
.avater_box{
    height: 130px;
    width: 130px;
    /*盒子*/
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    position: absolute;
    /*外扩线向外扩展10像素*/
    box-shadow: 0 0 10px #ddd;
    background-color: #ffffff;
    left: 50%;
    transform: translate(-50%,-50%);
    img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eeeeee;
    }
}
.btn{
    display: flex;
    /*行居中对齐*/
    justify-content: center;
}
.log_from{
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0px 30px;
    box-sizing:border-box;
}
</style>

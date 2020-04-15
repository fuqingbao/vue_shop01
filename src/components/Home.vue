<template>
<el-button type="info"@click="tuichu">退出</el-button>
</template>

<script>
    export default {
        name: "Home",
    //    退出公能的实现
       methods:{
           tuichu(){
           //    删除当前页
               window.sessionStorage.clear()
           //    重定向到首页
               this.$router.push('/login')
           }
       }

    }
</script>

<style scoped>

</style>

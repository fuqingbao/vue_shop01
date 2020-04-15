import Vue from 'vue'
// import { Button } from 'element-ui'
// /*按需导入*/
// import { Form, FormItem}from 'element-ui'
// import {Input}from 'element-ui'
// /*导入弹框提示*/
// import {Message} from "element-ui";
import { Button, Form, FormItem,Input, Message} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
/*message全局配置*/
Vue.prototype.$message=Message

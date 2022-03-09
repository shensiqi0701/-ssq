import axios from 'axios'
// import { ColorPicker } from 'element-ui'
import { MessageBox,Message } from 'element-ui'
import cookie from 'js-cookie'

// 创建axios实例
const service = axios.create({
  baseURL: 'http://localhost:9001', // api的base_url
  timeout: 20000 // 请求超时时间
})

// 第三步：创建拦截器；     每次发送请求中使用拦截器
service.interceptors.request.use(
    config => {
        //debugger
        //判断cookie中是否有名称为guli_token数据
        if(cookie.get('guli_token')){
          //把获取cookie值放到header里面
          config.headers['token'] = cookie.get('guli_token');
        }
        return config
    },
    err => {
        return Promise.reject(err);
    }
)

//http response拦截器
service.interceptors.response.use(
  response => {
    //debugger
    if(response.data.code == 28004){
      console.log("response.data.resultCode 是 28004")
      //返回错误代码-1 清除ticket信息并条装到登陆页面
      //debugger
      window.location.href="/login"
      return
    }else{
      if(response.data.code !== 20000){
        //25000：订单支付中，不做任何提示
        if(response.data.code !== 25000){
          Message({
            message:response.data.message || 'error',
            type:'error',
            duration:5*1000
          })
        }
      }else{
        return response;
      }
    }
  },
  error =>{
    return Promise.reject(error.response) //返回接口返回的错误信息
  });

// export写在最后面
export default service
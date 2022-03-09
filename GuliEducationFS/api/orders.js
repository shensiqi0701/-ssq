import request from '@/utils/request'

export default{
    //生成订单
    // createOrders(courseId){
    //     return request({
    //         url:`/eduorder/order/createOrder/${courseId}`,
    //         method:'post'
    //     })
    // },
    createOrders(courseId) {
        return request({
          url: '/eduorder/order/createOrder/'+courseId,
          method: 'post'
        })
      },

    //根据订单id查询订单信息   
    getOrdersInfo(id){
        return request({
            url:`/eduorder/order/getOrderInfo/${id}`,
            method:'get'
        })
    },
    //生成二维码的方法
    createNative(orderNo){
      return request({
        url:`/eduorder/paylog/createNative/${orderNo}`,
        method:'get'
      })
    },
    //查询订单支付状态的方法
    queryPayStatus(orderNo){
      return request({
        url:`/eduorder/paylog/queryPayuStatus/${orderNo}`,
        method:'get'
      })
    }

}
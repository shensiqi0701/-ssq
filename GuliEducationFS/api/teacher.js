import request from '@/utils/request'

export default {
    //前台分页讲师查询的方法
    getTeacherList(page,limit) {
        return request({
          url: `/eduservice/teacherfront/getTeacherFrontList/${page}/${limit}`,
          method: 'post'
        })
      },
      //讲师详情
      getTeacherInfo(id){
          return request({
              url:`/eduservice/teacherfront/getTeacherFrontInfo/${id}`,
              method:'get'
          })
      }
}
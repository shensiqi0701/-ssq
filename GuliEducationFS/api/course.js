import request from '@/utils/request'

export default{
    //带条件的查询课程
    getCourseList(page,limit,searchObj){
        return request({
            url:`/eduservice/coursefront/getFrontCourseList/${page}/${limit}`,
            method:'post',
            data:searchObj
        })
    },
    //查询所有分类的方法使用之前后台树形结构查询分类的方法进行查询
    getAllSubject() {
        return request({
          url: '/eduservice/subject/getAllSubject',
          method: 'get'
        })
    },
    //查询课程详情的方法
    getCourseInfo(id){
        return request({
            url:`/eduservice/coursefront/getFrontCourseInfo/${id}`,
            method:'get'
        })
    }

}
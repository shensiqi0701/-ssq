import request from '@/utils/request'

export default{
    //分页获取课程的评论
    getCommentPageList(page,limit,courseId){
        return request({
            url: `/eduservice/comment/getCommentPage/${page}/${limit}`,
            method:'post',
            params:{courseId}
            // data:courseId
        })
    },
    //添加评论
    addComment(comment){
        return request({
            url:`/eduservice/comment/auth/addComment`,
            method:'post',
            data:comment
        })
    }
}
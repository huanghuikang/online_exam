const base = {
    get() {
        return {
            url : "http://localhost:8080/onlineeducation/",
            name: "onlineeducation",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/onlineeducation/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "线上学习交流与考试网页"
        } 
    }
}
export default base

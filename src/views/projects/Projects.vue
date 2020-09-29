<template>
  <div class="container-projects">
    <h1 class="title">{{ title }}</h1>
    <div class="wrap">
      <div :class="{'item':true,'active':item.isActive}" v-for="(item,index) in projects" :key="item.id" @click="itemClick(index)">
        <h3>{{ item.title }}</h3>
        <ul>
          <li v-for="(i, index) in item.contents" :key="index">{{ i }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      title: "项目经验",
      projects: [
        {
          id: 1,
          title: "联恺照明后台管理系统",
          contents: [
            "优化代码兼容性",
            "负责页面的布局和数据渲染",
            "前端交互和网页美化",
            "负责页面的数据渲染"
          ],
          isActive: false
        },
        {
          id: 2,
          title: "新家优品购（微信小程序）",
          contents: [
            "做了很多事情",
            "又又做了很多事情",
            "又又又做了很多事情",
            "又又又又做了很多事情"
          ],
          isActive: false
        },
        {
          id: 3,
          title: "智爱教育培训信息发布网站",
          contents: [
            "做了很多事情",
            "又又做了很多事情",
            "又又又做了很多事情",
            "又又又又做了很多事情"
          ],
          isActive: false
        },
        {
          id: 4,
          title: "最后一个随便凑凑吧",
          contents: [
            "做了很多事情",
            "又又做了很多事情",
            "又又又做了很多事情",
            "又又又又做了很多事情"
          ],
          isActive: false
        }
      ]
    };
  },
  methods: {
    itemClick(index){
      this.projects[index].isActive = ! this.projects[index].isActive;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import "../../assets/css/reset.css";
.container-projects {
  width: 500px;
  height: auto;
  margin: 100px auto;
  text-align: center;
  margin-bottom: 80px;
}
.container-projects h1 {
  background: #6a8372;
  border-radius: 6px 6px 6px 6px;
  box-shadow: 0 0 0 1px #5f5a4b, 1px 1px 6px 1px rgba(10, 10, 0, 0.5);
  color: #ffffff;
  font-family: "微软雅黑", "宋体", "黑体", Arial;
  font-size: 50px;
  font-weight: bold;
  height: 55px;
  line-height: 55px;
  margin-bottom: 60px;
  padding: 8px;
  text-shadow: 2px 2px 3px #222222;
}
.wrap {
  background-color: antiquewhite;
}
.wrap .item {
  width: 100%;
}
.wrap .item.active ul {
  width: 100%;
  height: 150px;
}
.wrap h3 {
  font-size: 27px;
  width: 100%;
  height: 50px;
  line-height: 50px;
  border-bottom: 2px solid #ccc;
  background-color: #6a8372;
  box-shadow: 0 0 0 1px #5f5a4b, 1px 1px 6px 1px rgba(10, 10, 0, 0.5);
  color: #ffffff;
  font-family: "微软雅黑", "宋体", "黑体", Arial;
  text-align: center;
  font-weight: bolder;
}
.wrap ul {
  height: 0;
  overflow: hidden;
  transition-property: height;
  transition-duration: 1s;
  padding-left: 20px;
}
.wrap ul li {
  height: auto;
  font-size: 20px;
  font-family: "微软雅黑", "宋体", "黑体", Arial;
  text-align: left;
  margin: 10px;
  font-weight: 200;
}
.wrap ul li:first-of-type {
  margin-top: 20px;
}
</style>

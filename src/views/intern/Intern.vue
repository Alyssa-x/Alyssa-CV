<template>
  <div class="container-intern">
    <div class="mycontent">
      <h1 class="title">{{ title }}</h1>
      <div class="item" v-for="item in compony" :key="item.id">
        <div class="left">
          <span class="left-icon"></span>
        </div>
        <div class="right">
          <h2 class="school">
            {{ item.name }}
          </h2>
          <p class="teach-time">{{ item.startTime }} - {{ item.endTime }}</p>
          <div class="position">职位：{{ item.position }}</div>
          <ul class="responsibility">
            <div>职责：</div>
            <li v-for="(i, index) in item.contents" :key="index">{{ i }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Intern",
  data() {
    return {
      title: "实习经历",
      compony: [
        {
          id: 1,
          name: "Google",
          startTime: "2015.6.7",
          endTime: "2020.4.7",
          position: "全栈工程师",
          contents: [
            "优化代码兼容性",
            "负责页面的布局和数据渲染", 
            "前端交互和网页美化"
          ]
        },
        
        {
          id: 2,
          name: "Tesla",
          startTime: "2015.6.7",
          endTime: "2020.4.7",
          position: "前端工程师",
          contents: [
            "优化代码兼容性",
            "负责页面的布局和数据渲染",
            "前端交互和网页美化"
          ]
        },
        {
          id: 3,
          name: "Apple",
          startTime: "2015.6.7",
          endTime: "2020.4.7",
          position: "前端工程师",
          contents: [
            "优化代码兼容性",
            "负责页面的布局和数据渲染",
            "前端交互和网页美化"
          ]
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import "../../assets/css/reset.css";

.container-intern {
  width: 500px;
  position: absolute;
  left: 50%;
  top: 100px;
  transform: translateX(-50%);
  text-align: center;
  margin-bottom: 80px;
}

.container-intern h1 {
  background:#6a8372;
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

.container-intern h2 {
  background: rgb(133, 145, 125);
  border-radius: 6px 6px 6px 6px;
  box-shadow: 0 0 0 1px #5f5a4b, 1px 1px 6px 1px rgba(10, 10, 0, 0.5);
  color: #ffffff;
  font-family: "微软雅黑", "宋体", "黑体", Arial;
  font-size: 30px;
  font-weight: bold;
  width: 300px;
  height: 40px;
  line-height: 40px;
  padding: 5px 0 5px 10px;
  text-shadow: 2px 2px 3px #222222;
}
.container-intern .item {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.container-intern .left {
  width: 80px;
  position: absolute;
  left: 0;
  top: 30px;
}
.container-intern .left::after {
  content: "";
  width: 2px;
  height: 25em;
  background: #333333;
  position: absolute;
  top: -3px;
  left: 39px;
}
.container-intern .left-icon {
  width: 0;
  height: 0;
  border-width: 25px;
  border-style: solid;
  border-color:rgb(117, 153, 136) transparent transparent transparent;
}

.container-intern .right {
  margin-left: 100px;
}

.container-intern .right .school {
  margin-top: 20px;
}

.container-intern .right p {
  font-family: "微软雅黑", "宋体", "黑体", Arial;
  font-size: 20px;
  text-align: left;
  padding: 15px;
}
.container-intern .right .position,
.container-intern .right .responsibility {
  font-family: "微软雅黑", "宋体", "黑体", Arial;
  font-size: 20px;
  font-weight: 500;
  text-align: left;
  margin: 0 15px 10px;
}
.container-intern .right .responsibility div {
  margin-bottom: 5px;
}
.container-intern .right .responsibility li {
  font-weight: 200;
  font-size: 15px;
  line-height: 25px;
}
</style>

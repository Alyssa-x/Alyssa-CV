<template>
  <div class="container-projects">
    <h1 class="title">{{ title }}</h1>
    <div class="wrap">
<div class="item" v-for="item in projects" :key="item.id">
      <h3>{{item.title}}</h3>
      <ul>
        <li v-for="(i,index) in item.contents" :key="index">{{i}}</li>
      </ul>
    </div>
    </div>
    
    <!-- <div :class="{'item':true,'active':isActive[0]}" @click = "itemClick($event)"> -->
    
    
  </div>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      // isActive: [false, false, false, false],
      title:"项目经验",
      projects:[
        {
          id:1,
          title:"搭建第一个个人网站",
          contents:["做了很多事情","又又做了很多事情","又又又做了很多事情","又又又又做了很多事情"]
        },
        {
          id:2,
          title:"搭建第二个个人网站",
          contents:["做了很多事情","又又做了很多事情","又又又做了很多事情","又又又又做了很多事情"]
        },
        {
          id:2,
          title:"搭建第三个个人网站",
          contents:["做了很多事情","又又做了很多事情","又又又做了很多事情","又又又又做了很多事情"]
        },
        {
          id:2,
          title:"搭建第四个个人网站",
          contents:["做了很多事情","又又做了很多事情","又又又做了很多事情","又又又又做了很多事情"]
        }
      ]
    };
  },
  methods: {

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import "../../assets/css/reset.css";
.container-projects{
  width: 500px;
  height: auto;
  margin: 100px auto;
  text-align: center;
}
.container-projects h1 {
  background: #2b6695;
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
.wrap .item:hover ul {
  width: 100%;
  height: 150px;
}
.wrap h3 {
  font-size: 30px;
  width: 100%;
  height: 50px;
  line-height: 50px;
  border-bottom: 2px solid #ccc;
  background-color: aquamarine;
  color: blueviolet;
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
  text-align: left;
  margin: 10px;
  font-weight: bolder;
}
</style>

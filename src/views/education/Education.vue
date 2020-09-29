<template>
  <div class="container-edu">
    <div class="mycontent">
      <h1 class="title">{{ title }}</h1>
      <div class="item" v-for="item in univ" :key="item.id">
        <div class="left">
          <span class="left-icon"></span>
        </div>
        <div class="right">
          <h2 class="school">
            {{ item.name }}
          </h2>
          <p class="teach-time">{{ item.start }} - {{ item.end }}</p>
          <div class="major">专业： {{ item.major }}</div>
          <div class="score">绩点： {{ item.score }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Education",
  data() {
    return {
      title: "教育经历",
      univ: [
        {
          id: 1,
          name: "哈尔滨佛学院",
          start: "2019.7",
          end: "2021.7",
          major: "吃斋念佛",
          score: "4.88/5.0"
        },
        {
          id: 2,
          name: "哈佛大学",
          start: "2015.7",
          end: "2019.7",
          major: "Computer Science",
          score: "4.88/5.0"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import "../../assets/css/reset.css";
.container-edu {
  width: 500px;
  position: absolute;
  left: 50%;
  top: 100px;
  transform: translateX(-50%);
  text-align: center;
  margin-bottom: 80px;
}

.container-edu h1 {
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

.container-edu h2 {
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
.container-edu .item {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.container-edu .left {
  width: 80px;
  position: absolute;
  left: 0;
  top: 30px;
}
.container-edu .left::after {
  content: "";
  width: 2px;
  height: 25em;
  background: #333333;
  position: absolute;
  top: -5px;
  left: 39px;
}
.container-edu .left-icon {
  width: 0;
  height: 0;
  border-width: 25px;
  border-style: solid;
  border-color: rgb(117, 153, 136) transparent transparent transparent;
}

.container-edu .right {
  margin-left: 100px;
}

.container-edu .right .school {
  margin-top: 20px;
}

.container-edu .right p {
  font-family: "微软雅黑", "宋体", "黑体", Arial;
  font-size: 20px;
  text-align: left;
  padding: 15px;
}
.container-edu .right .major,
.container-edu .right .score {
  font-family: "微软雅黑", "宋体", "黑体", Arial;
  font-size: 20px;
  font-weight: 500;
  text-align: left;
  margin: 0 15px 10px;
}
</style>

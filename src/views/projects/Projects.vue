<template>
  <div class="container-projects">
    <!-- <div :class="{'item':true,'active':isActive[0]}" @click = "itemClick($event)"> -->
    <div class="item">
      <h3>编写原生JavaScript游戏</h3>
      <ul>
        <li>Lorem ipsum dolor sit amet consectetur.</li>
        <li>Harum magni neque iusto eius itaque!</li>
        <li>Ducimus pariatur quas adipisci omnis sed.</li>
        <li>Error nobis dolorem quod quibusdam cum.</li>
      </ul>
    </div>
    <div class="item">
      <h3>搭建网站</h3>
      <ul>
        <li>Lorem ipsum dolor sit amet consectetur.</li>
        <li>
          Harum magni neque iusto eius itaque!Ducimus pariatur quas adipisci
          omnis sed.Error nobis dolorem quod quibusdam cum
        </li>
        <li>Ducimus pariatur quas adipisci omnis sed.</li>
        <li>Error nobis dolorem quod quibusdam cum.</li>
      </ul>
    </div>
    <div class="item">
      <h3>用vue做的简历模板</h3>
      <ul>
        <li>Lorem ipsum dolor sit amet consectetur.</li>
        <li>Harum magni neque iusto eius itaque!</li>
        <li>Ducimus pariatur quas adipisci omnis sed.</li>
        <li>Error nobis dolorem quod quibusdam cum.</li>
      </ul>
    </div>
    <div class="item">
      <h3>用React搭建的网易云音乐</h3>
      <ul>
        <li>Lorem ipsum dolor sit amet consectetur.</li>
        <li>Harum magni neque iusto eius itaque!</li>
        <li>Ducimus pariatur quas adipisci omnis sed.</li>
        <li>Error nobis dolorem quod quibusdam cum.</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      // isActive: [false, false, false, false],
      name: "沈小湾",
      phone: "15510320000",
      email: "mm@cuc.edu.cn",
      github: "https://github.com/Alyssa-x/Alyssa-CV"
    };
  },
  methods: {

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import "../../assets/css/reset.css";

.container-projects {
  width: 700px;
  height: auto;
  margin: 100px auto;
  background-color: antiquewhite;
}
.container-projects .item {
  width: 100%;
}
.container-projects .item:hover ul {
  width: 100%;
  height: 200px;
}
.container-projects h3 {
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
.container-projects ul {
  height: 0;
  overflow: hidden;
  transition-property: height;
  transition-duration: 1s;
  padding-left: 20px;
}
.container-projects ul li {
  height: auto;
  font-size: 20px;
  text-align: left;
  margin: 10px;
  font-weight: bolder;
}
</style>

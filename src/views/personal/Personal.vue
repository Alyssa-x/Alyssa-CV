<template>
  <!-- <div class="resume"> -->
  <div class="container-personal">
    <h1 class="title">{{ title }}</h1>
    <div class="wrap">
      <div class="personal">
        <div class="name">姓名：{{ name }}</div>
        <div class="contact">电话：{{ phone }}</div>
        <div class="email">邮箱：{{ email }}</div>

        <div class="github">Github: {{ github }}</div>
      </div>
      <div class="img">
        <img src="../../assets/img/1.jpg" alt="" />
      </div>
      <section></section>
    </div>
  </div>

  <!-- </div> -->
</template>

<script>
export default {
  name: "Personal",
  data() {
    return {
      title: "个人信息",
      name: "光头强",
      phone: "15510320000",
      email: "mm@cuc.edu.cn",
      github: "https://github.com/Alyssa-x/Alyssa-CV"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import "../../assets/css/reset.css";
.container-personal {
  width: 800px;
  position: absolute;
  left: 50%;
  top: 100px;
  transform: translateX(-50%);
}
.container-personal h1 {
  background: #6a8372;
  border-radius: 6px 6px 6px 6px;
  box-shadow: 0 0 0 1px #5f5a4b, 1px 1px 6px 1px rgba(10, 10, 0, 0.5);
  color: #ffffff;
  font-family: "微软雅黑", "宋体", "黑体", Arial;
  font-size: 50px;
  font-weight: bold;
  height: 55px;
  line-height: 55px;
  text-align: center;
  margin: 0 150px 80px;
  padding: 8px;
  text-shadow: 2px 2px 3px #222222;
}

.container-personal .wrap {
  width: 800px;
  background-color: rgb(133, 145, 125);
  color: aliceblue;
  text-shadow: 2px 2px 3px #222222;
  display: flex;
  /* flex布局浏览器兼容问题 */
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-align-items: center;
  -ms-align-items: center;
  -o-align-items: center;
  align-items: center;

  -webkit-box-pack: space-evenly;
  -webkit-justify-content: space-evenly;
  -moz-justify-content: space-evenly;
  -ms-justify-content: space-evenly;
  -o-justify-content: space-evenly;
  justify-content: space-evenly;

  border-radius: 20px;
}

.container-personal .wrap .img {
  margin: 20px;
  margin-right: -40px;
}
.container-personal .wrap img {
  width: 150px;
  height: 200px;
}
.container-personal .wrap .personal {
  font-size: 20px;
  font-weight: 600;
  line-height: 2;
}
</style>

<template>
  <!-- <div class="resume"> -->
    <div class="container">
      <div class="personal">
        <div class="name">姓名：{{ name }}</div>
        <div class="contact">电话：{{ phone }}</div>
        <div class="email">邮箱：{{ email }}</div>

        <div class="github">Github:{{ github }}</div>
      </div>
      <div class="img">
        <img src="../../assets/img/hhcy.jpg" alt="" />
      </div>
      <section></section>
    </div>
  <!-- </div> -->
</template>

<script>
export default {
  name: "Personal",
  data() {
    return {
      name: "沈小湾",
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

/* html,
body {
  margin: 0;
  padding: 0;
  height: 100%;

} */
 /* .resume {
  padding: 0;
  height: auto;
  width: 76%;
  min-width: 800px;
  max-width: 937px;
  overflow-y: auto;
}  */
.container {
  width: 800px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(158, 167, 168);
  /* overflow: hidden; */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.container .personal {
  
}
.img {
  margin:20px;
  margin-right: -40px;

}
img {
  width: 150px;
  height: 200px;

  /* margin: auto; */
}
.personal{
  font-size: 20px;
  font-weight:600;
  line-height: 2;
}
.personal .name{
  
}
</style>

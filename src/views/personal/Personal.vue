<template>
  <!-- <div class="resume"> -->
    <div class="container-personal">
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


.container-personal {
  width: 800px;
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translateX(-50%);
  background-color: rgb(158, 167, 168);
  /* overflow: hidden; */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 20px;
}

.container-personal .img {
  margin:20px;
  margin-right: -40px;

}
.container-personal img {
  width: 150px;
  height: 200px;

  /* margin: auto; */
}
.container-personal .personal{
  font-size: 20px;
  font-weight:600;
  line-height: 2;
}

</style>

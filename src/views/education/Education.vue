<template>

    <div class="container">
      <div class="personal">
        <div class="name">姓名：{{ name }}</div>
        
      </div>
     
      <section></section>
    </div>

</template>

<script>
export default {
  name: "Education",
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
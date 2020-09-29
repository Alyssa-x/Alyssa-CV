<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name:"TabBar"
};
</script>

<style>


#tab-bar {
  display: flex;
  background-color: rgb(41, 126, 196);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
/* .tab-bar-item {
  flex: 1;
  text-align: center;
  height: 60px;
  line-height: 60px;
} */
</style>

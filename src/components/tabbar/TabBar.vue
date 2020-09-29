<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
};
</script>

<style>
#tab-bar {
  /* flex布局浏览器兼容问题 */
  display: box; /* OLD - Android 4.4- */
  display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6 */
  display: -moz-box; /* OLD - Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox; /* TWEENER - IE 10 */
  display: -webkit-flex; /* NEW - Chrome */
  display: flex; /* NEW, Spec - Opera 12.1, Firefox 20+ */

  background-color: #6a8372;
  color: #ffffff;
  font-family: "微软雅黑", "宋体", "黑体", Arial;
  font-size: 23px;
  text-shadow: 2px 2px 3px #222222;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 25px;
}
</style>

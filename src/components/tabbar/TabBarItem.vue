<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot name="item-text"></slot>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    }
  }
};
</script>

<style>
.tab-bar-item {
  /* flex布局浏览器兼容问题 */
  -webkit-box-flex: 1; /* OLD - iOS 6-, Safari 3.1-6 */
  -moz-box-flex: 1; /* OLD - Firefox 19- */
  width: 20%; /* For old syntax, otherwise collapses. */
  -webkit-flex: 1; /* Chrome */
  -ms-flex: 1; /* IE 10 */
  flex: 1;

  text-align: center;
  height: 60px;
  line-height: 60px;
  border-right: 2px solid #fff;
  cursor: pointer;
}
</style>

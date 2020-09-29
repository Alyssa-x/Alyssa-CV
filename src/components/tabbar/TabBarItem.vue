<template>
<div class="tab-bar-item" @click="itemClick">
    <slot name="item-text"></slot>
    </div>  
</template>

<script>
export default {
    name: "TabBarItem",
    props:{
        path:String
    },
    methods:{
        itemClick(){
            this.$router.replace(this.path)
        }
    }
}
</script>

<style>

.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 60px;
  line-height: 60px;
}
</style>
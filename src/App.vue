<template>
  <div id="app">    
  <router-view></router-view>
   <tab-bar>
     <tab-bar-item path="/personal">
       <!-- <img src="./assets/logo.png" alt=""> -->
       <div slot="item-text">个人信息</div>
       </tab-bar-item>
      <tab-bar-item path="/education">
       <div slot="item-text">教育经历</div>
      </tab-bar-item>
     <tab-bar-item path="/projects">
       <div slot="item-text">项目经验</div>
      </tab-bar-item>
     <tab-bar-item path="/intern">
       <div slot="item-text">实习经历</div>
     </tab-bar-item>
   </tab-bar>

  </div>
</template>

<script>
import TabBar from './components/tabbar/TabBar'
import TabBarItem from './components/tabbar/TabBarItem'
export default {
  name: 'App',
  components:{
    TabBar,
    TabBarItem
  }

}
</script>

<style>
@import "./assets/css/reset.css";

</style>

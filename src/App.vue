<!--
 * @Author: honghong
 * @Date: 2019-11-08 23:00:35
 * @LastEditors: honghong
 * @LastEditTime: 2019-11-09 09:24:14
 * @Description: 
 * @email: 3300536651@qq.com
 -->
<template>
  <div id="app">
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  }
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#app {
  width: 100%;
  height: 100%;
}
</style>

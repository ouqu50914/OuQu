<template>
  <div id="app">
    <router-view/>
    <NavBar></NavBar>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
export default {
  name: 'App',
  components: {NavBar}
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  /* 移动端常用reset.css (文字版本) */
  /* reset */
  html,body,div,p,ul,li,dl,dt,dd,em,i,span,a,img,input,h1,h2,h3,h4,h5 {margin:0;padding:0}
  a,img,input {border:none;}
  body{font: 14px/1.75 -apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif;}
  a {text-decoration:none;}
  ul,li{list-style: none}
</style>

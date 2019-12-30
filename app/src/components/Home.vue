<template>
  <div id="home">
    <div class="nav">
      <a
          href="javascript:;"
          class="navList"
          v-for="(list, i) in navLists"
          :class="{ on : activeIndex == i }"
          :key="i"
          @click="changeNav(i)"
      >
        {{ list }}
      </a>
    </div>
    <Swipe></Swipe>
    <div class="entry">
      <a href="javascript:;">
        <img src="" alt="">
        <span></span>
      </a>
    </div>
  </div>
</template>

<script>

  import Nav from "../pages/Nav";
  import HelloWorld from "./HelloWorld";
  import Swipe from "../pages/Swipe";

  export default {
    name: "Home",
    components: {Swipe, HelloWorld, Nav},
    data() {
      return {
        navLists: ["图片新闻", "公告通知", "简报资讯", "政策文件"],
        activeIndex: 0,
        entryLists:[
          {
            entryImg:"",
            entryName:""
          },
          {
            entryImg:"",
            entryName:""
          },
          {
            entryImg:"",
            entryName:""
          },
          {
            entryImg:"",
            entryName:""
          }
        ]
      };
    },
    methods:{
      changeNav:function (i) {
        this.activeIndex = i;
      }
    }
  }
</script>

<style scoped>
  .nav {
    display: flex;
    font-size: 0.36rem;
  }

  .nav a {
    flex: 1;
    color: #2c3e50;
    text-decoration: none;
    padding-bottom: 0.1rem;
  }

  .nav a.on {
    color: #ff0e36;
    border-bottom: solid 2px #ff0e36;
  }
</style>

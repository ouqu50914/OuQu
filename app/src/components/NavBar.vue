<template>
  <div id="navBar">
    <router-link class="mainRoute" active-class="active" to="/Home">
      <span class="homeIcon">home_icon</span>
      首页
    </router-link>
    <router-link class="mainRoute" active-class="active" to="/Stydy">
      <span class="studyIcon">study_icon</span>
      学习
    </router-link>
    <router-link class="mainRoute" active-class="active" to="/Square">
      <span class="squareIcon">square_icon</span>
      广场
    </router-link>
    <router-link class="mainRoute" active-class="active" to="/Personal">
      <span class="mineIcon">mine_icon</span>
      个人中心
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  #navBar {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    background: #fff;
  }

  .mainRoute {
    flex: 1;
    text-align: center;
    font-size: .36rem;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #8a8a8a;
  }

  .mainRoute span {
    width: 0.7rem;
    height: 0.7rem;
    display: block;
    text-indent: -999rem;
  }

  .homeIcon {
    background: url(../assets/nav/home.png) no-repeat center/cover;
  }

  .studyIcon {
    background: url(../assets/nav/study.png) no-repeat center/cover;
  }

  .squareIcon {
    background: url(../assets/nav/squire.png) no-repeat center/cover;
  }

  .mineIcon {
    background: url(../assets/nav/mine.png) no-repeat center/cover;
  }

  .mainRoute.active {
    color: #ff0e36;
  }

  .mainRoute.active .homeIcon {
    background: url(../assets/nav/homeOn.png) no-repeat center/cover;
  }

  .mainRoute.active .studyIcon {
    background: url(../assets/nav/studyOn.png) no-repeat center/cover;
  }

  .mainRoute.active .squareIcon {
    background: url(../assets/nav/squireOn.png) no-repeat center/cover;
  }

  .mainRoute.active .mineIcon {
    background: url(../assets/nav/mineOn.png) no-repeat center/cover;
  }
</style>

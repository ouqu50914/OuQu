<template>
  <div id="personal">
    <div class="top">
      <div class="box" @click="loadIndex = true">
        <img :src="headImg" alt="">
      </div>
    </div>
    <ul class="lists">
      <li class="list">
        修改资料
      </li>
      <li class="list" @click="changeIndex = true">
        修改密码
      </li>
      <li class="list">
        我的评论
      </li>
    </ul>
    <!--修改密码-->
    <div class="changepass" v-if="changeIndex">
      <ul>
        <li><label for="password">新密码：</label><input type="password" id="password" placeholder="请输入密码" v-model="password1"></li>
        <li><label for="rpassword">确认密码：</label><input type="password" id="rpassword" placeholder="请再次输入密码" v-model="password2"></li>
        <button @click="changePass()">确认</button>
        <p class="tips" v-if="isWrong">请确认两次输入密码相同或者是否为空</p>
        <a href="javascript:;" class="close" @click="changeIndex = false">×</a>
      </ul>
    </div>
    <!--登录-->
    <div class="changepass" v-if="loadIndex">
      <ul>
        <li><label for="password">用户名：</label><input type="text" id="name" placeholder="请输用户名" v-model="name"></li>
        <li><label for="loadword">密码：</label><input type="password" id="loadword" placeholder="请再次输入密码" v-model="password"></li>
        <button @click="loadPass()">确认</button>
        <p class="tips" v-if="loadWrong">请核对登录信息</p>
        <a href="javascript:;" class="close" @click="loadIndex = false">×</a>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Personal",
    data() {
      return{
        realpassword:"123",
        changeIndex:false,
        isWrong:false,
        loadIndex:false,
        loadWrong:false,
        password1:"",
        password2:"",
        name:"",
        password:"",
        headImg:"",
      }
    },
    methods: {
      changePass(){
        if (this.password1 === this.password2 && this.password1 != "") {
          this.isWrong = false
          this.changeIndex = false
          this.realpassword = this.password1
        }else {
          this.isWrong = true
        }
      },
      loadPass(){
        if (this.name === "name" && this.password === this.realpassword) {
          this.loadWrong = false
          this.loadIndex = false
          this.headImg=require("../assets/diaosi.jpg")
        }else {
          this.loadWrong = true
        }
      }
    }
  }
</script>

<style scoped>
  .top {
    width: 100%;
    height: 3rem;
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .top .box {
    background: #fff;
    background: url(../assets/mine/load.png) no-repeat center/cover #fff;
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    overflow: hidden;
  }
  .top .box img {
    width: 100%;
    height: 100%;
  }
  .lists {
    display: flex;
    flex-direction: column;
    padding: 0 .3rem;
  }
  .lists .list {
    display: flex;
    align-items: center;
    font-size: .3rem;
    margin-top: .2rem;
    border-bottom: solid 1px #ececec;
    position: relative;
  }
  .lists .list::before,.lists .list::after {
    content: "";
    width: .34rem;
    height: .34rem;
    margin-right: .1rem;
  }
  .lists .list::after {
    width: .2rem;
    height: .2rem;
    border-style: solid;
    border-width: 1px;
    border-color: #cccccc transparent transparent #cccccc;
    transform: rotate(135deg);
    position: absolute;
    top: 0;
    bottom: 0;
    right: .3rem;
    margin: auto;
  }
  .lists .list:nth-of-type(1)::before {
    background: url(../assets/mine/gan.png) no-repeat center/cover;
  }
  .lists .list:nth-of-type(2)::before {
    background: url(../assets/mine/wx.png) no-repeat center/cover;
  }
  .lists .list:nth-of-type(3)::before {
    background: url(../assets/mine/pl.png) no-repeat center/cover;
  }

  .changepass {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .28rem;
  }
  .changepass li {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: .3rem 0;
  }
  .changepass label {
    color: #000;
    font-size: .24rem;
    width: 1.3rem;
  }
  .changepass input {
    width: 3rem;
    height: .5rem;
    border: solid 1px #ccc;
  }
  .changepass button {
    width: 1.5rem;
    height: .5rem;
    display: block;
    margin: .3rem auto 0;
  }
  .changepass .close {
    position: absolute;
    right: 10%;
    top: 10%;
    font-size: .4rem;
    color: #000;
  }
  .changepass .tips {
    margin-top: 10%;
    font-size: .2rem;
    color: red;
    text-align: center;
   }
</style>

<template>
  <div id="square">
    <h2>
      研修说说
      <button class="editBtn">edit</button>
    </h2>
    <ul class="publishLists">
      <li class="publishList" v-for="(item, i) in publishLists" :key="i">
        <div class="info">
          <div class="headIcon">
            <img :src="require('../assets/'+ item.headIcon)" :alt="item.name">
          </div>
          <div class="personInfo">
            <div class="name">{{ item.name }}</div>
            <div class="time">{{ item.time }}</div>
          </div>
        </div>
        <p class="cont">{{ item.words }}</p>
        <div class="btns">
          <button class="discuss">评论</button>
          <button class="good">赞{{ item.goodNum }}</button>
        </div>
        <div class="comment">

        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Square",
    data() {
      return {
        publishLists:[
          {
            headIcon:"cut.jpg",
            name:"别泄露了仙气",
            time:20191230,
            words:"先打一拳，打的时候再把问题问遍",
            goodNum:""
          },
          {
            headIcon:"cut.jpg",
            name:"别泄露了仙气",
            time:20191230,
            words:"先打一拳，打的时候再把问题问遍",
            goodNum:""
          },
          {
            headIcon:"cut.jpg",
            name:"别泄露了仙气",
            time:20191230,
            words:"先打一拳，打的时候再把问题问遍",
            goodNum:""
          },
          {
            headIcon:"cut.jpg",
            name:"别泄露了仙气",
            time:20191230,
            words:"先打一拳，打的时候再把问题问遍",
            goodNum:""
          },
          {
            headIcon:"cut.jpg",
            name:"别泄露了仙气",
            time:20191230,
            words:"先打一拳，打的时候再把问题问遍",
            goodNum:""
          },
          {
            headIcon:"cut.jpg",
            name:"别泄露了仙气",
            time:20191230,
            words:"先打一拳，打的时候再把问题问遍",
            goodNum:""
          },
          {
            headIcon:"cut.jpg",
            name:"别泄露了仙气",
            time:20191230,
            words:"先打一拳，打的时候再把问题问遍",
            goodNum:""
          },
          {
            headIcon:"cut.jpg",
            name:"别泄露了仙气",
            time:20191230,
            words:"先打一拳，打的时候再把问题问遍",
            goodNum:"9"
          },
          {
            headIcon:"cut.jpg",
            name:"别泄露了仙气",
            time:20191230,
            words:"先打一拳，打的时候再把问题问遍",
            goodNum:"5"
          },
          {
            headIcon:"cut.jpg",
            name:"别泄露了仙气",
            time:20191230,
            words:"先打一拳，打的时候再把问题问遍",
            goodNum:""
          },
          {
            headIcon:"cut.jpg",
            name:"别泄露了仙气",
            time:20191230,
            words:"先打一拳，打的时候再把问题问遍",
            goodNum:"1"
          },
          {
            headIcon:"cut.jpg",
            name:"别泄露了仙气",
            time:20191230,
            words:"先打一拳，打的时候再把问题问遍",
            goodNum:""
          }
        ]
      };
    }
  }
</script>

<style scoped>
  #square {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #9c9999;
  }

  h2 {
    width: 100%;
    padding-top: 0.5rem;
    position: relative;
    text-align: center;
    line-height: 1rem;
    font-size: .4rem;
    color: #fff;
    background: #ff0e36;
  }

  .editBtn {
    background: url(../assets/edit.png) no-repeat center/cover;
    width: 0.32rem;
    height: 0.32rem;
    position: absolute;
    right: 0.3rem;
    bottom: 0.3rem;
    text-indent: -999rem;
    border: none;
  }

  .publishLists {
    width: 100%;
    font-size: 0.28rem;
  }

  .publishList {
    background: #fff;
    margin-bottom: 0.3rem;
  }

  .info {
    display: flex;
    padding: 0.2rem 0.1rem 0;
  }

  .headIcon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    overflow: hidden;
  }

  .headIcon img {
    width: 150%;
  }

  .personInfo {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 0.3rem;
  }

  .personInfo .time {
    font-size: 0.26rem;
    color: #7b8989;
  }

  .cont {
    font-size: 0.3rem;
    color: #1a1a1a;
    text-indent: 0.6rem;
    padding: 0.3rem;
  }

  .btns {
    width: 100%;
    height: 1rem;
    border-top: solid #8a8a8a 1px;
    border-bottom: solid #8a8a8a 1px;
    position: relative;
    display: flex;
  }

  .btns button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: none;
    border: none;
    font-size: 0.28rem;
  }

  .btns::before {
    width: 1px;
    height: 60%;
    background: #8a8a8a;
    border-radius: 30%;
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    opacity: 0.3;
  }

  .discuss::before {
    content: "";
    background: url(../assets/comment.png) no-repeat center/cover;
    width: 0.32rem;
    height: 0.32rem;
    display: block;
    margin: 0.05rem 0.05rem 0 0;
  }

  .good::before {
    content: "";
    background: url(../assets/good.png) no-repeat center/cover;
    width: 0.32rem;
    height: 0.32rem;
    display: block;
    margin: 0.05rem 0.05rem 0 0;
  }

  .good.on::before {
    content: "";
    background: url(../assets/goodOn.png) no-repeat center/cover;
    width: 0.32rem;
    height: 0.32rem;
    display: block;
    margin: 0.05rem 0.05rem 0 0;
  }
</style>

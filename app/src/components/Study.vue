<template>
  <div id="study">
    <h2>
      研修说说
      <button class="editBtn">edit</button>
    </h2>
    <ul class="nav">
      <li v-for="(nav,key) in navLists" :key="key" :class="{on:activeCLass == key}" @click="changeNav(key)">{{nav}}</li>
    </ul>
    <div class="lists" v-for="(item,k) in dataLists" :key="k"  v-if="activeCLass == k">
      <li class="list"  v-for="(item1,i) in item" :key="i">
        <img :src="item1.imgr" :alt="item.title">
        <div class="right">
          <div class="top">
            <span class="tip">{{item1.tip}}</span>
            <h3 class="title">{{item1.title}}</h3>
          </div>
          <div class="time">{{item1.time}}</div>
          <div class="bottom">
            <div class="person">主讲人：{{item1.person}}</div>
            <div class="num">{{item1.number}}人报名</div>
          </div>
        </div>
      </li>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Study",
    data() {
      return{
        activeCLass : 0,
        navLists: ["全部", "直播", "未开始", "已结束"],
        dataLists:[
          [
            {
              imgr:require('../assets/swip1.jpg'),
              name: "Communication",
              tip:"精彩回放",
              title:"第七期普通高等学校辅导员网络培训班",
              time:"2019.11.24 14：30-16：20",
              person:"旺婷友",
              number:"1031"
            },
            {
              imgr:require('../assets/swip1.jpg'),
              name: "Communication",
              tip:"精彩回放",
              title:"第七期普通高等学校辅导员网络培训班",
              time:"2019.11.24 14：30-16：20",
              person:"旺婷友",
              number:"1031"
            },
            {
              imgr:require('../assets/swip1.jpg'),
              name: "Communication",
              tip:"精彩回放",
              title:"第七期普通高等学校辅导员网络培训班",
              time:"2019.11.24 14：30-16：20",
              person:"旺婷友",
              number:"1031"
            },
            {
              imgr:require('../assets/swip1.jpg'),
              name: "Communication",
              tip:"精彩回放",
              title:"第七期普通高等学校辅导员网络培训班",
              time:"2019.11.24 14：30-16：20",
              person:"旺婷友",
              number:"1031"
            },
            {
              imgr:require('../assets/swip1.jpg'),
              name: "Communication",
              tip:"精彩回放",
              title:"第七期普通高等学校辅导员网络培训班",
              time:"2019.11.24 14：30-16：20",
              person:"旺婷友",
              number:"1031"
            },
            {
              imgr:require('../assets/swip1.jpg'),
              name: "Communication",
              tip:"精彩回放",
              title:"第七期普通高等学校辅导员网络培训班",
              time:"2019.11.24 14：30-16：20",
              person:"旺婷友",
              number:"1031"
            },
            {
              imgr:require('../assets/swip1.jpg'),
              name: "Communication",
              tip:"精彩回放",
              title:"第七期普通高等学校辅导员网络培训班",
              time:"2019.11.24 14：30-16：20",
              person:"旺婷友",
              number:"1031"
            },
            {
              imgr:require('../assets/swip1.jpg'),
              name: "Communication",
              tip:"精彩回放",
              title:"第七期普通高等学校辅导员网络培训班",
              time:"2019.11.24 14：30-16：20",
              person:"旺婷友",
              number:"1031"
            },
            {
              imgr:require('../assets/swip1.jpg'),
              name: "Communication",
              tip:"精彩回放",
              title:"第七期普通高等学校辅导员网络培训班",
              time:"2019.11.24 14：30-16：20",
              person:"旺婷友",
              number:"1031"
            },
          ],
          [
            {
              imgr:require('../assets/swip1.jpg'),
              name: "Communication",
              tip:"直播中",
              title:"第七期普通高等学校辅导员网络培训班",
              time:"2019.11.24 14：30-16：20",
              person:"旺婷友",
              number:"1031"
            },
            {
              imgr:require('../assets/swip1.jpg'),
              name: "Communication",
              tip:"直播中",
              title:"第七期普通高等学校辅导员网络培训班",
              time:"2019.11.24 14：30-16：20",
              person:"旺婷友",
              number:"1031"
            },
            {
              imgr:require('../assets/swip1.jpg'),
              name: "Communication",
              tip:"直播中",
              title:"第七期普通高等学校辅导员网络培训班",
              time:"2019.11.24 14：30-16：20",
              person:"旺婷友",
              number:"1031"
            },
            {
              imgr:require('../assets/swip1.jpg'),
              name: "Communication",
              tip:"直播中",
              title:"第七期普通高等学校辅导员网络培训班",
              time:"2019.11.24 14：30-16：20",
              person:"旺婷友",
              number:"1031"
            },
            {
              imgr:require('../assets/swip1.jpg'),
              name: "Communication",
              tip:"直播中",
              title:"第七期普通高等学校辅导员网络培训班",
              time:"2019.11.24 14：30-16：20",
              person:"旺婷友",
              number:"1031"
            },
            {
              imgr:require('../assets/swip1.jpg'),
              name: "Communication",
              tip:"直播中",
              title:"第七期普通高等学校辅导员网络培训班",
              time:"2019.11.24 14：30-16：20",
              person:"旺婷友",
              number:"1031"
            },
            {
              imgr:require('../assets/swip1.jpg'),
              name: "Communication",
              tip:"直播中",
              title:"第七期普通高等学校辅导员网络培训班",
              time:"2019.11.24 14：30-16：20",
              person:"旺婷友",
              number:"1031"
            },
            {
              imgr:require('../assets/swip1.jpg'),
              name: "Communication",
              tip:"直播中",
              title:"第七期普通高等学校辅导员网络培训班",
              time:"2019.11.24 14：30-16：20",
              person:"旺婷友",
              number:"1031"
            },
            {
              imgr:require('../assets/swip1.jpg'),
              name: "Communication",
              tip:"直播中",
              title:"第七期普通高等学校辅导员网络培训班",
              time:"2019.11.24 14：30-16：20",
              person:"旺婷友",
              number:"1031"
            },
            {
              imgr:require('../assets/swip1.jpg'),
              name: "Communication",
              tip:"直播中",
              title:"第七期普通高等学校辅导员网络培训班",
              time:"2019.11.24 14：30-16：20",
              person:"旺婷友",
              number:"1031"
            },
          ],
          [
            {
              imgr:require('../assets/swip1.jpg'),
              name: "Communication",
              tip:"未开始",
              title:"第七期普通高等学校辅导员网络培训班",
              time:"2019.11.24 14：30-16：20",
              person:"旺婷友",
              number:"1031"
            },
            {
              imgr:require('../assets/swip1.jpg'),
              name: "Communication",
              tip:"未开始",
              title:"第七期普通高等学校辅导员网络培训班",
              time:"2019.11.24 14：30-16：20",
              person:"旺婷友",
              number:"1031"
            },
            {
              imgr:require('../assets/swip1.jpg'),
              name: "Communication",
              tip:"未开始",
              title:"第七期普通高等学校辅导员网络培训班",
              time:"2019.11.24 14：30-16：20",
              person:"旺婷友",
              number:"1031"
            },
            {
              imgr:require('../assets/swip1.jpg'),
              name: "Communication",
              tip:"未开始",
              title:"第七期普通高等学校辅导员网络培训班",
              time:"2019.11.24 14：30-16：20",
              person:"旺婷友",
              number:"1031"
            },
            {
              imgr:require('../assets/swip1.jpg'),
              name: "Communication",
              tip:"未开始",
              title:"第七期普通高等学校辅导员网络培训班",
              time:"2019.11.24 14：30-16：20",
              person:"旺婷友",
              number:"1031"
            },
            {
              imgr:require('../assets/swip1.jpg'),
              name: "Communication",
              tip:"未开始",
              title:"第七期普通高等学校辅导员网络培训班",
              time:"2019.11.24 14：30-16：20",
              person:"旺婷友",
              number:"1031"
            },
            {
              imgr:require('../assets/swip1.jpg'),
              name: "Communication",
              tip:"未开始",
              title:"第七期普通高等学校辅导员网络培训班",
              time:"2019.11.24 14：30-16：20",
              person:"旺婷友",
              number:"1031"
            },
            {
              imgr:require('../assets/swip1.jpg'),
              name: "Communication",
              tip:"未开始",
              title:"第七期普通高等学校辅导员网络培训班",
              time:"2019.11.24 14：30-16：20",
              person:"旺婷友",
              number:"1031"
            },
            {
              imgr:require('../assets/swip1.jpg'),
              name: "Communication",
              tip:"未开始",
              title:"第七期普通高等学校辅导员网络培训班",
              time:"2019.11.24 14：30-16：20",
              person:"旺婷友",
              number:"1031"
            },
            {
              imgr:require('../assets/swip1.jpg'),
              name: "Communication",
              tip:"未开始",
              title:"第七期普通高等学校辅导员网络培训班",
              time:"2019.11.24 14：30-16：20",
              person:"旺婷友",
              number:"1031"
            },
          ],
          [
            {
              imgr:require('../assets/swip1.jpg'),
              name: "Communication",
              tip:"已结束",
              title:"第七期普通高等学校辅导员网络培训班",
              time:"2019.11.24 14：30-16：20",
              person:"旺婷友",
              number:"1031"
            },
            {
              imgr:require('../assets/swip1.jpg'),
              name: "Communication",
              tip:"已结束",
              title:"第七期普通高等学校辅导员网络培训班",
              time:"2019.11.24 14：30-16：20",
              person:"旺婷友",
              number:"1031"
            },
            {
              imgr:require('../assets/swip1.jpg'),
              name: "Communication",
              tip:"已结束",
              title:"第七期普通高等学校辅导员网络培训班",
              time:"2019.11.24 14：30-16：20",
              person:"旺婷友",
              number:"1031"
            },
            {
              imgr:require('../assets/swip1.jpg'),
              name: "Communication",
              tip:"已结束",
              title:"第七期普通高等学校辅导员网络培训班",
              time:"2019.11.24 14：30-16：20",
              person:"旺婷友",
              number:"1031"
            },
            {
              imgr:require('../assets/swip1.jpg'),
              name: "Communication",
              tip:"已结束",
              title:"第七期普通高等学校辅导员网络培训班",
              time:"2019.11.24 14：30-16：20",
              person:"旺婷友",
              number:"1031"
            },
            {
              imgr:require('../assets/swip1.jpg'),
              name: "Communication",
              tip:"已结束",
              title:"第七期普通高等学校辅导员网络培训班",
              time:"2019.11.24 14：30-16：20",
              person:"旺婷友",
              number:"1031"
            },
            {
              imgr:require('../assets/swip1.jpg'),
              name: "Communication",
              tip:"已结束",
              title:"第七期普通高等学校辅导员网络培训班",
              time:"2019.11.24 14：30-16：20",
              person:"旺婷友",
              number:"1031"
            },
            {
              imgr:require('../assets/swip1.jpg'),
              name: "Communication",
              tip:"已结束",
              title:"第七期普通高等学校辅导员网络培训班",
              time:"2019.11.24 14：30-16：20",
              person:"旺婷友",
              number:"1031"
            },
            {
              imgr:require('../assets/swip1.jpg'),
              name: "Communication",
              tip:"已结束",
              title:"第七期普通高等学校辅导员网络培训班",
              time:"2019.11.24 14：30-16：20",
              person:"旺婷友",
              number:"1031"
            },
          ],
        ]
      }
    },
    methods:{
      changeNav:function (i) {
        this.activeCLass = i;
      }
    }
  }
</script>

<style scoped>
.nav {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: .2rem 0;
  width: 100%;
  position: fixed;
  top: 0;
  background: #fff;
  z-index: 99;
}
.nav li {
  font-size: .3rem;
}
.nav li.on {
  color: firebrick;
}

  .lists {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding:.21rem .2rem 2rem;

  }
.lists .list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  border-bottom: solid 1px #ccc;
}
.lists .list img{
  width: 2.5rem;
  height: 80%;
}
.lists .list .right {
  width: calc(100% - 2.7rem);
  height: 100%;
  position: relative;
  box-sizing: border-box;
  padding: .3rem 0;
  font-size: .24rem;
}
.lists .list .top {
  display: flex;
  align-items: center;
}
.lists .list .top .tip {
  background: firebrick;
  border-radius: .3rem;
  color: #fff;
  font-size: .22rem;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  padding: 0 .1rem;
  height: .4rem;
  box-sizing: border-box;
  min-width: 1.3rem;
}
.lists .list .top .title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: .24rem;
}
.lists .list .bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: .3rem;
  width: 100%;
}
</style>

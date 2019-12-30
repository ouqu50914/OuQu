<template>
  <div class="swipe">
    <mt-swipe class="mt-swipe" :show-indicators="false">
      <mt-swipe-item class="swip" v-for="(list, index) in swipLists" :key="index">
        <img :src="require('../assets/'+ list.imgSrc)" :alt="list.imgTitle">
        <p>{{ list.imgTitle }}</p>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  export default {
    name: "Swipe",
    data () {
      return{
        swipLists:[
          {
            imgSrc:"swip1.jpg",
            imgTitle:"不忘初心，牢记使命"
          },
          {
            imgSrc:"swip2.jpg",
            imgTitle:"不忘初心，牢记使命"
          },
          {
            imgSrc:"swip3.jpg",
            imgTitle:"不忘初心，牢记使命"
          },
          {
            imgSrc:"swip4.jpg",
            imgTitle:"不忘初心，牢记使命"
          },
          {
            imgSrc:"swip5.jpg",
            imgTitle:"不忘初心，牢记使命"
          }
        ]
      };
    }
  }
</script>

<style scoped>
  .mt-swipe {
    height: 5rem;
  }
  .swip{
    width: 100%;
    height: 5rem;
    background: #42b983;
    position: relative;
  }

  .swip img {
    width: 100%;
    height: 100%;
  }

  .swip p{
    width: 100%;
    line-height: 1rem;
    text-align: center;
    font-size: 0.3rem;
    background: rgba(0,0,0,0.5);
    color: #fff;
    position: absolute;
    left: 0;
    bottom: 0;
  }
</style>

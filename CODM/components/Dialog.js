// components/Dialog/dialog.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   * 用于组件自定义设置
   */
  properties: {
    // 传递数字
    num: {            // 属性名
      type: Number,     // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: 0     // 属性初始值（可选），如果未指定则会根据类型选择一个
    },
    // 弹窗内容
    content: {
      type: String,
      value: '弹窗内容'
    },
  },


  /**
   * 私有数据,组件的初始数据
   * 可用于模版渲染
   */
  data: {
    // 弹窗显示控制
    isShow: false,
    listData:[
      {
        clueName:"线索一",
        clueCont:"TA的钢琴级别是8级及以上",
        jump:false
      },
      {
        clueName:"线索一",
        clueCont:"图片线索",
        jump:true
      },
      {
        clueName:"线索二",
        clueCont:"TA的钢琴级别是8级及以上",
        jump:false
      },
      {
        clueName:"线索二",
        clueCont:"图片线索",
        jump:true
      },
      {
        clueName:"线索三",
        clueCont:"TA的钢琴级别是8级及以上",
        jump:false
      },
      {
        clueName:"线索三",
        clueCont:"图片线索",
        jump:true
      },
      {
        clueName:"线索四",
        clueCont:"TA的钢琴级别是8级及以上",
        jump:false
      },

      {
        clueName:"线索四",
        clueCont:"图片线索",
        jump:true
      },
      {
        clueName:"线索五",
        clueCont:"TA的钢琴级别是8级及以上",
        jump:false
      },
      {
        clueName:"线索五",
        clueCont:"图片线索",
        jump:true
      }
    ],
    giftData:[
      {
        giftPath:"",
        giftName:"奖励名称X1"
      },
      {
        giftPath:"",
        giftName:"奖励名称X1"
      },
      {
        giftPath:"",
        giftName:"奖励名称X1"
      }
    ],
    countDown:"获取",
    isGet:"auto"
  },

  /**
   * 组件的方法列表
   * 更新属性和数据的方法与更新页面数据的方法类似
   */
  methods: {
    /*
     * 公有方法
     */

    //隐藏弹框
    hideDialog() {
      this.setData({
        isShow: !this.data.isShow
      })
    },
    //展示弹框
    showDialog() {
      this.setData({
        isShow: !this.data.isShow
      })
    },
    /*
    * 内部私有方法建议以下划线开头
    * triggerEvent 用于触发事件
    */
    _cancelEvent() {
      //触发取消回调
      this.triggerEvent("cancelEvent")
    },
    _confirmEvent() {
      //触发成功回调
      this.triggerEvent("confirmEvent");
    },
    /**
     * 获取验证码
     * */
    getCode:function(){
      clearTimeout(timer);
      var num = 60;
      this.setData({
        countDown:num+"秒",
        isGet:"none"
      });
      var timer = setInterval( () =>{
        num-=1;
        if (num >= 0) {
          this.setData({
            countDown:num+"秒"
          })
        } else {
          clearInterval(timer);
          this.setData({
            countDown:"获取",
            isGet:"auto"
          })
        }
        console.log(this.data.countDown);
      },1000)
    },
  }
})

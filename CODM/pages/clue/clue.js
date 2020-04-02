// pages/clue/clue.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checked: "待解锁线索",
    check: "查看线索",
    hour: "",
    min: "",
    sec: "",
    endTime: "2020-4-30 00:00:00",
    isPlay:false,
    stepData: [
      {
        isActive: true,
        giftName: "奖励名称1"
      },
      {
        isActive: true,
        giftName: "奖励名称2"
      },
      {
        isActive: false,
        giftName: "奖励名称3"
      },
      {
        isActive: false,
        giftName: "奖励名称4"
      },
      {
        isActive: false,
        giftName: "奖励名称5"
      }
    ],
    danmuList: [
      [
        {
          danmuWords: "别泄露了仙气：扶风",
          color: "#fff"
        },
        {
          danmuWords: "余生不在线：陌生剑圣",
          color: "#ccc"
        },
        {
          danmuWords: "dust:startdust",
          color: "#bbb"
        },
        {
          danmuWords: "别泄露了仙气：扶风",
          color: "#fff"
        },
        {
          danmuWords: "余生不在线：陌生剑圣",
          color: "#ccc"
        },
        {
          danmuWords: "dust:startdust",
          color: "#bbb"
        },
        {
          danmuWords: "软软：我觉得是传说中出包最快的男人",
          color: "red"
        },
        {
          danmuWords: "鲁班：我觉得是二腿哥",
          color: "green"
        },
        {
          danmuWords: "刚刚：林克才是最刚的男人",
          color: "pink"
        },
        {
          danmuWords: "白豆：我觉得是软软",
          color: "yellow"
        },
        {
          danmuWords: "喵喵：喵~",
          color: "grey"
        },
        {
          danmuWords: "别泄露了仙气：扶风",
          color: "#fff"
        },
        {
          danmuWords: "余生不在线：陌生剑圣",
          color: "#ccc"
        },
        {
          danmuWords: "dust:startdust",
          color: "#bbb"
        },
        {
          danmuWords: "软软：我觉得是传说中出包最快的男人",
          color: "red"
        },
        {
          danmuWords: "鲁班：我觉得是二腿哥",
          color: "green"
        },
        {
          danmuWords: "刚刚：林克才是最刚的男人",
          color: "pink"
        },
        {
          danmuWords: "白豆：我觉得是软软",
          color: "yellow"
        },
        {
          danmuWords: "喵喵：喵~",
          color: "grey"
        }
      ],
      [
        {
          danmuWords: "别泄露了仙气：扶风",
          color: "#fff"
        },
        {
          danmuWords: "余生不在线：陌生剑圣",
          color: "#ccc"
        },
        {
          danmuWords: "dust:startdust",
          color: "#bbb"
        },
        {
          danmuWords: "软软：我觉得是传说中出包最快的男人",
          color: "red"
        },
        {
          danmuWords: "鲁班：我觉得是二腿哥",
          color: "green"
        },
        {
          danmuWords: "刚刚：林克才是最刚的男人",
          color: "pink"
        },
        {
          danmuWords: "白豆：我觉得是软软",
          color: "yellow"
        },
        {
          danmuWords: "喵喵：喵~",
          color: "grey"
        },
        {
          danmuWords: "别泄露了仙气：扶风",
          color: "#fff"
        },
        {
          danmuWords: "余生不在线：陌生剑圣",
          color: "#ccc"
        },
        {
          danmuWords: "dust:startdust",
          color: "#bbb"
        },
        {
          danmuWords: "软软：我觉得是传说中出包最快的男人",
          color: "red"
        },
        {
          danmuWords: "鲁班：我觉得是二腿哥",
          color: "green"
        },
        {
          danmuWords: "刚刚：林克才是最刚的男人",
          color: "pink"
        },
        {
          danmuWords: "白豆：我觉得是软软",
          color: "yellow"
        },
        {
          danmuWords: "喵喵：喵~",
          color: "grey"
        }
      ],
      [
        {
          danmuWords: "别泄露了仙气：扶风",
          color: "#fff"
        },
        {
          danmuWords: "余生不在线：陌生剑圣",
          color: "#ccc"
        },
        {
          danmuWords: "dust:startdust",
          color: "#bbb"
        },
        {
          danmuWords: "软软：我觉得是传说中出包最快的男人",
          color: "red"
        },
        {
          danmuWords: "鲁班：我觉得是二腿哥",
          color: "green"
        },
        {
          danmuWords: "刚刚：林克才是最刚的男人",
          color: "pink"
        },
        {
          danmuWords: "白豆：我觉得是软软",
          color: "yellow"
        },
        {
          danmuWords: "喵喵：喵~",
          color: "grey"
        },
        {
          danmuWords: "别泄露了仙气：扶风",
          color: "#fff"
        },
        {
          danmuWords: "余生不在线：陌生剑圣",
          color: "#ccc"
        },
        {
          danmuWords: "dust:startdust",
          color: "#bbb"
        },
        {
          danmuWords: "软软：我觉得是传说中出包最快的男人",
          color: "red"
        },
        {
          danmuWords: "鲁班：我觉得是二腿哥",
          color: "green"
        },
        {
          danmuWords: "刚刚：林克才是最刚的男人",
          color: "pink"
        },
        {
          danmuWords: "白豆：我觉得是软软",
          color: "yellow"
        },
        {
          danmuWords: "喵喵：喵~",
          color: "grey"
        }
      ],
      [
        {
          danmuWords: "别泄露了仙气：扶风",
          color: "#fff"
        },
        {
          danmuWords: "余生不在线：陌生剑圣",
          color: "#ccc"
        },
        {
          danmuWords: "dust:startdust",
          color: "#bbb"
        },
        {
          danmuWords: "软软：我觉得是传说中出包最快的男人",
          color: "red"
        },
        {
          danmuWords: "鲁班：我觉得是二腿哥",
          color: "green"
        },
        {
          danmuWords: "刚刚：林克才是最刚的男人",
          color: "pink"
        },
        {
          danmuWords: "白豆：我觉得是软软",
          color: "yellow"
        },
        {
          danmuWords: "喵喵：喵~",
          color: "grey"
        },
        {
          danmuWords: "别泄露了仙气：扶风",
          color: "#fff"
        },
        {
          danmuWords: "余生不在线：陌生剑圣",
          color: "#ccc"
        },
        {
          danmuWords: "dust:startdust",
          color: "#bbb"
        },
        {
          danmuWords: "软软：我觉得是传说中出包最快的男人",
          color: "red"
        },
        {
          danmuWords: "鲁班：我觉得是二腿哥",
          color: "green"
        },
        {
          danmuWords: "刚刚：林克才是最刚的男人",
          color: "pink"
        },
        {
          danmuWords: "白豆：我觉得是软软",
          color: "yellow"
        },
        {
          danmuWords: "喵喵：喵~",
          color: "grey"
        }
      ],
      [
        {
          danmuWords: "别泄露了仙气：扶风",
          color: "#fff"
        },
        {
          danmuWords: "余生不在线：陌生剑圣",
          color: "#ccc"
        },
        {
          danmuWords: "dust:startdust",
          color: "#bbb"
        },
        {
          danmuWords: "软软：我觉得是传说中出包最快的男人",
          color: "red"
        },
        {
          danmuWords: "鲁班：我觉得是二腿哥",
          color: "green"
        },
        {
          danmuWords: "刚刚：林克才是最刚的男人",
          color: "pink"
        },
        {
          danmuWords: "白豆：我觉得是软软",
          color: "yellow"
        },
        {
          danmuWords: "喵喵：喵~",
          color: "grey"
        },
        {
          danmuWords: "别泄露了仙气：扶风",
          color: "#fff"
        },
        {
          danmuWords: "余生不在线：陌生剑圣",
          color: "#ccc"
        },
        {
          danmuWords: "dust:startdust",
          color: "#bbb"
        },
        {
          danmuWords: "软软：我觉得是传说中出包最快的男人",
          color: "red"
        },
        {
          danmuWords: "鲁班：我觉得是二腿哥",
          color: "green"
        },
        {
          danmuWords: "刚刚：林克才是最刚的男人",
          color: "pink"
        },
        {
          danmuWords: "白豆：我觉得是软软",
          color: "yellow"
        },
        {
          danmuWords: "喵喵：喵~",
          color: "grey"
        }
      ]
    ],
    danmuTime:[],
  },

  /***
   * 视频播放
   * */
  videoPlay:function() {
    this.setData({
      isPlay:true,
    });
    var VideoContext = wx.createVideoContext("videoplay");
      // VideoContext.play();
  },

  /**
   * 弹幕
   * **/
  danMu: function () {
    var that = this;
    this.data.danmuList.forEach(function (item,index,arr) {
     that.data.danmuTime.push(item.length * 2);
     console.log(that.data.danmuTime.push(item.length))
      that.setData({
        danmuTime:that.data.danmuTime
      })
    });
  },

  countDown: function () {
    var that = this;
    var nowTime = new Date().getTime();//现在时间（时间戳）
    var endTime = new Date(that.data.endTime).getTime();//结束时间（时间戳）
    var time = (endTime - nowTime);//距离结束的毫秒数
    // 获取天、时、分、秒
    let hour = Math.floor(time / (1000 * 60 * 60)),//时
    min = Math.floor(time / (1000 * 60) % 60),//分
    sec = Math.floor(time / 1000 % 60);//秒
    hour = that.timeFormin(hour),
    min = that.timeFormin(min),
    sec = that.timeFormin(sec)
    // 每1000ms刷新一次
    that.setData({
      hour: that.timeFormat(hour),
      min: that.timeFormat(min),
      sec: that.timeFormat(sec)
    })
    if (time > 0) {
      that.setData({
        countDown: true
      })
      setTimeout(this.countDown, 1000);
    } else {
      that.setData({
        countDown: false
      })
    }
  },
  //小于10的格式化函数（2变成02）
  timeFormat(param) {
    return param < 10 ? '0' + param : param;
  },
  //小于0的格式化函数（不会出现负数）
  timeFormin(param) {
    return param < 0 ? 0 : param;
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.countDown();
    this.danMu();
  }
  ,

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  }
  ,

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getTabBar().setData({
      selected: 1
    });
  }
  ,

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  }
  ,

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  }
  ,

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  }
  ,

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  }
  ,

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
  ,

  changNumber: function (e) {
    this.data.number = e.currentTarget.dataset.id;
  }
  ,

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //获得dialog组件
    this.dialog = this.selectComponent("#dialog");
  }
  ,

  showDialog() {
    this.dialog.setData({
      showNumber: this.data.number,
    });
    this.dialog.showDialog();
  }
  ,

//取消事件
  _cancelEvent() {
    this.dialog.hideDialog();
  }
  ,
//确认事件
  _confirmEvent() {
    this.dialog.hideDialog();
  }

})

// pages/guessing/guessing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hour:"",
    min:"",
    sec:"",
    endTime:"2020-4-30 00:00:00",
    listData: [
      {
        clueName: "线索一",
        clueCont: "TA的钢琴级别是8级及以上",
        jump: false
      },
      {
        clueName: "线索二",
        clueCont: "图片线索",
        jump: true
      },
      {
        clueName: "线索三",
        clueCont: "TA的钢琴级别是8级及以上",
        jump: false
      },
      {
        clueName: "线索四",
        clueCont: "图片线索",
        jump: true
      },
      {
        clueName: "线索五",
        clueCont: "TA的钢琴级别是8级及以上",
        jump: false
      }
    ],
    inviteData: [
      {
        headIcon: ""
      },
      {
        headIcon: ""
      },
      {
        headIcon: ""
      },
      {
        headIcon: ""
      },
      {
        headIcon: ""
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  countDown:function(){
    var that=this;
    var nowTime = new Date().getTime();//现在时间（时间戳）
    var endTime = new Date(that.data.endTime).getTime();//结束时间（时间戳）
    var time = (endTime-nowTime);//距离结束的毫秒数
    // 获取天、时、分、秒
    let  hour = Math.floor(time / (1000 * 60 * 60)),//时
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
    if (time>0){
      that.setData({
        countDown: true
      })
      setTimeout(this.countDown, 1000);
    }else{
      that.setData({
        countDown:false
      })
    }
  },
  //小于10的格式化函数（2变成02）
  timeFormat(param) {
    return param < 10 ? '0' + param : param;
  },
  //小于0的格式化函数（不会出现负数）
  timeFormin(param) {
    return param < 0 ? 0: param;
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.countDown()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getTabBar().setData({
      selected: 3
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
  ,

  changNumber: function (e) {
    this.data.number = e.currentTarget.dataset.id;
  },

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

// pages/task/task.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dateData:[
      {
        taskNum:1,
        taskName:"每日登录本活动页面",
        taskTotal:1,
        taskRate:0,
        taskGift:"代言人线索x1",
        taskBtn:"登录"
      },
      {
        taskNum:2,
        taskName:"每天邀请3位好友",
        taskTotal:3,
        taskRate:0,
        taskGift:"代言人线索x1",
        taskBtn:"邀请"
      },
      {
        taskNum:3,
        taskName:"每天参与竞猜",
        taskTotal:1,
        taskRate:0,
        taskGift:"代言人线索x1",
        taskBtn:"竞猜"
      }
    ],
    coinData:[
      {
        taskNum:1,
        taskName:"预约游戏",
        taskTotal:1,
        taskRate:0,
        taskGift:"金币200",
        taskBtn:"预约"
      },
      {
        taskNum:2,
        taskName:"关注公众号",
        taskTotal:1,
        taskRate:0,
        taskGift:"金币200",
        taskBtn:"关注"
      },
      {
        taskNum:3,
        taskName:"绑定手机号",
        taskTotal:1,
        taskRate:0,
        taskGift:"金币200",
        taskBtn:"绑定"
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getTabBar().setData({
      selected: 2
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
})

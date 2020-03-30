// pages/clue/clue.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checked:"待解锁线索",
    check:"查看线索",
    stepData:[
      {
        isActive:true,
        giftName:"奖励名称1"
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
    ]
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
      selected: 1
    });
    console.log(this);
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

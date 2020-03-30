// pages/guessing/guessing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData:[
      {
        clueName:"线索一",
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
        clueName:"线索四",
        clueCont:"图片线索",
        jump:true
      },
      {
        clueName:"线索五",
        clueCont:"TA的钢琴级别是8级及以上",
        jump:false
      }
    ],
    inviteData:[
      {
        headIcon:""
      },
      {
        headIcon:""
      },
      {
        headIcon:""
      },
      {
        headIcon:""
      },
      {
        headIcon:""
      },
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
})

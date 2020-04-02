// pages/task/task.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dateData: [
      {
        taskNum: 1,
        taskName: "每日登录本活动页面",
        taskTotal: 1,
        taskRate: 0,
        taskGift: "代言人线索x1",
        taskBtn: "登录",
        isPopup:true,
        popupNumber:1
      },
      {
        taskNum: 2,
        taskName: "每天邀请3位好友",
        taskTotal: 3,
        taskRate: 0,
        taskGift: "代言人线索x1",
        taskBtn: "邀请",
        isPopup:true,
        popupNumber:1
      },
      {
        taskNum: 3,
        taskName: "每天参与竞猜",
        taskTotal: 1,
        taskRate: 0,
        taskGift: "代言人线索x1",
        taskBtn: "竞猜",
        isPopup:true,
        popupNumber:1
      }
    ],
    coinData: [
      {
        taskNum: 1,
        taskName: "预约游戏",
        taskTotal: 1,
        taskRate: 0,
        taskGift: "金币200",
        taskBtn: "预约",
        isPopup:true,
        popupNumber:2
      },
      {
        taskNum: 2,
        taskName: "关注公众号",
        taskTotal: 1,
        taskRate: 0,
        taskGift: "金币200",
        taskBtn: "关注",
        isPopup:true,
        popupNumber:1
      },
      {
        taskNum: 3,
        taskName: "绑定手机号",
        taskTotal: 1,
        taskRate: 0,
        taskGift: "金币200",
        taskBtn: "绑定",
        isPopup:true,
        popupNumber:2
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
  ,

  changNumber: function (e) {
    this.data.number = e.currentTarget.dataset.id;
    console.log(this.data.number)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //获得dialog组件
    this.dialog = this.selectComponent("#dialog");
  },

  showDialog() {
    this.dialog.setData({
      showNumber: this.data.number,
    });
    this.dialog.showDialog();
  },

  //取消事件
  _cancelEvent() {
    console.log('你点击了取消');
    this.dialog.hideDialog();
  },
  //确认事件
  _confirmEvent() {
    console.log('你点击了确定');
    this.dialog.hideDialog();
  }
})

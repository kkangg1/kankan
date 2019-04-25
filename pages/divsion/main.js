
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '分类',
    key: 1,
    lists: ["标题1", "标题二", "标题三", "标题四", "标题五", "标题六", "标题七", "标题八", "标题九", "标题十", "标题十一", "标题十二"],
    indexId: 0,
    top: app.globalData.systemInfo.statusBarHeight+44,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  jumpIndex(e) {
    let index = e.currentTarget.dataset.menuindex
    let that = this
    that.setData({
      indexId: index
    });
  },


  change(e) {
    this.setData({
      indexId: e.detail.current
    })
  },
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

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '分类',
    key: 1,
    lists: [
      {
        title: "大件家具",
        category: [
          "床",
          "沙发",
          "书柜",
          "餐桌",
          "书桌",
          "电视柜",
          "梳妆台",
          "鞋柜",
          "茶几",
          "",
          "",
          "",
          "",
          "",
          ""
        ]
      },{
        title: "小件家具",
        category: [
          "地毯",
          "镜子",
          "椅子",
          "电脑椅",
          "晾衣架",
          "床头柜"
        ]
      }, {
        title: "电子电器",
        category: [
          "电视机",
          "台灯",
          "落地灯",
          "电饭锅",
          "榨汁机",
          "洗衣机",
          "吹风机",
          "电扇",
          "烧水壶",
          "冰箱",
          "咖啡机",
          "美容美发"

        ]
      }, {
        title: "手机数码",
        category: [
          "手机",
          "电脑组装",
          "游戏主机/掌机",
          "相机",
          "打印机",
          "手机附件",
          "电脑附件",
          "笔记本电脑",
          "",
          "",
          ""

        ]
      }, {
        title: "服装鞋帽",
        category: [
          "衣服",
          "裤子",
          "裙子",
          "鞋子",
          "首饰",
          "配饰"

        ]
      }, {
        title: "生活百货",
        category: [
          "收纳",
          "衣架",
          "其他",
          "",
          "",
          "",
          ""
        ]
      },{
        title: "运动户外",
        category: [
          "球类运动",
          "休闲运动",
          "出行",
          ""
        ]
      },{
        title: "车",
        category: [
          "二手车"
        ]
      },{
        title: "房",
        category: [
          "租房",
          "卖房"
        ]
      }, {
        title: "其他",
        category: [
          "其他"
        ]
      }
    ],
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
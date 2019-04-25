//logs.js
const util = require('../../utils/util.js')

Page({

  pageLifetimes: {
    show() {
      this.getTabBar()
    }
  },
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})

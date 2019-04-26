const app = getApp();

let animationShowHeight = 600;


Component({
  properties: {
    key: {
      type: Number,
      value: 0,
      observer: function(newVal, oldVal, changedPath) {
        if (!newVal) {
          let obj = {};
          obj[changedPath[0]] = oldVal;
          this.setData(obj);
        }
      }
    }
  },
  data: {
    animationData: "",
    showModalStatus: false,
    imageHeight: 0,
    imageWidth: 0,

    color: "#d8d6d6ab",
    selectedColor: "#ffffff",
    list: [{
      pagePath: "/pages/index/index",
      iconPath: "/images/home-outline.png",
      selectedIconPath: "/images/home.png",
      text: "主页"
    }, {
      pagePath: "/pages/divsion/main",
      iconPath: "/images/all.png",
      selectedIconPath: "/images/all-fill.png",
      text: "分类"
    }, {
      pagePath: "/pages/publishing/index",
        iconPath: "/images/fabu.png",
        selectedIconPath: "/images/fabu.png",
      text: "发布"
    }, {
      pagePath: "/pages/collection/main",
      iconPath: "/images/collection.png",
      selectedIconPath: "/images/collection-fill.png",
      text: "收藏"
    }, {
      pagePath: "/pages/user/main",
      iconPath: "/images/account.png",
      selectedIconPath: "/images/user-fill.png",
      text: "我"
    }]
  },
  onLoad: function () {
    const that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          animationShowHeight: res.windowHeight
        });
      }
    })
  },
  attached() {
    selected: this.data.key
  },
  methods: {
    goToP1: function () {
      wx.navigateTo({
        url: '/pages/publishing/index',
      })
      console.log("url")
    },
    imageLoad: function (e) {
      console.log(e.detail.height)
      this.setData({
        imageHeight: e.detail.height,
        imageWidth: e.detail.width
      });
    },
    showModal: function() {
      console.log("bbbb")
      // 显示遮罩层
      const animation = wx.createAnimation({
        duration: 200,
        timingFunction: "linear",
        delay: 0
      })
      this.animation = animation
      animation.translateY(animationShowHeight).step()
      console.log(animationShowHeight)
      this.setData({
        animationData: animation.export(),
        showModalStatus: true
      })
      setTimeout(function() {
        animation.translateY(0).step()
        this.setData({
          animationData: animation.export()
        })
      }.bind(this), 200)
    },
    hideModal: function() {
      // 隐藏遮罩层
      var animation = wx.createAnimation({
        duration: 200,
        timingFunction: "linear",
        delay: 0
      })
      this.animation = animation;
      animation.translateY(animationShowHeight).step()
      this.setData({
        animationData: animation.export(),
      })
      setTimeout(function() {
        animation.translateY(0).step()
        this.setData({
          animationData: animation.export(),
          showModalStatus: false
        })
      }.bind(this), 200)
    },
    onShow: function() {
      let that = this;
      wx.getSystemInfo({
        success: function(res) {
          animationShowHeight = res.windowHeight;
        }
      })
    },
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      console.log(this.data.key)
      wx.switchTab({
        url,
      })
      this.setData({
      })
    }
  }
})
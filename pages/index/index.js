//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    view: {
      Opacity: 1,
      Filter: 0
    }
  },
  focusInputEvent: function () {
    this.setData({
      view: {
        Opacity: 0.7,
        Filter: 1
      }
    })
  },
  blurInputEvent: function () {
    this.setData({
      view: {
        Opacity: 1,
        Filter: 0
      }
    })
  }
})

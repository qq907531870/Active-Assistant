const app = getApp();
Page({
  data: {
    myself: '',//一句介绍
    selfLen: 0//一句话介绍字数
  },
  onLoad: function (options) {
    
  },
  countSelfFun: function (e) {
    var eValueLen = e.detail.value.length,
      eValue = e.detail.value;
    this.setData({
      selfLen: eValueLen,
      myself: eValue
    })
  },
  submitTap: function () {
    var myBaseInfo = {
      myself: this.data.myself,
    }
    // try {
    //   //将 data 存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个同步接口。
    //   wx.setStorageSync('myBaseInfo', myBaseInfo);
    // } catch (e) {

    // }
    wx.showToast({
      title: '保存成功！',
      duration: 800
    })
    //返回上一个页面
    setTimeout(function () {
      wx.navigateBack({

      })
    }, 1000);
  }
})
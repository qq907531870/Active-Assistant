// pages/signIn/signIn.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['进行中', '未开始', '已结束'],
    currentTab: 3,
    myCare: [
      {
        userHead: '/img/log1.png',
        name: '智小乖',
        introduce: '全球首款智能看护婴儿床',
        position: '深圳 智能家居',
        care: 0
      },
      {
        userHead: '/img/log1.png',
        name: '智小乖',
        introduce: '全球首款智能看护婴儿床',
        position: '深圳 智能家居',
        care: 1
      },
      {
        userHead: '/img/log1.png',
        name: '智小乖',
        introduce: '全球首款智能看护婴儿床',
        position: '深圳 智能家居',
        care: 2
      },
    ]
  },
  navbarTap: function (e) {
    var that = this;
    that.setData({
      currentTab: e.currentTarget.dataset.idx,
      TypeItem: that.data.navbar[that.data.currentTab]
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {
    this.setData({
      currentTab:0,
      TypeItem:this.data.navbar[0]
    })
  },

  bindchange: function (event) {
    let that = this;
    let current = event.detail.current;
    that.setData({ deskIndex: current });
    console.log(current);
  },
  care: function () {
    wx.navigateTo({
      url: 'event/event',
    })
  }
})
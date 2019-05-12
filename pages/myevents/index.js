// pages/B-follow/B-follow.js
Page({

  /**
   * 页面的初始数据
   * name:活动名
   * introduce:活动介绍
   * position:活动地点
   * care:按钮情况：1：进行中，2，已报名，3，已结束
   */
  data: {
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //swiper切换
  bindchange: function (event) {
    let that = this;
    let current = event.detail.current;
    that.setData({ deskIndex: current });
    console.log(current);
  },
  care:function(){
    wx.navigateTo({
      url: 'myevent/event',
    })
  }
})
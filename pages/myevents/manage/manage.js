Page({
  data: {
    peopleNum:3,
    carArray: [
      {
        carImage: '../../../img/log1.png',
        carTitle: '木村耀司登山旅行大学生户外',
        carShow: true
      },
      {
        carImage: '../../../img/log1.png',
        carTitle: '木村耀司登山旅行大学生户外',
        carShow: true
      },
      {
        carImage: '../../../img/log1.png',
        carTitle: '木村耀司登山旅行大学生户外',
        carShow: true
      }
    ]
  },
  carRemove: function (event) {
    wx.showModal({
      title: '提示',
      content: '确定删除该成员吗？',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定');
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
})
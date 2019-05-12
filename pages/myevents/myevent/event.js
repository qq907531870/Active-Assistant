Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"华广游泳馆比赛",
    time_start:"2019-1-1",
    time_end:"2019-2-2",
    address:"华南理工大学广州学院",
    phone:"15815877168",
    people_number:"10"
  }, 
  to_people: function (event) {
    console.log("123");
    wx.navigateTo({
      url: '../manage/manage',
    })
  },
  delect_activity:function(event){
    wx.showModal({
      title: '提示',
      content: '确定删除该活动吗？',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定');
          wx.redirectTo({
            url: '../index',
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }

})
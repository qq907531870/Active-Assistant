Page({

  /**
   * 页面的初始数据
   */
  data: {
    show_state:false,
    title:"华广游泳馆比赛",
    time_start:"2019-1-1",
    time_end:"2019-2-2",
    address:"华南理工大学广州学院",
    phone:"15815877168",
    people_number:"10",
    erWeiMa: "../../../img/log1.png"
  },

  /**
   * 生命周期函数--监听页面加载
   */
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
    
  },
  sign:function(event){
    this.setData({"show_state": true });
  },
  getAddress: function (event) {
    wx.showModal({
      content: this.data.address
    })
  }
})
// pages/allsubject/allsubject.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      renshe:'',
      jiaotong:'',
      anjian:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      // console.log(app.globalData.allsubject);
    this.resetsubject(app.globalData.allsubject);
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
  resetsubject(data){
    let a = [];//人社类
    let b =[];//交通类
    let c= [];//安监类
    data.forEach((item,index) => {
        if(item.type == '人社类'){
          a.push(item);
        }
        if(item.type == '交通类'){
          b.push(item);
        }
        if(item.type == '安监类'){
          c.push(item);
        }
    })
    this.setData({
        renshe:a,
        jiaotong:b,
        anjian:c
    })
    console.log(this.data);
  },
  gosubject(e){
    wx.navigateTo({
      url: '../enlist/enlist?subjectId=' + e.currentTarget.dataset.id,
    })
  }
})
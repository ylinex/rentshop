// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: [],
    defaultImg: '../../images/my/header.png',
    orders: [{
      _id: "9afd9b6a5d297bc20",
      buyer_address: "广东省广州市海珠区新港中路397号",
      buyer_name: "张三",
      buyer_phone: "020-81167888",
      create_time: "2020-11-13T06:35:46.242Z",
      order_amount: 0.1,
      order_status: 0,
      orderdetail: [{
        order_id: "7217ba20a53811e9825141fe9cfd302d",
        product_count: 1,
        product_id: "5cf526aaa87a1a18b6624ae6",
        product_img: "/images/classify/c4.jpg",
        product_name: "苹果电脑",
        product_price: 0.1,
      }]
    }]
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

  }
})
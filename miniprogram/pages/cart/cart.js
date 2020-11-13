// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {cartData: [{
    _id: "5cf526aaa87a1a18b6624ae6",
    product_description: "",
    product_img: "/images/cart/c2.jpg",
    product_name: "苹果电脑",
    product_price: 0.1,
    product_sell_price: 0.1,
    product_stock: 100,
    counts: 1,
    selectStatus: true
  },
  {
    _id: "5cf526aaa87a1a18b6624ae8",
    product_description: "",
    product_img: "/images/cart/c1.jpg",
    product_name: "电子设备",
    product_price: 0.1,
    product_sell_price: 0.1,
    product_stock: 100,
    counts: 1,
    selectStatus: true
  }
],
selectedCounts: 0, //总的商品数
selectedTypeCounts: 0, //总的商品类型数 
account: 0.7
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
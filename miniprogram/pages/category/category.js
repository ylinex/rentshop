// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuCategories: [{
      category_name: '衣服鞋包',
      category_type: 1
    },
    {
      category_name: '教材书籍',
      category_type: 2
    },
    {
      category_name: '出行工具',
      category_type: 3
    },
    {
      category_name: '器材设备',
      category_type: 4
    },
    {
      category_name: '其他',
      category_type: 5
    },
  ],
  menuSelect: 1,
  menuNmae: '',
  products: [{
      _id: "5cf526aaa87a1a18b6624ae6",
      product_description: "",
      product_img: "/images/classify/c1.jpg",
      product_name: "面试西装",
      product_price: 0.1,
      product_sell_price: 0.1,
      product_stock: 100
    },
    {
      _id: "5cf526aaa87a1a18b6624ae8",
      product_description: "",
      product_img: "/images/classify/c2.jpg",
      product_name: "音响设备",
      product_price: 0.1,
      product_sell_price: 0.1,
      product_stock: 100
    },
    {
      _id: "5cf526aaa87a1a18b6624aea",
      product_description: "",
      product_img: "/images/classify/c3.jpg",
      product_name: "高等数学",
      product_price: 0.1,
      product_sell_price: 0.1,
      product_stock: 100
    },
    {
      _id: "5cf526aaa87a1a18b6624aec",
      product_description: "",
      product_img: "/images/classify/c4.jpg",
      product_name: "苹果电脑",
      product_price: 0.1,
      product_sell_price: 0.1,
      product_stock: 100
    }
  ]
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
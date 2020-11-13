// miniprogram/pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // indicatorDots: true, //是否显示面板指示点
    // autoplay: true, //自动轮播
    // interval: 3000, // 自动切换时间间隔
    // duration: 1000, // 滑动动画时长
    // circular: true, //是否采用衔接滑动 
    // banners: [{
    //     image: "cloud://demo-9g950xr680a4f632.6465-demo-9g950xr680a4f632-1304009770/banner/banner@1.png",
    //     name: "洛丽塔",
    //     product_id: "5cf38858a87a1a18b65aefbe"
    //   },
    //   {
    //     image: "cloud://demo-9g950xr680a4f632.6465-demo-9g950xr680a4f632-1304009770/banner/banner@2.png",
    //     name: "精美汉服",
    //     product_id: "5cf38858a87a1a18b65aefca"
    //   },
    //   {
    //     image: "cloud://demo-9g950xr680a4f632.6465-demo-9g950xr680a4f632-1304009770/banner/banner@3.png",
    //     name: "小熊玩偶",
    //     product_id: "5cf38858a87a1a18b65aefc2"
    //   }
    // ],
    themes: [
      { theme_icon: 'images/theme@1.png', theme_name: '衣服鞋包', theme_type: 1 },
      { theme_icon: 'images/theme@2.png', theme_name: '教材书籍', theme_type: 2 },
      { theme_icon: 'images/theme@3.png', theme_name: '出行工具', theme_type: 3 },
      { theme_icon: 'images/theme@4.png', theme_name: '器材设备', theme_type: 4 },
    ],
    products: [{
      _id: "5cf526aaa87a1a18b6624ae6",
      product_description: "",
      product_img: "/images/new/n1.jpg",
      product_name: "摄影器材",
      product_price: 0.1,
      product_sell_price: 0.1,
      product_stock: 100
    },
    {
      _id: "5cf526aaa87a1a18b6624ae8",
      product_description: "",
      product_img: "/images/new/n2.jpg",
      product_name: "大学语文",
      product_price: 0.1,
      product_sell_price: 0.1,
      product_stock: 100
    },
    {
      _id: "5cf526aaa87a1a18b6624aea",
      product_description: "",
      product_img: "/images/new/n3.jpg",
      product_name: "音响设备",
      product_price: 0.1,
      product_sell_price: 0.1,
      product_stock: 100
    },
    {
      _id: "5cf526aaa87a1a18b6624aec",
      product_description: "",
      product_img: "/images/new/n4.jpg",
      product_name: "大学物理",
      product_price: 0.1,
      product_sell_price: 0.1,
      product_stock: 100
    }

  ],
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
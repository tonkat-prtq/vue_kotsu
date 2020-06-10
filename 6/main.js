var app = new Vue ({
  el: '#app',
  data: {
    price: 980
  },
  methods: {
    //(5)子から呼び出されるメソッド
    priceDown: function(discount) {
      // 値下げ幅が指定されてない場合は100円とする
      if (discount == undefined) discount = 100;
      // 値下げする
      this.price -= discount;
    }
  }
});
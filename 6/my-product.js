Vue.component('my-product', {
  //(1)ボタンがクリックされたら子コンポーネントの「ClickHandler」を呼び出す
  template:'<button>現在の価格{{price}}円</button>',
  props: ['price'],
  methods: {
    //(2)ボタンのクリックイベントハンドラ
    clickHandler: function() {
      //(3)子コンポーネントに「child-click」イベントを発生させる
      var discount = 0;
      if (this.price - 50 < 500) {
        // 現在の価格が530円の場合、値下げ幅は30円
        discount = this.price - 500;
      } else {
        // 現在の価格が550円以上の場合、値下げ幅は50円
        discount = 50;
      }
      this.$emit('child-click', discount);
    }
  }
});

var myComponent = {
  template: '<p>{{message}}</p>',
  data: function() {
    return {
      message: 'コンポーネントです'
    }
  }
};
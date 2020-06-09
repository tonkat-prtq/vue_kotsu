Vue.component('my-product', {
  //(1)ボタンがクリックされたら子コンポーネントの「ClickHandler」を呼び出す
  template:`
    '<div>
      <button v-on:click="clickHandler">値下げする</button> {{ price }}(円)
    </div>'`,
  props: ['price'],
  methods: {
    //(2)ボタンのクリックイベントハンドラ
    clickHandler: function() {
      //(3)子コンポーネントに「child-click」イベントを発生させる
      this.$emit('child-click');
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
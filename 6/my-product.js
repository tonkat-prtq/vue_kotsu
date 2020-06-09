Vue.component('my-product', {
  template: '<div><span>{{name}}</span> : <span>{{price}}円</span></div>',
  data: function() {
    return {
      name: 'スマホケース',
      price: 980
    }
  }
});
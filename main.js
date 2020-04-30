// Vue.filter('number_format', function(val) {
//   return val.toLocaleString();
// });

var app = new Vue ({

  el: "#app",
  data: {
    show: true,
    year: (new Date()).getFullYear(),
    price: 1280,
    stock: 10,
    width: window.innerWidth,
    height: window.innerHeight,
    products: [
      {code: 'A01', name: 'product A'},
      {code: 'B01', name: 'product B'},
      {code: 'C01', name: 'product C'},
    ],
    point: {
      x: 0, y: 0
    },
  },
  created: function() {
    addEventListener('mousemove', this.mousemoveHandler);
  },
  beforeDestroy: function() {
    removeEventListener('mousemove', this.mousemoveHandler);
  },

  // created: function() {
  //   addEventListener('resize', this.resizeHandler)
  // },
  // beforeDestroy: function() {
  //   removeEventListener('resize', this.resizeHandler)
  // },
  methods: {
    mousemoveHandler: function($event) {
      this.point.x = $event.clientX;
      this.point.y = $event.clientY;
    },

    // now1: function(){
    //   return (new Date()).toLocaleString();
    // },
    // // 削除ボタンのクリックイベントハンドラ
    // onDeleteItem: function () {
    //   this.stock--;
    // },
    // resizeHandler: function($event) {
    //   this.width = $event.target.innerWidth;
    //   this.height = $event.target.innerHeight;
    // }
  },
  computed: {
    isUrudoshi: function() {
      if ((this.year%4 == 0) && (this.year%100 !=0 ) ||
      (this.year%400 == 0)) {
        return true;
      } else {
        return false;
      }
    },
    now2: function() {
      return (new Date()).toLocaleString();
    }
  },

  // filters: {
  //   number_format: function(val) {
  //     return val.toLocaleString();
  //   },
  //   unit: function(val) {
  //     return val + '円';
  //   }
  // }
});
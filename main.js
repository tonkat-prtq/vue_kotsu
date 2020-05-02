// Vue.filter('number_format', function(val) {
//   return val.toLocaleString();
// });

var app = new Vue ({

  el: "#app",
  data: {
    color: '#000000',
    red: 0,
    blue: 0,
    green: 0,
    arrival_date: null,
    min_date: null,
    answer: "",
    category: [],
    options: [
      {code: 'ans1', label: 'はじめて'},
      {code: 'ans2', label: '週1'},
      {code: 'ans3', label: '月2'},
      {code: 'ans4', label: '半年に1回'},
    ],
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

  // created: function(){
  //   var dt = new Date();
  //   dt.setDate(dt.getDate() + 1);
  //   this.arrival_date = this.formatDate(dt);
  //   this.min_date = this.arrival_date;
  // },
  // created: function() {
  //   addEventListener('mousemove', this.mousemoveHandler);
  // },
  // beforeDestroy: function() {
  //   removeEventListener('mousemove', this.mousemoveHandler);
  // },

  // created: function() {
  //   addEventListener('resize', this.resizeHandler)
  // },
  // beforeDestroy: function() {
  //   removeEventListener('resize', this.resizeHandler)
  // },
  methods: {
    //日付をYYYY-MM-DDに整形するメソッド
    // formatDate: function(dt) {
    //   var y = dt.getFullYear();
    //   var m = ('00' + (dt.getMonth()+1)).slice(-2);
    //   var d = ('00' + (dt.getDate())).slice(-2);
    //   var result = y + '-' + m + '-' + d;
    //   return result;
    // },

    // yearInputHandler: function($event) {
    //   this.year = $event.target.value;
    // },
    // mousemoveHandler: function($event) {
    //   this.point.x = $event.clientX;
    //   this.point.y = $event.clientY;
    // },

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

  // watch: {
  //   stock: function(newStock, oldStock) {
  //     if (newStock == 0) {
  //       this.message = '売り切れ';
  //     }
  //   }
  // },

  computed: {
    // 赤、緑、青を配列で返す算出プロパティ
    // colorElement: function() {
    //   return [this.red, this.green, this.blue];
    // },

    // selectedCategory: function() {
    //   return this.category.length >=1 ? this.category.join() : '';
    // },
    // selection: function() {
    //   return this.answer.join();
    // }
    // isUrudoshi: function() {
    //   if ((this.year%4 == 0) && (this.year%100 !=0 ) ||
    //   (this.year%400 == 0)) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // },
    // now2: function() {
    //   return (new Date()).toLocaleString();
    // }
    // statusMessage: function() {
    //   if (this.stock == 0) {
    //     return '売り切れ';
    //   }
    //   return '';
    // },
  },

  watch: {
    // // 赤・緑・青のいずれかの変更を監視する
    // colorElement: function(newRGB, oldRGB) {
    //   // 赤・緑・青を2桁の16進数表記に変換する
    //   var r = ('00' + newRGB[0].toString(16).toUpperCase()).slice(-2);
    //   var g = ('00' + newRGB[1].toString(16).toUpperCase()).slice(-2);
    //   var b = ('00' + newRGB[2].toString(16).toUpperCase()).slice(-2);
    //   // #RRGGBB形式の文字列で更新する
    //   this.color = '#' + r + g + b;


    // カラーパレットの選択変更を監視する
    // color: function(newColor, oldColor) {
    //   this.red = parseInt(newColor.substr(1,2), 16);
    //   this.green = parseInt(newColor.substr(3,2), 16);
    //   this.blue = parseInt(newColor.substr(5,2), 16);
    // },
    // statusMessage: function() {
    //   console.log('商品のステータスが変化しました');
    // }
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
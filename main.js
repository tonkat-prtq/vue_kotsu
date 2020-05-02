// 数値を通過書式「#,###,###」に変換するフィルター
Vue.filter('number_format', function(val) {
  // toLocaleStringで通過書式に変換してくれるx
  return val.toLocaleString();
})

var app = new Vue ({
  el: '#app',
  data: {
    // 表示中の商品数
    count: 0,
    // 「セール対象」のチェック状態
    showSaleItem: false,
    // 「送料無料」のチェック状態
    showDelvFree: false,
    // 「並び替え」の選択肢(1: 標準, 2: 価格が安い順)
    sortOrder: 1,
    // 商品リスト
    products: [
      {name: 'Michael<br>スマホケース', price: 1580, image: 'images/01.jpg', delv: 0, isSale: true},
      {name: 'Raphael<br>スマホケース', price: 1580, image: 'images/02.jpg', delv: 0, isSale: true},
      {name: 'Gabriel<br>スマホケース', price: 1580, image: 'images/03.jpg', delv: 240, isSale: true},
      {name: 'Uriel<br>スマホケース', price: 980, image: 'images/04.jpg', delv: 0, isSale: true},
      {name: 'Ariel<br>スマホケース', price: 980, image: 'images/05.jpg', delv: 0, isSale: false},
      {name: 'Azrael<br>スマホケース', price: 1580, image: 'images/06.jpg', delv: 0, isSale: false},
    ]
  },

  watch: {
    // 「セール対象」チェックボックスの状態を監視するウォッチャ
    showSaleItem: function(newVal, oldVal) {
      // ここでproductsの配列を書き換える
      console.log('showSaleItemウォッチャが呼び出されました');
    },

    showDelvFree: function(newVal, oldVal) {
      // ここでproductsの配列を書き換える
      console.log('showDelvFreeウォッチャが呼び出されました')
    },
  }
});

// // コンポーネントのルートノード
// var nodeApp = document.querySelector('#app');

// // チェックボックスのイベントハンドラを登録
// var nodeCheckbox = nodeApp.querySelectorAll('input[type="checkbox"]');
// nodeCheckbox[0].addEventListener('change', onCheckChanged, false);
// nodeCheckbox[1].addEventListener('change', onCheckChanged, false);

// // セレクトボックスのイベントハンドラを登録
// var nodeSelect = nodeApp.querySelector('.sorting');
// nodeSelect.addEventListener('change', onOrderChanged, false);

// // 初期表示時の商品ノードリスト（保存用）
// var nodeItemsOrg = nodeApp.querySelectorAll('.item');

// // チェック状態変更イベントハンドラ
// function onCheckChanged(event) {

//   var nodeItems = nodeApp.querySelectorAll('.item');  // 商品ノードのリスト
//   var nodeCount = nodeApp.querySelector('.count');    // 表示件数のノード
//   var count     = nodeItems.length;                   // 表示件数

//   // 全ての商品ノードをいったん表示する
//   for (var i=0; i<nodeItems.length; i++) {
//     showNode(nodeItems[i]);
//   }

//   // セール対象のチェックがついている場合
//   if (nodeCheckbox[0].checked) {
//     // 全ての商品ノードを捜査
//     for (var i=0; i<nodeItems.length; i++) {
//       // セール対象の商品ではない場合
//       if (!isSaleItem(nodeItems[i])) {
//         // この商品を非表示にする
//         hideNode(nodeItems[i]);
//         // 件数のカウントを減らす
//         count--;
//       }
//     }
//   }
//   // 送料無料のチェックがついている場合
//   if (nodeCheckbox[1].checked) {
//     // 全ての商品ノードを捜査
//     for (var i=0; i<nodeItems.length; i++) {
//       // 送料無料の商品ではない場合
//       if (!isDelvFreeItem(nodeItems[i])) {
//         // この商品を非表示にする
//         hideNode(nodeItems[i]);
//         // 件数のカウントを減らす
//         count--;
//       }
//     }
//   }
//   // 件数を更新
//   nodeCount.textContent = count + '件';
// }

// // 並び順の変更イベントハンドラ
// function onOrderChanged(event) {

//   var nodeList  = nodeApp.querySelector('.list');     // 商品一覧ノード
//   var nodeItems = nodeApp.querySelectorAll('.item');  // 商品ノードのリスト

//   // 商品ノードのリストを新しい配列に詰め替える（退避しておく）
//   var products = [];
//   for (var i=0; i<nodeItems.length; i++) {
//     products.push(nodeItems[i]);
//   }

//   // DOMから全ての商品ノードを削除する
//   while (nodeList.firstChild) {
//     nodeList.removeChild(nodeList.firstChild);
//   }

//   //「標準」が選択されている場合
//   if (event.target.value == '1') {
//     // 初期表示時の商品ノードを復元する
//     for (var i=0; i<products.length; i++) {
//       nodeList.appendChild(nodeItemsOrg[i]);
//     }
//   }
//   //「価格が安い順」が選択されている場合
//   else if (event.target.value == '2') {
//     // 配列を並び替え
//     products.sort(function(a,b) {
//       // 商品価格のノードからカンマを除去した数値を読み取る
//       var prevPrice    = parseInt(a.querySelector('.price span').textContent.replace(',',''));
//       var currentPrice = parseInt(b.querySelector('.price span').textContent.replace(',',''));
//       return prevPrice - currentPrice;
//     });
//     // 並び替え後の商品ノードをDOMに追加する
//     for (var i=0; i<products.length; i++) {
//       nodeList.appendChild(products[i]);
//     }
//   }
// }

// // セール商品かどうかを判定する関数
// function isSaleItem(nodeItem) {
//   var node = nodeItem.querySelector('.status');
//   return (node && node.textContent == 'SALE');
// }

// // 送料無料かどうかを判定する関数
// function isDelvFreeItem(nodeItem) {
//   var node = nodeItem.querySelector('.shipping-fee');
//   return (node && node.textContent == '送料無料');
// }

// // ノードを非表示にする関数
// function hideNode(node) {
//   node.setAttribute('style','display:none;');
// }

// // ノードを表示する関数
// function showNode(node) {
//   node.removeAttribute('style');
// }


// Vue.filter('number_format', function(val) {
//   return val.toLocaleString();
// });

// var app = new Vue ({

//   el: "#app",
//   data: {
//     color: '#000000',
//     red: 0,
//     blue: 0,
//     green: 0,
//     arrival_date: null,
//     min_date: null,
//     answer: "",
//     category: [],
//     options: [
//       {code: 'ans1', label: 'はじめて'},
//       {code: 'ans2', label: '週1'},
//       {code: 'ans3', label: '月2'},
//       {code: 'ans4', label: '半年に1回'},
//     ],
//     show: true,
//     year: (new Date()).getFullYear(),
//     price: 1280,
//     stock: 10,
//     width: window.innerWidth,
//     height: window.innerHeight,
//     products: [
//       {code: 'A01', name: 'product A'},
//       {code: 'B01', name: 'product B'},
//       {code: 'C01', name: 'product C'},
//     ],
//     point: {
//       x: 0, y: 0
//     },
//   },

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
  // methods: {
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
  // },

  // watch: {
  //   stock: function(newStock, oldStock) {
  //     if (newStock == 0) {
  //       this.message = '売り切れ';
  //     }
  //   }
  // },

  // computed: {
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
  // },

  // watch: {
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
  // },

  // filters: {
  //   number_format: function(val) {
  //     return val.toLocaleString();
  //   },
  //   unit: function(val) {
  //     return val + '円';
  //   }
  // }
// });
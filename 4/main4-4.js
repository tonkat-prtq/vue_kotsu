// JSONPのURL
var url = 'http://127.0.0.1:5500/4/products.js';
// 非同期通信でJSONPを読み込む
$.ajax({
  url : url,
  type: 'GET',
  dataType: 'jsonp',
  jsonp: 'callback',
  jsonpCallback: 'products'
})
.done(function(data, textStatus, jqXHR) {
  console.log(data);
})
.fail(function(jqXHR, textStatus, errorThrown) {
  console.log('通信が失敗しました');
});
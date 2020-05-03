// 読み込みボタンのクリックイベントハンドラを定義
var btnLoad = document.querySelector('#load');
btnLoad.addEventListener('click', function(event) {
  // ここにJsonを読み込む処理を記述する
  // 手順1：XMLHttpRequestオブジェクトのインスタンスを生成
  var xmlHttpRequest = new XMLHttpRequest();
  // 手順2：通信状態の変化を監視するイベントハンドラを設定
  xmlHttpRequest.onreadystatechange = function() {
    // レスポンスの受信が正常に完了したとき
    if (this.readyState == 4 /*&& this.status == 200*/) {
      // 受信したデータをコンソールに出力する
      console.log(this.readyState, this.response);
    }
  };
  // 手順3：レスポンスの形式を指定する
  xmlHttpRequest.responseType = 'json';
  // 手順4：リクエストメソッドと読み込むファイルのパスを指定する
  xmlHttpRequest.open('GET', 'products.json');
  // 手順5：リクエストを送信する(非同期通信を開始する）
  xmlHttpRequest.send();
});
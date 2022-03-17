let title = "javascriptが使えました";
alert(title);

$(document).ready(function(){
  $('.jquery').on('click',function(){
    $(this).css('color','red');
  });
});

$(document).ready(function(){
  $("#theTarget").skippr({
    transition : 'fade',　　　　//スライドショーの変化("fade" or "slide")
    speed : 1000,　　　　　　　　//変化に係る時間(ミリ秒)
    easing : 'easeOutQuart',　　 //easingの種類
    navType : 'bubble',　　　　　 //ナビゲーションの形("block" or "bubble")
    childrenElementType : 'div', //子要素の種類("div" or "img")
    arrows : true,　　　　　　　 //ナビゲーション矢印の表示(trueで表示)
    autoPlay : true,　　　　　　 //スライドショーの自動再生(falseで自動再生無し)
    autoPlayDuration : 2000,　　 //自動再生時のスライド切替間隔(ミリ秒)
    keyboardOnAlways : true,　　 //キーボードの矢印キーによるスライド送りの設定(trueで有効)
    hidePrevious : false　　　　 //1枚目のスライド表示時に戻る矢印を表示するかどうか(falseで非表示)
  });
});
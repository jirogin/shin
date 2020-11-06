//フェードイン
$(function() {
	setTimeout(function(){
		$('.start p').fadeIn(1600);
	},500); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
		$('.start').fadeOut(500);
	},3500); //2.5秒後にロゴ含め真っ白背景をフェードアウト！
});

$(function() {
  var topBtn = $('#page_top');  
  //topボタンは初期状態では隠れた状態にしておく  
  topBtn.hide();
  //スクロールが500に達したらボタン表示
  $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
          //500に達したらfadeInする
          topBtn.fadeIn();
      } else {
          //500より上に行ったらfadeOutして消える
          topBtn.fadeOut();
      }
  });
  //スクロールしてトップ
  topBtn.click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 800, "swing");
      return false;
  });
});

$(function(){
  // #で始まるアンカーをクリックした場合に処理
  $('a').click(function(){
    // 移動先を50px上にずらす
    var adjust = 100;
    // スクロールの速度
    var speed = 600; // ミリ秒
    // アンカーの値取得
    var href= $(this).attr("href");
    // 移動先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を調整
    var position = target.offset().top - adjust;
    // スムーススクロール
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});

//モーダルエリアここから

$(function(){
	$('.js-modal-open').each(function(){
			$(this).on('click',function(){
					var target = $(this).data('target');
					var modal = document.getElementById(target);
					$(modal).fadeIn();
					return false;
			});
	});
	$('.closeModal , #modalBg').on('click',function(){
			$('.modalArea').fadeOut();
			return false;
	}); 
});

//モーダルエリアここまで
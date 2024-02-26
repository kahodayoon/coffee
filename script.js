$(function () {
  $('.c-hamburger').click(function () {
    $('.c-hamburger').toggleClass('open');
    $('.p-global-nav').toggleClass('open');
  });
  $('.p-global-nav__list').click(function () {
    $('.c-hamburger').removeClass('open');
    $('.p-global-nav').removeClass('open');
  });
  $(window).resize(function () {
    // 画面幅が変更されたときに実行させたい処理内容
    $('.c-hamburger').removeClass('open');
    $('.p-global-nav').removeClass('open');
  });
  //スライダー
  $('#slick_slider').slick(
    {
    arrows: false, // 前・次ボタン
    dots:false,//ドット部分（Swiperでいうページネーション）
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 800,
    fade: true,
    cssEase: 'linear'
    }
  );
});

$(function () {
  // #で始まるリンクをクリックした場合
  $('a[href^="#"]').click(function () {
    // スクロールの速度
    let speed = 800;
    // スクロールタイプ
    let type = "swing";
    // href属性の取得
    let href = $(this).attr("href");
    // 移動先の取得（hrefが#indexならトップ$(html)に、それ以外はhrefに）
    let target = $(href == "#index" ? "html" : href);
    // 移動先のポジション取得
    let position = target.offset().top;
    // animateでスムーススクロール
    $("body,html").animate({ scrollTop: position }, speed, type);
    return false;
  });
});
//パララックスだが不要かも↓
// var rellax = new Rellax(".js-rellax", {
//   speed: -2, // スクロール速度の倍率  //
//   center: true, // 要素を中央に配置 //
//   wrapper: null, //スクロールされる要素の親要素 //
//   round: true, // 位置を整数に丸める //
//   vertical: true, // 縦方向のスクロールを有効にする //
//   horizontal: false, // 横方向のスクロールを無効にする //
// });


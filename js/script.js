// *************************
// ハンバーガーメニュー(jQuery)
// *************************
jQuery("#js-drawer-icon").on("click", function (e) {
  e.preventDefault();
  jQuery("#js-drawer-icon").toggleClass("is-checked");
  jQuery("#js-drawer-content").toggleClass("is-checked");
  jQuery("#js-drawer-bg").toggleClass("is-checked");
});

// *************************
// ハンバーガーメニュー（リンククリックでドロワーを閉じる）
// *************************
jQuery('#js-drawer-content a[href^="#"]').on("click", function (e) {
  jQuery("#js-drawer-icon").removeClass("is-checked");
  jQuery("#js-drawer-content").removeClass("is-checked");
  jQuery("#js-drawer-bg").removeClass("is-checked");
});

// *************************
// SmoothScroll
// *************************
jQuery('a[href^="#"]').click(function () {
  var header = jQuery("#header").height(); // #headerの高さ分引いた位置から表示
  var speed = 300;
  var id = jQuery(this).attr("href");
  var target = jQuery("#" == id ? "html" : id);
  var position = jQuery(target).offset().top - header;
  if (0 > position) {
    position = 0;
  }
  jQuery("html, body").animate(
    {
      scrollTop: position,
    },
    speed
  );
  return false;
});

//ハンバーガーメニュー

var hamburger = $('.hamburger-menu');

// OPEN/CLOSEボタンをクリックしたら
$('.hamburger-button').on('click', function () {

    // .hamburgerの表示・非表示を繰り返す
    hamburger.toggleClass('hamburger-menu-active');

});

// 画面幅のサイズが変わったら
$(window).on('resize', function () {

    // ハンバーガーメニューを閉じる
    hamburger.removeClass('hamburger-menu-active');
});


//メニュークリックでハンバーガーメニューを閉じる
$(".hamburger-menu-list-group").click(function () {
    $(".hamburger-menu-active").removeClass("active");
});



//カルーセル

$('.cover-slick').slick({
    autoplay: true, // 自動再生
    autoplaySpeed: 5000, // 自動再生の速さ、単位はミリ秒
    arrows: false, // 左右のナビゲーションを無効
    dots: false, // ドットを非表示
    fade: true, // フェードで切り替え
});




//フェードイン

$('.pic1,.pic3').waypoint({
    handler: function (direction) {

        if (direction === 'down') {

            $(this.element)
                .addClass('animate__fadeInLeft');
        }
    },


    // 要素が画面中央に来たらhandlerを実行
    offset: '50%',
});


$('.pic2').waypoint({
    handler: function (direction) {

        if (direction === 'down') {

            $(this.element)
                .addClass('animate__fadeInRight');
        }
    },


    // 要素が画面中央に来たらhandlerを実行
    offset: '50%',
});





//アコーディオンメニュー

$(function () {
    // タイトルをクリックすると
    $(".faq-section .faq-section-q").on("click", function () {
        // クリックした次の要素(コンテンツ)を開閉
        $(this).next().slideToggle();
        // タイトルにopenクラスを付け外ししてアイコン+から-へ変更
        $(this).toggleClass("open");
    });
});


// ページトップへ戻るボタン
var buttonToTop = $('#button-to-top');
var position = 0;
var speed = 600;

// ページトップへ戻るボタンをクリックしたら
buttonToTop.on('click', function () {
    console.log(position);

    // アニメーションをしながらページトップに移動
    $("html, body").animate({
        scrollTop: position
    }, speed, "swing");

});
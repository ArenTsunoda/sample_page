//ハンバーガーメニュー

$(document).ready(function () {

    var hamburger = $('.hamburger-menu');
    var hamburgerButton = $('.hamburger-button');

    // OPEN/CLOSEボタンをクリックしたら
    $('.hamburger-button').on('click', function (event) {

        event.stopPropagation();//他の親要素にクリックイベントが伝播しないようにする（メニュー外クリックで閉じる命令まで一緒に実行されるのを防ぐ）

        // .hamburgerの表示・非表示を繰り返す
        hamburger.toggleClass('hamburger-menu-active');

        // ハンバーガーボタンのアニメーションを切り替える
        hamburgerButton.toggleClass('active');

    });

    //以下の条件でハンバーガーメニューを閉じる
    // メニュー外をクリックしたときにメニューを閉じる
    $(document).off('click').on('click', function (event) {
        var target = $(event.target);
        if (!target.closest('.hamburger-menu').length && !target.closest('.hamburger-button').length) {
            hamburger.removeClass('hamburger-menu-active');
            hamburgerButton.removeClass('active');
        }
    });

    //メニュークリックでハンバーガーメニューを閉じる
    $(".nav-list-item").off('click').on('click', function () {
        hamburger.removeClass('hamburger-menu-active');
        hamburgerButton.removeClass('active');
    });

    // 画面幅のサイズが変わったら
    $(window).off('resize').on('resize', function () {
        hamburger.removeClass('hamburger-menu-active');
        hamburgerButton.removeClass('active');
    });

});



//アコーディオンメニュー

$(function () {
    // タイトルをクリックすると
    $(".nav-accordion").on("click", function () {
        // クリックした次の要素(コンテンツ)を開閉
        $(this).next().slideToggle();
        // タイトルにopenクラスを付け外し
        $(this).toggleClass("open");
    });
});



//各項目フェードイン

$('.main-top-about-container').waypoint({
    handler: function (direction) {

        if (direction === 'down') {

            $(this.element)
                .addClass('animate__fadeIn');
        }
    },


    // 要素が画面中央に来たらhandlerを実行
    offset: '50%',
});


$('.main-top-staff-introduction-container').waypoint({
    handler: function (direction) {

        if (direction === 'down') {

            $(this.element)
                .addClass('animate__fadeIn');
        }
    },


    // 要素が画面中央に来たらhandlerを実行
    offset: '50%',
});


$('.main-top-internship-container').waypoint({
    handler: function (direction) {

        if (direction === 'down') {

            $(this.element)
                .addClass('animate__fadeIn');
        }
    },


    // 要素が画面中央に来たらhandlerを実行
    offset: '50%',
});

$('.main-top-information-container').waypoint({
    handler: function (direction) {

        if (direction === 'down') {

            $(this.element)
                .addClass('animate__fadeIn');
        }
    },


    // 要素が画面中央に来たらhandlerを実行
    offset: '50%',
});




//カルーセル

$('.staff-introduction-slick').slick({
    autoplay: true, // 自動再生
    autoplaySpeed: 5000, // 自動再生の速さ、単位はミリ秒
    arrows: true, // 左右のナビゲーション
    dots: false, // ドットを表示
    fade: true, // フェードで切り替え
    centerMode: true,
    centerPadding: '20%',
});

//smartタブ
$(document).ready(function () {
    // タブの初期化
    $('#smarttab').smartTab({
        enableUrlHash: false
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
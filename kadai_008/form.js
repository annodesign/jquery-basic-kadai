
$(function() {
  // .btnクラスのボタンがクリックされたら
  $('.btn').on('click', function() {
    // .text-boxクラスのinput要素のvalueを「クリックしました！」に変更
    $('.text-box').val('クリックしました！');
  });
});

// 間違えたコードの書き方※
// $(function () {
//   // id属性がcheckの要素がクリックされたら
//   $('.btn').on('click', function () {
//      $('input').text('クリックしました！');
//     }
//   });
// });
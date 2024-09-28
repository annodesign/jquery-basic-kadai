$(function() {
  $('#change-color').on('click',function() {
    $('#target').css('color', 'blue');
  });
  $('#change-text').on('click',function() {
    $('#target').text('Hello');
  });
  // ２秒の時間も設定してみました
  $('#fade-out').on('click',function() {
    $('#target').fadeOut(2000, function() {
    })
  });
  $('#fade-in').on('click',function() {
    $('#target').fadeIn();
  });
});
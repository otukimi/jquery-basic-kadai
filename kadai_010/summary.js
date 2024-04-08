$(function(){
  // 文字色変化クリックすると赤に色が変わる
  $('#change-color').on('click',function(){
    $('#target').css('color','red');
  });
  // 文字枚葉変化クリックするとHELLO！に文字が変わる
  $('#change-text').on('click',function(){
    $('#target').text('Hello!');
  });
  //　文字がフェードアウトし消える
  $('#fade-out').on('click',function(){
    $('#target').fadeOut();
  });
  //　文字がフェードインし現れる
   $('#fade-in').on('click',function(){
    $('#target').fadeIn();
  });
});

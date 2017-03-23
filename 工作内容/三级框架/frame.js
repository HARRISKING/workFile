$('.btn0').on('click',function(){
  $('.panel-all').append('<div class="panel"><div class="box box1">大框<div class="btn1 btn">+</div></div><div class="box box2">中框<div class="btn2 btn">+</div></div><div class="box box3">小框<div class="btn3 btn">+</div></div></div>');
});





$('.btn1').on('click',function(){
  $(this).parents().parents().find('.box2').show();
});

$('.btn2').on('click',function(){
  $(this).parents().find('.box3').show();
})

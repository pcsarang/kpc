// $('') 또는 다음과 같이 코딩 가능 let i = jquery();
let header = $('.header');
let item = $('.menu-item');
// 마우스를 menu item의 li요소에 올리면 클래스 추가, menu-act
// item에 속성 추가, attr(tabinex, 0)
// focusin 필요
// item.act <- jquery에서는 chainning이라 함
// item.on('mouseover',function(){});
// $(this) <- 현재 객체

item.attr('tabindex','0');

item.on('mouseover focusin', function(){
  item.removeClass('menu-act');
  $(this).addClass('menu-act');
});

header.on('mouseout', function(){
  item.removeClass('menu-act');
})
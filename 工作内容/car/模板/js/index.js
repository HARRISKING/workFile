// var box2=document.getElementsByClassName("box2");
// function hasClass(el,cls){
//   var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)','g');
//   return reg.test(el.className);
// };
var childrenNode
var over;
function overTurn(){
  over = setInterval(turn, 5000);
};
function turn(){
  var num = Math.floor(Math.random()*9);
  $('.box2').eq(0).children().removeClass('animate');
  $('.box2').eq(0).children().eq(num).addClass('animate');
};
function stopOverTurn(){
  clearInterval(over);
}
overTurn();


// var box2=document.getElementsByClassName("box2");
function hasClass(el, cls) {
var reg =new RegExp('(\\s|^)'+cls+'(\\s|$)')
return reg.test(el.className);
}

function addClass(el,cls){
  if(!hasClass(el,cls)){
    el.className = el.className + ' ' + cls;
  }
};

function removeClass(el,cls){
  if(hasClass(el,cls)){
    el.className = el.className.replace(reg,' ').replace(/\s{2,}/g,' ');
  }
};

console.log("yinyongchenggong")

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
// console.log(box2[0].children[3]);
// console.log(num);
// console.log(box2[0].children[num]);

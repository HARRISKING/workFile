


$('.btn0').on('click',function(){
  $('.panel-all').append('<p><input class="inp" /><button class="addone">+</button></p> ');
});
$( '.panel-all' ).on( 'click', "button.addone", function () {
   $(this).parent("p").append('<p style="margin-left:20px;"><input class="inp" /><button class="addone">+</button></p> ');
});



function getP(father){
  var len = $(father).children('p').length;
  console.log(len);

  //判断子元素是否存在
  if(len !== 0){

    var child = [];

    for(var i=0; i<len; i++){
        //定义空对象
        var obj ={};
        //空对象中添加属性name
        obj.name = $(father).children('p').children('input').eq(i).val();
        console.log(obj);
        //将对象推送到上层的obj.child中
        child.push(obj);
        //定义这一层的OBJ.child
        obj.child = [];
        // console.log(obj.child);
        // obj.child.push(child);
    };
    console.log(child);
    // for(var keys in child){
    //   var json = {
    //     data:child[keys]
    //   }
    //   obj.child.push(json);
    // }
    getP($(father).children('p'));
  }
};
$('button').on('click',function(){
  getP('.panel-all');
});





//备份区：

// var json = [];
// function getP(father){
//   var len = $(father).children('p').length;
//   console.log(len);
//
//   for(var i=0; i<len; i++){
//       var obj ={};
//       obj.name = $(father).children('p').children('input').eq(i).val();
//       obj.child = [];
//       console.log(obj);
//       json.push(obj);
//       console.log(json);
//   };
// };
//
// $('button').on('click',function(){
// getP('.panel-all');
// });

requirejs.config({
  //路径可以通过手动设置来完成；
  baseUrl:'lib',
  //这里设置的是相对路径的根节点
  paths:{
    app:'app'
    //如果某些文件不在根节点内，可以再这里进行单独的设置。
  }
});

//配置环节结束，进行require引用环节。
requirejs(["jquery","a"],function($,a){
  $('.btn').addClass('other');
  console.log(a);
})

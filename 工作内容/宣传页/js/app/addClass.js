//1,cover和弹框被隐藏，当点击按钮“不感兴趣”的时候，加上display:block;
//2,四个选项，当点击其中一个，颜色改变，并记忆第几个。将第几个的内容发给后台。
//3,当选中选项并点击确定按钮，才退出所有页面。
//4,当未选中选项，直接点击确定时，不生效。



  // function hasClass(el,cls){
  //   var reg = newRegExp('(//s|^)'+cls+'(//s|$)');
  //   return reg.test(el.className);
  // }
  //
  // function addClass(el.cls){
  //   if(!hasClass(el,cls)){
  //     el.className = el.className + " " + cls;
  //   }
  // }




    var Utils = {

    hasClass: function(ele, cls){
        return !!ele.className.match(new RegExp('\\b'+cls+'\\b'));
    },

    addClass:function(ele, cls){
      if(ele.length && ele.length > 0){
          for(var i=0; i<ele.length; i++){
              Utils.singleAddClass(ele[i], cls);
          }
      }else{
          Utils.singleAddClass(ele, cls);
      }
    },

    removeClass:function(ele, cls){
       if(ele.length && ele.length > 0){
          for(var i=0; i<ele.length; i++){
              Utils.singleRemoveClass(ele[i], cls);
          }
      }else{
          Utils.singleRemoveClass(ele, cls);
      }
    },

    singleAddClass: function(ele, cls){
        if(Utils.hasClass(ele,cls)) return;
        ele.className += ' ' + cls;
    },

    singleRemoveClass: function(ele, cls){
        ele.className = ele.className.replace(new RegExp('\\b'+cls+'\\b', 'g'), '');
    },

    indexOf: function(ele){
        var parent = ele.parentElement,
            siblings = parent.children;
        for(var i=0; i<siblings.length; i++){
            if(ele === siblings[i]) return i;
        }
        return -1;
    }
    };



    var tabCt = document.querySelector('.tabs');

    tabCt.addEventListener('click', function(e){
    var target = e.target,
       tabs = tabCt.children,
       index = Utils.indexOf(target),
       panels = document.querySelectorAll('.panel');

    if(index > -1){
       Utils.removeClass(tabs, 'active');
       Utils.addClass(target, 'active');
       Utils.removeClass(panels, 'active');
       Utils.addClass(panels[index], 'active');
    }
    });

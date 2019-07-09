(function(){
   function Index(option){
    this.menuList = option.menuList || [];
    this.dir = option.dirction || 'x';
    this.colNum = option.colNum || 2;
    this.parent = option.parent;
    this.fontColor = this.parent.find('a').css('color');
    this.len = this.menuList.length || 0;
    this.createDom();
    this.bindEvent();
   }
   

   
   Index.prototype.createDom = function(){
    var self = this;
    var content = $('<div class="dropCont" style="display:block;"></div>');
    var dropDownCon = $('<div class="dropDown"></div>');
    //生成结构

    this.menuList.forEach(function(ele){
        var menu = $('<div class="nav-menu"></div>');
        if(ele.title){
            var menuTitle = $('<div class="item menu-title"></div>').html(ele.title);
            menu.append(menuTitle).css('text-aligin','left');
        }
        //
        var iltemList = $('<div class="itemList"></div>');

        ele.items.forEach(function(ele2){
            var str = '<a href = "' + ele2.href + '">'+ele2.name+'</a>' 
      
        })
    })

    if(this.dir == 'x'){

    }  
   }
   Index.prototype.addss = function(){
       
}
    Index.prototype.bindEvent = function(){
        
    }
   $.fn.extend({
      dropList:function(option){
        option.parent = this;
        new Index(option);
        return this;
      } 
   })
})();
//添加结构createDom    添加css 鼠标移入移除bindEvent
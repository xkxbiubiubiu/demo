;(function(){
    //实现插件的功能
    var obj = {
        //初始化函数
        init :function(opation){
           this.parent = opation.parent;
           this.items = opation.items;
           this.rowNum = opation.rowNum || 5;
           this.nowItem = opation.nowItem || this.items[0].name || '';
           this.nowItemImg = opation.nowItemImg || '';
           this.creatDom();
           this.bindEvent()
        },
        creatDom:function(){

           var wrap = $('<div class="areaContent"></div>');
           var nowArea = $('<div class="nowArea"></div>');
           var itemList = $('<div class="itemList"></div>');
           if(this.nowItemImg){
               var img = new Image();
               img.src = this.nowItemImg;
               img.onload = function(){
                   $(img).prependTo(nowArea);
               }
           }
           $('<span class="item-name"></span>').html(this.nowItem).appendTo(nowArea)
          
           this.items.forEach(function(ele,index){
            var str =  '<a hred = "' + ele.href + '"> '+ ele.name +'</a>';
             $('<div class="item"></div>').append(str).appendTo(itemList)
                     
           });
           wrap.append(nowArea).append(itemList);
           this.parent.append(wrap);
           $('#location .itemList').css({
               'width': $('.item').innerWidth() * this.rowNum + 'px',
               'top':$(this.parent).height() - 2 +'px'
           })

        },
        bindEvent:function(){
            $('.itemList').on('click','.item',function(){
                $('.nowActive').removeClass('nowActive')
                $(this).addClass('nowActive')
                $('span.item-name').text($(this).text());
            })
        }
    
}
    

    $.fn.extend({
        areaList:function(opt){
            opt.parent = this;
            obj.init(opt);
        }
    })
})();
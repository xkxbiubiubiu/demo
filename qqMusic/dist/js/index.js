var root = window.player;
var dataList = 0;
var len ;
var audio = root.audioManager;
var control; 
var timer;
function bindTouch(){
    
}
function getData(url){
    $.ajax({
        type:'GET',
        url:url,
        success:function(data){
            len = data.length;
            control = new root.controlIndex(len);
            dataList = data;
            root.render(data[0])
            bindEvent();
            audio.getAudio(data[0].audio)
            root.pro.renderAllTime(dataList[0].duration)
        },
        error:function(){
            console.log('error')
        }
    })
}

function bindEvent(){
    $('body').on('play:change',function(e,index){
        console.log(dataList[index])
        root.pro.renderAllTime(dataList[index].duration)
        audio.getAudio(dataList[index].audio)
        root.render(dataList[index]);
        if(audio.status == 'play'){
            audio.play();
            rotated(0);
            root.pro.start();
        }
        
        $('.img-box').attr('data-deg',0)
        $('.img-box').css({
            'transform': 'rotateZ(0deg)',
            'transition':'none'
        })
    })
    $('.prev').on('click',function(){
        var i = control.prev()
        $('body').trigger('play:change',i)
    });
    $('.next').on('click',function(){
        var i = control.next()
        $('body').trigger('play:change',i)
    });
    $('.play').on('click',function(){
       if(audio.status == 'pause'){
           audio.play();
           root.pro.start();
           var deg = $('.img-box').attr('data-deg')
           rotated(deg);
       }else{
           audio.pause();
           clearInterval(timer)
           root.pro.stop();
       }
       $('.play').toggleClass('playing')
    })

}


function rotated(deg){
    clearInterval(timer)
    deg = +deg;
    timer = setInterval(function(){
        deg += 2;
        $('.img-box').attr('data-deg',deg)
        $('.img-box').css({
            'transform': 'rotateZ(' + deg +'deg)',
            'transition':'all 1s ease-out'
        })
    },200)
}


getData('../mock/data.json');

//信息 图片渲染到页面
//点击按钮
//音频的播放与暂停  切歌
//进度条运动  拖拽
//图片旋转
//列表切歌
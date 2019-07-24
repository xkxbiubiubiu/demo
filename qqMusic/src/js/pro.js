//进度条模块

(function($,root){
    console.log('111')
    //渲染总时间，更新播放过的时间，更新进度条，拖拽进度条，暂停渲染
    var $scope = $(document.body);
    var curDuration;
    var frameId;
    var lastPer = 0;
    var startTime;
    function renderAllTime(time){
        curDuration = time;
        time = formatTime(time);
        $scope.find('.all-time').html(time);
        console.log('111')
        
    };
    //时间格式转换
    function formatTime(time){
        time = Math.round(time)
        var m = Math.floor(time / 60);
        var s = time - m * 60;
        if(m < 10){
            m = '0' + m;
        }
        if(s < 10){
            s = '0' + s;
        }
        return m + ":" + s;
    }

    function start(){
        cancelAnimationFrame(frameId)
        startTime = new Date().getTime();
        function frame(){
            var curTime = new Date().getTime();
            var percent = lastPer + (curTime - startTime) / (curDuration * 1000)
            update(percent)
           frameId =  requestAnimationFrame(frame)
            
        }
        frame()
    };
    //暂停变化
    function stop(){
        cancelAnimationFrame(frameId)
        var stopTime = new Date().getTime();
        lastPer = lastPer + (stopTime - startTime) / (curDuration * 1000)

    }
    //更新时间
    function update(per){
        var time = per * curDuration;
        time = formatTime(time)
        $scope.find('.cur-time').html(time);
        var perX = (per - 1) * 100 + '%';
        $scope.find('.pro-top').css({
            transform:'translateX(' + perX + ')'
        })
    }




    //暴露方法
    root.pro = {
        renderAllTime:renderAllTime,
        start:start,
        updata:update,
        stop:stop
    }
     

})(window.Zepto,window.player || (window.player = {}))
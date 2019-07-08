
// var oTopDiv = document.getElementById('topDiv');
// var oBottomDiv = document.getElementById('bottom');
// oTopDiv.onclick = function () {
//     startMove(this,{width:400,height:400,left:200,opacity:50},function() {
//         startMove(oBottomDiv,{width:400,height:400,left:200,opacity:50})
//     })
// }
function getStyle(demo,attr) {
    if(window.getComputedStyle){
        return window.getComputedStyle(demo,null)[attr]
    }else{
        return dom.currentStyle[attr];
    }

}


var timer;
function startMove(dom,attrObj,callback) {
    clearInterval(dom.timer);
    var speed = null,iCur = null;
    dom.timer = setInterval(function() {
        var bStop = true;
        for(var attr in attrObj){
            if(attr == 'opacity') {
               iCur = parseFloat(getStyle(dom,attr)) * 100;
            }else{
                iCur = parseInt(getStyle(dom,attr));
            }
            speed = (attrObj[attr] - iCur)/7 ;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if(attr == 'opacity'){
                dom.style.opacity =( iCur + speed) /100;
            }else{
                dom.style[attr] = iCur + speed + 'px';
            }
            if(iCur != attrObj[attr]){
                bStop = false;
            }
        }
    if(bStop) {
        clearInterval(dom.timer);
        typeof callback == 'function' && callback();
    }
    },30)

}
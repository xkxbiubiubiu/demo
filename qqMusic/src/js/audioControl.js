(function($,root){
    
    function AudioManager(){
        //创建一个音频对象
        this.audio = new Audio();
        //audio默认状态
        this.status = 'pause';
    }

    AudioManager.prototype = {
        play:function(){
            this.audio.play();
            this.status = 'play';
        },
        pause:function(){
            this.audio.pause();
            this.status = 'pause';
        },
        getAudio:function(src){
            console.log(src)
            this.audio.src = src;
            this.audio.load();
        }
    }

    root.audioManager = new AudioManager();

})(window.Zepto,window.player || (window.player = {}))
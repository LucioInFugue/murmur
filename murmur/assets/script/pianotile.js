// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        murmurAudio: {
            default: null,
            type: cc.AudioClip
        },
        animId: {
            default: 0,
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //监听触摸开始事件
    	this.node.on(cc.Node.EventType.TOUCH_START,this.onTouchStart,this);
    },

    onTouchStart(t) {
        let anim = this.getComponent(cc.Animation);
        if (anim!=null) anim.play('fadeOut');
        if (this.murmurAudio != null) cc.audioEngine.playEffect(this.murmurAudio, false);
        let backgroundEffect = cc.find("Canvas/DrawPic");
        backgroundEffect.getComponent('GraphicAnim').AnimSpawn(this.animId);
    },

    start () {

    },

    onDestroy() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);

    },

    // update (dt) {},
});

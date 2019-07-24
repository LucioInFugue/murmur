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
        score: {
            default: 0,
            displayName: "Score (player)",
            tooltip: "The score of player",
        },
        BGMAudio: {
            default: [],
            type: cc.AudioClip,
        },
        hitTime: {
            default: 0,
        },
        bkgNode: {
            default: [],
            type: cc.Node,
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        if (this.BGMAudio != null) cc.audioEngine.playMusic(this.BGMAudio[0], true);
        this.node.on(cc.Node.EventType.TOUCH_START,this.onTouchStart,this);
    },

    onTouchStart(t) {
        this.hitTime++;
        if ((this.hitTime % 10) == 0){            
            let index = Math.floor((Math.random()*3));
            if (this.bkgNode.length>index) {
                this.bkgNode[index].getComponent('bkgAnim').playAnim();
            }
        }
    },

    start () {
        
    },

    onDestroy() {
        cc.audioEngine.stop(this.current);
    },

    // update (dt) {},
});

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
    BGMID: {
      default: 0
    }
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad () {
    this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this)
  },

  onTouchEnd (t) {
    console.log('ok')
    if (this.BGMID >= 0) {
      const canvasS = cc.find('Canvas').getComponent('Game')
      canvasS.current = cc.audioEngine.playMusic(canvasS.BGMAudio[this.BGMID], true)
    } else {
      const canvasS = cc.find('Canvas').getComponent('Game')
      cc.audioEngine.stop(canvasS.current)
    }
    const ui = cc.find('Canvas/MainUI')
    if (ui != null) ui.destroy()
  },

  start () {

  }

  // update (dt) {},
})

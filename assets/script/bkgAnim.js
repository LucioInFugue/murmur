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
    condition: {
      default: 0
    }
  },

  playAnim () {
    const anim = this.getComponent(cc.Animation)

    if (this.condition == 0) {
      this.condition = 1
      if (anim != null) {
        const animState = anim.play()
        animState.wrapMode = cc.WrapMode.Normal
      }
    } else {
      this.condition = 0
      if (anim != null) {
        const animState = anim.play()
        animState.wrapMode = cc.WrapMode.Reverse
      }
    }
  },

  // onLoad () {},

  start () {

  }

  // update (dt) {},
})

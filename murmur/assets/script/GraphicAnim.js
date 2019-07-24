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
        BoxPrefab: {
            default: [],
            type: cc.Prefab,
        },

        BoxBigPrefab: {
            default: [],
            type: cc.Prefab,
        },

        CirclePrefab: {
            default: [],
            type: cc.Prefab,
        },

        CircleBigPrefab: {
            default: [],
            type: cc.Prefab,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    circleRotation() {
        let num = Math.floor(Math.random() * 7) + 1;
        let angel = 2 * Math.PI / num; 
        let index = Math.floor(Math.random() * this.CirclePrefab.length);
        if (index == this.CirclePrefab.length) index -= 1;
        let xdelta = Math.random() * 100 - 50;
        let ydelta = Math.random() * 100 - 50;
        let angeldelta = Math.random() * Math.PI - Math.PI;
        for (let i=0; i<num; i++) {
            var newAnim = cc.instantiate(this.CirclePrefab[index]);      
            this.node.addChild(newAnim);
            let x = Math.cos(angel * i + angeldelta) * 270 + xdelta;
            let y = Math.sin(angel * i + angeldelta) * 270 + ydelta;
            newAnim.setPosition(cc.v2(x, y));
        }
    },

    boxRotation() {
        let num = Math.floor(Math.random() * 7) + 1;
        let angel = 2 * Math.PI / num; 
        let index = Math.floor(Math.random() * this.BoxPrefab.length);
        if (index == this.BoxPrefab.length) index -= 1;
        let xdelta = Math.random() * 100 - 50;
        let ydelta = Math.random() * 100 - 50;
        let angeldelta = Math.random() * Math.PI - Math.PI;
        for (let i=0; i<num; i++) {
            var newAnim = cc.instantiate(this.BoxPrefab[index]);      
            this.node.addChild(newAnim);
            let x = Math.cos(angel * i + angeldelta) * 270 + xdelta;
            let y = Math.sin(angel * i + angeldelta) * 270 + ydelta;
            newAnim.setPosition(cc.v2(x, y));
        }
    },

    circleSpawn() {
        let num = Math.floor(Math.random() * 9);
        let index = Math.floor(Math.random() * this.CirclePrefab.length);
        if (index == this.CirclePrefab.length) index -= 1;
        for (let i=0; i<num; i++) {
            var newAnim = cc.instantiate(this.CirclePrefab[index]);      
            this.node.addChild(newAnim);
            let x = Math.random() * 600 - 300;
            let y = Math.random() * 1200 - 600;
            newAnim.setPosition(cc.v2(x, y));
        }
    },

    circleBig() {
        // let delay1 = cc.delayTime(0.5);
        // let spawn = cc.callFunc(function() {
        //     let index = Math.floor(Math.random() * this.CircleBigPrefab.length);
        //     if (index == this.CircleBigPrefab.length && index > 0) index -= 1;
        //     var newAnim = cc.instantiate(this.CircleBigPrefab[index]);      
        //     this.node.addChild(newAnim);
        //     let x = Math.random() * 200 - 100;
        //     let y = Math.random() * 400 - 200;
        //     newAnim.setPosition(cc.v2(x, y));
        //     let angeldelta = Math.random() * 30 - 15;
        //     newAnim.setRotation(angeldelta);
        // });
        let index = Math.floor(Math.random() * this.CircleBigPrefab.length);
        if (index == this.CircleBigPrefab.length && index > 0) index -= 1;
        var newAnim = cc.instantiate(this.CircleBigPrefab[index]);      
        this.node.addChild(newAnim);
        let x = Math.random() * 200 - 100;
        let y = Math.random() * 400 - 200;
        newAnim.setPosition(cc.v2(x, y));
        let angeldelta = Math.random() * 30 - 15;
        newAnim.setRotation(angeldelta);    
    },

    boxSpawn() {
        let num = Math.floor(Math.random() * 9);
        let index = Math.floor(Math.random() * this.BoxPrefab.length);
        if (index == this.BoxPrefab.length && index > 0) index -= 1;
        for (let i=0; i<num; i++) {
            var newAnim = cc.instantiate(this.BoxPrefab[index]);      
            this.node.addChild(newAnim);
            let x = Math.random() * 600 - 300;
            let y = Math.random() * 1200 - 600;
            newAnim.setPosition(cc.v2(x, y));
        }
    },

    boxBig() {
        let num = Math.floor(Math.random() * 2) + 1;
        let index = Math.floor(Math.random() * this.BoxBigPrefab.length);
        if (index == this.BoxBigPrefab.length && index > 0) index -= 1;
        for (let i=0; i<num; i++) {
            var newAnim = cc.instantiate(this.BoxBigPrefab[index]);      
            this.node.addChild(newAnim);
            let x = Math.random() * 200 - 100;
            let y = Math.random() * 400 - 200;
            newAnim.setPosition(cc.v2(x, y));
            let angeldelta = Math.random() * 30 - 15;
            newAnim.setRotation(angeldelta);
        }
    },

    AnimSpawn(x) {
        switch (x) {
            case 0:
                this.circleRotation();
                break;
            case 1:
                this.circleSpawn();
                break;
            case 2:
                this.boxRotation();
                break;
            case 3:
                this.boxSpawn();
                break;
            case 4:
                this.circleBig();
                break;
            case 5:
                this.boxBig();
            default:
                break;
        }
    },
    

    update (dt) {
        
    },
});

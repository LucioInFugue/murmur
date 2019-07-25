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
        LinePrefab: {
            default: [],
            type: cc.Prefab,
        },

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

        CircleBigSPrefab: {
            default: [],
            type: cc.Prefab,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    lineSpawn() {
        let index = Math.floor(Math.random() * this.LinePrefab.length);
        if (index == this.LinePrefab.length && index > 0) index -= 1;
        var newAnim = cc.instantiate(this.LinePrefab[index]);      
        this.node.addChild(newAnim);
        let x = Math.random() * 200 - 100;
        let y = Math.random() * 200 - 100;
        newAnim.setPosition(cc.v2(x, y));
        let angeldelta = Math.random() * 30 - 15;
        newAnim.setRotation(angeldelta);    
    },

    circleRotation() {
        let num = Math.floor(Math.random() * 5) + 1;
        let angel = 2 * Math.PI / num; 
        let index = Math.floor(Math.random() * this.CirclePrefab.length);
        if (index == this.CirclePrefab.length) index -= 1;
        let xdelta = Math.random() * 200 - 100;
        let ydelta = Math.random() * 300 - 150;
        let r = Math.random() * 270 + 50;
        let angeldelta = Math.random() * Math.PI - Math.PI;
        for (let i=0; i<num; i++) {
            var newAnim = cc.instantiate(this.CirclePrefab[index]);      
            this.node.addChild(newAnim);
            let x = Math.cos(angel * i + angeldelta) * r + xdelta;
            let y = Math.sin(angel * i + angeldelta) * r + ydelta;
            newAnim.setPosition(cc.v2(x, y));
        }
    },

    boxRotation() {
        let num = Math.floor(Math.random() * 7) + 1;
        let angel = 2 * Math.PI / num; 
        let index = Math.floor(Math.random() * this.BoxPrefab.length);
        if (index == this.BoxPrefab.length) index -= 1;
        let xdelta = Math.random() * 200 - 100;
        let ydelta = Math.random() * 300 - 150;
        let r = Math.random() * 270 + 50;
        let angeldelta = Math.random() * Math.PI - Math.PI;
        for (let i=0; i<num; i++) {
            var newAnim = cc.instantiate(this.BoxPrefab[index]);      
            this.node.addChild(newAnim);
            let x = Math.cos(angel * i + angeldelta) * r + xdelta;
            let y = Math.sin(angel * i + angeldelta) * r + ydelta;
            newAnim.setPosition(cc.v2(x, y));
        }
    },

    circleSpawn() {
        let num = Math.floor(Math.random() * 5);
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
        let num = Math.floor(Math.random() * 5);
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
        let num = Math.floor(Math.random() * 4) + 1;
        let index = Math.floor(Math.random() * this.BoxBigPrefab.length);
        let y = Math.random() * 400 - 200;
        let xdelta = 600 / num;
        if (index == this.BoxBigPrefab.length && index > 0) index -= 1;
        for (let i=0; i<=num; i++) {
            var newAnim = cc.instantiate(this.BoxBigPrefab[index]);      
            this.node.addChild(newAnim);
            let x = xdelta * i - 300;
            
            newAnim.setPosition(cc.v2(x, y));
        }
    },

    circleBigSpawn() {
        let index = Math.floor(Math.random() * this.CircleBigSPrefab.length);
        if (index == this.CircleBigSPrefab.length && index > 0) index -= 1;
        var newAnim = cc.instantiate(this.CircleBigSPrefab[index]);      
        this.node.addChild(newAnim);
        let x = Math.random() * 50 - 25;
        let y = Math.random() * 100 - 50;
        newAnim.setPosition(cc.v2(x, y));
        let angeldelta = Math.random() * 30 - 15;
        let ds = Math.random() * 0.3 + 1;        
        newAnim.setRotation(angeldelta);    
        newAnim.setScale(ds, ds);
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
                break;
            case 6:
                this.lineSpawn();
                break;
            case 7:
                this.circleBigSpawn();
                break;
            default:
                break;
        }
    },
    

    update (dt) {
        
    },
});

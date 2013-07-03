//方向指定
var DIR_LEFT  = 0;
var DIR_RIGHT = 1;
var DIR_UP    = 2;
var DIR_DOWN  = 3;

enchant();
window.onload = function() {
    //ゲームオブジェクトの生成
    var game = new Game(320, 320);
    game.fps = 16;
    
    //画像の読み込み
    game.preload('http://enchant.js.com/assets/images/chara0.gif',
        'http://enchant.js.com/assets/images/map0.gif');
    
    //ロード完了時に呼ばれる
    game.onload = function() {
        //背景の生成
        var bg = new Sprite(320, 320);
        var maptip = game.assets['http://enchantjs.com/assets/images/map0.gif'];
        var image = new Surface(320, 320);
        for (var j = 0; j < 320; j +=16) {
            for (var i = 0; i < 320; i += 16) {
                image.draw(maptip, 0, 0, 16, 16, i, j, 16, 16);
            }
        }
        bg.image = image;
        game.rootScene.addChild(bg);
        
        //キャラクターの生成
        
                           
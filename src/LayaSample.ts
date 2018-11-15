import WebGL = Laya.WebGL;
// 程序入口
class GameMain{
    constructor()
    {
        Laya.init(600,400, WebGL);
    }
    static wallet:com.battlecry.idle_m.data_proto.WalletModel;
}
new GameMain();
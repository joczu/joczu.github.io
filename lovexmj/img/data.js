var data = [];
var dataStr = '1、一把伞一场音乐会<br>\
<br>\
·七月份微风不凉。<br>\
·山间挂着赤红的晚霞。<br>\
·绿地上跳跃的雨滴嫩绿的很鲜明。<br>\
·舞台上歌唱的是最后的青春。<br>\
·雨伞里面是心动的声音。<br>\
<br>\
<br>\
2、嫩绿的很鲜明<br>\
<br>\
·青春是有话就不好好说，偏要悄悄说。<br>\
<br>\
<br>\
3、执子之手<br>\
<br>\
·偏是青春的末尾。<br>\
·便去匆匆走过散落在繁星里的路。<br>\
·静悄悄的走。<br>\
·星空下只有我们。<br>\
·还有虫叫蝉鸣。<br>\
<br>\
<br>\
4、与子偕老<br>\
<br>\
·手牵着你走下去。<br>\
·忘记时间。<br>\
·忘记路途。<br>\
·忘记其他。<br>\
<br>\
<br>\
5、雁栖湖里的林荫小道<br>\
<br>\
·跟在你身后。<br>\
·随波逐流。<br>\
<br>\
<br>\
6、长裙飘飘<br>\
<br>\
·你比那个灯光还耀眼呢。<br>\
<br>\
<br>\
7、十公里的雨夜<br>\
<br>\
·最后的时光里雨有点多。<br>\
·但是怎么能阻挡我们的脚步。<br>\
·十公里没有方向的路途。<br>\
·一路上只有我们两个人。<br>\
·还有闭餐的KFC。<br>\
<br>\
<br>\
8、独家写真1<br>\
<br>\
·以前觉得天津很远。<br>\
·其实也才两个小时。<br>\
<br>\
<br>\
9、独家写真2<br>\
<br>\
·给我你的手。<br>\
<br>\
<br>\
10、小向代言的奶茶<br>\
<br>\
·每个女孩，心中都有一杯奶茶。<br>\
·SM的COCO要给代言费了。<br>\
<br>\
<br>\
11、小向代言的酸奶<br>\
<br>\
·这个酸奶味道不错。<br>\
·是我们向梦洁挑的。<br>\
<br>\
<br>\
12、粉色帽子<br>\
<br>\
·这个帽子简直和向梦洁绝配。<br>\
·秒回十二岁。<br>\
<br>\
<br>\
13、小兔子少女<br>\
<br>\
·这是哪个二次元少女呀。<br>\
<br>\
<br>\
14、这个冬天不太冷<br>\
<br>\
·天津的冬天也可以绿的鲜明。<br>\
<br>\
<br>\
15、SM的哪吒<br>\
<br>\
·和向梦洁看的第一场电影。<br>\
·第一次应该是蜘蛛侠的。<br>\
<br>\
<br>\
16、回眸一笑<br>\
<br>\
·时尚街拍。<br>\
<br>\
<br>\
17、宝贝生日快乐<br>\
<br>\
·表演失败的棒棒糖。<br>\
·怪衣服太瘦。<br>\
·点名表扬大悦城的牛蛙。<br>\
<br>\
<br>\
18、做实验的小向同学<br>\
<br>\
·我学会了插枪头，<br>\
·和洗试管。<br>\
<br>\
<br>\
19、为你戴帽<br>\
<br>\
·巧玉志友见证。<br>\
<br>\
<br>\
20、超级认真的小向<br>\
<br>\
·坐在旁边看。<br>\
<br>\
<br>\
21、爱做代言的小向<br>\
<br>\
·桂发祥打钱吧。<br>\
<br>\
<br>\
22、八目相对<br>\
<br>\
·巧玉志友见证*2。<br>\
<br>\
<br>\
23、表情包小向<br>\
<br>\
·可爱。<br>\
<br>\
<br>\
24、调皮的小向<br>\
<br>\
·旁边有个一直自拍的大姐。<br>\
<br>\
<br>\
25、爱思考的小向<br>\
<br>\
·你最好看。<br>\
·不用思考了。<br>\
<br>\
<br>\
26、不知道摆什么姿势的小向<br>\
<br>\
·欢迎来到Tiantan。<br>\
<br>\
<br>\
27、小向与船<br>\
<br>\
·阳光正好，你最美。<br>\
<br>\
<br>\
28、头发飘逸的小向<br>\
<br>\
·海风还蛮大的。<br>\
<br>\
<br>\
29、落日小向<br>\
<br>\
·你在等日落。<br>\
·我在等你。<br>\
<br>\
<br>\
30、小向等远方<br>\
<br>\
·海的尽头。<br>\
<br>\
<br>\
31、老龙头的风<br>\
<br>\
·凌乱而不失美丽。<br>\
<br>\
<br>\
32、比山还高的小向<br>\
<br>\
·一米八是盖不住的。<br>\
<br>\
<br>\
33、巨人小向<br>\
<br>\
·请夸夸摄影师。<br>\
<br>\
<br>\
34、目光如炬<br>\
<br>\
·好看。<br>\
'
;
var d=dataStr.split('<br><br><br>');
for (var i=0;i<d.length;i++){
    var c=d[i].split('<br><br>');
    console.log(c)
    data.push({
        img:c[0].replace('、',' ')+'.jpg',
        caption:c[0].split('、')[1],
        desc:c[1]
    });
    // console.log(data);
}

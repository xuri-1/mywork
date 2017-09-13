SET NAMES 'utf8';
DROP DATABASE IF EXISTS kaifanla;
CREATE DATABASE kaifanla CHARSET=UTF8;
USE kaifanla;
CREATE TABLE kf_dish(
    did INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(64),
    price FLOAT(6,2),
    img_sm VARCHAR(64),
    img_lg VARCHAR(64),
    detail VARCHAR(2048),
    material VARCHAR(2048)
);
INSERT INTO kf_dish(did,img_sm,img_lg,name,price,material,detail) VALUES
(   null,
    'p0281.jpg',
    'p0281-l.jpg',
    '【酸甜开胃虾】',
    36,
    '明虾、番茄酱、白糖、白醋、葱、姜、淀粉',
    '话说有两个地方是我挪不动脚的，一个是图书馆，另外一个便是菜市场！ 每周有七天，留给自己的时间却很少。既要带儿子去上早教课，又要陪女儿上兴趣班，还要留一个半天带孩子们泡图书馆！ 有时真的觉得妈妈是这个世界上最伟大的职业，累，并快乐着！ 这个时节正是各类果蔬大量上市的时候，拖着买菜专用的小拉车，徜徉在人声鼎沸的菜市场，从海鲜区、肉类区再慢慢逛到我最喜爱的果蔬区，感受季节的变换带给人们餐桌上的喜悦………… '
),
(   null,
    'p2679.jpg',
    'p2679-l.jpg',
    '【桂香紫薯山药卷】',
    16.5,
    '切片吐司、紫薯、铁棍山药、糖桂花、炼乳',
    '今天用紫薯，山药和吐司来做一款漂亮又健康的点心，做为早餐或者夜宵都是很好的选择哦！ 做法其实很简单，只要将各种食材层叠卷起来就行。提前煮好山药和紫薯，那么只要几分钟就能完成。 但就是这么一点小小的改变，就能立刻让原本平淡无奇的吐司变身抢手货哟~ 生活总是这样，时不时的有一些小惊喜，才会更加精彩不是嘛~'
),
(   null,
    'p8489.jpg',
    'p8489-l.jpg',
    '【小米椒爆炒小公鸡】',
    32,
    '三黄鸡、杭椒、干红椒、新鲜小米椒、麻椒、八角、香叶、葱、姜、生抽',
    '算起来有一个星期没有更新了，忙着赶紧完成手头的工作，和孩子一起开启度假模式。我总是毫不避讳地称自己为吃货，对于我来说，度假中缺少美食是万万不可的。想要找一个风景与美食兼顾的度假地点可不太容易，工作之余忙着查路线，查攻略，总算是定好了目的地。其实我这个嗜辣族最想去的还是成都重庆一带，考虑到季节的原因，还是留到冬天再前往吧。今天上一道火辣辣的小米椒爆炒小公鸡，虽在家中，也是十足的过了把食辣的瘾，不擅吃辣的伙伴们做这道菜的时候可要记得减少辣椒的用量哦。'
),
(   null,
    'p7818.jpg',
    'p7818-l.jpg',
    '【口袋饼】',
    6.5,
    '面粉、黄瓜、香肠、热水、土豆、盐、醋、生抽、油。',
    '热水和面！面团擀成薄薄的面片之后切成长条，之后中间抹油！折叠之后用手把两边按扁，使其黏到一起！如图！然后用刀背划出花边！平底锅抹油小火煎制口袋饼，两边烙上金黄色即可！土豆切丝！黄瓜和香肠切条状！炒土豆丝，放入盐，醋和生抽炒均匀就可以了，然后放入烙好的口袋饼里，放入黄瓜和香肠即可！'
),
(   null,
    'p9138.jpg',
    'p9138-l.jpg',
    '【橄榄油版酸奶蛋糕】',
    32,
    '鸡蛋、玉米淀粉、绵白糖、白醋、低筋粉、橄榄油、酸奶。',
    '酸奶蛋糕，这是第二次做。自前一次做了带去单位分享后，吃到的同事都说好吃，连不爱甜食的自己也觉得细腻可口。特别是入冰箱后取出品味风味尤佳。喜欢那一丝丝的凉意一丝丝的甜味，入口的感觉特别绵软，很适合夏季食用的。这次还是没有用黄油，因为等融化嫌麻烦，继续用了橄榄油。不同的是这次用了水浴法烘焙的。我用的模具是八寸的活底蛋糕模具，成品有一点收腰，但口味还挺成功的。只是早上拍照心急得很，因为LG上班比较早。难得他如此喜欢吃了最大的两块。'
),
(   null,
    'p4788.jpg',
    'p4788-l.jpg',
    '【番茄肉酱意大利面】',
    25,
    '意大利面、番茄、洋葱、蒜泥、肉糜、黑胡椒粉、番茄酱、盐',
    '听说，台风天，电影和意大利面更配喔汤锅倒水烧开，放一勺盐一勺橄榄油，加入意面，煮13分钟。（意面种类不同，煮的时间也不一样，5-15分钟不等）。煮好的面控水，拌入一勺橄榄油，以防面粘连。平底锅倒油预热，蒜泥炒香，下肉糜翻炒至变色，倒入洋葱丁、番茄丁，翻炒一分钟，放番茄酱、盐、黑胡椒，继续翻炒。肉酱里加热水大火烧开，倒入意面转中火，待意面吸饱汤汁后，关火盛盘。'
),
(   null,
    'p7933.jpg',
    'p7933-l.jpg',
    '【放心油条】',
    1.5,
    '面粉、安琪油条膨松剂、温水、植物油。',
    '自己炸的油条不含明矾，也不用担心地沟油，吃的比较放心。准备中筋粉，油条膨松剂和植物油。面粉和膨松剂混合均匀，加入50-60度温水搅拌。揉成光滑的面团，盖上保鲜膜醒30分钟左右。将醒发好的面团切成长形小剂子，两个叠在一起用筷子按压一下。用手捏住两头抻拉一下，放入7成热（约180-200度）的油锅中炸至金黄即可。'
),
(   null,
    'p6611.jpg',
    'p6611-l.jpg',
    '【蒸饺】',
    12,
    '鸡蛋、豆角酱肉馅、西红柿鸡蛋馅、猪生抽、生抽、海鲜酱油、糖、盐',
    '昨天突然好想吃蒸饺，但是貌似没听过北京哪家蒸饺好吃，于是决定自己做啦，重要的事最近爱上做饭，能与大家分享美食乐趣也让我又燃起了烹饪的热情。想必最好吃的东西还是自己家的家常便饭！面粉300克，开水100ml左右（这个量可以在和面的时候自己调节下，蒸饺一定是烫面的）鸡蛋一个，我是用面包机和的面团，准备其他馅时一直在醒面（半小时内）。豆角酱肉馅：做法见我的豆角酱肉卤菜谱'
);
##SELECT * FROM kf_dish;
/*用户表*/
CREATE TABLE kf_users(
    userid INT PRIMARY KEY AUTO_INCREMENT, /*购物车编号*/
    uname VARCHAR(20),                     /*用户名*/
    pwd VARCHAR(20),                       /*密码*/
    phone VARCHAR(20)                      /*电话*/
);
INSERT INTO kf_users VALUES
(NULL,'mary','11111','13111112345'),
(NULL,'jerry','22222','13819196547'),
(NULL,'小明','345678','13819196547'),
(NULL,'john','33333','13819196547');

/*订单表*/
CREATE TABLE kf_order(
    oid INT PRIMARY KEY AUTO_INCREMENT,     /*订单ID*/
    userid INT,                             /*用户*/
    phone VARCHAR(16),                      /*联系电话*/
    user_name VARCHAR(16),                  /*收货方用户名*/
    sex INT,                                /*1:男  2:女*/
    order_time LONG,                        /*下单时间*/
    addr VARCHAR(256),                      /*订单地址*/
    totalprice FLOAT(6,2),                /*订单总价*/
    did  INT
);
INSERT INTO kf_order VALUES
(NULL,1,'13501234567','大旭',1,1445154859209,'大钟寺中鼎B座',20.5,2),
(NULL,1,'13501257543','琳妹妹',2,1445154997543,'大钟寺中鼎B座',12.5,3),
(NULL,2,'13207654321','东东',1,1445254997612,'大钟寺中鼎B座',55,1),
(NULL,2,'13899999999','文兄',1,1445354959209,'大钟寺中鼎B座',35,5),
(NULL,3,'13683675299','梅姐',2,1445355889209,'大钟寺中鼎B座',45,3);

/**购物车表**/
CREATE TABLE kf_cart(
    ctid INT PRIMARY KEY AUTO_INCREMENT, /*购物车编号*/
    userid INT,                          /*用户编号：假定有用户id为 1 和 3 的两个用户有数据*/
    did INT,                             /*产品编号*/
    dishCount INT                      /*数量*/
);
INSERT INTO kf_cart VALUES (1,1,1,1),
(2,1,2,4),
(3,1,5,2),
(4,3,2,10),
(5,3,6,1);
##SELECT * FROM kf_order;

/**订单详情表**/
CREATE TABLE kf_orderdetails(
    oid INT ,                            /*订单编号*/
    did INT,                             /*产品id*/
    dishCount INT,                     /*购买数量*/
    price FLOAT(8,2)                     /*产品单价：需要记载，因为产品价格可能波动*/
);
INSERT INTO kf_orderdetails VALUES (1,1,2,5),
(1,2,1,10.5),
(2,3,1,12.5),
(3,1,3,5),
(3,2,4,10),
(4,4,7,5),
(5,5,5,4),
(5,6,2,12.5);

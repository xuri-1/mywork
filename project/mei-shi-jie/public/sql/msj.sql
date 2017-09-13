SET NAMES UTF8;
DROP DATABASE IF EXISTS msj;
CREATE DATABASE msj CHARSET=UTF8;
USE msj;

CREATE TABLE m_user(
  uid   INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(25) NOT NULL DEFAULT '',
  upwd  VARCHAR(32) NOT NULL DEFAULT ''
);
INSERT INTO m_user VALUES(null,'小马','123456');

CREATE TABLE w_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(20) NOT NULL DEFAULT'',
  upwd VARCHAR(32)NOT NULL DEFAULT''
);

CREATE TABLE img_p1(
	uid INT PRIMARY KEY AUTO_INCREMENT,
	Time VARCHAR(20),
	Ianme VARCHAR(32),
	brief VARCHAR(100),
	price DOUBLE(20,2),
	url VARCHAR(50)
);
INSERT INTO img_p1 VALUES(NULL,'早餐','蒸饺','原汁原味，容易复制的美味蒸饺',10,'14.jpg');
INSERT INTO img_p1 VALUES(NULL,'早餐','红豆粥','食材丰富，满满的营养',8,'13.jpg');
INSERT INTO img_p1 VALUES(NULL,'早餐','煎饼','天涯海角还是最惦记回家的感觉',7,'1.jpg');

INSERT INTO img_p1 VALUES(NULL,'午餐','回锅肉','瘦肉的华丽变身',25,'8.jpg');
INSERT INTO img_p1 VALUES(NULL,'午餐','丝瓜虾仁','夏天放心吃',22,'10.jpg');
INSERT INTO img_p1 VALUES(NULL,'午餐','嫩豆腐','开心必备凉菜',18,'6.jpg');

INSERT INTO img_p1 VALUES(NULL,'下午茶','酸梅奶杯','自制酸奶',35,'12.jpg');
INSERT INTO img_p1 VALUES(NULL,'下午茶','鸡蛋布丁','都将口味布丁',30,'9.jpg');
INSERT INTO img_p1 VALUES(NULL,'下午茶','奶油华夫饼','清新小甜品',29,'5.jpg');

INSERT INTO img_p1 VALUES(NULL,'晚餐','蒜苔肉丝','开胃下饭',23,'7.jpg');
INSERT INTO img_p1 VALUES(NULL,'晚餐','炸酱面','营养丰富',17,'4.jpg');
INSERT INTO img_p1 VALUES(NULL,'晚餐','葱油藕笋','开胃',22,'9.jpg');

INSERT INTO img_p1 VALUES(NULL,'夜宵','孜然鸡骨叉','补充体力',30,'2.jpg');
INSERT INTO img_p1 VALUES(NULL,'夜宵','辣炒蛤蜊','营养丰富',28,'3.jpg');
INSERT INTO img_p1 VALUES(NULL,'夜宵','蔬菜烤肉','补充能量',19,'11.jpg');

CREATE TABLE img_p2(
	uid INT PRIMARY KEY AUTO_INCREMENT,
	content VARCHAR(32),
	brief VARCHAR(100),
	url VARCHAR(50)
);
INSERT INTO img_p2 VALUES(NULL,'苏泊尔《我是大厨》','总决赛现场回顾','18.jpg');
INSERT INTO img_p2 VALUES(NULL,'鲜香滋味搞定萌娃','教宝宝如何爱上吃饭','9.jpg');
INSERT INTO img_p2 VALUES(NULL,'吃面姿势不对','六大健康技巧','14.jpg');
INSERT INTO img_p2 VALUES(NULL,'记吃鸡腿巧去骨','吃肉不吐骨头猜痛快','13.jpg');
INSERT INTO img_p2 VALUES(NULL,'吃年糕，年年高','春节吃年糕这样做最好','8.jpg');
INSERT INTO img_p2 VALUES(NULL,'美食达人','更多好福利如期而至','1.jpg');

INSERT INTO img_p2 VALUES(NULL,'一年四季完美沙拉公式','甩掉肉肉等春天','3.jpg');
INSERT INTO img_p2 VALUES(NULL,'如何避免菜刀切到手','适合厨房的神器','6.jpg');
INSERT INTO img_p2 VALUES(NULL,'如何做出完美溏心蛋','一颗蛋的逆袭','5.jp');
INSERT INTO img_p2 VALUES(NULL,'千万种滋味只会煮着吃','技能爆表','12.jpg');
INSERT INTO img_p2 VALUES(NULL,'西餐盘里的香草和香料','只有他们够法国味','16.jpg');
INSERT INTO img_p2 VALUES(NULL,'味觉盛宴，无辣不欢','寒冷冬季六道火辣美食','17.jpg');

INSERT INTO img_p2 VALUES(NULL,'如何做好一顿饺子','冬至饺子是这样做全家都抢着吃','2.jpg');
INSERT INTO img_p2 VALUES(NULL,'猪肉是这么做','鼻子都香掉','11.jpg');
INSERT INTO img_p2 VALUES(NULL,'多喝水直男拯救大法','知道你的坚强和脆弱','15.jpg');
INSERT INTO img_p2 VALUES(NULL,'原来你是这样的一直鸡','平凡小鸡却有着万千滋味','4.jpg');
INSERT INTO img_p2 VALUES(NULL,'一学就会的糖醋汁','拯救小白的配方大揭秘','13.jpg');
INSERT INTO img_p2 VALUES(NULL,'品鱼滋味，悟鲜之道','一次成功六种鱼料理','10.jpg');
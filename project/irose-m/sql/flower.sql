SET NAMES UTF8;
DROP DATABASE IF EXISTS flower;
CREATE DATABASE flower CHARSET=UTF8;
USE flower;

/**用户表**/
CREATE TABLE user(
    uid INT PRIMARY KEY AUTO_INCREMENT, /*用户编号*/
    uname VARCHAR(32),                  /*用户名*/
    phone VARCHAR(32),                  /*手机号*/
    upwd VARCHAR(32)                   /*密码*/
);
INSERT INTO user VALUES
( 1, 'admin', '13501234567', '123456'),
( 2, 'test', '13666666666', '123456');


/**鲜花种类表**/
CREATE TABLE fType(
    fTypeId INT PRIMARY KEY AUTO_INCREMENT, /*种类编号*/
    tTypeName VARCHAR(32)                  /*鲜花名称*/
);
INSERT INTO fType VALUES
(1,'玫瑰'),
(2,'百合'),
(3,'康乃馨'),
(4,'永生花'),
(5,'郁金香');

/**商品用途表**/
CREATE TABLE purpose(
    pid INT PRIMARY KEY AUTO_INCREMENT, /*用途编号*/
    pname VARCHAR(32)                  /*用途名称*/
);
INSERT INTO purpose VALUES
(1,'生日鲜花'),
(2,'爱情鲜花'),
(3,'祝福鲜花');

/**商品对象表**/
CREATE TABLE object(
    oid INT PRIMARY KEY AUTO_INCREMENT, /*对象编号*/
    oname VARCHAR(32)                  /*对象名称*/
);
INSERT INTO object VALUES
(1,'送女友'),
(2,'送朋友'),
(3,'送母亲');

/**颜色表**/
CREATE TABLE colors(
    cid INT PRIMARY KEY AUTO_INCREMENT, /*颜色编号*/
    cname VARCHAR(32)                  /*颜色名称*/
);
INSERT INTO colors VALUES
(1,'红'),
(2,'白'),
(3,'粉'),
(4,'黄'),
(5,'香槟');

/**商品详情表**/
CREATE TABLE flower(
    fId INT PRIMARY KEY AUTO_INCREMENT, /*商品编号*/
    title VARCHAR(32),          /*商品title*/
    fTypeId INT,                 /*主材、花的种类ID*/
    subMt VARCHAR(32),          /*配材*/
    cid INT,                     /*颜色*/
    number INT,                  /*数量*/
    pid INT,                     /*用途*/
    oid INT,                     /*对象*/
    price FLOAT(10,2),           /*市场价格*/
    salePrice FLOAT(10,2),       /*优惠价格*/
    pubTime BIGINT,               /*发布时间*/
    details VARCHAR(2048)        /*详情*/
);
INSERT INTO flower VALUES
(1,'01情定今生',1,'白色满天星','1','9','1','3','99','89','1491034364980','<div class="list_img1"><img src="images/product/product_details_01.png" alt=""/></div><div class="list_img2"><img src="images/product/product_details_02.png" alt=""/></div><div class="list_img1"><img src="images/product/product_details_03.png" alt=""/></div><div class="list_img1"><img src="images/product/product_details_04.png" alt=""/></div>'),
(2,'02情定今生',2,'白色满天星','2','11','2','2','120','99','1491120786383','<div class="list_img1"><img src="images/product/product_details_01.png" alt=""/></div><div class="list_img2"><img src="images/product/product_details_02.png" alt=""/></div><div class="list_img1"><img src="images/product/product_details_03.png" alt=""/></div><div class="list_img1"><img src="images/product/product_details_04.png" alt=""/></div>'),
(3,'03情定今生',3,'白色满天星','3','12','3','1','236','210','1491207199751','<div class="list_img1"><img src="images/product/product_details_01.png" alt=""/></div><div class="list_img2"><img src="images/product/product_details_02.png" alt=""/></div><div class="list_img1"><img src="images/product/product_details_03.png" alt=""/></div><div class="list_img1"><img src="images/product/product_details_04.png" alt=""/></div>'),
(4,'04情定今生',4,'白色满天星','4','18','1','3','299','288','1491293616887','<div class="list_img1"><img src="images/product/product_details_01.png" alt=""/></div><div class="list_img2"><img src="images/product/product_details_02.png" alt=""/></div><div class="list_img1"><img src="images/product/product_details_03.png" alt=""/></div><div class="list_img1"><img src="images/product/product_details_04.png" alt=""/></div>'),
(5,'05情定今生',5,'白色满天星','5','19','2','2','366','333','1491380029200','<div class="list_img1"><img src="images/product/product_details_01.png" alt=""/></div><div class="list_img2"><img src="images/product/product_details_02.png" alt=""/></div><div class="list_img1"><img src="images/product/product_details_03.png" alt=""/></div><div class="list_img1"><img src="images/product/product_details_04.png" alt=""/></div>'),
(6,'06情定今生',1,'白色满天星','5','21','3','1','399','368','1491466442348','<div class="list_img1"><img src="images/product/product_details_01.png" alt=""/></div><div class="list_img2"><img src="images/product/product_details_02.png" alt=""/></div><div class="list_img1"><img src="images/product/product_details_03.png" alt=""/></div><div class="list_img1"><img src="images/product/product_details_04.png" alt=""/></div>'),
(7,'07情定今生',2,'白色满天星','4','24','1','3','450','420','1491552852641','<div class="list_img1"><img src="images/product/product_details_01.png" alt=""/></div><div class="list_img2"><img src="images/product/product_details_02.png" alt=""/></div><div class="list_img1"><img src="images/product/product_details_03.png" alt=""/></div><div class="list_img1"><img src="images/product/product_details_04.png" alt=""/></div>'),
(8,'08情定今生',3,'白色满天星','3','29','2','2','488','466','1491639263813','<div class="list_img1"><img src="images/product/product_details_01.png" alt=""/></div><div class="list_img2"><img src="images/product/product_details_02.png" alt=""/></div><div class="list_img1"><img src="images/product/product_details_03.png" alt=""/></div><div class="list_img1"><img src="images/product/product_details_04.png" alt=""/></div>'),
(9,'09情定今生',4,'白色满天星','2','33','3','1','520','499','1491725674904','<div class="list_img1"><img src="images/product/product_details_01.png" alt=""/></div><div class="list_img2"><img src="images/product/product_details_02.png" alt=""/></div><div class="list_img1"><img src="images/product/product_details_03.png" alt=""/></div><div class="list_img1"><img src="images/product/product_details_04.png" alt=""/></div>'),
(10,'10情定今生',5,'白色满天星','1','50','1','3','588','568','1491812086229','<div class="list_img1"><img src="images/product/product_details_01.png" alt=""/></div><div class="list_img2"><img src="images/product/product_details_02.png" alt=""/></div><div class="list_img1"><img src="images/product/product_details_03.png" alt=""/></div><div class="list_img1"><img src="images/product/product_details_04.png" alt=""/></div>'),
(11,'11情定今生',1,'白色满天星','1','66','2','2','666','629','1491868800000','<div class="list_img1"><img src="images/product/product_details_01.png" alt=""/></div><div class="list_img2"><img src="images/product/product_details_02.png" alt=""/></div><div class="list_img1"><img src="images/product/product_details_03.png" alt=""/></div><div class="list_img1"><img src="images/product/product_details_04.png" alt=""/></div>'),
(12,'12情定今生',2,'白色满天星','3','99','3','1','699','688','1491955200000','<div class="list_img1"><img src="images/product/product_details_01.png" alt=""/></div><div class="list_img2"><img src="images/product/product_details_02.png" alt=""/></div><div class="list_img1"><img src="images/product/product_details_03.png" alt=""/></div><div class="list_img1"><img src="images/product/product_details_04.png" alt=""/></div>'),
(13,'13情定今生',3,'白色满天星','5','101','1','3','789','759','1492041600000','<div class="list_img1"><img src="images/product/product_details_01.png" alt=""/></div><div class="list_img2"><img src="images/product/product_details_02.png" alt=""/></div><div class="list_img1"><img src="images/product/product_details_03.png" alt=""/></div><div class="list_img1"><img src="images/product/product_details_04.png" alt=""/></div>'),
(14,'14情定今生',4,'白色满天星','2','108','2','2','888','816','1492128000000','<div class="list_img1"><img src="images/product/product_details_01.png" alt=""/></div><div class="list_img2"><img src="images/product/product_details_02.png" alt=""/></div><div class="list_img1"><img src="images/product/product_details_03.png" alt=""/></div><div class="list_img1"><img src="images/product/product_details_04.png" alt=""/></div>'),
(15,'15情定今生',5,'白色满天星','4','365','3','1','999','920','1492214400000','<div class="list_img1"><img src="images/product/product_details_01.png" alt=""/></div><div class="list_img2"><img src="images/product/product_details_02.png" alt=""/></div><div class="list_img1"><img src="images/product/product_details_03.png" alt=""/></div><div class="list_img1"><img src="images/product/product_details_04.png" alt=""/></div>'),
(16,'16情定今生',1,'白色满天星','5','999','1','3','1288','1166','1492300800000','<div class="list_img1"><img src="images/product/product_details_01.png" alt=""/></div><div class="list_img2"><img src="images/product/product_details_02.png" alt=""/></div><div class="list_img1"><img src="images/product/product_details_03.png" alt=""/></div><div class="list_img1"><img src="images/product/product_details_04.png" alt=""/></div>'),
(17,'17情定今生',2,'白色满天星','3','1','2','2','739','699','1492400800000','<div class="list_img1"><img src="images/product/product_details_01.png" alt=""/></div><div class="list_img2"><img src="images/product/product_details_02.png" alt=""/></div><div class="list_img1"><img src="images/product/product_details_03.png" alt=""/></div><div class="list_img1"><img src="images/product/product_details_04.png" alt=""/></div>'),
(18,'18情定今生',3,'白色满天星','1','3','3','1','720','705','1492500800000','<div class="list_img1"><img src="images/product/product_details_01.png" alt=""/></div><div class="list_img2"><img src="images/product/product_details_02.png" alt=""/></div><div class="list_img1"><img src="images/product/product_details_03.png" alt=""/></div><div class="list_img1"><img src="images/product/product_details_04.png" alt=""/></div>'),
(19,'19情定今生',4,'白色满天星','4','80','1','3','678','618','1492600800000','<div class="list_img1"><img src="images/product/product_details_01.png" alt=""/></div><div class="list_img2"><img src="images/product/product_details_02.png" alt=""/></div><div class="list_img1"><img src="images/product/product_details_03.png" alt=""/></div><div class="list_img1"><img src="images/product/product_details_04.png" alt=""/></div>'),
(20,'20情定今生',5,'白色满天星','2','222','2','2','800','788','1492700800000','<div class="list_img1"><img src="images/product/product_details_01.png" alt=""/></div><div class="list_img2"><img src="images/product/product_details_02.png" alt=""/></div><div class="list_img1"><img src="images/product/product_details_03.png" alt=""/></div><div class="list_img1"><img src="images/product/product_details_04.png" alt=""/></div>');

/*商品图片*/
CREATE TABLE fImg(
    fImgId INT PRIMARY KEY AUTO_INCREMENT,    /*图片ID*/
    fId INT,                    /*商品id*/
    fPic VARCHAR(64)           /*商品图片*/
);
INSERT INTO fImg VALUES
(NULL,'1','images/product/product_01.jpg'),
(NULL,'1','images/product/product_02.jpg'),
(NULL,'1','images/product/product_03.jpg'),
(NULL,'1','images/product/product_04.jpg'),
(NULL,'1','images/product/product_05.jpg'),
(NULL,'1','images/product/product_06.jpg'),
(NULL,'1','images/product/product_07.jpg'),
(NULL,'1','images/product/product_08.jpg'),
(NULL,'1','images/product/product_09.jpg'),
(NULL,'1','images/product/product_10.jpg'),
(NULL,'2','images/product/product_02.jpg'),
(NULL,'2','images/product/product_01.jpg'),
(NULL,'2','images/product/product_03.jpg'),
(NULL,'2','images/product/product_04.jpg'),
(NULL,'2','images/product/product_05.jpg'),
(NULL,'2','images/product/product_06.jpg'),
(NULL,'2','images/product/product_07.jpg'),
(NULL,'2','images/product/product_08.jpg'),
(NULL,'2','images/product/product_09.jpg'),
(NULL,'2','images/product/product_10.jpg'),
(NULL,'3','images/product/product_03.jpg'),
(NULL,'3','images/product/product_02.jpg'),
(NULL,'3','images/product/product_01.jpg'),
(NULL,'3','images/product/product_04.jpg'),
(NULL,'3','images/product/product_05.jpg'),
(NULL,'3','images/product/product_06.jpg'),
(NULL,'3','images/product/product_07.jpg'),
(NULL,'3','images/product/product_08.jpg'),
(NULL,'3','images/product/product_09.jpg'),
(NULL,'3','images/product/product_10.jpg'),
(NULL,'4','images/product/product_04.jpg'),
(NULL,'4','images/product/product_02.jpg'),
(NULL,'4','images/product/product_03.jpg'),
(NULL,'4','images/product/product_01.jpg'),
(NULL,'4','images/product/product_05.jpg'),
(NULL,'4','images/product/product_06.jpg'),
(NULL,'4','images/product/product_07.jpg'),
(NULL,'4','images/product/product_08.jpg'),
(NULL,'4','images/product/product_09.jpg'),
(NULL,'4','images/product/product_10.jpg'),
(NULL,'5','images/product/product_05.jpg'),
(NULL,'5','images/product/product_02.jpg'),
(NULL,'5','images/product/product_03.jpg'),
(NULL,'5','images/product/product_04.jpg'),
(NULL,'5','images/product/product_01.jpg'),
(NULL,'5','images/product/product_06.jpg'),
(NULL,'5','images/product/product_07.jpg'),
(NULL,'5','images/product/product_08.jpg'),
(NULL,'5','images/product/product_09.jpg'),
(NULL,'5','images/product/product_10.jpg'),
(NULL,'6','images/product/product_06.jpg'),
(NULL,'6','images/product/product_02.jpg'),
(NULL,'6','images/product/product_03.jpg'),
(NULL,'6','images/product/product_04.jpg'),
(NULL,'6','images/product/product_05.jpg'),
(NULL,'6','images/product/product_01.jpg'),
(NULL,'6','images/product/product_07.jpg'),
(NULL,'6','images/product/product_09.jpg'),
(NULL,'6','images/product/product_10.jpg'),
(NULL,'7','images/product/product_07.jpg'),
(NULL,'7','images/product/product_02.jpg'),
(NULL,'7','images/product/product_03.jpg'),
(NULL,'7','images/product/product_04.jpg'),
(NULL,'7','images/product/product_05.jpg'),
(NULL,'7','images/product/product_06.jpg'),
(NULL,'7','images/product/product_01.jpg'),
(NULL,'7','images/product/product_08.jpg'),
(NULL,'7','images/product/product_09.jpg'),
(NULL,'7','images/product/product_10.jpg'),
(NULL,'8','images/product/product_08.jpg'),
(NULL,'8','images/product/product_02.jpg'),
(NULL,'8','images/product/product_03.jpg'),
(NULL,'8','images/product/product_04.jpg'),
(NULL,'8','images/product/product_05.jpg'),
(NULL,'8','images/product/product_06.jpg'),
(NULL,'8','images/product/product_07.jpg'),
(NULL,'8','images/product/product_01.jpg'),
(NULL,'8','images/product/product_09.jpg'),
(NULL,'8','images/product/product_10.jpg'),
(NULL,'9','images/product/product_09.jpg'),
(NULL,'9','images/product/product_02.jpg'),
(NULL,'9','images/product/product_03.jpg'),
(NULL,'9','images/product/product_04.jpg'),
(NULL,'9','images/product/product_05.jpg'),
(NULL,'9','images/product/product_06.jpg'),
(NULL,'9','images/product/product_07.jpg'),
(NULL,'9','images/product/product_08.jpg'),
(NULL,'9','images/product/product_01.jpg'),
(NULL,'9','images/product/product_10.jpg'),
(NULL,'10','images/product/product_10.jpg'),
(NULL,'10','images/product/product_01.jpg'),
(NULL,'10','images/product/product_03.jpg'),
(NULL,'10','images/product/product_04.jpg'),
(NULL,'10','images/product/product_05.jpg'),
(NULL,'10','images/product/product_06.jpg'),
(NULL,'10','images/product/product_07.jpg'),
(NULL,'10','images/product/product_08.jpg'),
(NULL,'10','images/product/product_09.jpg'),
(NULL,'10','images/product/product_01.jpg'),
(NULL,'11','images/product/product_01.jpg'),
(NULL,'11','images/product/product_02.jpg'),
(NULL,'11','images/product/product_03.jpg'),
(NULL,'11','images/product/product_04.jpg'),
(NULL,'11','images/product/product_05.jpg'),
(NULL,'11','images/product/product_06.jpg'),
(NULL,'11','images/product/product_07.jpg'),
(NULL,'11','images/product/product_08.jpg'),
(NULL,'11','images/product/product_09.jpg'),
(NULL,'11','images/product/product_10.jpg'),
(NULL,'12','images/product/product_02.jpg'),
(NULL,'12','images/product/product_01.jpg'),
(NULL,'12','images/product/product_03.jpg'),
(NULL,'12','images/product/product_04.jpg'),
(NULL,'12','images/product/product_05.jpg'),
(NULL,'12','images/product/product_06.jpg'),
(NULL,'12','images/product/product_07.jpg'),
(NULL,'12','images/product/product_08.jpg'),
(NULL,'12','images/product/product_09.jpg'),
(NULL,'12','images/product/product_10.jpg'),
(NULL,'13','images/product/product_03.jpg'),
(NULL,'13','images/product/product_02.jpg'),
(NULL,'13','images/product/product_01.jpg'),
(NULL,'13','images/product/product_04.jpg'),
(NULL,'13','images/product/product_05.jpg'),
(NULL,'13','images/product/product_06.jpg'),
(NULL,'13','images/product/product_07.jpg'),
(NULL,'13','images/product/product_08.jpg'),
(NULL,'13','images/product/product_09.jpg'),
(NULL,'13','images/product/product_10.jpg'),
(NULL,'14','images/product/product_04.jpg'),
(NULL,'14','images/product/product_02.jpg'),
(NULL,'14','images/product/product_03.jpg'),
(NULL,'14','images/product/product_01.jpg'),
(NULL,'14','images/product/product_05.jpg'),
(NULL,'14','images/product/product_06.jpg'),
(NULL,'14','images/product/product_07.jpg'),
(NULL,'14','images/product/product_08.jpg'),
(NULL,'14','images/product/product_09.jpg'),
(NULL,'14','images/product/product_10.jpg'),
(NULL,'15','images/product/product_05.jpg'),
(NULL,'15','images/product/product_02.jpg'),
(NULL,'15','images/product/product_03.jpg'),
(NULL,'15','images/product/product_04.jpg'),
(NULL,'15','images/product/product_01.jpg'),
(NULL,'15','images/product/product_06.jpg'),
(NULL,'15','images/product/product_07.jpg'),
(NULL,'15','images/product/product_08.jpg'),
(NULL,'15','images/product/product_09.jpg'),
(NULL,'15','images/product/product_10.jpg'),
(NULL,'16','images/product/product_06.jpg'),
(NULL,'16','images/product/product_02.jpg'),
(NULL,'16','images/product/product_03.jpg'),
(NULL,'16','images/product/product_04.jpg'),
(NULL,'16','images/product/product_05.jpg'),
(NULL,'16','images/product/product_01.jpg'),
(NULL,'16','images/product/product_07.jpg'),
(NULL,'16','images/product/product_09.jpg'),
(NULL,'16','images/product/product_10.jpg'),
(NULL,'17','images/product/product_07.jpg'),
(NULL,'17','images/product/product_02.jpg'),
(NULL,'17','images/product/product_03.jpg'),
(NULL,'17','images/product/product_04.jpg'),
(NULL,'17','images/product/product_05.jpg'),
(NULL,'17','images/product/product_06.jpg'),
(NULL,'17','images/product/product_01.jpg'),
(NULL,'17','images/product/product_08.jpg'),
(NULL,'17','images/product/product_09.jpg'),
(NULL,'17','images/product/product_10.jpg'),
(NULL,'18','images/product/product_08.jpg'),
(NULL,'18','images/product/product_02.jpg'),
(NULL,'18','images/product/product_03.jpg'),
(NULL,'18','images/product/product_04.jpg'),
(NULL,'18','images/product/product_05.jpg'),
(NULL,'18','images/product/product_06.jpg'),
(NULL,'18','images/product/product_07.jpg'),
(NULL,'18','images/product/product_01.jpg'),
(NULL,'18','images/product/product_09.jpg'),
(NULL,'18','images/product/product_10.jpg'),
(NULL,'19','images/product/product_09.jpg'),
(NULL,'19','images/product/product_02.jpg'),
(NULL,'19','images/product/product_03.jpg'),
(NULL,'19','images/product/product_04.jpg'),
(NULL,'19','images/product/product_05.jpg'),
(NULL,'19','images/product/product_06.jpg'),
(NULL,'19','images/product/product_07.jpg'),
(NULL,'19','images/product/product_08.jpg'),
(NULL,'19','images/product/product_01.jpg'),
(NULL,'19','images/product/product_10.jpg'),
(NULL,'20','images/product/product_10.jpg'),
(NULL,'20','images/product/product_01.jpg'),
(NULL,'20','images/product/product_03.jpg'),
(NULL,'20','images/product/product_04.jpg'),
(NULL,'20','images/product/product_05.jpg'),
(NULL,'20','images/product/product_06.jpg'),
(NULL,'20','images/product/product_07.jpg'),
(NULL,'20','images/product/product_08.jpg'),
(NULL,'20','images/product/product_09.jpg'),
(NULL,'20','images/product/product_01.jpg');

/**购物车表**/
CREATE TABLE cart(
    cartId INT PRIMARY KEY AUTO_INCREMENT,/*购物车编号*/
    uid INT,         /*用户编号*/
    fId INT,       /*产品编号*/
    count INT     /*数量*/
);

/*订单表*/
CREATE TABLE orders(
    orderId INT PRIMARY KEY AUTO_INCREMENT,/*订单id*/
    uid INT/*用户id*/
);
/**订单详情表**/
CREATE TABLE orders_detail(
   odId INT PRIMARY KEY AUTO_INCREMENT,
   orderId INT,                          /*订单编号*/
   fId INT,                       /*课程编号*/
   count INT                            /*购买数量*/
);


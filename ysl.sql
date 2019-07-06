--#设置客户端连接服务器端的编码为UTF-8
--SET NAMES UTF8;
--#丢弃数据库xz,如果存在
--DROP DATABASE IF EXISTS ysl;
--#创建数据库ysl
--CREATE DATABASE ysl CHARSET=UTF8;
--#进入数据库ysl
USE ysl;
--#创建数据表ysl_user
CREATE TABLE ysl_user(
	uid INT PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(32),
	upwd VARCHAR(12),
	phone VARCHAR(11),
	sex SMALLINT(1),
	username VARCHAR(8)
);
--# 插入四条用户信息
INSERT INTO ysl_user VALUES('1','15102995782','jijiao151','15102995782',0,'吉姣');
INSERT INTO ysl_user VALUES('2','17802923431','chenhaiwen178','17802923431',0,'陈海雯');
INSERT INTO ysl_user VALUES('3','13093939397','lihao130','13093939397',1,'李浩');
INSERT INTO ysl_user VALUES('4','18309214528','luotianpei183','18309214528',0,'罗天培');
#查询信息
--SELECT * FROM ysl_user;
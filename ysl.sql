--#���ÿͻ������ӷ������˵ı���ΪUTF-8
--SET NAMES UTF8;
--#�������ݿ�xz,�������
--DROP DATABASE IF EXISTS ysl;
--#�������ݿ�ysl
--CREATE DATABASE ysl CHARSET=UTF8;
--#�������ݿ�ysl
USE ysl;
--#�������ݱ�ysl_user
CREATE TABLE ysl_user(
	uid INT PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(32),
	upwd VARCHAR(12),
	phone VARCHAR(11),
	sex SMALLINT(1),
	username VARCHAR(8)
);
--# ���������û���Ϣ
INSERT INTO ysl_user VALUES('1','15102995782','jijiao151','15102995782',0,'���');
INSERT INTO ysl_user VALUES('2','17802923431','chenhaiwen178','17802923431',0,'�º���');
INSERT INTO ysl_user VALUES('3','13093939397','lihao130','13093939397',1,'���');
INSERT INTO ysl_user VALUES('4','18309214528','luotianpei183','18309214528',0,'������');
#��ѯ��Ϣ
--SELECT * FROM ysl_user;
/*
Navicat MySQL Data Transfer

Source Server         : local
Source Server Version : 50624
Source Host           : localhost:3306
Source Database       : myr

Target Server Type    : MYSQL
Target Server Version : 50624
File Encoding         : 65001

Date: 2016-05-06 15:30:48
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for consume
-- ----------------------------
DROP TABLE IF EXISTS `consume`;
CREATE TABLE `consume` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `phone` varchar(255) DEFAULT NULL,
  `mount` float DEFAULT NULL,
  `begin_time` datetime DEFAULT NULL,
  `end_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of consume
-- ----------------------------
INSERT INTO `consume` VALUES ('1', '13161252672', '100', '2016-05-01 11:15:20', '2016-05-01 11:15:23');
INSERT INTO `consume` VALUES ('2', null, '845.5', '2016-05-04 16:46:57', '2016-05-06 12:54:50');
INSERT INTO `consume` VALUES ('3', null, '19', '2016-05-04 16:47:01', '2016-05-06 15:03:43');
INSERT INTO `consume` VALUES ('4', null, '19', '2016-05-04 16:47:02', '2016-05-06 15:05:51');
INSERT INTO `consume` VALUES ('5', null, '19', '2016-05-04 16:47:03', '2016-05-06 15:09:46');
INSERT INTO `consume` VALUES ('6', null, '228', '2016-05-05 13:56:38', '2016-05-06 15:11:31');
INSERT INTO `consume` VALUES ('7', '13161257572', '9.5', '2016-05-06 15:11:57', '2016-05-06 15:12:35');
INSERT INTO `consume` VALUES ('8', null, '19', '2016-05-06 15:18:57', '2016-05-06 15:19:27');
INSERT INTO `consume` VALUES ('9', null, '9.5', '2016-05-06 15:19:31', '2016-05-06 15:28:27');

-- ----------------------------
-- Table structure for price
-- ----------------------------
DROP TABLE IF EXISTS `price`;
CREATE TABLE `price` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `timearea` varchar(255) DEFAULT NULL,
  `price` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of price
-- ----------------------------
INSERT INTO `price` VALUES ('1', '00--12', '19');

-- ----------------------------
-- Table structure for recharge
-- ----------------------------
DROP TABLE IF EXISTS `recharge`;
CREATE TABLE `recharge` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `create_time` datetime DEFAULT NULL,
  `mount` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of recharge
-- ----------------------------
INSERT INTO `recharge` VALUES ('1', '2016-05-05 14:06:37', '18', '13161257573');

-- ----------------------------
-- Table structure for room
-- ----------------------------
DROP TABLE IF EXISTS `room`;
CREATE TABLE `room` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `des` text,
  `status` int(255) DEFAULT '0',
  `begin_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of room
-- ----------------------------
INSERT INTO `room` VALUES ('1', '1好房', 'ssss', '0', '0000-00-00 00:00:00');
INSERT INTO `room` VALUES ('2', '1好房', null, '0', '0000-00-00 00:00:00');
INSERT INTO `room` VALUES ('4', '1好房', 'undefined', '0', '0000-00-00 00:00:00');
INSERT INTO `room` VALUES ('5', '1好房', '房间简单描述,可不用填写', '0', '0000-00-00 00:00:00');
INSERT INTO `room` VALUES ('7', '1好房', '房间简单描述,可不用填写', '0', '0000-00-00 00:00:00');
INSERT INTO `room` VALUES ('8', '1好房', '房间简单描述,可不用填写', '0', null);
INSERT INTO `room` VALUES ('9', '1好房', '房间简单描述,可不用填写', '0', null);

-- ----------------------------
-- Table structure for vip
-- ----------------------------
DROP TABLE IF EXISTS `vip`;
CREATE TABLE `vip` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `phone` varchar(255) DEFAULT NULL,
  `mount` float DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of vip
-- ----------------------------
INSERT INTO `vip` VALUES ('1', '13161257573', '0', '2016-05-03 00:00:00');
INSERT INTO `vip` VALUES ('2', '13161257572', '990.5', '2016-05-03 19:59:34');
INSERT INTO `vip` VALUES ('9', '11312313121', '121', '2016-05-04 10:07:20');
INSERT INTO `vip` VALUES ('10', '1316152732', '12312', '2016-05-04 09:53:40');

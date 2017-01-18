CREATE DATABASE day_planner_db;
USE day_planner_db;

CREATE TABLE plans
(
id int NOT NULL AUTO_INCREMENT,
plan varchar(255) NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO plans (plan) VALUES ('Plan to fight a ninja.');

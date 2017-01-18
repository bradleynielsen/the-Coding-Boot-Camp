CREATE DATABASE joinsActivity;

USE joinsActivity;

CREATE TABLE os 
(
	id INT NOT NULL AUTO_INCREMENT,
	os varchar(7) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE devs 
(
	id INT NOT NULL AUTO_INCREMENT,
	dev varchar(30) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE apps
(
	id INT NOT NULL AUTO_INCREMENT,
	app varchar(30) NOT NULL,
	d_id int NOT NULL,
	os_id int NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (d_id) REFERENCES devs (id),
	FOREIGN KEY (os_id) REFERENCES os (id)
);





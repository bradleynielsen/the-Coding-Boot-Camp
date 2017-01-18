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





INSERT INTO os
	VALUES 
		(null, 'ios'),
		(null, 'android'),
		(null, 'both');

INSERT INTO devs
	VALUES
		(null, 'Apple'),
		(null, 'Google'),
		(null, 'Facebook'),
		(null, 'Hipster Whale'),
		(null, 'Rovio'),
		(null, 'Mighty Games');

INSERT INTO apps
	VALUES
		(null, 'App Store', 1, 1),
		(null, 'Google Play Store', 2, 2),
		(null, 'Snapchat', 3, 3),
		(null, 'Crossy Roads', 4, 3),
		(null, 'Upset Avians', 5, 3),
		(null, 'Shooty Skies', 6, 3);
CREATE DATABASE event_saver_db;
USE event_saver_db;

CREATE TABLE events
(
id int NOT NULL AUTO_INCREMENT,
event varchar(255) NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO events (event) VALUES ('Today I drew a picture of my friends and I buying kale.');
INSERT INTO events (event) VALUES ('Shaan made a song.');
INSERT INTO events (event) VALUES ('Davon is rich. He is flipping houses.');

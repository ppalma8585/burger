CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers (
id INT NOT NULL AUTO_INCREMENT primary key,
burger_name VARCHAR(30),
devoured BOOLEAN
);
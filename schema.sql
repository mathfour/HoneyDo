-- create the database to use --
CREATE DATABASE burger_muncher;
USE burger_muncher;

-- create the table of burgers --
CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    food VARCHAR(100) NULL,
    eaten BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (id)
);

INSERT INTO burgers (food, eaten) VALUES
    ('Ground Cocker Spaniel with Cheese', false),
    ('Cheesy Chopped Chihuahua', false);

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  ItemID INT AUTO_INCREMENT NOT NULL,
    ProductName VARCHAR(45) NOT NULL,
    DepartmentName VARCHAR(45) NOT NULL,
    Price DECIMAL(10,2) NOT NULL,
    StockQuantity INT(10) NOT NULL,
    primary key(ItemID)
);

select * from products;

INSERT INTO products(ProductName,DepartmentName,Price,StockQuantity)
VALUES ("Uncharted 4","Video Games",49.95,150),
    ("DOOM","Video Games",59.99,200),
    ("Crate of Spam","Food and Drink",24.50,50),
    ("Cool Shades","Apparel",75.00,5),
    ("Worn Denim Jeans","Apparel",54.25,35),
    ("Survival Towel","Necessities",42.42,42),
    ("Bill and Ted's Excellent Adventure","Films",15.00,25),
    ("Mad Max: Fury Road","Films",25.50,57),
    ("Monopoly","Board Games",30.50,35),
    ("Yahtzee","Board Games",19.95,23)
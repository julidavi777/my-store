CREATE TABLE `products`
(
 `id_product`  int NOT NULL AUTO_INCREMENT ,
 `category`    varchar(50) NOT NULL ,
 `description` varchar(100) NOT NULL ,
 `name`        varchar(100) NOT NULL ,
 `quantity`    int NOT NULL DEFAULT 0 ,
 `price`       decimal(10, 2) NOT NULL ,

PRIMARY KEY (`id_product`)
);


CREATE TABLE `credit_card`
(
 `id_card`         int NOT NULL AUTO_INCREMENT ,
 `number`          bigint NOT NULL ,
 `card_holder`     varchar(50) NOT NULL ,
 `expiration_date` varchar(10) NOT NULL ,
 `enterprise`      enum('visa', 'mastercard') NOT NULL ,
 `cvc`             varchar(5) NOT NULL ,

PRIMARY KEY (`id_card`),
UNIQUE KEY `AK1_users` (`enterprise`)
);
-------------------------------PENDIENTE 
CREATE TABLE `users`
(
 `id_user`  int NOT NULL AUTO_INCREMENT ,
 `name`     varchar(50) NOT NULL ,
 `lastname` varchar(50) NOT NULL ,
 `address`  varchar(100) NOT NULL ,
 `email`    varchar(100) NOT NULL ,
 `password` varchar(100) NOT NULL ,
 `id_card`  int NOT NULL ,

PRIMARY KEY (`id_user`),
UNIQUE KEY `AK1_users` (`email`),
KEY `FK_1` (`id_card`),
CONSTRAINT `FK_5_1` FOREIGN KEY `FK_1` (`id_card`) REFERENCES `credit_card` (`id_card`)
);

CREATE TABLE `sellers`
(
 `id_seller` int NOT NULL AUTO_INCREMENT ,
 `name`      varchar(50) NOT NULL ,
 `lastname`  varchar(50) NOT NULL ,
 `address`   varchar(100) NOT NULL ,
 `email`     varchar(100) NOT NULL ,
 `password`  varchar(100) NOT NULL ,

PRIMARY KEY (`id_seller`),
UNIQUE KEY `AK1_sellers` (`email`)
);
-------------------------------PENDIENTE 

CREATE TABLE `invoice_details`
(
 `id_invoice_detail` int NOT NULL AUTO_INCREMENT ,
 `id_product`        int NOT NULL ,
 `date`              timestamp NOT NULL ,
 `quantity`          int NOT NULL DEFAULT 1 ,
 `unit_price`        decimal(10, 2) NOT NULL ,
 `total`             decimal NOT NULL ,
 `id_user`           int NOT NULL ,

PRIMARY KEY (`id_invoice_detail`),
KEY `FK_2` (`id_user`),
CONSTRAINT `FK_5` FOREIGN KEY `FK_2` (`id_user`) REFERENCES `users` (`id_user`),
KEY `id_product` (`id_product`),
CONSTRAINT `id_product` FOREIGN KEY `id_product` (`id_product`) REFERENCES `products` (`id_product`)
);

-------------------------------PENDIENTE 

CREATE TABLE products_to_sellers (
  id_product INT NOT NULL,
  id_seller INT NOT NULL,
  PRIMARY KEY (id_product, id_seller),
  KEY fk_id_product (id_product),
  CONSTRAINT fk_id_product FOREIGN KEY (id_product) REFERENCES products (id_product),
  KEY fk_id_seller (id_seller),
  CONSTRAINT fk_id_seller FOREIGN KEY (id_seller) REFERENCES sellers (id_seller)
);

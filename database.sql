CREATE TABLE users (
  id_user INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  address VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(100) NOT NULL
);

CREATE TABLE sellers (
  id_seller INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  address VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(100) NOT NULL
);

CREATE TABLE product (
  id_product INT PRIMARY KEY AUTO_INCREMENT,
  category VARCHAR(50) NOT NULL,
  description VARCHAR(100) NOT NULL,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(10, 2) NOT NULL
);

CREATE TABLE bills (
  id_bill INT PRIMARY KEY AUTO_INCREMENT,
  id_user INT NOT NULL,
  id_product INT NOT NULL,
  id_seller INT NOT NULL,
  date DATE NOT NULL,
  hour TIME NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  FOREIGN KEY (id_user) REFERENCES users (id_user),
  FOREIGN KEY (id_product) REFERENCES products (id_product),
  FOREIGN KEY (id_seller) REFERENCES sellers (id_seller)
);

CREATE TABLE reviews (
  id_review INT PRIMARY KEY AUTO_INCREMENT,
  id_seller INT NOT NULL,
  id_user INT NOT NULL,
  stars INT NOT NULL CHECK (stars BETWEEN 1 AND 5),
  FOREIGN KEY (id_seller) REFERENCES sellers (id_seller),
  FOREIGN KEY (id_user) REFERENCES users (id_user)
);

CREATE TABLE shopping_cart (
  id_shopping INT PRIMARY KEY AUTO_INCREMENT,
  id_user INT NOT NULL,
  id_product INT NOT NULL,
  FOREIGN KEY (id_user) REFERENCES users (id_user),
  FOREIGN KEY (id_product) REFERENCES products (id_product)
);

CREATE TABLE purchase_history (
  id_purchase INT PRIMARY KEY AUTO_INCREMENT,
  id_user INT NOT NULL,
  id_product INT NOT NULL,
  date DATE NOT NULL,
  hour TIME NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  FOREIGN KEY (id_user) REFERENCES users (id_user),
  FOREIGN KEY (id_product) REFERENCES products (id_product)
);

CREATE TABLE sales_history (
  id_sale INT PRIMARY KEY AUTO_INCREMENT,
  id_seller INT NOT NULL,
  id_product  NOT NULL,
  date DATE NOT NULL,
  hour TIME NOT NULLs,
  price DECIMAL(10, 2) NOT NULL,
  FOREIGN KEY(id_seller) REFERENCESs sellers (id_seller),
  FOREIGN KEY (id_product) REFERENCES products (id_product)
)s;
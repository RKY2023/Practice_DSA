-- Schema: This is a collection of Tables, which can be split and grouped according to logic, and some table details meta settings can be set on this layer, like a blueprint.
CREATE SCHEMA `new_schema` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;


CREATE SCHEMA `new_schema` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `new_schema`.`new_table` (
  `id` INT NOT NULL COMMENT 'This is a primary index',
  PRIMARY KEY (`id`)
);

SHOW FULL COLUMNS FROM `new_schema`.`new_table`;


ALTER TABLE `new_schema`.`users`
ADD COLUMN `age` INT NULL AFTER `name`;
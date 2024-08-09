/*
  Warnings:

  - You are about to drop the `tb_setting` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `tb_setting`;

-- CreateTable
CREATE TABLE `catalogues` (
    `catalog_id` INTEGER NOT NULL AUTO_INCREMENT,
    `image` VARCHAR(255) NOT NULL,
    `package_name` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `price` INTEGER NOT NULL,

    PRIMARY KEY (`catalog_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `setting` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `website_name` VARCHAR(100) NOT NULL,
    `phone_number1` VARCHAR(100) NOT NULL,
    `phone_number2` VARCHAR(100) NOT NULL,
    `email1` VARCHAR(100) NOT NULL,
    `email2` VARCHAR(100) NOT NULL,
    `address` TEXT NOT NULL,
    `maps` TEXT NOT NULL,
    `logo` VARCHAR(100) NOT NULL,
    `facebook_url` VARCHAR(255) NOT NULL,
    `instagram_url` VARCHAR(255) NOT NULL,
    `youtube_url` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

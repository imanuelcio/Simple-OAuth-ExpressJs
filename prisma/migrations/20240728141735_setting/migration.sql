-- CreateTable
CREATE TABLE `tb_setting` (
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

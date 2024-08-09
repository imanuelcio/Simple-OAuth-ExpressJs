-- CreateTable
CREATE TABLE `tb_order` (
    `order_id` INTEGER NOT NULL AUTO_INCREMENT,
    `catalog_id` INTEGER NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `phone_number` VARCHAR(30) NOT NULL,
    `wedding_date` DATETIME(3) NOT NULL,
    `status_order` ENUM('REQUESTED', 'APPROVED') NOT NULL,
    `userid` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`order_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tb_order` ADD CONSTRAINT `tb_order_catalog_id_fkey` FOREIGN KEY (`catalog_id`) REFERENCES `catalogues`(`catalog_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_order` ADD CONSTRAINT `tb_order_userid_fkey` FOREIGN KEY (`userid`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

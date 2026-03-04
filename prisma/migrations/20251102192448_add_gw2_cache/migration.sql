-- DropIndex
DROP INDEX `Build_ownerId_fkey` ON `build`;

-- CreateTable
CREATE TABLE `Gw2Cache` (
    `key` VARCHAR(191) NOT NULL,
    `data` LONGTEXT NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`key`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Build` ADD CONSTRAINT `Build_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

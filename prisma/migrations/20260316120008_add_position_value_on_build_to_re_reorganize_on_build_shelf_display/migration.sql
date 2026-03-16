-- DropIndex
DROP INDEX `Build_ownerId_fkey` ON `build`;

-- AlterTable
ALTER TABLE `build` ADD COLUMN `position` INTEGER NOT NULL DEFAULT 0;

-- AddForeignKey
ALTER TABLE `Build` ADD CONSTRAINT `Build_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

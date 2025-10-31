-- DropIndex
DROP INDEX `Build_ownerId_fkey` ON `build`;

-- AddForeignKey
ALTER TABLE `Build` ADD CONSTRAINT `Build_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

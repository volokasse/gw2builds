/*
  Warnings:

  - You are about to alter the column `slug` on the `build` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(5)`.

*/
-- DropIndex
DROP INDEX `Build_ownerId_fkey` ON `build`;

-- AlterTable
ALTER TABLE `build` MODIFY `slug` VARCHAR(5) NULL;

-- AddForeignKey
ALTER TABLE `Build` ADD CONSTRAINT `Build_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

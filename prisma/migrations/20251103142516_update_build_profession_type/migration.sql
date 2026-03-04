/*
  Warnings:

  - You are about to alter the column `buildClass` on the `build` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- DropIndex
DROP INDEX `Build_ownerId_fkey` ON `build`;

-- AlterTable
ALTER TABLE `build` MODIFY `buildClass` INTEGER NOT NULL DEFAULT 0;

-- AddForeignKey
ALTER TABLE `Build` ADD CONSTRAINT `Build_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

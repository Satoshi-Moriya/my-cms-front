/*
  Warnings:

  - You are about to drop the column `slug_id` on the `Post` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Slug` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "slug_id";

-- CreateIndex
CREATE UNIQUE INDEX "Slug_name_key" ON "Slug"("name");

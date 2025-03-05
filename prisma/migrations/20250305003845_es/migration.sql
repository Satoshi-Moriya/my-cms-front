/*
  Warnings:

  - You are about to drop the `Slug` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[slug]` on the table `Post` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Slug" DROP CONSTRAINT "Slug_post_id_fkey";

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "slug" TEXT NOT NULL;

-- DropTable
DROP TABLE "Slug";

-- CreateIndex
CREATE UNIQUE INDEX "Post_slug_key" ON "Post"("slug");

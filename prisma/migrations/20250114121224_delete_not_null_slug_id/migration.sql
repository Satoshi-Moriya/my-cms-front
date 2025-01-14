/*
  Warnings:

  - Made the column `slug_id` on table `Post` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "slug_id" SET NOT NULL;

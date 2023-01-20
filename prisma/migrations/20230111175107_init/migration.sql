/*
  Warnings:

  - You are about to drop the column `showtime` on the `Showing` table. All the data in the column will be lost.
  - Added the required column `time` to the `Showing` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Showing" DROP COLUMN "showtime",
ADD COLUMN     "time" TEXT NOT NULL;

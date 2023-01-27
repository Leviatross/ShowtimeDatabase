/*
  Warnings:

  - Changed the type of `time` on the `Showing` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Showing" DROP COLUMN "time",
ADD COLUMN     "time" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Showing" ADD CONSTRAINT "Showing_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- DropIndex
DROP INDEX "Movie_title_key";

-- CreateTable
CREATE TABLE "Showing" (
    "id" SERIAL NOT NULL,
    "showtime" TIMESTAMP(3) NOT NULL,
    "movieId" INTEGER NOT NULL,

    CONSTRAINT "Showing_pkey" PRIMARY KEY ("id")
);

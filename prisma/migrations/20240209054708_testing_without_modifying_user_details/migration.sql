/*
  Warnings:

  - You are about to drop the `_usersJoinedRide` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Ride" DROP CONSTRAINT "Ride_userId_fkey";

-- DropForeignKey
ALTER TABLE "_usersJoinedRide" DROP CONSTRAINT "_usersJoinedRide_A_fkey";

-- DropForeignKey
ALTER TABLE "_usersJoinedRide" DROP CONSTRAINT "_usersJoinedRide_B_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "email" DROP NOT NULL;

-- DropTable
DROP TABLE "_usersJoinedRide";

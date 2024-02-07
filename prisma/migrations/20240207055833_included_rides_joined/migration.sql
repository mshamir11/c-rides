-- CreateTable
CREATE TABLE "_usersJoinedRide" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_usersJoinedRide_AB_unique" ON "_usersJoinedRide"("A", "B");

-- CreateIndex
CREATE INDEX "_usersJoinedRide_B_index" ON "_usersJoinedRide"("B");

-- AddForeignKey
ALTER TABLE "_usersJoinedRide" ADD CONSTRAINT "_usersJoinedRide_A_fkey" FOREIGN KEY ("A") REFERENCES "Ride"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_usersJoinedRide" ADD CONSTRAINT "_usersJoinedRide_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

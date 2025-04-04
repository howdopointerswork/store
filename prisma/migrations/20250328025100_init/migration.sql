-- CreateTable
CREATE TABLE "Item" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "size" INTEGER NOT NULL,
    "sale" BOOLEAN NOT NULL,
    "category" TEXT NOT NULL,
    "type" TEXT NOT NULL
);

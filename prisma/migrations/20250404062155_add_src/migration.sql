/*
  Warnings:

  - Made the column `src` on table `Item` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Item" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "size" INTEGER NOT NULL,
    "sale" BOOLEAN NOT NULL,
    "category" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "src" TEXT NOT NULL
);
INSERT INTO "new_Item" ("category", "id", "name", "price", "sale", "size", "src", "type") SELECT "category", "id", "name", "price", "sale", "size", "src", "type" FROM "Item";
DROP TABLE "Item";
ALTER TABLE "new_Item" RENAME TO "Item";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

/*
  Warnings:

  - Added the required column `src` to the `Item` table without a default value. This is not possible if the table is not empty.

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
    "src" TEXT
);
INSERT INTO "new_Item" ("category", "id", "name", "price", "sale", "size", "type", "src") SELECT "category", "id", "name", "price", "sale", "size", "type", "src" FROM "Item";
DROP TABLE "Item";
ALTER TABLE "new_Item" RENAME TO "Item";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

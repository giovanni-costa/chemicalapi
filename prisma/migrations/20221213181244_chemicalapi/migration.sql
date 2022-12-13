-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_chemicalSubstance" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "chericId" INTEGER NOT NULL DEFAULT null,
    "name" TEXT NOT NULL,
    "formula" TEXT NOT NULL
);
INSERT INTO "new_chemicalSubstance" ("formula", "id", "name") SELECT "formula", "id", "name" FROM "chemicalSubstance";
DROP TABLE "chemicalSubstance";
ALTER TABLE "new_chemicalSubstance" RENAME TO "chemicalSubstance";
CREATE UNIQUE INDEX "chemicalSubstance_chericId_key" ON "chemicalSubstance"("chericId");
CREATE UNIQUE INDEX "chemicalSubstance_name_key" ON "chemicalSubstance"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateTable
CREATE TABLE "chemicalSubstance" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "chericId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "formula" TEXT NOT NULL,
    "imageURL" TEXT NOT NULL,
    "molWeight" TEXT,
    "normalBoilingT" TEXT,
    "normalFreezingT" TEXT,
    "triplePointT" TEXT,
    "triplePointP" TEXT,
    "criticalT" TEXT,
    "criticalP" TEXT,
    "criticalV" TEXT,
    "critialComp" TEXT,
    "accFactor" TEXT,
    "vaporPressure" TEXT,
    "heatCapGas" TEXT,
    "heatCapLiq" TEXT,
    "viscosityGas" TEXT,
    "viscosityLiq" TEXT,
    "thermalCondGas" TEXT,
    "thermalConsLiq" TEXT,
    "surfaceTension" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "chemicalSubstance_chericId_key" ON "chemicalSubstance"("chericId");

-- CreateIndex
CREATE UNIQUE INDEX "chemicalSubstance_name_key" ON "chemicalSubstance"("name");

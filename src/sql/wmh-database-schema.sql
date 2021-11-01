CREATE TYPE "type_building_enum" AS ENUM (
  'apartment',
  'house',
  'studio',
  'kitnet'
);

CREATE TABLE "Residence" (
  "id" int PRIMARY KEY,
  "residenceCode" int,
  "source" varchar,
  "urlSource" varchar,
  "numberRooms" int,
  "numberBathrooms" int,
  "numberParkingSpace" int,
  "typeBuilding" type_building_enum,
  "sizeResidence" int,
  "ResidenceAddressId" int
);

CREATE TABLE "ResidenceFeatures" (
  "id" int PRIMARY KEY,
  "ResidenceId" int,
  "key" varchar,
  "value" text
);

CREATE TABLE "ResidenceAddress" (
  "id" int PRIMARY KEY,
  "street" varchar,
  "numberResidence" int,
  "district" varchar,
  "state" varchar,
  "country" varchar,
  "CEP" varchar,
  "complement" varchar
);

CREATE TABLE "ResidenceValues" (
  "id" int PRIMARY KEY,
  "ResidenceId" int,
  "price" float,
  "condominiumTax" float,
  "houseTax" float,
  "fireInsurence" float,
  "serviceTax" float,
  "totalRentPrice" float
);

ALTER TABLE "Residence" ADD FOREIGN KEY ("ResidenceAddressId") REFERENCES "ResidenceAddress" ("id");

ALTER TABLE "Residence" ADD FOREIGN KEY ("id") REFERENCES "ResidenceFeatures" ("ResidenceId");

ALTER TABLE "Residence" ADD FOREIGN KEY ("id") REFERENCES "ResidenceValues" ("ResidenceId");

COMMENT ON COLUMN "Residence"."residenceCode" IS 'Case has is the code of the residence in the specific source';

COMMENT ON COLUMN "Residence"."source" IS 'Source mean the source of scraper';

COMMENT ON COLUMN "Residence"."urlSource" IS 'URL of residence';

COMMENT ON COLUMN "ResidenceFeatures"."value" IS 'It is a feature of residence but it not imporante other types of features. Ex: numberRooms';

COMMENT ON COLUMN "ResidenceValues"."price" IS 'Price without tax';

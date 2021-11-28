CREATE TYPE "type_building_enum" AS ENUM (
  'apartment',
  'house',
  'studio',
  'kitnet'
);

CREATE TABLE "ResidenceAddress" (
  "id" serial not null constraint residenceaddress_pk primary key,
  "street" varchar,
  "numberResidence" int,
  "district" varchar,
  "state" varchar,
  "country" varchar,
  "CEP" varchar,
  "complement" varchar,
  "createdAt" timestamp,
  "updatedAt" timestamp
);

CREATE TABLE "Residence" (
  "id" serial not null constraint residence_pk primary key,
  "residenceCode" int,
  "source" varchar,
  "urlSource" varchar,
  "numberRooms" int,
  "numberBathrooms" int,
  "numberParkingSpace" int,
  "typeBuilding" type_building_enum,
  "sizeResidence" int,
  "ResidenceAddressId" int not null constraint residence_residenceaddress_id_fk references "ResidenceAddress" ("id") on update cascade on delete cascade,
  "createdAt" timestamp,
  "updatedAt" timestamp
);

CREATE TABLE "ResidenceFeatures" (
  "id" serial not null constraint residencefeatures_pk primary key,
  "ResidenceId" int not null constraint residencefeatures_residence_id_fk references "Residence" ("id") on update cascade on delete cascade,
  "key" varchar,
  "value" text,
  "createdAt" timestamp,
  "updatedAt" timestamp
);

CREATE TABLE "ResidenceValues" (
  "id" serial not null constraint residencevalues_pk primary key,
  "ResidenceId" int not null constraint residencevalues_residence_id_fk references "Residence" ("id") on update cascade on delete cascade,
  "price" float,
  "condominiumTax" float,
  "houseTax" float,
  "fireInsurence" float,
  "serviceTax" float,
  "totalRentPrice" float,
  "createdAt" timestamp,
  "updatedAt" timestamp
);

COMMENT ON COLUMN "Residence"."residenceCode" IS 'Case has is the code of the residence in the specific source';

COMMENT ON COLUMN "Residence"."source" IS 'Source mean the source of scraper';

COMMENT ON COLUMN "Residence"."urlSource" IS 'URL of residence';

COMMENT ON COLUMN "ResidenceFeatures"."value" IS 'It is a feature of residence but it not imporante other types of features. Ex: numberRooms';

COMMENT ON COLUMN "ResidenceValues"."price" IS 'Price without tax';

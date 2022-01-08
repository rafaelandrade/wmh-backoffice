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

insert into "ResidenceAddress" (id, "street", "numberResidence", "district", "state", "country", "CEP", "complement", "createdAt", "updatedAt")
values  (1, 'rua', null, 'Hellow', 'São Paulo', 'Brasil', null, null, null, null),
        (2, 'batata', null, 'teste', 'sp', 'Brasil', null, null, null, null),
        (3, 'Rua Domingos Ataide', null, ' Parque Reboucas', 'São Paulo', 'Brasil', null, null, null, null),
        (4, 'Avenida Álvaro Ramos', null, ' Quarta Parada', 'São Paulo', 'Brasil', null, null, null, null),
        (5, 'Avenida Álvaro Ramos', null, ' Quarta Parada', 'São Paulo', 'Brasil', null, null, null, null),
        (6, 'Avenida Álvaro Ramos', null, ' Quarta Parada', 'São Paulo', 'Brasil', null, null, null, null),
        (7, 'Avenida Álvaro Ramos', null, ' Quarta Parada', 'São Paulo', 'Brasil', null, null, null, null),
        (8, 'Rua Itararé', null, ' Bela Vista', 'São Paulo', 'Brasil', null, null, null, null),
        (9, 'Rua Dona Veridiana', null, ' Higienópolis', 'São Paulo', 'Brasil', null, null, null, null),
        (10, 'Avenida São João', null, ' República', 'São Paulo', 'Brasil', null, null, null, null),
        (11, 'Rua Rio Formoso', null, ' Vila Nivi', 'São Paulo', 'Brasil', null, null, null, null),
        (12, 'Rua Marina Crespi', null, ' Mooca', 'São Paulo', 'Brasil', null, null, null, null),
        (13, 'Avenida 9 de Julho', null, ' Bela Vista', 'São Paulo', 'Brasil', null, null, null, null),
        (14, 'Rua Brás de Arzão', null, ' Nova Piraju', 'São Paulo', 'Brasil', null, null, null, null),
        (15, 'Rua Martim Burchard', null, ' Jardim Brasília (zona Norte)', 'São Paulo', 'Brasil', null, null, null, null),
        (16, 'Rua Santa Izabel', null, ' Vila Augusta', ' Guarulhos', 'Brasil', null, null, null, null),
        (17, 'Rua Oratorio', null, ' Bangú', ' santo andré', 'Brasil', null, null, null, null),
        (18, 'Rua Francisco Rossano', null, ' Sítio da Figueira', 'São Paulo', 'Brasil', null, null, null, null),
        (19, 'Rua da Chibata', null, ' Vila Andrade', 'São Paulo', 'Brasil', null, null, null, null),
        (20, 'Rua Manuel Viêira da Luz', null, ' Sítio do Piqueri', 'São Paulo', 'Brasil', null, null, null, null),
        (21, 'Rua Gregório Allegri', null, ' Vila das Belezas', 'São Paulo', 'Brasil', null, null, null, null),
        (22, 'Rua Paranapanema', null, ' Vila Vivaldi', ' São Bernardo do Campo', 'Brasil', null, null, null, null),
        (23, 'Rua Domingos Ataide', null, ' Parque Reboucas', 'São Paulo', 'Brasil', null, null, null, null),
        (24, 'Rua Domingos Ataide', null, ' Parque Reboucas', 'São Paulo', 'Brasil', null, null, null, null),
        (25, 'Avenida Álvaro Ramos', null, ' Quarta Parada', 'São Paulo', 'Brasil', null, null, null, null),
        (26, 'Rua Itararé', null, ' Bela Vista', 'São Paulo', 'Brasil', null, null, null, null),
        (27, 'Rua Dona Veridiana', null, ' Higienópolis', 'São Paulo', 'Brasil', null, null, null, null),
        (28, 'Avenida São João', null, ' República', 'São Paulo', 'Brasil', null, null, null, null),
        (29, 'Rua Rio Formoso', null, ' Vila Nivi', 'São Paulo', 'Brasil', null, null, null, null),
        (30, 'Rua Martiniano de Carvalho', null, ' Bela Vista', 'São Paulo', 'Brasil', null, null, null, null);


insert into "Residence" (id, "residenceCode", "source", "urlSource", "numberRooms", "numberBathrooms", "numberParkingSpace", "typeBuilding", "sizeResidence", "ResidenceAddressId", "createdAt", "updatedAt")
values  (1, 780528, 'QuintoAndar', 'https://www.quintoandar.com.br/imovel/893480528?house_tags=newAd&house_tags=rentPriceDecreased&search_rank=%7B%22sortMode%22%3A%22relevance%22%2C%22searchMode%22%3A%22list%22%2C%22resultsOrigin%22%3A%22search%22%2C%22rank%22%3A0%2C%22personalization%22%3Afalse%7D&search_id=%225459a9a8a6%22&from_route=%22search_results%22', 2, 1, 1, 'apartment', 44, 3, null, null),
        (2, 794253, 'QuintoAndar', 'https://www.quintoandar.com.br/imovel/893494253?search_rank=%7B%22sortMode%22%3A%22relevance%22%2C%22searchMode%22%3A%22list%22%2C%22resultsOrigin%22%3A%22search%22%2C%22rank%22%3A0%2C%22personalization%22%3Afalse%7D&search_id=%223e4d180a56%22&from_route=%22search_results%22', 2, 1, 1, 'apartment', 95, 5, null, null),
        (3, 794253, 'QuintoAndar', 'https://www.quintoandar.com.br/imovel/893494253?search_rank=%7B%22sortMode%22%3A%22relevance%22%2C%22searchMode%22%3A%22list%22%2C%22resultsOrigin%22%3A%22search%22%2C%22rank%22%3A0%2C%22personalization%22%3Afalse%7D&search_id=%223e4d180a56%22&from_route=%22search_results%22', 2, 1, 1, 'apartment', 95, 6, null, null),
        (4, 794253, 'QuintoAndar', 'https://www.quintoandar.com.br/imovel/893494253?search_rank=%7B%22sortMode%22%3A%22relevance%22%2C%22searchMode%22%3A%22list%22%2C%22resultsOrigin%22%3A%22search%22%2C%22rank%22%3A0%2C%22personalization%22%3Afalse%7D&search_id=%223e4d180a56%22&from_route=%22search_results%22', 2, 1, 1, 'apartment', 95, 7, null, null),
        (5, 105577, 'QuintoAndar', 'https://www.quintoandar.com.br/imovel/892805577?search_rank=%7B%22sortMode%22%3A%22relevance%22%2C%22searchMode%22%3A%22list%22%2C%22resultsOrigin%22%3A%22search%22%2C%22rank%22%3A3%2C%22personalization%22%3Afalse%7D&search_id=%223e4d180a56%22&from_route=%22search_results%22', 1, 1, 0, 'apartment', 45, 8, null, null),
        (6, 627806, 'QuintoAndar', 'https://www.quintoandar.com.br/imovel/893327806?house_tags=rentPriceDecreased&search_rank=%7B%22sortMode%22%3A%22relevance%22%2C%22searchMode%22%3A%22list%22%2C%22resultsOrigin%22%3A%22search%22%2C%22rank%22%3A4%2C%22personalization%22%3Afalse%7D&search_id=%223e4d180a56%22&from_route=%22search_results%22', 1, 1, 0, 'apartment', 40, 9, null, null),
        (7, 791442, 'QuintoAndar', 'https://www.quintoandar.com.br/imovel/893491442?house_tags=newAd&search_rank=%7B%22sortMode%22%3A%22relevance%22%2C%22searchMode%22%3A%22list%22%2C%22resultsOrigin%22%3A%22search%22%2C%22rank%22%3A5%2C%22personalization%22%3Afalse%7D&search_id=%223e4d180a56%22&from_route=%22search_results%22', 2, 1, 0, 'apartment', 94, 10, null, null),
        (8, 789920, 'QuintoAndar', 'https://www.quintoandar.com.br/imovel/893489920?search_rank=%7B%22sortMode%22%3A%22relevance%22%2C%22searchMode%22%3A%22list%22%2C%22resultsOrigin%22%3A%22search%22%2C%22rank%22%3A6%2C%22personalization%22%3Afalse%7D&search_id=%223e4d180a56%22&from_route=%22search_results%22', 2, 3, 1, 'house', 60, 11, null, null),
        (9, 748781, 'QuintoAndar', 'https://www.quintoandar.com.br/imovel/893448781?search_rank=%7B%22sortMode%22%3A%22relevance%22%2C%22searchMode%22%3A%22list%22%2C%22resultsOrigin%22%3A%22search%22%2C%22rank%22%3A7%2C%22personalization%22%3Afalse%7D&search_id=%223e4d180a56%22&from_route=%22search_results%22', 3, 3, 2, 'apartment', 84, 12, null, null),
        (10, 306364, 'QuintoAndar', 'https://www.quintoandar.com.br/imovel/893006364?house_tags=rentPriceDecreased&search_rank=%7B%22sortMode%22%3A%22relevance%22%2C%22searchMode%22%3A%22list%22%2C%22resultsOrigin%22%3A%22search%22%2C%22rank%22%3A8%2C%22personalization%22%3Afalse%7D&search_id=%223e4d180a56%22&from_route=%22search_results%22', 1, 1, 0, 'apartment', 50, 13, null, null),
        (11, 769204, 'QuintoAndar', 'https://www.quintoandar.com.br/imovel/893469204?house_tags=rentPriceDecreased&search_rank=%7B%22sortMode%22%3A%22relevance%22%2C%22searchMode%22%3A%22list%22%2C%22resultsOrigin%22%3A%22search%22%2C%22rank%22%3A9%2C%22personalization%22%3Afalse%7D&search_id=%223e4d180a56%22&from_route=%22search_results%22', 1, 1, 0, 'apartment', 265, 14, null, null),
        (12, 759443, 'QuintoAndar', 'https://www.quintoandar.com.br/imovel/893459443?house_tags=rentPriceDecreased&search_rank=%7B%22sortMode%22%3A%22relevance%22%2C%22searchMode%22%3A%22list%22%2C%22resultsOrigin%22%3A%22search%22%2C%22rank%22%3A10%2C%22personalization%22%3Afalse%7D&search_id=%223e4d180a56%22&from_route=%22search_results%22', 2, 1, 0, 'apartment', 53, 15, null, null),
        (13, 740905, 'QuintoAndar', 'https://www.quintoandar.com.br/imovel/893440905?house_tags=rentPriceDecreased&search_rank=%7B%22sortMode%22%3A%22relevance%22%2C%22searchMode%22%3A%22list%22%2C%22resultsOrigin%22%3A%22search%22%2C%22rank%22%3A11%2C%22personalization%22%3Atrue%7D&search_id=%223e4d180a56%22&from_route=%22search_results%22', 1, 1, 0, 'apartment', 45, 16, null, null),
        (14, 748381, 'QuintoAndar', 'https://www.quintoandar.com.br/imovel/893448381?house_tags=rentPriceDecreased&search_rank=%7B%22sortMode%22%3A%22relevance%22%2C%22searchMode%22%3A%22list%22%2C%22resultsOrigin%22%3A%22search%22%2C%22rank%22%3A12%2C%22personalization%22%3Atrue%7D&search_id=%223e4d180a56%22&from_route=%22search_results%22', 2, 2, 0, 'apartment', 100, 17, null, null),
        (15, 493796, 'QuintoAndar', 'https://www.quintoandar.com.br/imovel/893193796?search_rank=%7B%22sortMode%22%3A%22relevance%22%2C%22searchMode%22%3A%22list%22%2C%22resultsOrigin%22%3A%22search%22%2C%22rank%22%3A13%2C%22personalization%22%3Atrue%7D&search_id=%223e4d180a56%22&from_route=%22search_results%22', 1, 1, 1, 'apartment', 40, 18, null, null),
        (16, 723151, 'QuintoAndar', 'https://www.quintoandar.com.br/imovel/893423151?house_tags=rentPriceDecreased&search_rank=%7B%22sortMode%22%3A%22relevance%22%2C%22searchMode%22%3A%22list%22%2C%22resultsOrigin%22%3A%22search%22%2C%22rank%22%3A20%2C%22personalization%22%3Atrue%7D&search_id=%223e4d180a56%22&from_route=%22search_results%22', 2, 1, 0, 'apartment', 42, 19, null, null),
        (17, 791388, 'QuintoAndar', 'https://www.quintoandar.com.br/imovel/893491388?house_tags=rentPriceDecreased&search_rank=%7B%22sortMode%22%3A%22relevance%22%2C%22searchMode%22%3A%22list%22%2C%22resultsOrigin%22%3A%22search%22%2C%22rank%22%3A26%2C%22personalization%22%3Atrue%7D&search_id=%223e4d180a56%22&from_route=%22search_results%22', 2, 1, 1, 'house', 80, 20, null, null),
        (18, 805662, 'QuintoAndar', 'https://www.quintoandar.com.br/imovel/893505662?house_tags=newAd&house_tags=rentPriceDecreased&search_rank=%7B%22sortMode%22%3A%22relevance%22%2C%22searchMode%22%3A%22list%22%2C%22resultsOrigin%22%3A%22search%22%2C%22rank%22%3A30%2C%22personalization%22%3Atrue%7D&search_id=%223e4d180a56%22&from_route=%22search_results%22', 2, 2, 1, 'apartment', 54, 21, null, null),
        (19, 440931, 'QuintoAndar', 'https://www.quintoandar.com.br/imovel/893140931?house_tags=rentPriceDecreased&search_rank=%7B%22sortMode%22%3A%22relevance%22%2C%22searchMode%22%3A%22list%22%2C%22resultsOrigin%22%3A%22search%22%2C%22rank%22%3A37%2C%22personalization%22%3Atrue%7D&search_id=%223e4d180a56%22&from_route=%22search_results%22', 2, 1, 1, 'house', 80, 22, null, null),
        (20, 780528, 'QuintoAndar', 'https://www.quintoandar.com.br/imovel/893480528?house_tags=newAd&search_rank=%7B%22sortMode%22%3A%22relevance%22%2C%22searchMode%22%3A%22list%22%2C%22resultsOrigin%22%3A%22search%22%2C%22rank%22%3A0%2C%22personalization%22%3Afalse%7D&search_id=%225459a9a8a6%22&from_route=%22search_results%22', 2, 1, 1, 'apartment', 44, 23, null, null),
        (21, 780528, 'QuintoAndar', 'https://www.quintoandar.com.br/imovel/893480528?house_tags=newAd&search_rank=%7B%22sortMode%22%3A%22relevance%22%2C%22searchMode%22%3A%22list%22%2C%22resultsOrigin%22%3A%22search%22%2C%22rank%22%3A0%2C%22personalization%22%3Afalse%7D&search_id=%225459a9a8a6%22&from_route=%22search_results%22', 2, 1, 1, 'apartment', 44, 24, null, null),
        (22, 794253, 'QuintoAndar', 'https://www.quintoandar.com.br/imovel/893494253?search_rank=%7B%22sortMode%22%3A%22relevance%22%2C%22searchMode%22%3A%22list%22%2C%22resultsOrigin%22%3A%22search%22%2C%22rank%22%3A0%2C%22personalization%22%3Afalse%7D&search_id=%223e4d180a56%22&from_route=%22search_results%22', 2, 1, 1, 'apartment', 95, 25, null, null),
        (23, 105577, 'QuintoAndar', 'https://www.quintoandar.com.br/imovel/892805577?search_rank=%7B%22sortMode%22%3A%22relevance%22%2C%22searchMode%22%3A%22list%22%2C%22resultsOrigin%22%3A%22search%22%2C%22rank%22%3A3%2C%22personalization%22%3Afalse%7D&search_id=%223e4d180a56%22&from_route=%22search_results%22', 1, 1, 0, 'apartment', 45, 26, null, null),
        (24, 627806, 'QuintoAndar', 'https://www.quintoandar.com.br/imovel/893327806?house_tags=rentPriceDecreased&search_rank=%7B%22sortMode%22%3A%22relevance%22%2C%22searchMode%22%3A%22list%22%2C%22resultsOrigin%22%3A%22search%22%2C%22rank%22%3A4%2C%22personalization%22%3Afalse%7D&search_id=%223e4d180a56%22&from_route=%22search_results%22', 1, 1, 0, 'apartment', 40, 27, null, null),
        (25, 791442, 'QuintoAndar', 'https://www.quintoandar.com.br/imovel/893491442?house_tags=newAd&search_rank=%7B%22sortMode%22%3A%22relevance%22%2C%22searchMode%22%3A%22list%22%2C%22resultsOrigin%22%3A%22search%22%2C%22rank%22%3A5%2C%22personalization%22%3Afalse%7D&search_id=%223e4d180a56%22&from_route=%22search_results%22', 2, 1, 0, 'apartment', 94, 28, null, null),
        (26, 789920, 'QuintoAndar', 'https://www.quintoandar.com.br/imovel/893489920?search_rank=%7B%22sortMode%22%3A%22relevance%22%2C%22searchMode%22%3A%22list%22%2C%22resultsOrigin%22%3A%22search%22%2C%22rank%22%3A6%2C%22personalization%22%3Afalse%7D&search_id=%223e4d180a56%22&from_route=%22search_results%22', 2, 3, 1, 'house', 60, 29, null, null),
        (27, 130268, 'QuintoAndar', 'https://www.quintoandar.com.br/imovel/892830268?search_rank=%7B%22sortMode%22%3A%22relevance%22%2C%22searchMode%22%3A%22list%22%2C%22resultsOrigin%22%3A%22search%22%2C%22rank%22%3A7%2C%22personalization%22%3Afalse%7D&search_id=%223e4d180a56%22&from_route=%22search_results%22', 1, 1, 1, 'apartment', 43, 30, null, null);






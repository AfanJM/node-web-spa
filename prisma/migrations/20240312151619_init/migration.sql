-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR NOT NULL,
    "createdAt" TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

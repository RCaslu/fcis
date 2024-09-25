-- CreateTable
CREATE TABLE "UserFCIS" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "whatsapp" TEXT,

    CONSTRAINT "UserFCIS_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserFCIS_email_key" ON "UserFCIS"("email");

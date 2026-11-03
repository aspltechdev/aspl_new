-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateTable
CREATE TABLE "public"."admins" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password_hash" TEXT NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "admins_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."applications" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(20) NOT NULL,
    "location" VARCHAR(200),
    "position" VARCHAR(150) NOT NULL,
    "experience_level" VARCHAR(50),
    "resume_url" TEXT NOT NULL,
    "status" VARCHAR(30) DEFAULT 'NEW',
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "applications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."follow_up_notes" (
    "id" BIGSERIAL NOT NULL,
    "lead_id" BIGINT,
    "application_id" BIGINT,
    "note" TEXT NOT NULL,
    "follow_up_date" TIMESTAMP(6),
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "follow_up_notes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."leads" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(20) NOT NULL,
    "company" VARCHAR(200),
    "service" VARCHAR(150),
    "message" TEXT NOT NULL,
    "status" VARCHAR(30) DEFAULT 'NEW',
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "leads_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "admins_email_key" ON "public"."admins"("email" ASC);

-- CreateIndex
CREATE INDEX "idx_applications_email" ON "public"."applications"("email" ASC);

-- CreateIndex
CREATE INDEX "idx_applications_position" ON "public"."applications"("position" ASC);

-- CreateIndex
CREATE INDEX "idx_applications_status" ON "public"."applications"("status" ASC);

-- CreateIndex
CREATE INDEX "idx_followup_application" ON "public"."follow_up_notes"("application_id" ASC);

-- CreateIndex
CREATE INDEX "idx_followup_lead" ON "public"."follow_up_notes"("lead_id" ASC);

-- CreateIndex
CREATE INDEX "idx_leads_email" ON "public"."leads"("email" ASC);

-- CreateIndex
CREATE INDEX "idx_leads_status" ON "public"."leads"("status" ASC);

-- AddForeignKey
ALTER TABLE "public"."follow_up_notes" ADD CONSTRAINT "follow_up_notes_application_id_fkey" FOREIGN KEY ("application_id") REFERENCES "public"."applications"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."follow_up_notes" ADD CONSTRAINT "follow_up_notes_lead_id_fkey" FOREIGN KEY ("lead_id") REFERENCES "public"."leads"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

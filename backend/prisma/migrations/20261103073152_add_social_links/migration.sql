-- CreateTable
CREATE TABLE "social_links" (
    "id" BIGSERIAL NOT NULL,
    "platform" VARCHAR(50) NOT NULL,
    "url" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "sort_order" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "social_links_pkey" PRIMARY KEY ("id")
);

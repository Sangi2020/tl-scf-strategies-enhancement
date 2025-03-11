BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[NewsletterSubscriber] (
    [id] INT NOT NULL IDENTITY(1,1),
    [email] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [NewsletterSubscriber_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [NewsletterSubscriber_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [NewsletterSubscriber_email_key] UNIQUE NONCLUSTERED ([email])
);

-- CreateIndex
CREATE NONCLUSTERED INDEX [NewsletterSubscriber_email_idx] ON [dbo].[NewsletterSubscriber]([email]);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH

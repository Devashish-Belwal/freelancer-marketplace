import { z } from "zod";

export const createProposalSchema = z.object({
  coverLetter: z.string().min(1, "Cover letter is required"),

  proposedPrice: z
    .number()
    .int()
    .positive("Proposed price must be greater than 0"),

  estimatedDuration: z
    .number()
    .int()
    .positive("Estimated duration must be greater than 0"),
});

export type CreateProposalInput = z.infer<
  typeof createProposalSchema
>;
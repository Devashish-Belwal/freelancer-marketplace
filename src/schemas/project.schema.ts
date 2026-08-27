import { Temporal } from "temporal-polyfill";
import { z } from "zod";

export const createProjectSchema = z
  .object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    category: z.string().min(1, "Category is required"),
    budgetMin: z.number().int().positive("Minimum budget must be greater than 0"),
    budgetMax: z.number().int().positive("Maximum budget must be greater than 0"),
    deadline: z.iso.datetime(),
  })
  .refine((data) => data.budgetMax >= data.budgetMin, {
    message:
      "Maximum budget must be greater than or equal to minimum budget",
    path: ["budgetMax"],
  })
  .refine(
    (data) => {
      const deadline = Temporal.Instant.from(data.deadline);
      const now = Temporal.Now.instant();

      return deadline.epochMilliseconds > now.epochMilliseconds;
    },
    {
      message: "Deadline must be in the future",
      path: ["deadline"],
    },
  );

export const projectFilterSchema = z.object({
  category: z.string().optional(),
  minBudget: z.coerce.number().int().positive().optional(),
  maxBudget: z.coerce.number().int().positive().optional(),
});

export type CreateProjectInput = z.infer<typeof createProjectSchema>;
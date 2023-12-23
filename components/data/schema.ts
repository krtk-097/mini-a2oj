import { z } from "zod";

export const questionSchema = z.object({
  _id: z.string(),
  index: z.string(),
  name: z.string(),
  tags: z.array(z.string()),
  rating: z.number(),
  frequency: z.number(),
  contestId: z.string(),
  status: z.enum(["AC", "NOTAC", "WA", "CE", "RE", "MLE", "TLE", "N/A"]),
});

export type Question = z.infer<typeof questionSchema>;

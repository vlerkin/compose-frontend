import { z } from "zod";

export const checkMessageFormData = z.object({
    note: z.string().max(30, "Message must be 30 characters or less")
});

export type DataFromMessageForm = z.infer<typeof checkMessageFormData>;
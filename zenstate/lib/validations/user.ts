import * as z from 'zod';

// Validate user entry during onboarding
export const UserValidation = z.object({
    name: z.string().min(3).max(30),
    username: z.string().min(3).max(30),
})
import { z } from 'zod';

// Copied from backend code
export enum UserRole {
  ACCOUNT_OWNER = 'ACCOUNT_OWNER',
  ADMIN = 'ADMIN',
  BUSINESS_MANAGER = 'BUSINESS_MANAGER',
  CLIENT = 'CLIENT',
  PEOPLE_OFFICER = 'PEOPLE_OFFICER',
}

const UserSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  firstName: z.string(),
  fullName: z.string(),
  lastName: z.string(),
  role: z.nativeEnum(UserRole),
  phone: z.string(),
  photo: z.string(),
});

type UserType = z.infer<typeof UserSchema>;

export { UserSchema, type UserType };

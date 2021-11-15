import { PrismaClient } from '@prisma/client';

export async function dbSetup(): Promise<void> {
  const prisma = new PrismaClient();
  try {
    await prisma.$connect();
  } catch (err) {
    await prisma.$disconnect();
    throw new Error(err);
  }
}

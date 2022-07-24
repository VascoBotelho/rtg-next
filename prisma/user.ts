import { User } from "@prisma/client"
import prisma from "../lib/prisma"

export const user = async (id: string): Promise<User> => {
  const user = await prisma.user.findUnique({ where: { id } })
  if (!user) throw new Error("User not found")
  return user
}

export const migrateUser = async (id: string) =>
  await prisma.user.update({
    data: {},
    where: { id },
  })

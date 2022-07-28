import prisma from '../lib/prisma'
import { users } from '@prisma/client'

export const user_old = async (id: string): Promise<users> => {
	const user = await prisma.users.findUnique({ where: { id } })
	if (!user) throw new Error('User not found')
	return user
}

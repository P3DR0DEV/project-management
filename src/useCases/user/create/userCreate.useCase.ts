import { prisma } from "@/lib/prisma"
import { CreateUserRequestDTO } from "./userCreate.dto"

async function createUser(data: CreateUserRequestDTO) {
  try {
    await prisma.$connect()

    const user = await prisma.user.create({
      data,
    })

    if (!user) {
      throw new Error("Failed create User")
    }
    return user
  } catch (err) {
    const error = err as Error
    return error
  }
}

export { createUser }

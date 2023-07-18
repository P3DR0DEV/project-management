import { prisma } from "@/lib/prisma"
import { UserUpdateRequestDTO } from "./userUpdate.dto"

async function updateUser({ id, data }: UserUpdateRequestDTO) {
  try {
    await prisma.$connect()

    const user = await prisma.user.update({
      where: { id },
      data,
    })

    if (!user) {
      throw new Error("Failed delete User")
    }
    return user
  } catch (err) {
    const error = err as Error
    return error
  }
}

export { updateUser }

import { prisma } from "@/lib/prisma"
import { UserDeleteRequestDTO } from "./userDelete.dto"

async function deleteUser(id: UserDeleteRequestDTO) {
  try {
    await prisma.$connect()

    const user = await prisma.user.delete({
      where: {
        id,
      },
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

export { deleteUser }

import { createUserController } from "./create/userCreate.Controller"
import { deleteUser } from "./delete/userDelete.useCase"
import { updateUser } from "./update/userUpdate.useCase"

const userController = {
  delete: deleteUser,
  update: updateUser,
  create: createUserController,
}

export { userController }

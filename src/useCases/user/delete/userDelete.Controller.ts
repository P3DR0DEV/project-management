import { Request, Response } from "express"
import { deleteUser } from "./userDelete.useCase"

const createUserController = async (req: Request, res: Response) => {
  const deletedUser = await deleteUser(req.params.id)

  if (deletedUser instanceof Error) {
    return res.status(400).json({
      success: false,
      error: deletedUser.message,
    })
  }

  return res.status(200).json({
    success: true,
    data: deletedUser,
  })
}

export { createUserController }

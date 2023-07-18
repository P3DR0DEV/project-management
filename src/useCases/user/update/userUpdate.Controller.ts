import { Request, Response } from "express"
import { updateUser } from "./userUpdate.useCase"

const createUserController = async (req: Request, res: Response) => {
  const updatedUser = await updateUser({ id: req.params.id, data: req.body })

  if (updatedUser instanceof Error) {
    return res.status(400).json({
      success: false,
      error: updatedUser.message,
    })
  }

  return res.status(200).json({
    success: true,
    data: updatedUser,
  })
}

export { createUserController }

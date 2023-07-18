import { Request, Response } from "express"
import { createUser } from "./userCreate.useCase"

const createUserController = async (req: Request, res: Response) => {
  const newUser = await createUser(req.body)

  if (newUser instanceof Error) {
    return res.status(400).json({
      success: false,
      error: newUser.message,
    })
  }

  return res.status(200).json({
    success: true,
    data: newUser,
  })
}

export { createUserController }

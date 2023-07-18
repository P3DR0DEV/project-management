import { userController } from "@/useCases/user/userController"
import { Router } from "express"

const userRouter = Router()

userRouter.post("/create", userController.create)
userRouter.delete("/delete", userController.delete)
userRouter.put("/update", userController.update)

export { userRouter }

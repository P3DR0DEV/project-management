import express from "express"
import "dotenv/config"
import { userController } from "./useCases/user/userController"

const app = express()

app.use(express.json())
app.post("/", userController.create)

app.listen(process.env.PORT, () => {
  /* eslint-disable-next-line */
  console.log(`Running on ${process.env.PORT}`)
})

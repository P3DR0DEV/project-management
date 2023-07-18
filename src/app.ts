import express from "express"
import "dotenv/config"
import { userRouter } from "./routes/userRouter"

const app = express()

app.use(express.json())
app.use("/user", userRouter)

app.listen(process.env.PORT, () => {
  /* eslint-disable-next-line */
  console.log(`Running on ${process.env.PORT}`)
})

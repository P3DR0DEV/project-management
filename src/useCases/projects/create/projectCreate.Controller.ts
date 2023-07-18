import { Request, Response } from "express"
import { createProject } from "./projectCreate.useCase"

const createProjectController = async (req: Request, res: Response) => {
  const newProject = await createProject(req.body)

  if (newProject instanceof Error) {
    return res.status(400).json({
      success: false,
      error: newProject.message,
    })
  }

  return res.status(200).json({
    success: true,
    data: newProject,
  })
}

export { createProjectController }

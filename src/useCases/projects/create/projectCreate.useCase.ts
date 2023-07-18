import { prisma } from "@/lib/prisma"
import { CreateProjectRequestDTO } from "./projectCreate.dto"

async function createProject(data: CreateProjectRequestDTO) {
  try {
    await prisma.$connect()

    const project = await prisma.projects.create({
      data,
    })

    if (!project) {
      throw new Error("Failed create project")
    }
    return project
  } catch (err) {
    const error = err as Error
    return error
  }
}

export { createProject }

interface CreateProjectRequestDTO {
  name: string
  userId: string
  period: Date
  clientName: string
  observations: string
}

interface CreateProjectResponseDTO {
  id: string
  name: string
  userId: string
  period: Date
  clientName: string
  observations: string
}

export { CreateProjectRequestDTO, CreateProjectResponseDTO }

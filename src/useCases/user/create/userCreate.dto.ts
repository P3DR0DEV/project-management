interface CreateUserRequestDTO {
  name: string
  email: string
  password: string
}

interface CreateUserResponseDTO {
  id: string
  name: string
  email: string
  message: string
}

export { CreateUserRequestDTO, CreateUserResponseDTO }

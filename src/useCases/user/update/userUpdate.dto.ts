interface UserUpdateRequestDTO {
  id: string
  data: User
}

type User = { name?: string; email?: string; password?: string }

interface UserUpdateResponseDTO {
  id: string
  name: string
  email: string
  message: string
}

export { UserUpdateRequestDTO, UserUpdateResponseDTO }

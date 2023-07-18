interface UserUpdateRequestDTO {
  name?: string
  email?: string
  password?: string
}

interface UserUpdateResponseDTO {
  id: string
  name: string
  email: string
  message: string
}

export { UserUpdateRequestDTO, UserUpdateResponseDTO }

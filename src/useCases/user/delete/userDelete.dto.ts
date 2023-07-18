interface UserDeleteRequestDTO {
  id: string
}

interface UserDeleteResponseDTO {
  name: string
  email: string
  message: string
}
export { UserDeleteRequestDTO, UserDeleteResponseDTO }

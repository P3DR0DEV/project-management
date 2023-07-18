declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string | number
    }
  }
}
export {}

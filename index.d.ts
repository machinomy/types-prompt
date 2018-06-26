declare module 'prompt' {
  class Prompt {
    message: string = 'prompt'
    colors: boolean = true

    start (): void
    pause (): void
    stop (): void
    resume (): void
    history (search: Number | string): Object
    get<T> (schema: Array | Object | string, callback: (err: Error, result: T) => void): Object
  }

  const prompt: Prompt
  export default prompt
}

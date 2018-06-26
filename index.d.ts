declare module 'prompt' {
  namespace PromptNS {
    class Prompt {
      start (): void
      pause (): void
      stop (): void
      resume (): void
      history (search: Number | string): Object
      get (schema: Array | Object | string, callback: Function): Object
    }

  }

  export = PromptNS
}
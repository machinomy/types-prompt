declare module 'prompt' {
  namespace PromptNS {
    let message: string = 'prompt'
    let colors: boolean = true

    function start (): void
    function pause (): void
    function stop (): void
    function resume (): void
    function history (search: Number | string): Object
    function get<T> (schema: Array | Object | string, callback: (err: Error, result: T) => void): Object
  }

  export = PromptNS
}
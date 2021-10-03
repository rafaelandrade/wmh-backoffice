export class HealthError extends Error {
    public readonly status: number

    constructor (message: string) {
      super(message)
      this.name = this.constructor.name
      this.message = message
      this.status = 500
    }
}

import { Ticket } from '../interfaces/Ticket'

export class InterstateBusTicket implements Ticket {
  source: string
  destination: string
  departureTime: Date

  constructor (
    source: string,
    destination: string,
    departureTime: Date
  ) {
    this.departureTime = departureTime
    this.destination = destination
    this.source = source
  }

  showDetails (): void {
    console.log(`
      Interstate bus ticket:
      From -> ${this.source},
      To -> ${this.destination},
      Date -> ${this.departureTime}`
    )
  }
}

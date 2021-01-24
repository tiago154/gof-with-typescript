import { Ticket } from '../interfaces/Ticket'

export abstract class Company {
  public abstract issueTicket(
    source: string,
    destination: string,
    departureTime: Date
  ): Ticket
}

import { Company } from '../abstractions/Company'
import { Ticket } from '../interfaces/Ticket'
import { UrbanBusTicket } from './UrbanBusTicket'

export class UrbanBusCompany extends Company {
  public issueTicket (
    source: string,
    destination: string,
    departureTime: Date
  ): Ticket {
    return new UrbanBusTicket(source, destination, departureTime)
  }
}

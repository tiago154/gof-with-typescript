import { Company } from '../abstractions/Company'
import { Ticket } from '../interfaces/Ticket'
import { InterstateBusTicket } from './InterstateBusTicket'

export class InterstateBusCompany extends Company {
  public issueTicket (
    source: string,
    destination: string,
    departureTime: Date
  ): Ticket {
    return new InterstateBusTicket(source, destination, departureTime)
  }
}

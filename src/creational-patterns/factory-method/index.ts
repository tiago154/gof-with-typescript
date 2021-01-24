import { InterstateBusCompany } from './implementations/InterstateBusCompany'
import { UrbanBusCompany } from './implementations/UrbanBusCompany'

const start = () => {
  const InterstateCompany = new InterstateBusCompany()

  const UrbanCompany = new UrbanBusCompany()

  const interstateTicket = InterstateCompany.issueTicket('Campinas', 'Rio de Janeiro', new Date())
  const urbanTicket = UrbanCompany.issueTicket('São Paulo', 'Osasco', new Date())

  interstateTicket.showDetails()
  urbanTicket.showDetails()
}

start()

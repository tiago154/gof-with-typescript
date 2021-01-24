export interface Ticket {
  source: string
  destination: string
  departureTime: Date

  showDetails: () => void
}

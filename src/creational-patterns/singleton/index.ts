import { Client } from './Client'

const start = () => {
  const clientOne = Client.getInstance()
  const clientTwo = Client.getInstance()

  if (clientOne === clientTwo)
    console.log('Equal instances')
  else
    console.log('Different instances')
}

start()

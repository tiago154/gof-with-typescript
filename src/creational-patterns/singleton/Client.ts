export class Client {
  // eslint-disable-next-line no-useless-constructor
  private constructor () { }

  private static instance: Client

  public static getInstance (): Client {
    if (!Client.instance)
      Client.instance = new Client()

    return Client.instance
  }
}

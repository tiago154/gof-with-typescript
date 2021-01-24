export class Client {
  private constructor () { }

  private static instance: Client

  public static getInstance (): Client {
    if (!Client.instance)
      Client.instance = new Client()

    return Client.instance
  }
}

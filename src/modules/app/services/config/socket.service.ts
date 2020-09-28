class SocketService {
  /**
   * Init stomp client
   */
  public constructor(public client: any) {}
  /**
   * Send
   */
  public send(event = 'message', payload: any) {
    this.client.emit(event, payload);
  }
}

export { SocketService };

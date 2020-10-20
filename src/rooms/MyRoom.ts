import { Room, Client } from "colyseus";
import { MyRoomState, Player } from "./schema/MyRoomState";

export class MyRoom extends Room {

  onCreate (options: any) {
    var state = new MyRoomState()
    state.player = new Player()
    this.setState(state);

    this.clock.setTimeout(() => {
      this.broadcast(state.player)
    }, 3000)
  }

  onJoin (client: Client, options: any) {
  }

  onLeave (client: Client, consented: boolean) {
  }

  onDispose() {
  }

}

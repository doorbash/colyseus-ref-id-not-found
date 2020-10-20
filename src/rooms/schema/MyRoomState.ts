import { Schema, type } from "@colyseus/schema";

export class Player extends Schema {
  @type("string")
  name: string = "Bob"

  @type("number")
  x: number = 100

  @type("number")
  y: number = 200
}

export class MyRoomState extends Schema {
  @type(Player)
  player: Player
}
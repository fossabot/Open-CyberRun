import { Db, MongoClient } from "mongodb";
import GameModule from "./modules/game";
import JWTModule from "./modules/jwt";
import LevelModule from "./modules/level";
import LogModule from "./modules/log";
import UserModule from "./modules/user";

export class CyberRun {
  client: MongoClient
  db: Db

  user: UserModule
  jwt: JWTModule
  game: GameModule
  level: LevelModule
  log: LogModule

  constructor() {
    
  }

  async start() {
    const uri = "mongodb://localhost"

    this.client = new MongoClient(uri)
    await this.client.connect()
    this.db = await this.client.db('cyberrun')

    this.user = new UserModule(this)
    this.jwt = new JWTModule(this)
    this.game = new GameModule(this)
    this.level = new LevelModule(this)
    this.log = new LogModule(this)
  }
}
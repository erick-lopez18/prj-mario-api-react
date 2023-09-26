import {
  Column,
  Model,
  Table,
  BelongsToMany,
  ForeignKey,
} from "sequelize-typescript"
import { Game } from "../game/game.model"
import { GameCharacter } from "../game_character/game_character.model"

@Table
export class Character extends Model {
  @Column
  name: string

  @Column
  year_released: number

  @Column
  image_url: string

  @ForeignKey(() => Game)
  @Column
  debut_game: number

  @BelongsToMany(() => Game, () => GameCharacter)
  games: Game[]
}

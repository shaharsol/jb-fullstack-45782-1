import { AllowNull, Column, DataType, Default, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import Game from "./Game";

@Table({
    underscored: true
})
export default class Audience extends Model {

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string

    @AllowNull(false)
    @Column(DataType.STRING)
    name: string

    @HasMany(() => Game, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    games: Game[]


}
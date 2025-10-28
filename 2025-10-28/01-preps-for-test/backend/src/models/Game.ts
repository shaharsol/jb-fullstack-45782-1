import { AllowNull, BelongsTo, Column, DataType, Default, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import Audience from "./Audience";

@Table({
    underscored: true
})
export default class Game extends Model {

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string

    @ForeignKey(() => Audience)
    @AllowNull(false)
    @Column(DataType.UUID)
    audienceId: string // -> auduence.id


    @AllowNull(false)
    @Column(DataType.STRING)
    name: string

    @AllowNull(false)
    @Column(DataType.TEXT)
    description: string

    @AllowNull(true)
    @Column(DataType.INTEGER)
    price: number

    @BelongsTo(() => Audience)
    audience: Audience

}
import { Column } from "sequelize-typescript";
import { Default } from "sequelize-typescript";
import { Index } from "sequelize-typescript";
import { AllowNull } from "sequelize-typescript";
import { DataType } from "sequelize-typescript";
import { PrimaryKey } from "sequelize-typescript";
import { Model, Table } from "sequelize-typescript";

@Table({
    underscored: true
})
export default class User extends Model {
    @PrimaryKey
    @Column(DataType.UUID)
    @Default(DataType.UUIDV4)
    id: string

    @Column(DataType.STRING)
    @AllowNull(false)
    name: string

    @Column(DataType.STRING)
    @AllowNull(false)
    @Index({ unique: true })
    username: string

    @Column(DataType.STRING)
    @AllowNull(false)
    password: string
}
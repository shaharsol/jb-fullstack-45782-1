import { AllowNull, BelongsTo, Column, DataType, Default, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import User from "./User";
import Post from "./Post";






@Table({
    underscored: true
})
export default class Comment extends Model {
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string

    @ForeignKey(() => User)
    @AllowNull(false)
    @Column(DataType.UUID)
    userId: string

    @ForeignKey(() => Post)
    @AllowNull(false)
    @Column(DataType.UUID)
    postId: string

    @AllowNull(false)
    @Column(DataType.TEXT)
    body: string

    @BelongsTo(() => User)
    user: User

    @BelongsTo(() => Post)
    post: Post
}
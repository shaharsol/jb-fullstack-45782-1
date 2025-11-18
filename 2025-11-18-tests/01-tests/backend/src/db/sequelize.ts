import { Sequelize } from "sequelize-typescript";
import config from 'config'
import User from "../models/User";
import Post from "../models/Post";
import Comment from "../models/Comment";
import Follow from "../models/Follow";

const sequelize = new Sequelize({
    ...config.get('db'),
    dialect: 'mysql',
    models: [User, Post, Comment, Follow],
    logging: console.log
})

export default sequelize
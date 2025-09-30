import { Sequelize } from "sequelize-typescript";
import config from 'config'
import User from "../models/User";

const sequelize = new Sequelize({
    ...config.get('db'),
    dialect: 'mysql',
    models: [User],
    logging: console.log
})

export default sequelize
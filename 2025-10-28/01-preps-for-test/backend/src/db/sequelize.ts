import { Sequelize } from "sequelize-typescript";
import config from 'config'
import Audience from "../models/Audience";
import Game from "../models/Game";

const sequelize = new Sequelize({
    ...config.get('db'),
    dialect: 'mysql',
    models: [Audience, Game],
    logging: console.log
})

export default sequelize
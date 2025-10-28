import { NextFunction, Request, Response } from "express";
import Audience from "../../models/Audience";
import Game from "../../models/Game";
import { Op } from 'sequelize'

export async function filterByAudience(req: Request<{audienceId: string}>, res: Response, next: NextFunction) {
    try {
        const { games } = await Audience.findByPk(req.params.audienceId, {
            include: [Game]
        })
        res.json(games)
    } catch (e) {
        next(e)
    }
}

export async function filterByMaxPrice(req: Request, res: Response, next: NextFunction) {
    try {
        const games = await Game.findAll({
            where: {
                price: {
                    [Op.lte]: req.query.maxPrice
                }
            },
            include : [Audience]
        })
        res.json(games)
    } catch (e) {
        next(e)
    }
}

export async function createGame(req: Request, res: Response, next: NextFunction) {

    try {
        const newGame = await Game.create(req.body)
        await newGame.reload({include: Audience})
        res.json(newGame)
    } catch (e) {
        next(e)
    }
}

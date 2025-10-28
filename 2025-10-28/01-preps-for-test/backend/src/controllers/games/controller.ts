import { NextFunction, Request, Response } from "express";
import Audience from "../../models/Audience";
import Game from "../../models/Game";

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
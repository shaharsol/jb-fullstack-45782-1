import { GameDraft } from "./GameDraft";

export interface Game extends GameDraft {
    id: string
    createdAt: string
    updatedAt: string
}
import axios from "axios";
import { Game } from "../models/Game";
import { GameDraft } from "../models/GameDraft";

class GamesService {
    async getByAudienceId(audienceId: string): Promise<Game[]> {
        const { data } = await axios.get<Game[]>(`${import.meta.env.VITE_REST_SERVER_URL}/games/by-audience/${audienceId}`);
        return data;
    }

    async getByMaxPrice(maxPrice: number): Promise<Game[]> {
        const { data } = await axios.get<Game[]>(`${import.meta.env.VITE_REST_SERVER_URL}/games/by-max-price?maxPrice=${maxPrice}`);
        return data;
    }

    async create(draft: GameDraft): Promise<Game> {
        const { data } = await axios.post<Game>(`${import.meta.env.VITE_REST_SERVER_URL}/games`, draft);
        return data;
    }


}

export default new GamesService();

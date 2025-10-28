import axios from "axios";
import { Audience } from "../models/Audience";

class AudiencesService {
    async getAll(): Promise<Audience[]> {
        const { data } = await axios.get<Audience[]>(`${import.meta.env.VITE_REST_SERVER_URL}/audiences`);
        return data;
    }
}

export default new AudiencesService();

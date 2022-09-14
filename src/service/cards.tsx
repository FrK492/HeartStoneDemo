import axios from "axios"
import { IHeartStoneResponse } from "../interfaces"
import { client } from "./api"

export const getCards = async (): Promise<IHeartStoneResponse | null> => {
    const res = await client.get<IHeartStoneResponse>('cards')
    if (axios.isAxiosError(res)) {
        return null
    } else {
        return res.data
    }
}
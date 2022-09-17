import axios from "axios"
import { IHeartStoneCard, IHeartStoneResponse } from "../interfaces"
import { client } from "./api"

export const getCards = async (): Promise<IHeartStoneResponse | null> => {
    const res = await client.get<IHeartStoneResponse>('cards')
    if (axios.isAxiosError(res)) {
        return null
    } else {
        return res.data
    }
}

export const searchCards = async (searchTerm: string): Promise<Array<IHeartStoneCard> | null> => {
    const res = await client.get<Array<IHeartStoneCard>>(`cards/search/${searchTerm}`)
    if (axios.isAxiosError(res)) {
        return null
    } else {
        return res.data
    }
}
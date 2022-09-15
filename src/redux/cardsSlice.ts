import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IHeartStoneCard } from '../interfaces'
import { getCards } from '../service/cards'
import {
    convertHeartStoneResponseToArray,
    exportMechanicsFromHeartStoneCards
} from '../utils/arrayManipluation'


export interface HeartStoneState {
    cards: Array<IHeartStoneCard>
    loading: boolean,
    mechanics: Array<string>
}

const initialState: HeartStoneState = {
    cards: [],
    loading: false,
    mechanics: []
}

export const fetchCardsFromApi = createAsyncThunk(
    'heartstoneDemo/cards',
    async () => {
        const response = await getCards()
        if (response) {
            return response
        }
        return null
    }
)

export const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCardsFromApi.pending, (state) => {
            state.loading = true
        }),
        builder.addCase(fetchCardsFromApi.rejected, (state) => {
            state.loading = false
        }),
        builder.addCase(fetchCardsFromApi.fulfilled, (state, { payload }) => {
            if (payload) {
                const cards = convertHeartStoneResponseToArray(payload)
                state.cards = cards
                state.mechanics = exportMechanicsFromHeartStoneCards(cards)
            }
            state.loading = false
        })
    }
})

export const {  } = cardsSlice.actions

export default cardsSlice.reducer
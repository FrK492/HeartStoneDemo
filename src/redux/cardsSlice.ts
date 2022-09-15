import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IHeartStoneCard } from '../interfaces'
import { getCards } from '../service/cards'


export interface HeartStoneState {
    cards: Array<IHeartStoneCard>
    loading: boolean
}

const initialState: HeartStoneState = {
    cards: [],
    loading: false
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
            // #TODO: Handle response and transform data here 
        })
    }
})

export const {  } = cardsSlice.actions

export default cardsSlice.reducer
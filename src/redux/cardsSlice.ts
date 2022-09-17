import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IHeartStoneCard } from '../interfaces'
import { getCards, searchCards } from '../service/cards'
import {
    convertHeartStoneResponseToArray,
    exportMechanicsFromHeartStoneCards
} from '../utils/arrayManipluation'


export interface HeartStoneState {
    cards: Array<IHeartStoneCard>
    loading: boolean
    mechanics: Array<string>
    searchResults: Array<IHeartStoneCard>
}

const initialState: HeartStoneState = {
    cards: [],
    loading: false,
    mechanics: [],
    searchResults: []
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

export const searchCardsFromApi = createAsyncThunk(
    'heartstoneDemo/search',
    async (searchTerm: string) => {
        const response = await searchCards(searchTerm)
        if (response) {
            return response
        }
        return null
    }
)

export const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        resetSearchResults: (state) => {
            state.searchResults = []
        }
    },
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
        }),
        builder.addCase(searchCardsFromApi.pending, (state) => {
            state.loading = true
        }),
        builder.addCase(searchCardsFromApi.rejected, (state) => {
            state.loading = false
        }),
        builder.addCase(searchCardsFromApi.fulfilled, (state, { payload }) => {
            if (payload) {
                state.searchResults = payload
            }
            state.loading = false
        })
    }
})

export const { resetSearchResults } = cardsSlice.actions

export default cardsSlice.reducer
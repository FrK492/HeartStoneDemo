import React, { FC, useEffect } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { fetchCardsFromApi } from '../redux/cardsSlice'
import { useAppDispatch, useAppSelector } from '../redux/hooks'

interface IProps {}

const ListScreen: FC<IProps> = (props) => {
    const dispatch = useAppDispatch()
    const { cards, loading } = useAppSelector(state => state.heartStoneCards)
    
    useEffect(() => {
        dispatch(fetchCardsFromApi())
    }, [])

    if (loading) {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator />
            </View>
        )
    }

    return (
        <View>
            <Text>List Screen</Text>
        </View>
    )
}

export default ListScreen
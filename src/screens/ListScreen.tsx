import React, { FC, useEffect } from 'react'
import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import { MechanicCard } from '../components/MechanicCard'
import { fetchCardsFromApi } from '../redux/cardsSlice'
import { useAppDispatch, useAppSelector } from '../redux/hooks'

interface IProps {}

const ListScreen: FC<IProps> = (props) => {
    const dispatch = useAppDispatch()
    const { mechanics, loading } = useAppSelector(state => state.heartStoneCards)
    
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
            <FlatList
                data={mechanics}
                keyExtractor={(item, i) => `${item}-${i}`}
                renderItem={({ item }) => <MechanicCard mechanicName={item} />}
            />
        </View>
    )
}

export default ListScreen
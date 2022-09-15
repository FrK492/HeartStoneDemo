import React, { FC, useEffect, useState } from 'react'
import { View, FlatList } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useAppSelector } from '../redux/hooks'
import { filterHeartStoneCardsByMechanic } from '../utils/arrayManipluation'
import { IHeartStoneCard } from '../interfaces'
import { HeartStoneCard } from '../components/HeartStoneCard'

interface IProps {}

const DetailScreen: FC<IProps> = (props) => {
    const { params } = useRoute<any>()
    const { cards } = useAppSelector(state => state.heartStoneCards)
    const [filteredCards, setFilteredCards] = useState<Array<IHeartStoneCard>>([])

    useEffect(() => {
        if (params.mechanicName) {
            setFilteredCards(filterHeartStoneCardsByMechanic(params.mechanicName, cards))
        }
    }, [])

    return (
        <View>
            <FlatList
                data={filteredCards}
                keyExtractor={(item) => item.cardId}
                renderItem={({item}) => <HeartStoneCard card={item} />}
            />
        </View>
    )
}

export default DetailScreen
import React, { FC, useEffect } from 'react'
import { View, ActivityIndicator, FlatList } from 'react-native'
import { MechanicCard } from '../components/MechanicCard'
import { fetchCardsFromApi } from '../redux/cardsSlice'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

interface IProps {}

const ListScreen: FC<IProps> = (props) => {
    const dispatch = useAppDispatch()
    const navigation = useNavigation<NativeStackNavigationProp<any>>()
    const { mechanics, loading } = useAppSelector(state => state.heartStoneCards)
    
    useEffect(() => {
        dispatch(fetchCardsFromApi())
    }, [])

    const navigateToDetail = (mechanicName: String) => {
        navigation.navigate('detail_screen', { mechanicName })
    }

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
                renderItem={({ item }) => 
                    <MechanicCard
                        onCardPress={(mechanicName) => navigateToDetail(mechanicName)}
                        mechanicName={item}
                    />}
            />
        </View>
    )
}

export default ListScreen
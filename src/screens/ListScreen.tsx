import React, { FC, useEffect, useState } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { MechanicCard } from '../components/MechanicCard'
import { fetchCardsFromApi, resetSearchResults, searchCardsFromApi } from '../redux/cardsSlice'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { SearchInput } from '../components/SearchInput'
import { CenteredLoader } from '../components/CenteredLoader'
import { HeartStoneCard } from '../components/HeartStoneCard'

interface IProps {}

const ListScreen: FC<IProps> = (props) => {
    const dispatch = useAppDispatch()
    const navigation = useNavigation<NativeStackNavigationProp<any>>()
    const { mechanics, loading, searchResults } = useAppSelector(state => state.heartStoneCards)
    const [ searchText, setSearchText ] = useState('')
    
    useEffect(() => {
        dispatch(fetchCardsFromApi())
    }, [])

    const navigateToDetail = (mechanicName: String) => {
        navigation.navigate('detail_screen', { mechanicName })
    }

    const onSearchSubmit = (searchText: string) => {
        if (searchText === '') {
            dispatch(resetSearchResults())
            return
        }

        dispatch(searchCardsFromApi(searchText))
    }

    return (
        <View style={styles.container}>
            <SearchInput
                value={searchText}
                onValueChange={(searchText) => setSearchText(searchText)}
                onSubmit={(searchText) => onSearchSubmit(searchText)}
            />
            {
                loading ?
                <CenteredLoader size='large' /> :
                searchResults.length === 0 ?
                <FlatList
                    data={mechanics}
                    keyExtractor={(item, i) => `${item}-${i}`}
                    keyboardDismissMode={'on-drag'}
                    renderItem={({ item }) => 
                        <MechanicCard
                            onCardPress={(mechanicName) => navigateToDetail(mechanicName)}
                            mechanicName={item}
                        />}
                /> :
                <FlatList
                    data={searchResults}
                    keyExtractor={(item) => item.cardId}
                    keyboardDismissMode={'on-drag'}
                    renderItem={({ item }) => <HeartStoneCard card={item} />}
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default ListScreen
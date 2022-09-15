import React, { FC } from 'react'
import { View, Text, Image, StyleSheet, FlatList } from 'react-native'
import { IHeartStoneCard } from '../interfaces'

interface IProps {
    card: IHeartStoneCard
}

export const HeartStoneCard: FC<IProps> = (props) => {
    const { card } = props
    return (
        <View style={styles.container}>
            <View style={styles.infoColumn}>
                {card.name && <Text><Text style={styles.infoTitle}>Card Name: </Text>{card.name}</Text>}
                {card.faction && <Text><Text style={styles.infoTitle}>Card Faction: </Text>{card.faction}</Text>}
                {card.cardSet && <Text><Text style={styles.infoTitle}>Card Set: </Text>{card.cardSet}</Text>}
                {card.text && <Text><Text style={styles.infoTitle}>Card Text: </Text>{card.text}</Text>}
                {card.type && <Text><Text style={styles.infoTitle}>Card Type: </Text>{card.type}</Text>}
                {card.mechanics &&
                    <>
                        <Text style={styles.infoTitle}>Mechanics: </Text>
                        <FlatList
                            data={card.mechanics}
                            keyExtractor={(item) => `${card.cardId}-${item.name}`}
                            renderItem={({item}) => <Text>{item.name}</Text>}
                        />
                    </> 
                }
            </View>
            <View style={styles.imageColumn}>
                {card.img && <Image source={{uri: card.img}} style={styles.cardImage} />}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        minHeight: 200,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    infoColumn: {
        flex: 2
    },
    imageColumn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardImage: {
        height: 100,
        width: 100,
        resizeMode: 'contain'
    },
    infoTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black'
    }
})
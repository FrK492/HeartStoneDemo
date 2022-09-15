import React, { FC } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

interface IProps {
    mechanicName: string
    onCardPress: (mechanicName: string) => void
}

export const MechanicCard: FC<IProps> = (props) => {
    return (
        <TouchableOpacity onPress={() => props.onCardPress(props.mechanicName)} style={styles.container}>
            <Text>{props.mechanicName}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 5
    }
})
import React, { FC } from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'

interface IProps {
    size: 'small' | 'large'
}

export const CenteredLoader: FC<IProps> = (props) => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={props.size} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
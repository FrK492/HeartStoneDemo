import React, { FC } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'

interface IProps {
    value: string,
    onValueChange: (text: string) => void
    onSubmit: (text: string) => void
}

export const SearchInput: FC<IProps> = (props) => {
    return (
        <View style={styles.container}>
            <TextInput
                value={props.value}
                style={styles.input}
                placeholder='Search Cards'
                onChangeText={(text) => props.onValueChange(text)}
                onSubmitEditing={(event) => props.onSubmit(event.nativeEvent.text)}
                returnKeyLabel='Search'
                returnKeyType='search'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        justifyContent: 'center',
        backgroundColor: 'white',
        margin: 5,
        borderRadius: 5
    },
    input: {
        paddingHorizontal: 10
    }
})
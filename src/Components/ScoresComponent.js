import React from 'react'
import { View, Text } from 'react-native'
import { Avatar, Icon } from 'react-native-elements'

const ScoresComponent = ({ score }) => {
    return (
        <View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1, alignSelf: 'center', marginTop: 15 }}>
                    <Avatar
                        large
                        rounded
                        icon={{ name: 'adb' }}
                        containerStyle={{ alignSelf: 'center' }}
                    />
                    <Text style={{ textAlign: 'center' }}>Score:</Text>
                    <Text style={{ textAlign: 'center' }}>{score}</Text>
                </View>
            </View>
        </View>
    )
}

export { ScoresComponent }
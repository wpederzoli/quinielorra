import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'

const GroupComponent = ({ group }) => {
    return (
        <View style={{ padding: 5 }}>
            <TouchableOpacity style={{ flex: 1, backgroundColor: '#87ce87', padding: 5 }}>
                <Text style={{ textAlign: 'center', color: '#fff', fontWeight: '500' }}>Grupo {group.group.letter}</Text>
            </TouchableOpacity>
            {
                group.group.teams.map((team, id) => {
                    return (
                        <View key={id} style={{ flexDirection: 'row', flex: 1 }}>
                            <Text>{team.team.country}</Text>
                        </View>
                    )
                })
            }
        </View>
    )
}

export { GroupComponent }
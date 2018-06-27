import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'

const GroupComponent = ({ group }) => {
    return (
        <View style={{ padding: 5 }}>
            <TouchableOpacity style={{ flex: 1, backgroundColor: '#87ce87', padding: 5 }}>
                <Text style={{ textAlign: 'center', color: '#fff', fontWeight: '500' }}>Grupo {group.letter}</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', flex: 1, borderWidth: 1, borderColor: 'lightgreen' }}>
                <Text style={{ flex: 2, textAlign: 'center', fontWeight: '600' }}>Country</Text>
                <Text style={{ flex: 1, textAlign: 'center', fontWeight: '600' }}>GP</Text>
                <Text style={{ flex: 1, textAlign: 'center', fontWeight: '600' }}>GW</Text>
                <Text style={{ flex: 1, textAlign: 'center', fontWeight: '600' }}>GD</Text>
                <Text style={{ flex: 1, textAlign: 'center', fontWeight: '600' }}>GL</Text>
                <Text style={{ flex: 1, textAlign: 'center', fontWeight: '600' }}>GF</Text>
                <Text style={{ flex: 1, textAlign: 'center', fontWeight: '600' }}>GA</Text>
                <Text style={{ flex: 1, textAlign: 'center', fontWeight: '600' }}>GD</Text>
                <Text style={{ flex: 1, textAlign: 'center', fontWeight: '600' }}>PT</Text>
            </View>
            {
                group.ordered_teams.map((team, id) => {
                    return (
                        <View key={id} style={{ flexDirection: 'row', flex: 1, borderBottomWidth: 1, borderBottomColor: 'lightgrey', padding: 5 }}>
                            <Text style={{ flex: 2, textAlign: 'left' }}>{team.country}</Text>
                            <Text style={{ flex: 1, textAlign: 'center' }}>{team.games_played}</Text>
                            <Text style={{ flex: 1, textAlign: 'center' }}>{team.wins}</Text>
                            <Text style={{ flex: 1, textAlign: 'center' }}>{team.draws}</Text>
                            <Text style={{ flex: 1, textAlign: 'center' }}>{team.losses}</Text>
                            <Text style={{ flex: 1, textAlign: 'center' }}>{team.goals_for}</Text>
                            <Text style={{ flex: 1, textAlign: 'center' }}>{team.goals_against}</Text>
                            <Text style={{ flex: 1, textAlign: 'center' }}>{team.goal_differential}</Text>
                            <Text style={{ flex: 1, textAlign: 'center' }}>{team.points}</Text>
                        </View>
                    )
                })
            }
        </View>
    )
}

export { GroupComponent }
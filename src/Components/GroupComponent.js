import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'

const GroupComponent = ({ group }) => {
    return (
        <View style={{ padding: 5 }}>
            <TouchableOpacity style={{ flex: 1, backgroundColor: '#87ce87', padding: 5 }}>
                <Text style={{ textAlign: 'center', color: '#fff', fontWeight: '500' }}>Grupo {group.group.letter}</Text>
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
                group.group.teams.map((team, id) => {
                    return (
                        <View key={id} style={{ flexDirection: 'row', flex: 1, borderBottomWidth: 1, borderBottomColor: 'lightgrey', padding: 5 }}>
                            <Text style={{ flex: 2, textAlign: 'center' }}>{team.team.country}</Text>
                            <Text style={{ flex: 1, textAlign: 'center' }}>{team.team.games_played}</Text>
                            <Text style={{ flex: 1, textAlign: 'center' }}>{team.team.wins}</Text>
                            <Text style={{ flex: 1, textAlign: 'center' }}>{team.team.draws}</Text>
                            <Text style={{ flex: 1, textAlign: 'center' }}>{team.team.losses}</Text>
                            <Text style={{ flex: 1, textAlign: 'center' }}>{team.team.goals_for}</Text>
                            <Text style={{ flex: 1, textAlign: 'center' }}>{team.team.goals_against}</Text>
                            <Text style={{ flex: 1, textAlign: 'center' }}>{team.team.goal_differential}</Text>
                            <Text style={{ flex: 1, textAlign: 'center' }}>{team.team.points}</Text>
                        </View>
                    )
                })
            }
        </View>
    )
}

export { GroupComponent }
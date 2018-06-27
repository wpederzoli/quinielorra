import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'

const GroupTeamsPicker = ({ group, onSelect, teams }) => {
    console.log('this is teams ' + JSON.stringify(teams))
    return (
        <View>
            {
                group.ordered_teams.map((team, id) => {
                    const index = teams[group.letter].indexOf(team.country)
                    return (
                        <Button 
                            key={id} 
                            title={index !== -1 ? `${index + 1}.- ${team.country}` : team.country}
                            backgroundColor={index !== -1 ? 'green' : '#fff'} 
                            textStyle={index !== -1 ? { color: '#fff', fontWeight: '600', fontSize: 16 } : { color: '#000' }} 
                            buttonStyle={{ borderBottomWidth: 1, borderBottomColor: 'lightgrey' }}
                            onPress={() => onSelect(group.letter, team.country)}
                        />
                    )
                })
            }

        </View>
    )
}

export { GroupTeamsPicker }
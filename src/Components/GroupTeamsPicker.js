import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'

const GroupTeamsPicker = ({ group, onSelect, teams }) => {
    return (
        <View>
            {
                group.ordered_teams.map((team, id) => {
                    return (
                        <Button 
                            key={id} 
                            title={team.country} 
                            backgroundColor={teams[group.letter].indexOf(team.country) !== -1 ? 'green' : '#fff'} 
                            textStyle={{ color: '#000' }} 
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
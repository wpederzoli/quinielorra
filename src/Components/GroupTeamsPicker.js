import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'

const GroupTeamsPicker = ({ group, onSelect }) => {
    console.log('this is group: ' +  JSON.stringify(group))
    return (
        <View>
            {
                group.ordered_teams.map((team, id) => {
                    return (
                        <Button 
                            key={id} 
                            title={team.country} 
                            backgroundColor='#fff' 
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
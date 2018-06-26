import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'

const GroupTeamsPicker = ({ group, onSelect }) => {
    return (
        <View>
            {
                group.group.teams.map((team, id) => {
                    return (
                        <Button 
                            key={id} 
                            title={team.team.country} 
                            backgroundColor='#fff' 
                            textStyle={{ color: '#000' }} 
                            buttonStyle={{ borderBottomWidth: 1, borderBottomColor: 'lightgrey' }}
                            onPress={() => onSelect(group.group.letter, team.team.country)}
                        />
                    )
                })
            }

        </View>
    )
}

export { GroupTeamsPicker }
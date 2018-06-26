import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'

const GroupTeamsPicker = ({ width, group }) => {
    return (
        <View style={{ width: width * 0.95, alignSelf: 'center' }}>
            {
                group.group.teams.map((team, id) => {
                    console.log(team)
                    return (
                        <Button key={id} title={team.team.country} backgroundColor='#fff' textStyle={{ color: '#000' }} />
                    )
                })
            }

        </View>
    )
}

export { GroupTeamsPicker }
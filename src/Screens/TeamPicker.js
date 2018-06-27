import React, { Component } from 'react'
import { View, Text, Dimensions, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { pickTeam, setup, submitTeams, checkForPickedTeams } from '../Actions'
import { Button } from 'react-native-elements'

import { GroupTeamsPicker } from '../Components'

class TeamPicker extends Component {
    
    componentWillMount(){
        this.props.checkForPickedTeams(this.props.navigation)
    }
    
    render() {

        const { groups, pickTeam, teams, navigation } = this.props

        return (
            <View>
                <ScrollView>
                <Text style={{ fontSize: 19, fontWeight: '600', textAlign: 'center', marginTop: 20 }}>Pick your teams:</Text>
                {
                    groups.map((group, key) => {
                        return (
                            <View key={key} style={{ width: Dimensions.get('window').width * 0.95, alignSelf: 'center', marginTop: 10 }}>
                                <View style={{ backgroundColor: 'lightgreen', padding: 5 }}>
                                    <Text style={{ color: '#fff', textAlign: 'center', fontSize: 15 }}>{group.letter}</Text>
                                </View>
                                <GroupTeamsPicker
                                    group={group}
                                    onSelect={(group, team) => pickTeam(group, team, teams)}
                                    teams={teams}
                                />
                            </View>
                        )
                    })
                }
                <Button title='Continue' onPress={() => submitTeams(teams, navigation)} />
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = state => {
    const { teams } = state.teamPicks
    return {
        teams,
        groups: state.home.groups
    }
}

export default connect(mapStateToProps, { pickTeam, setup, submitTeams, checkForPickedTeams })(TeamPicker)
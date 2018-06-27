import React, { Component } from 'react'
import { View, Text, Dimensions, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { pickTeam, setup } from '../Actions'
import { Button } from 'react-native-elements'

import { GroupTeamsPicker } from '../Components'

class TeamPicker extends Component {
    
    componentWillMount(){
        console.log(this.props.groups)
    }

    render() {

        const { groups, pickTeam, teams } = this.props

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
                                />
                            </View>
                        )
                    })
                }
                <Button title='Continue' onPress={() => console.log(this.props)} />
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

export default connect(mapStateToProps, { pickTeam, setup })(TeamPicker)
import React, { Component } from 'react'
import { View, Text, Dimensions, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { setup } from '../Actions'

import { GroupTeamsPicker } from '../Components'

class TeamPicker extends Component {

    componentWillMount() {
        this.props.setup()
    }

    render() {

        const { groups } = this.props

        return (
            <View>
                <ScrollView>
                <Text style={{ fontSize: 19, fontWeight: '600', textAlign: 'center', marginTop: 20 }}>Pick your teams:</Text>
                {
                    groups.map((group, key) => {
                        return (
                            <View key={key}>
                                <View style={{ backgroundColor: 'lightgreen', padding: 5 }}>
                                    <Text style={{ color: '#fff', textAlign: 'center', fontSize: 15 }}>{group.group.letter}</Text>
                                </View>
                                <GroupTeamsPicker
                                    width={Dimensions.get('window').width}
                                    group={group}
                                />
                            </View>
                        )
                    })
                }
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = state => {
    const { allTeams } = state.teamPicks
    return {
        allTeams,
        groups: state.home.groups
    }
}

export default connect(mapStateToProps, { setup })(TeamPicker)
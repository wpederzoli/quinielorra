import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import { setup, getScore } from '../Actions'
import { HomeFeed, ScoresComponent } from '../Components'

class Home extends Component {


    componentDidMount(){
        console.log(this.props)
        getScore(this.props)
    }

    render() {

        const { groups, width } = this.props

        return (
            <View>
                <ScoresComponent />
                <HomeFeed
                    width={width} 
                    groups={groups} 
                />
            </View>
        )
    }
}

const mapStateToProps = state => {
    const { groups, width } = state.home

    return {
        groups,
        width,
        teams: state.teamPicks.teams
    }
}

export default connect(mapStateToProps, { setup, getScore })(Home)
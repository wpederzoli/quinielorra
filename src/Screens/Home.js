import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import { setup, getScore } from '../Actions'
import { HomeFeed, ScoresComponent } from '../Components'

class Home extends Component {


    componentDidMount(){
        this.props.getScore(this.props)
    }

    render() {

        const { groups, width, score } = this.props

        return (
            <View>
                <ScoresComponent 
                    score={score}
                />
                <HomeFeed
                    width={width} 
                    groups={groups} 
                />
            </View>
        )
    }
}

const mapStateToProps = state => {
    const { groups, width, score } = state.home

    return {
        groups,
        width,
        score,
        teams: state.teamPicks.teams
    }
}

export default connect(mapStateToProps, { setup, getScore })(Home)
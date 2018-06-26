import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { connect } from 'react-redux'

import { setup } from '../Actions'
import { HomeFeed, Login } from '../Components'

class Home extends Component {

    componentWillMount() {
        this.props.setup()
    }

    render() {

        const { groups, width } = this.props

        return (
            <View style={{ width: width * .95, alignSelf: 'center', marginTop: width * .15 }}>
                <Login />
                {/* <HomeFeed
                    width={width} 
                    groups={groups} 
                /> */}
            </View>
        )
    }
}

const mapStateToProps = state => {
    const { groups, width } = state.home

    return {
        groups,
        width
    }
}

export default connect(mapStateToProps, { setup })(Home)
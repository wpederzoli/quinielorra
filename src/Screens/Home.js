import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import { setupCompetitionData } from '../Actions'

class Home extends Component{

    componentWillMount(){
        this.props.setupCompetitionData()
    }

    render(){
        return(
           <View>
               <Text>Hola</Text>
           </View> 
        )
    }
}

const mapStateToProps = state => {
    return {
        home: state.home
    }
}

export default connect(mapStateToProps, { setupCompetitionData })(Home)
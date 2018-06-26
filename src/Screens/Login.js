import React, { Component } from 'react'
import { connect } from 'react-redux'
import { emailChanged, passwordChanged, submit, isUserLogedIn } from '../Actions'

import { LoginComponent } from '../Components'

class Login extends Component {

    componentWillMount(){
        isUserLogedIn(this.props.navigation)
    }

    render() {

        const { email, password, loginError, emailChanged, passwordChanged, submit } = this.props

        return (
            <LoginComponent
                email={email}
                password={password}
                loginError={loginError}
                emailChanged={emailChanged}
                passwordChanged={passwordChanged}
                submit={() => submit(this.props)}
            />
        )
    }
}

const mapStateToProps = state => {
    const { email, password, loginError } = state.login
    return {
        email,
        password,
        loginError
    }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, submit, isUserLogedIn })(Login)
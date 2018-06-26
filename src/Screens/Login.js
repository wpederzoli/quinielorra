import React, { Component } from 'react'
import { connect } from 'react-redux'
import { emailChanged, passwordChanged } from '../Actions'

import { LoginComponent } from '../Components'

class Login extends Component {
    render() {

        const { email, password, loginError, emailChanged, passwordChanged } = this.props

        return (
            <LoginComponent
                email={email}
                password={password}
                loginError={loginError}
                emailChanged={emailChanged}
                passwordChanged={passwordChanged}
            />
        )
    }
}

const mapStateToProps = state => {
    const { email, password, emailError, passwordError } = state.login
    return {
        email,
        password,
        emailError,
        passwordError
    }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged })(Login)
import React from 'react'
import { View, Text } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'

const Login = ({ emailError, passwordError, emailChanged, passwordChanged }) =>{
    return(
        <View>
            <FormLabel>Email</FormLabel>
            <FormInput onChangeText={emailChanged} />
            { emailError ? <FormValidationMessage>Enter a valid email</FormValidationMessage> : null }
            <FormLabel>Password</FormLabel>
            <FormInput onChangeText={passwordChanged} />
            { passwordError ? <FormValidationMessage>Invalid password</FormValidationMessage> : null }
            <Button title='Enter' backgroundColor={'#87ce87'} style={{ marginTop: 10 }} />
        </View>
    )
}

export { Login }
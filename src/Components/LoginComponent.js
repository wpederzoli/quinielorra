import React from 'react'
import { View, Text } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'

const LoginComponent = ({ email, password, emailChanged, passwordChanged, submit, loginError }) =>{
    return(
        <View>
            <FormLabel>Email</FormLabel>
            <FormInput onChangeText={emailChanged} value={email} />
            <FormLabel>Password</FormLabel>
            <FormInput onChangeText={passwordChanged} value={password} secureTextEntry />
            { loginError ? <FormValidationMessage>Invalid email or password</FormValidationMessage> : null }
            <Button title='Enter' backgroundColor={'#87ce87'} style={{ marginTop: 10 }} onPress={submit}/>
        </View>
    )
}

export { LoginComponent }
import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { IconLogout } from '../../assets'

export default class Profile extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Profile Screen</Text>
            <TouchableOpacity style={styles.icon} onPress={() => this.props.navigation.navigate('Login')} >
          <IconLogout />
        </TouchableOpacity>
          </View>
        )
    }
}

const styles = StyleSheet.create({})

import React from 'react';
import axios from 'axios';
import { Button, View, Text } from 'react-native';

const Main = ({navigation, route}) => {

    return (
        <View>
            <Button title='Test Page Open' onPress={() => {navigation.navigate('TestPage' , {id: 1})}} />
            <Text>id : {route.params ? route.params.id : ''}</Text>
        </View>
    )
}

export default Main;
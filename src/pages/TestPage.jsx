import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, View, Text } from 'react-native';

const Test = ({navigation, route}) => {
    const [test, setTest] = useState();

    const getTest = async() => {
        await axios.get(process.env.APP_API_URL+'/home/test?id=12345')
        .then(function (response) {
            setTest(response.data);
        })
        .catch(function (error) {
            console.log(error);
            setTest(error.message);
        });
    }
    
    return (
        <View>
            <Button title='Home Page Open' onPress={() => {navigation.navigate('Home', {id: 2})}} />
            <Text>id : {route.params ? route.params.id : ''}</Text>
            <Text>testId: {test}</Text>
            <Button title='getTest' onPress={() => {getTest()}} />
        </View>
    )
}

export default Test;
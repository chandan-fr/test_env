import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomLoader from '../utility/CustomLoader';

const debounce = (callback: Function, delay: any) => {
    return (...params: any) => {
        setTimeout(() => {
            callback.apply(this, params)
        }, delay);
    }
}

const Debouncing = ({ }) => {
    const handleQuery = (value: string) => {
        controllApiCall(value)
    };

    const controllApiCall = async (value: string) => {
        // api call
    }

    debounce(controllApiCall, 500);

    return (
        <View style={{ flex: 1 }}>
            <Text style={{ color: "#00f" }}>Debouncing</Text>

            <Button title="hello" />

            <CustomLoader visible={false} source={require("../assets/loader.json")} />
        </View>
    )
};

export default Debouncing;

const styles = StyleSheet.create({});
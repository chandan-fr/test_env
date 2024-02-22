import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomLoader from '../utility/CustomLoader';


const Debouncing = () => {
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
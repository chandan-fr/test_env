import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';

const LottieAnimation = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <View style={{ width: 300, height: 300 }}>
                <LottieView style={{flex: 1}} source={require("../assets/loader.json")} autoPlay loop />
            </View>
        </View>
    )
};

export default LottieAnimation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1
    },
});
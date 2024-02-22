import { Dimensions, StyleSheet, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';

const { width, height } = Dimensions.get("window");

type Loader_Props = {
    visible: boolean;
    source?: string;
};

const CustomLoader = ({ visible, source }: Loader_Props): JSX.Element | null => {
    if (!visible) return null;

    const defaultAnimation = source ? source : require("../assets/loader.json");

    return (
        <View style={styles.loader}>
            <LottieView style={{ width: width, height: height }} source={defaultAnimation} autoPlay loop />
        </View>
    )
};

export default CustomLoader;

const styles = StyleSheet.create({
    loader: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        width: width,
        height: height,
        zIndex: 1,
        backgroundColor: "#fff",
        elevation: 5,
    },
});
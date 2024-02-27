import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

type NavCards_Props = {
    item: {
        name: string;
        path: string;
    },
    navigation: any;
};

const NavCards = ({ item, navigation }: NavCards_Props): JSX.Element => {
    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.btn} onPress={() => navigation.navigate(item?.path)}>
            <Text style={styles.txt}>{item?.name}</Text>
            <Image style={styles.img} source={require("../assets/icons/long-arrow.png")} />
        </TouchableOpacity>
    );
};

export default NavCards;

const styles = StyleSheet.create({
    btn: {
        backgroundColor: "#fff",
        elevation: 3,
        marginHorizontal: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 4,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    txt: {
        fontSize: 16,
        fontWeight: "600",
        color: "#232020"
    },
    img:{
        width: 40,
        height: 15,
    },
});
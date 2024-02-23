import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

type Card_Props = {
    item: {
        id: string;
        name: string;
        username: string;
        email: string;
        address: {
            street: string;
            city: string;
            zipcode: string;
        };
        phone: string;
        // img: string
    };
    navigation?: any;
    destScrn?: string;
};

const Card = ({ item, navigation, destScrn }: Card_Props): JSX.Element => {
    return (
        <TouchableOpacity
            style={styles.parent}
            activeOpacity={0.7}
        // onPress={() => navigation.navigate(destScrn)}
        >
            <View style={styles.left}>
                <Image style={styles.leftImg} source={require("../assets/images/female.png")} />
            </View>

            <View style={styles.right}>
                <Text style={styles.heading}>
                    {item?.name}
                </Text>

                <Text numberOfLines={1} style={styles.subHeading}>
                    {item?.address?.city}
                </Text>
            </View>
        </TouchableOpacity>
    )
};

export default Card;

const styles = StyleSheet.create({
    parent: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: 10,
        paddingHorizontal: 6,
        paddingVertical: 4,
        backgroundColor: "#fff",
        elevation: 3,
        marginHorizontal: 5,
        borderRadius: 8,
    },
    left: {
        width: 62,
        height: 62,
    },
    leftImg: {
        width: 60,
        height: 60,
    },
    right: {
        flex: 1,
        rowGap: 5,
        padding: 8
    },
    heading: {
        fontSize: 16,
        fontWeight: "700",
    },
    subHeading: {
        fontSize: 13,
        fontWeight: "500",
    },
});
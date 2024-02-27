import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { routes } from '../config/NavRoutes';
import NavCards from '../utility/NavCards';

type Home_Props = {
    navigation: any;
};

const Home = ({ navigation }: Home_Props): JSX.Element => {
    return (
        <View style={styles.main}>
            <Text style={styles.txt}>
                All Screens
            </Text>

            <View style={styles.cardContainer}>
                {routes?.map((item, idx) => (
                    <NavCards key={idx} item={item} navigation={navigation} />
                ))}
            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingVertical: 15,
        marginHorizontal: 10,
        rowGap: 15,
    },
    cardContainer: {
        rowGap: 10,
    },
    txt:{
        fontSize: 20,
        fontWeight: "700",
        color: "#232020",
        letterSpacing: 3,
        marginLeft: 5,
    },
});
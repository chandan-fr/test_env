import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from '../utility/Card';

const Debouncing = ({ }):JSX.Element => {
    const data = {
        "id": "1",
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        // "img": require("./src/assets/images/female.png"),
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <Text style={{ color: "#00f" }}>Debouncing</Text>

            <Button title="hello" />
            <View style={{ flex: 1, marginTop: 20, marginHorizontal: 20, marginBottom: 10, rowGap: 10, paddingTop: 5 }}>
                <ScrollView style={{}} showsVerticalScrollIndicator={false}>
                    <View style={{ rowGap: 10, paddingVertical: 5 }}>
                        {Array.from({ length: 20 }, (_, idx) => (
                            <Card key={idx} item={data} />
                        ))}
                    </View>
                </ScrollView>
            </View>
        </View>
    )
};

export default Debouncing;

const styles = StyleSheet.create({});
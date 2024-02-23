import { Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View, NativeModules } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';
import CustomLoader from '../utility/CustomLoader';

let querySearchId: string | number | NodeJS.Timeout | undefined;

const debounce = (callback: Function, delay: any) => {
    return (...params: string[]) => {
        if (querySearchId) clearTimeout(querySearchId);

        querySearchId = setTimeout(() => {
            callback.apply(this, params);
        }, delay);
    }
};

const LiveSearch = () => {
    const [query, setQuery] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [users, setUsers] = useState<string>("");

    const { CalendarModule } = NativeModules;

    const handleQuery = (value: string): void => {
        setQuery(value);
        handleDebounce(value);
    };

    const fetchData = async (value: string): Promise<void> => {
        // console.log("fetchdata called =>", value);
        try {
            setLoading(true);
            const res: any = await axios.get("https://jsonplaceholder.typicode.com/users/1");
            setUsers(JSON.stringify(res.data));
            setLoading(false);
            CalendarModule.showToast("User Fetched");
        } catch (exc: any) {
            setUsers("");
            setLoading(false);
            CalendarModule.showToast(exc.message);
        }
    };

    const handleDebounce = debounce(fetchData, 600);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.parent}>
                <Text style={styles.heading}>
                    Live Search with debouncing
                </Text>

                <TextInput
                    style={styles.inputBox}
                    placeholder='Search Here...'
                    placeholderTextColor={"#707070"}
                    value={query}
                    onChange={({ nativeEvent }) => handleQuery(nativeEvent.text)}
                />

                <View style={styles.textBody}>
                    <Text selectable style={styles.para}>
                        {users ? users : "No Data Found!"}
                    </Text>
                </View>

                <CustomLoader visible={loading} />
            </View>
        </TouchableWithoutFeedback>
    )
};

export default LiveSearch;

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 15,
        backgroundColor: "#fff",
    },
    heading: {
        marginVertical: 10,
        textAlign: "center",
        fontSize: 18,
        fontWeight: "700",
        color: "#435970",
    },
    inputBox: {
        borderWidth: 1.5,
        borderRadius: 4,
        borderColor: "#d8d8d8",
        marginHorizontal: 10,
        marginTop: 20,
        paddingLeft: 15,
        color: "#232020",
        fontSize: 16,
        height: 44,
    },
    textBody: {
        borderWidth: 1,
        marginTop: 30,
        marginHorizontal: 10,
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        justifyContent: "center",
        maxHeight: 200,
        borderColor: "#435970",
        flex: 1,
    },
    para: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "500",
        color: "#7B58DE",
    },
});
import { StyleSheet, Text, View, NativeModules, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

const { CalendarModule } = NativeModules;

type stateProps = {
    msg: string;
    full_name: string;
    deviceId: string;
}

const CalendarNativeModule = (): JSX.Element => {
    const [str, setStr] = useState<stateProps>({ msg: "", full_name: "", deviceId: "" });

    const handlePress = () => {
        CalendarModule.sayHello("Chandan Halder", (error: any, message: any) => {
            if (error) {
                console.error('Error:', error);
            } else {
                setStr({ ...str, msg: message });
            }
        });
    };

    const getFullName = () => {
        CalendarModule.fullName("user1", "person2", (error: any, fullName: string) => {
            if (error) {
                console.error('Error:', error);
            } else {
                setStr({ ...str, full_name: fullName });
            }
        });
    };

    useEffect(() => {
        const fetchDeviceId = async () => {
            const res = await CalendarModule.getDeviceId();
            setStr({ ...str, deviceId: res });
        }
        fetchDeviceId();
    }, []);


    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.heading}>
                CalendarNativeModule
            </Text>


            <View style={{ marginTop: 60, rowGap: 10 }}>
                <Button title='Click Me' onPress={() => handlePress()} />
                <Button title='Full Name' onPress={() => getFullName()} />
            </View>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', rowGap: 10 }}>
                <Text style={{ fontSize: 20, color: "#000" }}>
                    {str?.msg}
                </Text>

                <Text style={{ fontSize: 20, color: "#000" }}>
                    {str?.full_name}
                </Text>

                <Text style={{ fontSize: 20, color: "#000" }}>
                    {str?.deviceId}
                </Text>
            </View>
        </View>
    )
};

export default CalendarNativeModule;

const styles = StyleSheet.create({
    heading: {
        fontSize: 18,
        color: "#000",
        fontWeight: '700',
        textAlign: "center",
    },
});
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Exp1 from "../screens/Exp1";
import CalendarNativeModule from "../screens/CalendarNativeModule";
import Debouncing from "../screens/Debouncing";
import LottieAnimation from "../screens/LottieAnimation";
import LiveSearch from "../screens/LiveSearch";
import Home from "../screens/Home";


const RootStack = createNativeStackNavigator();

const RootNavigation = (): JSX.Element => {
    return (
        <RootStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="home">
            <RootStack.Screen name="home" component={Home} />
            <RootStack.Screen name="exp1" component={Exp1} />
            <RootStack.Screen name="cmod" component={CalendarNativeModule} />
            <RootStack.Screen name="debounce" component={Debouncing} />
            <RootStack.Screen name="lanime" component={LottieAnimation} />
            <RootStack.Screen name="livesearch" component={LiveSearch} />
        </RootStack.Navigator>
    );
};

export default RootNavigation;


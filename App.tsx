import React from 'react';
import { View } from 'react-native';
import Exp1 from './src/screens/Exp1';
import CalendarNativeModule from './src/screens/CalendarNativeModule';
import LottieAnimation from './src/screens/LottieAnimation';
import Debouncing from './src/screens/Debouncing';
import LiveSearch from './src/screens/LiveSearch';

const App = (): JSX.Element => {
  return (
    <View style={{ flex: 1 }}>
      {/* <Exp1 /> */}
      {/* <CalendarNativeModule/> */}
      {/* <LottieAnimation/> */}
      {/* <Debouncing /> */}
      <LiveSearch />
    </View>
  );
};

export default App;

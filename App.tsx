import React from 'react';
import { View } from 'react-native';
import Exp1 from './src/screens/Exp1';
import CalendarNativeModule from './src/screens/CalendarNativeModule';
import LottieAnimation from './src/screens/LottieAnimation';
import Debouncing from './src/screens/Debouncing';
import LiveSearch from './src/screens/LiveSearch';
import Card from './src/utility/Card';


const App = (): JSX.Element => {

  return (
    <View style={{ flex: 1 }}>
      {/* <Exp1 /> */}
      {/* <CalendarNativeModule/> */}
      {/* <LottieAnimation/> */}
      <Debouncing />
      {/* <LiveSearch /> */}
      {/* <Card item={data} /> */}
    </View>
  );
};

export default App;

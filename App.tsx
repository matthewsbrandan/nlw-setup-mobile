import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold
} from '@expo-google-fonts/inter';

import { globalCSS } from './src/styles/global';
import { Loading } from './src/components/Loading';
import { Habit } from './src/components/Habit';

export default function App() {
  const [fontsLoaded] = useFonts([
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  ]);
  if(!fontsLoaded) return <Loading/>;

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', marginBottom: 8 }}>
        <Habit opacity={1}/>
        <Habit opacity={.7}/>
        <Habit opacity={.5}/>
        <Habit opacity={1}/>
        <Habit opacity={.2}/>
        <Habit opacity={.8}/>
        <Habit opacity={.1}/>
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 8 }}>
        <Habit opacity={1}/>
        <Habit opacity={.1}/>
        <Habit opacity={.8}/>
        <Habit opacity={.7}/>
        <Habit opacity={.5}/>
        <Habit opacity={.2}/>
        <Habit opacity={1}/>
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 8 }}>
        <Habit opacity={.7}/>
        <Habit opacity={.5}/>
        <Habit opacity={.1}/>
        <Habit opacity={1}/>
        <Habit opacity={.8}/>
        <Habit opacity={1}/>
        <Habit opacity={.2}/>
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 8 }}>
        <Habit opacity={.7}/>
        <Habit opacity={1}/>
        <Habit opacity={.5}/>
        <Habit opacity={.2}/>
        <Habit opacity={1}/>
        <Habit opacity={.1}/>
        <Habit opacity={.8}/>
      </View>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalCSS.colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoryScreens from './Screens/CategoryScreens';
import { colors } from './Styles/Colors'

export default function App() {
  return (
    <View style={styles.container}>
      <CategoryScreens />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',    
    alignItems: 'center',
    backgroundColor: colors.purewhite,
  }
})
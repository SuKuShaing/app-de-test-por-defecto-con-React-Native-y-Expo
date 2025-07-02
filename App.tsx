import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!!!!</Text>
      <Text>Hola a todos los malandras</Text>
      <Text>he he he!!!</Text>
      {/* colocar un botón para cambiar el fondo de color blanco a color negro */}
      <Button title="Click me" onPress={() => {
        console.log('Click me');
      }} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import * as React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Button } from 'react-native'
import _styles from '../../_styles'

export interface Props {
  // navigation:navigate, 
}

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <Text>Home!</Text> */}
      <Button
        title="Go to Home One"
        onPress={() => navigation.navigate('HomeScreenOne')}
      />
      <Button
        title="Go to Setting"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

const styles = StyleSheet.create({})

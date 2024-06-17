import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const ProfileScreen: React.FC = (): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

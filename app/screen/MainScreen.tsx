import React from 'react';
import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Entypo';

export const MainScreen: React.FC = ({navigation}: any): React.JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={'#4B70F5'} />
      <View style={styles.appBar}>
        <TouchableOpacity>
          <Icon name="menu" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.appBarTitle}>Fin Genius</Text>
      </View>
      <View style={styles.content}>
        <Text>Hello World</Text>
        <Button
          title="Go to Profile"
          color={'#4B70F5'}
          onPress={() => navigation.navigate('profile')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#4B70F5',
    padding: 20,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    elevation: 10,
  },
  appBarTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  button: {
    marginTop: 16,
  },
});

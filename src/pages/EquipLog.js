import React from 'react'; 
import { View, Text, StyleSheet } from 'react-native'; 
import Adder from '../components/EquipLog/Adder';
import LogList from '../components/EquipLog/LogList';

const EquipLog = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>
        장비대출목록
      </Text>
      <Adder/>
      <LogList/>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 50,
    backgroundColor: "#EEE",
  },
  title: {
    fontWeight: "800",
    fontSize: 30, 
    marginLeft: 20,
    marginBottom: 20,
  }
});

export default EquipLog;
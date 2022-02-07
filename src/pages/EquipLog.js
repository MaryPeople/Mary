import React from 'react'; 
import { View, Text, StyleSheet } from 'react-native'; 

const styles = StyleSheet.create({ 
	center: { 
    flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center' 
  } 
}) 

const EquipLog = () => {
  return(
    <View style={styles.center}>
      <Text>
        장비대출목록
      </Text>
    </View>
  )
};

export default EquipLog;
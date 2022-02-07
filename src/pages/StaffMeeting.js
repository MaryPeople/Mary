import React from 'react'; 
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({ 
	center: { 
    flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center' 
  } 
}) 

const StaffMeeting = () => {
  return(
    <View style={styles.center}>
      <Text>
        STAFF회의록
      </Text>
    </View>
  )
};

export default StaffMeeting;
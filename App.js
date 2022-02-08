import React from 'react'; 
import { View, Text, StyleSheet, Button } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import EquipLog from './src/pages/EquipLog';
import StaffMeeting from './src/pages/StaffMeeting';

const styles = StyleSheet.create({ 
	homeScreen: { 
    flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center' 
  } 
}) 

const HomeScreen = ({navigation}) => { 
	return ( 
    <View style={styles.homeScreen}> 
      <Text>HomeScreen</Text>
      <Button
        title="Go to 장비대출목록"
        onPress={ () => navigation.navigate('EquipLog')}
      />
      <Button
        title="Go to STAFF 회의록"
        onPress={ () => navigation.navigate('StaffMeeting')}
      />
    </View> 
  ) 
} 

// 앱이 각 화면이 전환될 수 있는 기본 틀을 제공한다. 
const Stack = createNativeStackNavigator(); 

const App = () => { 
	return ( 
    //네비게이션의 트리를 관리해주는 컴포넌트 
    <NavigationContainer> 
      {/* 네비게이션 기본틀의 스택을 생성 */} 
        <Stack.Navigator> 
          {/* 해당스택에 들어갈 화면 요소를 넣어준다. */}
            <Stack.Screen name="Home" component={HomeScreen}/> 
            <Stack.Screen name="EquipLog" component={EquipLog}  options={{ headerShown: false }}/> 
            <Stack.Screen name="StaffMeeting" component={StaffMeeting} options={{ headerShown: false }}/> 
        </Stack.Navigator> 
    </NavigationContainer> 
  ) 
} 

export default App;
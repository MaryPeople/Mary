import React, { useContext } from 'react'
import { View, Text } from 'react-native'; 
import { EquipContext } from './EquipContext'

export default function EquipHeader() {
  const [equips] = useContext(EquipContext);
  
  return (
    <View
      style={{
        backgroundColor: "#fff",
        padding: 20,
        margin: 10,
      }}
    >
      <Text>장비대출현황입니다!! {equips.length}개</Text>
    </View>
  )
}

import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { EquipContext } from './EquipContext';
// import axios from 'axios'

export default function EquipItems() {
  const [equips, setEquips] = useContext(EquipContext);

  const handleDelete = (item) => {
    
    // DB 업데이트
    // await axios({
    //   url: "/equips/" + item.eqid,
    //   method: 'delete',
    // })
    // .then(function a(response) { 
    //   console.log(response) 
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });

    //state 업데이트
    setEquips(equips.filter(equip => equip.eqid !== item.eqid))
  }
  console.log("Exuips in Items", equips)
  return(
    equips.map((item) => (
      <View 
        style={{
          backgroundColor: "grey",
          borderWidth: 3,
        }}
        key={item.eqid}>
        <Text>{item.name} {item.cnt}</Text>
        <TouchableOpacity onPress={()=>handleDelete(item)}>
          <Text>반납</Text>
        </TouchableOpacity>
      </View>
    ))
  )
}

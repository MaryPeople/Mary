import React, { useState, useContext } from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { EquipContext } from './EquipContext';

// import axios from 'axios'

export default function EquipAdder() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [equips, setEquips] = useContext(EquipContext);

  const updateName = (val) => {
    setName(val);
  }
  const updateCount = (val) => {
    setCount(val);
  }

  const handleSubmit = () => {
    
    const newItem = {
      name: name,
      cnt: count,
      eqid: Date.now()
    }

    // DB에 업데이트
    // await axios({
    //   url: '/equips',
    //   method: 'post',
    //   data: newItem
    // })
    // .then(function a(response) { 
    //   console.log(response) 
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });

    //state 업데이트
    setEquips(prev => [...prev, newItem])

    // input 초기화
    setName("");
    setCount("");
  }

  return (
    <View
      style={{
        backgroundColor: "beige",
        borderWidth: 7,
      }}
    >
      <TextInput 
        name="name" 
        placeholder="장비명을 입력하시오"
        onChangeText={updateName}
        value={name}
      />

     <TextInput 
        keyboardType="numeric"
        name="count" 
        placeholder="대출수량을 입력하시오"
        onChangeText={updateCount}
        value={count}
      />
      <TouchableOpacity onPress={handleSubmit}>
          <Text>대출</Text>
      </TouchableOpacity>
    </View>
  )
}

import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-paper';

const Adder = () => {
  return (
    <View style={styles.container}>
      <View style={styles.input}> 
        <TextInput 
          style={styles.inputText}
          placeholder='Enter new todo'
          autoCorrect={ false }
        />
        <TouchableOpacity>
          <Button style={styles.addBtn} icon="plus-circle" size={40} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
  },
  input: {
    borderRadius: 10,
    backgroundColor: "#FFF",
    paddingLeft: 10,
    paddingRight: 10,
    height: 50,
    alignItems: "center",
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  inputText: {
    flex: 1,
  },
  addBtn: {
    color: '#4169E1'
  }
});

export default Adder;
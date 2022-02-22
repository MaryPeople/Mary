import React, { useState } from 'react'; 
import { View, Text, StyleSheet } from 'react-native'; 
import Adder from '../components/EquipLog/Adder';
import LogList from '../components/EquipLog/LogList';

const EquipLog = () => {
  
  const [state, setState] = useState({
    todos: []
  })
  
  const addTodo = (todo) => {
    const newTodo = {
      id: Date.now(),
      text: todo,
      completed: false 
    }
    setState(prevState => ({
      todos: [
        newTodo,
        ...prevState.todos
      ]
    }))

    console.log(state.todos);
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>
        장비대출목록
      </Text>
      <Adder addTodo={addTodo}/>
      <LogList todos={state.todos}/>
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
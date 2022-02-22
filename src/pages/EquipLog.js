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
  }

  const checkTodo = (id) => {
    setState(preState =>{
      const [todo] = preState.todos.filter(e => e.id===id)
      todo.completed = !todo.completed;
      return({
        todos: [
          ...preState.todos
        ]
      })
    });
  }

  const removeTodo = (id) => {
    setState(prevState => {
      const index = prevState.todos.findIndex(e => e.id === id);
      prevState.todos.splice(index, 1);
      return ({
        todos: [
          ...prevState.todos
        ]
      });
    });
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>
        장비대출목록
      </Text>
      <Adder addTodo={addTodo}/>
      <LogList todos={state.todos} checkTodo={checkTodo} removeTodo={removeTodo}/>
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
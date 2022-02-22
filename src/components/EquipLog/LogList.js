import React, { useState } from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const LogList = (props) => {
  return (
    <View style={styles.container}>
      {
        props.todos.map(todo => (
          <View style={styles.todo} key={todo.id}>
            <View style={styles.todoText}>
              <TouchableOpacity style={styles.todoCheckbox}>
                {
                  todo.completed
                  ? <Button size={40} icon='checkbox-marked-circle-outline' />
                  : <Button size={40} icon='checkbox-blank-circle-outline' />
                }
              </TouchableOpacity>
              <Text>{todo.text}</Text>
            </View>
            <TouchableOpacity>
              <Button style={styles.todoDelBtn} size={40} icon='delete-outline' />
            </TouchableOpacity>
          </View>
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginVertical: 5,
      marginHorizontal: 20,
      padding: 10,
      backgroundColor: "#FFF",
      borderRadius: 10,
    },
    todo: {
      flexDirection: 'row',
      alignItems: "center",
      justifyContent: 'space-between',
      height: 50,
      borderBottomColor: "#bbb",
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    todoCheckbox: {
      marginRight: 5,
    },
    todoText: {
      flexDirection: 'row',
    },
    todoDelBtn: {
      color: '#777'
    }
});

export default LogList;
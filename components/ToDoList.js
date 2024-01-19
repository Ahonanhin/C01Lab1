import React, {useState} from "react";
import {View, Text, StyleSheet, Button} from "react-native";
import {v4 as uuidv4, v4} from "uuid";
import AddTask from "./AddTask";

const ToDoList = ({todos = []}) => {
    const [toDos, setToDos] = useState(todos.map((todo) => ({id: uuidv4(), title: todo})));

    const addToDo = (newTitle) => {
        setToDos(prevToDos => [...prevToDos, {id: uuidv4(), title: newTitle}]);
    };

    const removeToDo = (id) => {
        setToDos(prevToDos => prevToDos.filter((todo) => todo.id !== id));
    };

    return (
        <View style={styles.container}>
            {toDos.map((todo) => (
                <View key={todo.id} style={styles.todoItem}>
                    <Text>{todo.title}</Text>
                    <Button title="Remove" onPress={() => removeToDo(todo.id)}/>
                </View>
            ))}
            <AddTask onAddTask={addToDo}/>
        </View>
    );
};


ToDoList.defaultProps = {
    todos: ["Task 1", "Task 2", "Task 3"]
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginTop: 50
    },
    todoItem: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: "80%",
        marginBottom: 10
    }
});

export default ToDoList;
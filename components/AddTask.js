import React, {useState} from "react";
import {View, TextInput, StyleSheet, Button} from "react-native";


const AddTask = ({onAddTask}) => {
    const [title, setTitle] = useState("");

    const handleonAddTask = () => {
        if (title.trim() !== "") {
            onAddTask(title);
            setTitle("");
        }
    }

    return (
        <View style={styles.addTask}>
            <TextInput
                style={styles.input}
                placeholder="Enter task"
                value={title}
                onChangeText={(text) => setTitle(text)}
                keyboardType="default"
                returnKeyType="done"
            />
            <Button title="Add Task" onPress={handleonAddTask}/>
        </View>
    );
}

const styles = StyleSheet.create({
    addTask: {
        marginVertical: 20
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10
    }
});

export default AddTask;
import React from "react";
import { View, TextInput, Button } from "react-native";

function ToDoForm({ addTask }) {
    
    const [taskText, setTaskText] = React.useState('');

    const handleAddTask = () => {
        addTask(taskText);
        setTaskText('');
    }

    return (
        <View style={styles.main}>
            <TextInput
            style={styles.input}
            placeholder="Add a new task..."
            onChangeText={(text) => setTaskText(text)}
            value={taskText}
            />

            <Button title="Add Task" onPress={handleAddTask} />

        </View>
    );


}

const styles = {

    main: { 
        margin: 20,
        padding: 20,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#000000',
        backgroundColor: 'lightyellow'
    },

    input: {
        margin: 20,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#000000'
    }
};

export default ToDoForm;
import React from 'react';
import { SafeAreaView, Alert } from 'react-native';
import ToDoForm from './ToDoForm';

function App() {

    const [tasks, setTasks] = React.useState([]);

    const addTask = (taskText) => {
        !tasks.includes(taskText) 
          ? setTasks([...tasks, taskText])
          : Alert.alert("Duplicate Task", "This task already exists!");
      };

    return (
        <SafeAreaView style={styles.main}>
            <ToDoForm addTask={addTask} />
        </SafeAreaView>
    );
}

const styles = {
    main: {
        flex: 1,
        backgroundColor: '#E3DA9E',
    }
};

export default App;
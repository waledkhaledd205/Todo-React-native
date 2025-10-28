
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styles } from "../styles";
import { useDispatch } from "react-redux"; 
import { addTodo } from "../redux/taskSlice"; 

const TodoForm = () => {
  const dispatch = useDispatch();
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submit = () => {
    if (!title.trim()) return; 

    const obj = {
      id: Date.now(),
      title,
      description,
      completed: false
    };

    dispatch(addTodo(obj)); 
    setDescription('');
    setTitle('');
  };

  return (
    <>
      <TextInput
        style={styles.formInput}
        placeholder="Task Title"
        placeholderTextColor="#888"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.formInput}
        placeholder="Details "
        placeholderTextColor="#888"
        value={description}
        onChangeText={setDescription}
        multiline 
      />
      <TouchableOpacity style={styles.submitButton} onPress={submit} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Add New Task </Text>
      </TouchableOpacity>
      <View style={styles.sectionDivider} />
    </>
  );
};

export default TodoForm;
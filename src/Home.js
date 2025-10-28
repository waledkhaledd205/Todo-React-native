



import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'; 
import { selectAllTodos, deleteTodo, toggleTodo, clearAllTodos } from "./redux/taskSlice"; 

const Home = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectAllTodos);
  
  const [filter, setFilter] = useState("all");

  const getFilteredTodos = () => {
    if (filter === "active") return todos.filter((todo) => !todo.completed);
    if (filter === "completed") return todos.filter((todo) => todo.completed);
    return todos;
  };

  const filteredTodos = getFilteredTodos();
  
  const clearTodos = () => {
    dispatch(clearAllTodos()); 
  };
  
  const handleDeleteTodo = (id) => dispatch(deleteTodo(id));
  const handleToggleTodo = (id) => dispatch(toggleTodo(id));

  return (
    <View style={styles.container}>
      <Text style={{ padding: 10, fontSize: 20, fontWeight: "bold" }}>
        Add a new todo
      </Text>
      <TodoForm />

      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={
            filter === "all"
              ? { ...styles.filterBtn, ...styles.activeFilterBtn }
              : styles.filterBtn
          }
          onPress={() => setFilter("all")}
        >
          <Text
            style={
              filter === "all"
                ? [styles.filterText, styles.activeFilterText]
                : styles.filterText
            }
          >
            All Tasks
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            filter === "active"
              ? { ...styles.filterBtn, ...styles.activeFilterBtn }
              : styles.filterBtn
          }
          onPress={() => setFilter("active")}
        >
          <Text
            style={
              filter === "active"
                ? [styles.filterText, styles.activeFilterText]
                : styles.filterText
            }
          >
            Pending
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            filter === "completed"
              ? { ...styles.filterBtn, ...styles.activeFilterBtn }
              : styles.filterBtn
          }
          onPress={() => setFilter("completed")}
        >
          <Text
            style={
              filter === "completed"
                ? [styles.filterText, styles.activeFilterText]
                : styles.filterText
            }
          >
            Completed
          </Text>
        </TouchableOpacity>
      </View>

      <Todos
        todos={filteredTodos}
        deleteTodo={handleDeleteTodo}
        toggleTodo={handleToggleTodo}
      />
       <TouchableOpacity onPress={clearTodos} style={styles.clearBtn}>
         <Text style={styles.clearBtnText}>Wipe Slate Clean</Text>
       </TouchableOpacity>
    </View>
  );
};

export default Home;
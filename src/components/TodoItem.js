import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { PATHS } from "../Router/Router";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { styles } from "../styles";

const TodoItem = ({ todo, deleteTodo, toggleTodo }) => {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        styles.todoItemContainer,
        todo.completed ? styles.todoItemCompleted : styles.todoItemActive,
      ]}
      onPress={() => navigate(PATHS.TODO_DETAILS, { todo: todo })}
    >
      <TouchableOpacity onPress={() => toggleTodo(todo.id)} style={styles.checkIconWrapper}>
        <FontAwesome5
          name={todo.completed ? "check-circle" : "circle"}
          size={20}
          color={todo.completed ? "#28a745" : "#6c757d"} 
        />
      </TouchableOpacity>

      <Text
        style={[
          styles.todoItemTitle,
          todo.completed && styles.todoItemTitleCompleted,
        ]}
      >
        {todo.title}
      </Text>

      <TouchableOpacity
        onPress={() => deleteTodo(todo.id)}
        style={styles.deleteIconWrapper}
      >
        <FontAwesome5
          name="trash-alt"
          size={18}
          color="#dc3545" 
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default TodoItem;
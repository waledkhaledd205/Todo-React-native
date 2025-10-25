import { View, Text, FlatList } from "react-native";
import TodoItem from "./TodoItem";
import { styles } from "../styles";

const Todos = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <View style={styles.todosListWrapper}>
      <Text style={styles.todosListHeader}>
        Task List
      </Text>

      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoItem
            todo={item}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={() => (
          <View style={styles.emptyListMessageContainer}>
            <Text style={styles.emptyListMessageText}>
              No tasks 
            </Text>
            <Text style={styles.emptyListMessageSubText}>
              add a new task!
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default Todos;
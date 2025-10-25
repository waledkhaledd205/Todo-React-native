import { useRoute } from "@react-navigation/native";
import { View, Text, ScrollView } from "react-native";
import { AntDesign, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles"; // Assuming the unified styles file is imported here

const TodoDetails = () => {
  const { params } = useRoute();

  if (!params?.todo)
    return (
      <View style={styles.errorContainer}>
        <AntDesign name="frowno" size={64} color="#ccc" />
        <Text style={styles.errorText}>No todo found</Text>
      </View>
    );

  const { todo } = params;

  return (
    <ScrollView style={styles.todoDetailsContainer}>
      <View style={styles.todoDetailsContent}>
        <View
          style={[
            styles.statusBadge,
            todo.completed ? styles.completedBadge : styles.activeBadge,
          ]}
        >
          <FontAwesome5 
            name={todo.completed ? "check-circle" : "circle"}
            size={18}
            color="white" // Color set to white for visibility on badge background
          />

          <Text style={styles.statusText}>
            {todo.completed ? "Completed" : "Active"}
          </Text>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <MaterialIcons name="title" size={24} color="#6a0dad" />
            <Text style={styles.sectionTitle}>Title</Text>
          </View>
          <Text
            style={[
              styles.detailTitle,
              todo.completed && styles.completedText,
            ]}
          >
            {todo.title}
          </Text>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <MaterialIcons name="description" size={24} color="#6a0dad" />
            <Text style={styles.sectionTitle}>Description</Text>
          </View>
          <Text style={styles.description}>
            {todo.description || "No description provided"}
          </Text>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <AntDesign name="calendar" size={22} color="#6a0dad" />
            <Text style={styles.sectionTitle}>Created</Text>
          </View>
          <Text style={styles.dateText}>
            {new Date(todo.id).toLocaleString()}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default TodoDetails;
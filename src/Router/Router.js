import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons"; 
import CompletedTasks from "../CompletedTasks";
import StackNavigator from "./StackNavigator";

const { Navigator, Screen } = createBottomTabNavigator();

export const PATHS = {
  STACK: 'STACK',
  Home: "Home",
  TODO_DETAILS: "TodoDetails",
  COMPLETED: 'Completed Tasks'
};

const tabStyles = StyleSheet.create({
  header: {
    backgroundColor: "#6a0dad", 
  },
  headerTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  tabBar: {
    backgroundColor: "#6a0dad", 
    borderTopColor: "transparent",
    position: "relative",
    height: 60, 
  },
  tabBarLabel: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 5,
  },
  tabBarButtonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const Router = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerStyle: tabStyles.header,
          headerTitleStyle: tabStyles.headerTitle,
          tabBarStyle: tabStyles.tabBar,
          tabBarLabelStyle: tabStyles.tabBarLabel,
          
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              style={tabStyles.tabBarButtonContainer}
            />
          ),
          
          tabBarActiveTintColor: '#ffffffff', 
          tabBarInactiveTintColor: 'white',
        }}
      >
        <Screen
          name={PATHS.STACK}
          component={StackNavigator}
          options={{
            headerTitle: "Todo App", 
            headerTitleAlign: "center",
            tabBarLabel: "Tasks", 
            tabBarIcon: ({ color, size }) => (
              <AntDesign
                name="home"
                size={size}
                color={color} 
              />
            ),
          }}
        />
        <Screen
          name={PATHS.COMPLETED}
          component={CompletedTasks}
          options={{
            headerTitle: "Completed Tasks",
            headerTitleAlign: "center",
            tabBarLabel: "Completed", 
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 
                name="check-double" 
                size={size} 
                color={color} 
              />
            ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Router;
import { View, Text } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux' 
import Todos from './components/Todos'
import { styles } from './styles'
import { selectCompletedTodos, deleteTodo, toggleTodo } from './redux/taskSlice' 

const CompletedTasks = () => {
  const dispatch = useDispatch();
  const completedTodos = useSelector(selectCompletedTodos); 

  const handleDeleteTodo = (id) => dispatch(deleteTodo(id));
  const handleToggleTodo = (id) => dispatch(toggleTodo(id));

  return (
    <View style={{flex: 1 , alignItems: 'center'}}>
      {completedTodos.length === 0 ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 18, color: '#888' }}>Zero Tasks Completed. Keep pushing!</Text>
        </View>
      ) : (
        <Todos 
          todos={completedTodos} 
          deleteTodo={handleDeleteTodo}
          toggleTodo={handleToggleTodo}
        />
      )}
    </View>
  )
}

export default CompletedTasks
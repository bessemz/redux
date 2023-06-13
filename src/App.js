
import './App.css';
import AddTodo from './component/AddTodo';
import Todo from './component/Todo'
import EditTodo from './component/EditTodo'
function App() {
  return (
    <div className="App">
      <AddTodo/>
      
      <Todo/>
    </div>
  );
}

export default App;

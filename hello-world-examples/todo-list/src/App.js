import React, {useState} from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  const handleChange = event => {
    setTodo(event.target.value);
  }

  const submit = event => {
    event.preventDefault();
    setTodos([...todos, todo]);
    setTodo('');
  }

  const done = item => {
    setTodos(todos.filter(x => x !== item));
  }


  return (
    <div className="App">
      <h1>TODO-List</h1>
      <p>powered by Lab73</p>

      <form onSubmit={submit}>
        <label>
          TODO   
          <input style={{marginLeft: '40px'}} type="text" value={todo} onChange={handleChange}/>
        </label>

        <input type="submit" value="Hinzufügen"/>
      </form>

      <h3>Deine Todo's</h3>

      <ul>
        {todos.length !== 0 ? todos.map(item => <li>{item}<button onClick={event => done(item)}>Erledigt</button></li>) : <div>Du hast keine Todo's!</div>}
      </ul>
    </div>
  );
}

export default App;


//using class component
/*
import React from "react";
class App extends React.Component {
  state = {
    users : [
      {id : 1, first_name : "Bob"},
      {id : 2, first_name : "helo"},
    ]
  }

  componentDidMount () {
    fetch('https://reqres.in/api/users')
    .then( res => res.json()) 
    .then( json => {
      console.log(json.data)
      this.setState ({users:json.data})
    });
    
  } 
  

  render(){
    return(
      <div>
        <ul>
          {this.state.users.map( u =>
            <li key={u.id}>
              {u.first_name}
            </li>
            )}
        </ul>
      </div>
    )
  }
}

export default App
*/

//using functional component
import './App.css';
import React, {useState, useEffect} from 'react';

const App = props => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
    .then( res => res.json())
    .then ( json =>{
      console.log(json.data);
      setUsers(json.data)
    })
  }, []);

  const Add = () => {
    fetch('https://reqres.in/api/users', {
      method : "POST",
      headers : {
        'content-type' : 'application/json'
      },
      body : JSON.stringify({first_name : "Tom"})
    }).then (res => res.json()).then(tom => {
      setUsers([...users, tom])
    })
  }

  return (
    <div className='App-header'>
      <ul>
        {users.map( u => 
          <li key={u.id}>{u.first_name}</li>
          )}
      </ul>
      <button onClick={Add}>Add User</button>
    </div>
  )
}

export default App
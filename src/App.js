import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Greet  from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';

function App() {
  return (
    <div className="App">
      <FunctionClick />
      <ClassClick />
      
      {/* <Greet name="Shubham" location="madhapur">
        <p>I am in Hyderabad</p>
      </Greet>
      <Greet></Greet>
      <Greet></Greet>
      
      <Hello /> */}
      /* <Counter/>
      <Message/> */}
      {/* <Welcome></Welcome> */}
    </div>
  );
}

export default App;

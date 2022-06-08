import React from 'react';
import Form from '../components/form/indexForm';
import List from '../components/list/indexList';
import { StopWatch } from '../components/stopwatch/stopwatch';

function App() {
  return (
    <div className="AppSt yle">
      <header className="App-header">
      
      <Form/>
      <List/>
      <StopWatch/>
      </header>
    </div>
  );
}

export default App;

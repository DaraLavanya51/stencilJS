// src/App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <app-header></app-header>
      <main>
        <h2>Welcome to the Micro Frontend App</h2>
        <p>This is a simple example using custom elements and ReactJS.</p>
      </main>
      <app-footer></app-footer>
    </div>
  );
}

export default App;

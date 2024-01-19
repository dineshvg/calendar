import React from 'react'
import './App.css'
import Developers from './Developers.js'

const devs = ['Dinesh', 'Sandra', 'Uzair', 'Rene']

function App() {
  return (
    <div className="App">
      <Developers devs={devs} date={new Date()} />
    </div>
  );
}

export default App

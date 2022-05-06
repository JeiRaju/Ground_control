import React from 'react';
import PermanentDrawerLeft from './components/sidebar/.jsx';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <PermanentDrawerLeft />
      <Dashboard />
    </div>
  );
}

export default App;

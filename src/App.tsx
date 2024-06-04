import { Routes, Route } from 'react-router-dom';
import './App.css'
import { Components } from './Page/Components';
import Home from './Page/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Components />} />
      </Routes>
    </>
  )
}

export default App

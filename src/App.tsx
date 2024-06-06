import { Routes, Route } from 'react-router-dom';
// import './App.css'
import { Components } from './Page/Components';
import Home from './Page/Home';
import Toppage from './Page/Toppage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Components />} />
        <Route path="/page" element={<Toppage />} />
      </Routes>
    </>
  )
}

export default App

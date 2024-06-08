import { Routes, Route } from 'react-router-dom';
import Toppage from './Page/Toppage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Toppage />} />
      </Routes>
    </>
  )
}

export default App

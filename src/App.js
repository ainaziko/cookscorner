import { Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/login/LoginPage';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<LoginPage/>}/>
      </Routes>
    </div>
  );
}

export default App;

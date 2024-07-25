import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import UpdateStatePage from './pages/UpdateState.jsx';
import HomePage from './pages/HomePage.jsx';
import ProPage from './pages/ProPage.jsx'
import TodaPage from './pages/TodaPage.jsx'
import Form from './pages/Form.jsx';
import UseEffect from './pages/UseEffect.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/prop' element={<ProPage />} />
        <Route path='/update-state' element={<UpdateStatePage />} />
        <Route path='/todo' element={<TodaPage />} />
        <Route path='/form' element={<Form />} />
        <Route path='/useeffect' element={<UseEffect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

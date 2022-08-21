import { Route, Routes } from 'react-router-dom';
import { Biography } from './components/Biography';
import { Links } from './components/Links';
import { Navigation } from './components/Navigation';
import { Portfolio } from './components/Portfolio';
import { Projects } from './components/Projects';
import './css/App.css'

function App() {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path='/Portfolio' element={ <Portfolio/> }/>
        <Route path='/Projects' element={ <Projects/> }/>
        <Route path='/Links' element={ <Links/> }/>
        <Route path='/Biography' element={ <Biography/> }/>
      </Routes>
    </>
  );
}

export default App;
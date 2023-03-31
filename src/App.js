import {BrowserRouter, Routes , Route} from 'react-router-dom'
import Inicio from './component/Inicio'
import Personaje from './component/Personaje'

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio></Inicio>}></Route>

          <Route path='/personaje/:id' element={<Personaje></Personaje>}></Route>
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;

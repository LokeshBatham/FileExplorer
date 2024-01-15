import './App.css';
import FileExplore from './Component/FileExplore';
import OpenFolder from './Component/OpenFolder';
import { BrowserRouter, Routes , Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<FileExplore />}  />
        <Route exact path='/:route' element={<OpenFolder />}  />
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;

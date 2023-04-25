import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Componet/Dashboard';
import Navbar from './Componet/Navbar';
import LearnMor from './Componet/LearnMor';
import AddBlog from './Componet/AddBlog';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Dashboard /> } />
          <Route path='/learn-mor' element={ <LearnMor /> } />
          <Route path='/add-blog' element={ <AddBlog /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
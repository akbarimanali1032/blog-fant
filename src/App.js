import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Blog from './Componet/Blog';
import Card from "./Componet/Card";
import New from "./Componet/New";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Blog /> } />
        <Route path="card" element={ <Card /> } />
        <Route path="New" element={ <New/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import EmployeeComponent from "./components/EmployeeComponent";
import './App.css';
function App() {

  return (
    <>
    <BrowserRouter>
    <HeaderComponent />
    <Routes>
       <Route path="/" element={<ListEmployeeComponent />} /> 
       <Route path="/employees" element={<ListEmployeeComponent />} />
       <Route path="/add-employee" element={<EmployeeComponent />} /> 
       <Route path="/update-employee/:id" element={<EmployeeComponent />} /> 
    </Routes>
    <FooterComponent />
    </BrowserRouter>
    </>
  )
}

export default App

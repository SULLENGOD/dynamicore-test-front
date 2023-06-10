import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { UserPage } from "./pages/User/User";
import { RegisterPage } from "./pages/Register/RegisterPage"
import './App.css'
import { Navbar } from "./components/Navbar";

function App(): JSX.Element {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/user" element={ <UserPage /> } />
        <Route path="/register" element={ <RegisterPage /> } />
      </Routes>
    </>
  )
}

export default App

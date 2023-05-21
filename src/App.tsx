import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { UserPage } from "./pages/User/User";
import './App.css'

function App(): JSX.Element {

  return (
    <>
      <h1 className="title">Front-End Test</h1>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/user" element={ <UserPage /> } />
      </Routes>
    </>
  )
}

export default App

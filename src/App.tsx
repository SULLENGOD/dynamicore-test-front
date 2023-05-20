import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { UserPage } from "./pages/User/User";

function App(): JSX.Element {

  return (
    <>
      <h1>front_end_test</h1>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/user" element={ <UserPage /> } />
      </Routes>
    </>
  )
}

export default App

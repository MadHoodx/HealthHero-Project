import Home from "./components/Home/Home";
import Login from "./components/Login/Login"
import Signup from "./components/Signup/Signup"
import Tdee from "./components/Tdee/Tdee"
import {Route, Routes} from "react-router-dom"

function App() {

  return (
    <div>
        
      <Routes>
          
          <Route path="*" element = {<Home/>} />
          <Route path="/login" element = {<Login/>} />
          <Route path="/sighup" element = {<Signup/>} />
          <Route path="/tdee" element = {<Tdee/>} />
         
      </Routes>


    </div>


  );
}

export default App;

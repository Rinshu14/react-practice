import Header from "./Header";
import { useState } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Teams from "./Teams";
import Login from "./Login";
import Logout from "./Logout";


function App() {
  const [isLogin, setIsLogin] = useState(false)
  const[lang,setLang]=useState("en")
  return (
    <div className="App">

      <Header lang={lang} setLang={setLang}/>
      <BrowserRouter>
        <Routes>


          <Route path="/" element={<Home />}></Route>
         
          <Route path="/about" element={<About lang={lang}/>}></Route>
          <Route element={<PrivateRoutes isLogin={isLogin}/>}>
            <Route path="/contact" element={<Contact  />}></Route>
            <Route path="/teams" element={<Teams />}></Route>
          </Route>
          <Route path="/login" element={<Login setIsLogin={setIsLogin} />}></Route>
          <Route path="/logout" element={<Logout  setIsLogin={setIsLogin}/>} ></Route>
        </Routes>


      </BrowserRouter>
      {/* {(isLogin ? <PrivateRoutes/> : <PublicRoutes/>)} */}




    </div>
  );
}





export default App;

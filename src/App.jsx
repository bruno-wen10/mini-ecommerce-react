import { Outlet } from "react-router-dom";
import { Nav } from "./components/nav/Nav";
import { Footer } from "./components/FOOTER/Footer";




export const App=()=>{

  return(
    <div>
      <h1>Olá Mundo</h1>
      <Nav/>

      <Outlet/>  

      <Footer/> 
      

    </div>
  )
}
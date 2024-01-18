import { Outlet } from "react-router-dom";




export const App=()=>{

  return(
    <div>
      <h1>Olá Mundo</h1>

      <Outlet/>   
      

    </div>
  )
}
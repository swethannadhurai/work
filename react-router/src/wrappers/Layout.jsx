import {Outlet} from "react-router"
import Navbar from "../Components/Navbar"



const Layout = () => {
  return (
      <div>
        <Navbar />

        <div>
          <Outlet /> 
        </div>
      </div>
  )
}

export default Layout
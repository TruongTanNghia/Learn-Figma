
import NavlinkActive from './NavlinkActive'

const Navbar = () => {
  return (
    <>
    
      <NavlinkActive  to="/">
        Home
      </NavlinkActive>
      <NavlinkActive  to="/Login">
        Login
      </NavlinkActive>
      <NavlinkActive  to="/Register">
        Register
      </NavlinkActive>
    </>
  )
}

export default Navbar
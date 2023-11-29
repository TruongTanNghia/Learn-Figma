
import NavlinkActive from './NavlinkActive'
 const navLinkStyle = ({ isActive }) => {
    // css trực tiếp
    return {
      fontweight: isActive ? 'bold' : 'normal',
      TextDecoderation: isActive ? 'none' : 'underline',
      padding: isActive ? '10px 20px' : 'none',
      color: isActive ? 'red' : '',
    };
  };
const Navbar = () => {
  return (
    <>
    
      <NavlinkActive  style={navLinkStyle}  to="/">
        Home
      </NavlinkActive>
      <NavlinkActive  style={navLinkStyle} to="/Login">
        Login
      </NavlinkActive>
      <NavlinkActive  style={navLinkStyle} to="/Register">
        Register
      </NavlinkActive>
    </>
  )
}

export default Navbar
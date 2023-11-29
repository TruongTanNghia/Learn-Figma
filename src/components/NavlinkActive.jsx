import { NavLink } from 'react-router-dom';

const NavlinkActive = (probs) => {
  return (
    <NavLink
      style={({ isActive }) => {
        return isActive ? { color: 'red' } : {};
      }}
      {...probs}
    />
  );
};

export default NavlinkActive;
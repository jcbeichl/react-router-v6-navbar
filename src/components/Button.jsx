import { NavLink } from "react-router-dom";

const Button = ({ to, onClick, label }) => {
  return (
    <>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? "nav-links active" : "nav-links"
        }
        onClick={onClick}
      >
        {label}
      </NavLink>
    </>
  );
};

export default Button;

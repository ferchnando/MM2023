import { Link, Outlet } from "react-router-dom";

const Layout = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/NewPatient">New Patient</Link>
      </li>
    </ul>
    <Outlet />
  </div>
);

export default Layout;
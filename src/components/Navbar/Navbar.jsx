import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import routes from "../../routes/routes";
import { useContext } from "react";
import { UserContext } from "../UserContext";

export default function Navbar() {
  const { user, profile, logout } = useContext(UserContext);

  return (
    <nav
      className={
        "navbar navbar-expand-lg bg-primaryC sticky-top " + styles.border_nav
      }
    >
      <div className="container-fluid">
        <Link className="h1 text-secondaryC" to={routes.home}>
          <span className="text-accentC">R</span>eactor
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {(profile && (
              <>
              <li className="nav-item">
                <Link className="nav-link" to={routes.profile}>{profile.username}</Link>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={()=>logout()}>Logout</button>
              </li>
              </>
            )) || (
              <>
                <li className="nav-item">
                  <Link to={routes.register} className="nav-link">
                    Registrati
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={routes.login} className="nav-link">
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

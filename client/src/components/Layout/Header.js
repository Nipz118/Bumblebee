import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { GiShop } from 'react-icons/gi';
import { useAuth } from '../../context/auth';
import toast from 'react-hot-toast';

function Header() {
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: '',
    });
    localStorage.removeItem('auth');
    toast.success('Logout successfully');
  };
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" class="navbar-brand">
              <GiShop />
              Bumblebee
            </Link>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NavLink to="/" class="nav-link active">
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/category" class="nav-link active">
                  Category
                </NavLink>
              </li>
              {!auth.user ? (
                <>
                  <li class="nav-item">
                    <NavLink to="/register" class="nav-link" href="#">
                      Register
                    </NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink to="/login" class="nav-link" href="#">
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {auth?.user?.name}
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? 'admin' : 'user'
                          }`}
                          className="dropdown-item"
                        >
                          Dashboard
                        </NavLink>
                      </li>

                      <NavLink
                        onClick={handleLogout}
                        to="/login"
                        className="dropdown-item"
                      >
                        Logout
                      </NavLink>
                    </ul>
                  </li>
                </>
              )}
              <li class="nav-item">
                <NavLink to="/cart" class="nav-link" href="#">
                  Cart (0)
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;

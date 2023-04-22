import React, { Component } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import NosVehicule from "./NosVehicule";
import TarifReservation from "./TarifReservation";
import style from "./Header.module.css";

class Header extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <nav>
            <ul
              class="nav navbar-expand-lg w-100 bg-primary nav-justified fixed-top p-4"
              id={style.nave}
            >
              <li class="nav-item">
                <Link
                  to="/Home"
                  class="dropdown-item text-white font-weight-bold"
                >
                  {" "}
                  HOME
                </Link>
              </li>
              <li class="nav-item dropdown ">
                <Link
                  to="#"
                  className="nav-link dropdown-toggle text-white font-weight-bold"
                  data-bs-toggle="dropdown"
                  role="button"
                  aria-expanded="false"
                  id={style.titre}
                >
                  {" "}
                  NOS AGENCES{" "}
                </Link>
                <ul class="dropdown-menu bg-primary">
                  <li>
                    <a class="dropdown-item text-white " href="#">
                      Casablanca
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item text-white " href="#">
                      Tanger
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item text-white" href="#">
                      Marrakech
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item text-white" href="#">
                      El Jadida
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <Link
                  to="/TarifReservation"
                  class="dropdown-item text-white font-weight-bold"
                >
                  {" "}
                  TARIFS ET RÉSERVATIONS
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="/NosVehicule"
                  className="dropdown-item text-white font-weight-bold"
                >
                  NOS VEHICULE
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="/Contact"
                  className="dropdown-item text-white font-weight-bold"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/TarifReservation" element={<TarifReservation />}>
              {" "}
            </Route>
            <Route path="/Home" element={<Home />}>
              {" "}
            </Route>
            <Route path="/NosVehicule" element={<NosVehicule />}>
              {" "}
            </Route>
            <Route path="/Contact" element={<Contact />}>
              {" "}
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default Header;

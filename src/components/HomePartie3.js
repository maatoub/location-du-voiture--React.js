import React from "react";
import style from "./HomePartie3.module.css";

function HomePartie3() {
  return (
    <div  id={style.container}>
      <div className="container ">
        <div className="row ">
          <ul className="col-3 list-unstyled mt-5">
            <li>
              <a href="#" id={style.lien} className=" text-decoration-none text-white">
                {" "}
                Pays
              </a>{" "}
            </li>
            <li>
              <a href="#" id={style.lien} className="text-decoration-none text-white">
                {" "}
                Régions{" "}
              </a>{" "}
            </li>
            <li>
              <a href="#" id={style.lien}  className="text-decoration-none text-white">
                {" "}
                Villes
              </a>
            </li>
            <li>
              <a href="#" id={style.lien} className="text-decoration-none text-white">
                
                Quartiers
              </a>
            </li>
          </ul>
          <ul className="col-4 list-unstyled mt-5">
            <li>
              <a href="#" id={style.lien} className="text-decoration-none text-white">
                
                Commentaires
              </a>
            </li>
            <li>
              <a href="#" id={style.lien} className="text-decoration-none text-white">
                
                Contacts de l'entreprise
              </a>
            </li>
            <li>
              <a href="#" id={style.lien} className="text-decoration-none text-white">
                
                Actualités presse
              </a>
            </li>
            <li>
              <a href="#" id={style.lien} className="text-decoration-none text-white">
                
                Aide du Service Clients
              </a>
            </li>
          </ul>
          <ul className="col-4 list-unstyled mt-5 ">
            <li>
              <a href="#" id={style.lien} className="text-decoration-none text-white">
                
                Charte MSA{" "}
              </a>{" "}
            </li>
            <li>
              <a href="#" id={style.lien} className="text-decoration-none text-white">
                {" "}
                Articles{" "}
              </a>{" "}
            </li>
            <li>
              <a href="#" id={style.lien} className="text-decoration-none text-white">
                {" "}
                À propos{" "}
              </a>{" "}
            </li>
            <li>
              <a href="#" id={style.lien} className="text-decoration-none text-white">
                {" "}
                Aide aux partenaires{" "}
              </a>{" "}
            </li>
          </ul>
        </div>
        
      </div>
      <div id={style.logo}>
        <img src="./images/world-travel-award.png" alt="phone" width="90"/>
       
        </div>
      <div>
        <p className="text-center mt-5 text-black text-muted text-white-50" >
          Copyright © 2023 Booking.com Transport Limited. Tous droits réservés.
        </p>
        </div>
    </div>
  );
}

export default HomePartie3;

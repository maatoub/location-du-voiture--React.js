import React from "react";
import Cars from "./Cars";
import HomePartie3 from "./HomePartie3";

function NosVehicule(props){
  

    
  return (
      <div>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Découvrire nos voitures </h1>
            <p className="lead fw-normal text-white-50 mb-0">
            Quel que soit votre besoin, nous avons la voiture qu'il vous faut.
            </p>
          </div>
        </div>        
      </header>
    <section>
      <Cars/>
    </section>
     
  
      <footer>
        <HomePartie3/>
      </footer>
    </div>
    )
  
  }


export default NosVehicule;

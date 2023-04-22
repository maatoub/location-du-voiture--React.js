import React, { Component } from "react";
import CardCars from "./CardCars";
import style from "./Cars.module.css";

const Cars = () => {
  const info = [
    {
      id: 1,
      car: "Dacia Duster",
      Carburant: "Diesel",
      Clima: "Climatisation",
      Transmission: "Manuelle",
      photo:"./images/cars/duster.png",
      prix: 300,
    },
    {
      id: 2,
      car: "Hyundai I10 ",
      Carburant: "Essence",
      Clima: "Climatisation",
      Transmission: "Automatique",
      photo:"./images/cars/i10.jpg",
      prix: 200,
    },
    {
      id: 3,
      car: "Dacia Logan",
      Carburant: "Diesel",
      Clima: "Climatisation",
      Transmission: "Manuelle",
      photo:"./images/cars/Logan.jpg",
      prix: 270,
    },
    {
      id: 4,
      car: "Renault Clio 4",
      Carburant: "Diesel",
      Clima: "Climatisation",
      Transmission: "Manuelle",
      photo:"./images/cars/clio-4.png",
      prix: 230,
    },
    {
      id: 5,
      car: "Peugeot 301  ",
      Carburant: "Diesel",
      Clima: "Climatisation",
      Transmission: "Manuelle",
      photo:"./images/cars/peugeot-301.jpg",
      prix: 260,
    },
    {
      id: 6,
      car: "Citroën C3 ",
      Carburant: "Diesel",
      Clima: "Climatisation",
      Transmission: "Manuelle",
      photo:"./images/cars/Citroen_C3.png",
      prix: 200,
    },
    {
      id: 7,
      car: "Dacia Dokker  ",
      Carburant: "Diesel",
      Clima: "Climatisation",
      Transmission: "Manuelle",
      photo:"./images/cars/ducker.jpg",
      prix: 250,
    },
    {
      id: 8,
      car: "Peugeot 208",
      Carburant: "Diesel",
      Clima: "Climatisation",
      Transmission: "Manuelle",
      photo:"./images/cars/208.jpg",
      prix: 20,
    },
    {
      id: 9,
      car: "Kia Rio ",
      Carburant: "Diesel",
      Clima: "Climatisation",
      Transmission: "Manuelle",
      photo:"./images/cars/Kia_Rio.png",
      prix: 300,
    },
    {
      id: 10,
      car: "Renault Clio 5  ",
      Carburant: "Diesel",
      Clima: "Climatisation",
      Transmission: "Manuelle",
      photo:"./images/cars/duster.png",
      prix: 350,
    },
    {
      id: 11,
      car: "Fiat 500",
      Carburant: "Essence",
      Clima: "Climatisation",
      Transmission: "Automatique",
      photo:"./images/cars/duster.png",
      prix: 300,
    },
    {
      id: 12,
      car: "Hyundai Accent",
      Carburant: "Diesel",
      Clima: "Climatisation",
      Transmission: "Automatique",
      photo:"./images/cars/duster.png",
      prix: 200,
    },
  ];
  return (
    <div className="container">
          <div className="card-container " id={style.card}>
            {info.map((df, index) => (
              <CardCars
                key={index}
                car={df.car}
                Carburant={df.Carburant}
                Clima={df.Clima}
                Transmission={df.Transmission}
                photo={df.photo}
                prix={df.prix}
              />
            ))}

      </div>
    </div>
  );
};

export default Cars;
/*class Cars extends Component {
  
  render() {

    */

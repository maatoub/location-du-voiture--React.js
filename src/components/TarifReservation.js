import React from "react";
import HomePartie3 from "./HomePartie3";
import styles from "./TarifReservation.module.css";

function TarifReservation() {
  return (
    <div>
      <div className="container mt-5">
        <h2 className=" text-center p-3 font-weight-bold" id={styles.title}>
          Location de voitures pour tous les types de voyages De super offres à
          des tarifs avantageux, proposées par les plus grandes sociétés de
          location de voitures.
        </h2>
        <div className="img-thumbnail" id={styles.picture}>
          <img src="./images/voitures.png" alt="voiture" width="1000" />
        </div>
        <div className="img-fluid" id={styles.logo}>
          <img src="./images/tarif.jpg" alt="logo" width="110" />
        </div>

        <div className="row" id={styles.card}>
          <div className="col-sm-3">
            <div className="card bg-danger h-100 p-3">
              <img src="./images/7days.png" alt="Loyalty" />
              <div className="card-body">
                <h6>
                  Pour une location de voitures au Maroc pendant 1 semaine,
                  prévoyez en moyenne entre 118€ et 344€ pour une voiture
                  Citadine ou Compacte, et entre 225€ et 581€ pour une
                  Familliale.
                </h6>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card bg-danger h-100 p-3">
              <img src="./images/15days.png" alt="Loyalty" />
              <div className="card-body">
                <h6 className>
                  En moyenne, il faut compter entre 250€ et 590€ pour une
                  location de voiture au Maroc pendant 2 semaines pour un
                  véhicule de la catégorie citadine. Le tarif est le même dans
                  toutes les villes.
                </h6>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card bg-danger h-100 p-3">
              <img src="./images/30days.png" alt="Loyalty" />
              <div className="card-body">
                <h6>
                  En moyenne, comptez entre 750€ et 2.900€ pour louer un
                  véhicule au Maroc pendant 1 mois peu importe la ville où vous
                  récupérer le véhicule.
                </h6>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="">
              
                <h5 className="text-black">
                Documents nécessaires pour récupérer votre voiture de location au Maroc
                </h5>
                <p> Pour la prise en charge de votre voiture de location au Maroc vous devrez vous présenter en agence avec les documents suivants : </p>
                 <p>- Pièce d’identité valide (passeport ou carte d’identité)</p>
                 <p>- Permis de conduire en cours de validité du titulaire du contrat et de chaque conducteur additionnel</p>
                <p>- Carte de crédit (et non carte de débit) pour la caution du véhicule</p>
                <p><code>Attention,</code> seuls les documents originaux sont acceptés pour louer une voiture.</p>
            </div>
          </div>
        </div>
        <div>
          <div
            id="carouselExampleCaptions"
            class="carousel slide mt-4 p-2  "
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="5"
                aria-label="Slide 6"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="./images/marrakesh.jpg"
                  class="d-block w-100"
                  alt=".."
                />
                <div class="carousel-caption d-none d-md-block">
                  <h5 class="mb-0">Marrakech</h5>
                  <p class="mb-0">
                    12 agences de location de voitures tarif moyen par jour :
                    400 dh{" "}
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="./images/agadir.jpg" class="d-block w-100" alt=".." />
                <div class="carousel-caption d-none d-md-block">
                  <h5 class="mb-0">Agadir</h5>
                  <p class="mb-0">
                    12 agences de location de voitures tarif moyen par jour :
                    500 dh{" "}
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src="./images/casablanca.jpg"
                  class="d-block w-100"
                  alt=".."
                />
                <div class="carousel-caption d-none d-md-block">
                  <h5 class="mb-0">Casablanca</h5>
                  <p class="mb-0">
                    12 agences de location de voitures tarif moyen par jour :
                    450 dh
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="./images/fes.jpg" class="d-block w-100" alt=".." />
                <div class="carousel-caption d-none d-md-block">
                  <h5 class="mb-0">Fes</h5>
                  <p class="mb-0">
                    12 agences de location de voitures tarif moyen par jour :
                    650 dh{" "}
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src="./images/essaouira.jpeg"
                  class="d-block w-100"
                  alt=".."
                />
                <div class="carousel-caption d-none d-md-block">
                  <h5 class="mb-0">Essaouira</h5>
                  <p class="mb-0">
                    12 agences de location de voitures tarif moyen par jour :
                    720 dh{" "}
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src="./images/ouarzazate.jpg"
                  class="d-block w-100"
                  alt=".."
                />
                <div class="carousel-caption d-none d-md-block">
                  <h5 class="mb-0">Ouarzazate</h5>
                  <p class="mb-0">
                    12 agences de location de voitures tarif moyen par jour :
                    699 dh{" "}
                  </p>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div>
          <h4 className="mt-3">Astuces pour une location voiture pas cher au Maroc</h4>
  
          <div class="accordion accordion-flush p-2" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne" class={styles.textAccordion}>
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Réserver sur internet
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body" >
                  La concurrence entre les loueurs de voitures au Maroc étant
                  bien plus féroce sur internet, les tarifs sont toujours plus
                  intéressants que directement au comptoir des agences.{" "}
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo" class={styles.textAccordion}>
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Réserver à l’avance
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Les tarifs de location de voiture au Maroc sont définis selon
                  le nombre de véhicules disponibles restants. Moins il reste de
                  voitures, et plus les tarifs augmentent. Ainsi, plus vous
                  réservez tôt, plus vous profiterez de tarifs de location de
                  voiture au Maroc avantageux.{" "}
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree" class={styles.textAccordion}>
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Récupérez votre voiture dans une agence à l’aéroport
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Les tarifs de location sont toujours plus intéressants dans
                  les aéroports que dans le centre ville ou dans un hôtel. Ceci
                  est valable pour chaque aéroport du Maroc.{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HomePartie3 />
      
    </div>
  );
}

export default TarifReservation;

import React from "react";

function HomePartie2() {
  return (
    <div className="container p-5 mb-5 bg-white">
      <div className="mb-5">
        <div className="row">
          <div className="col-sm-3">
            <div className="card h-100 p-3">
              <img src="./images/prix.png" alt="Best-prices" className="img-thumbnail"/>
               <div className="card-body">
                <p>Meilleur prix garanti</p>
                <h3>Obtenez le meilleur prix lors de votre réservation</h3>
               </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card h-100 p-3">
              <img src="./images/fidelite.png" alt="Loyalty" className="img-thumbnail"/>
               <div className="card-body">
                <p>Fidélité</p>
                <h3>Devenez un membre privilège pour débloquer des récompenses</h3>
               </div> 
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card p-3">
              <img src="./images/securite.jpg " alt="Loyalty" className="img-thumbnail"/>
               <div className="card-body">
                <p>Sécurisé</p>
                <h3>Protégez vos données personnelles avec notre processus de réservation sécurisé</h3>
               </div> 
            </div>
          </div>
          <div className="col-sm-3 mt-5">
          <img src="./images/location-voiture.png" alt="location"  width={400} className="rounded mx-auto d-block"/>
          
          </div>
        </div>
      </div>
  
      <div>
      <div id="accordion">
        
        <div class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button
                class="btn btn-link"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                De quoi ai-je besoin pour louer une voiture ?
              </button>
            </h5>
          </div>

          <div
            id="collapseOne"
            class="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div class="card-body">
              Pour réserver votre véhicule, vous n'avez besoin que : d'une carte
              de crédit ou de débit. Votre bon/evoucher, pour montrer que vous
              avez déjà réglé le véhicule. La carte de crédit/débit du
              conducteur principal, avec suffisamment de fonds disponibles pour
              permettre de bloquer le dépôt de garantie de la voiture. Le permis
              de conduire valide et complet de chaque conducteur, obtenu depuis
              au moins 12 mois (parfois 24). Votre passeport ou carte d'identité
              que la société de location a besoin de voir.
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header" id="headingTwo">
            <h5 class="mb-0">
              <button
                class="btn btn-link collapsed"
                data-toggle="collapse"
                href="#collapseTwo"
                
                aria-controls="collapseTwo">
              
                Quel est l'âge requis pour louer un véhicule ?
              </button>
            </h5>
          </div>
          <div
            id="collapseTwo"
            class="collapse show"
           
            data-parent="#accordion"
          >
            <div class="card-body">
              Pour la plupart des sociétés de location de voitures, l'âge requis
              est entre 21 et 70 ans. Si vous avez moins de 25 ans ou plus de 70
              ans, vous pourriez avoir à payer un supplément{" "}
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingThree">
            <h5 class="mb-0">
              <button
                class="btn btn-link collapsed"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Puis-je réserver une voiture de location pour quelqu'un d'autre
                ?
              </button>
            </h5>
          </div>
          <div
            id="collapseThree"
            class="collapse show"
            aria-labelledby="headingThree"
            data-parent="#accordion"
          >
            <div class="card-body">
              Oui, du moment que cette personne répond aux exigences du contrat
              de location. Il suffit de nous fournir ses coordonnées lors de la
              réservation.
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header" id="headingFore">
            <h5 class="mb-0">
              <button
                class="btn btn-link collapsed"
                data-toggle="collapse"
                data-target="#collapseFore"
                aria-expanded="false"
                aria-controls="collapseFore"
              >
                Tous les frais sont-ils inclus dans le prix de location ?
              </button>
            </h5>
          </div>
          <div
            id="collapseFore"
            class="collapse show"
            aria-labelledby="headingFore"
            data-parent="#accordion"
          >
            <div class="card-body">
              La grande majorité de nos locations comprennent la protection en
              cas de vol, la couverture partielle en cas de collision (CDW), les
              taxes locales, les taxes d'aéroport et les taxes routières. Vous
              aurez à payer pour tout service additionnel lors de la prise en
              charge de votre voiture, comme par exemple les frais de jeune
              conducteur, de conducteur supplémentaire ou d'abandon - mais nous
              vous préciserons toujours combien cela vous coûtera avant de
              confirmer la réservation de votre véhicule (prendre vos propres
              sièges enfant ou GPS peut vous aider à réduire le coût de votre
              location). Pour plus de détails sur ce qui est inclus, il suffit
              de vérifier les conditions de vente de la voiture qui vous
              intéresse.{" "}
            </div>
          </div>
        </div>



        <div class="card">
          <div class="card-header" id="heading4">
            <h5 class="mb-0">
              <button
                class="btn btn-link collapsed"
                data-toggle="collapse"
                data-target="#collapse4"
                aria-expanded="true"
                aria-controls="collapse4"
              >
                  Comment puis-je trouver la location de voiture la moins chère ?{" "}
              </button>
            </h5>
          </div>
          <div
            id="collapse4"
            class="collapse show"
            aria-labelledby="heading4"
            data-parent="#accordion"
          >
            <div class="card-body">
                 Nous travaillons avec toutes les grandes enseignes de location de
              voitures internationales (et beaucoup de petites entreprises
              locales) pour vous offrir un grand choix de véhicules au meilleur
              prix. C'est ainsi que nous pouvons vous trouver des offres de
              location de voitures dans plus de 60 000 destinations dans le
              monde. Pour comparer les tarifs et trouver votre véhicule idéal à
              un prix imbattable, il suffit d'utiliser notre formulaire de
              recherche.{" "}
            </div>
          </div>
        </div>


        <div class="card">
          <div class="card-header" id="headingFive">
            <h5 class="mb-0">
              <button
                class="btn btn-link collapsed"
                data-toggle="collapse"
                data-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive">
              
                Comment puis-je trouver la location de voiture la moins chère ?{" "}
              </button>
            </h5>
          </div>
          <div
            id="collapseFive"
            class="collapse"
            aria-labelledby="headingFive"
            data-parent="#accordion"
          >
            <div class="card-body">
              Nous travaillons avec toutes les grandes enseignes de location de
              voitures internationales (et beaucoup de petites entreprises
              locales) pour vous offrir un grand choix de véhicules au meilleur
              prix. C'est ainsi que nous pouvons vous trouver des offres de
              location de voitures dans plus de 60 000 destinations dans le
              monde. Pour comparer les tarifs et trouver votre véhicule idéal à
              un prix imbattable, il suffit d'utiliser notre formulaire de
              recherche.  
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default HomePartie2;

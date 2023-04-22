import React from "react";
import Styles from "./Formulaire.module.css";

function Formulaire() {
  return (
    <div>
      <div className="row ">
        <div className="col-5">
          <img src="images/rentcar.jpg" alt="car" width={650} />
        </div>

        <form className="col-6 m-auto bg-light p-5">
          <div class="form-group m-3">
            <span class="form-label">Model</span>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Dacia Duster</option>
              <option>Citroën C3</option>
              <option>Dacia Logan</option>
              <option>Dacia Stepway</option>
              <option>Renault Clio 4</option>
              <option>Peugeot 208</option>
              <option>Renault Clio 5 </option>
              <option>Fiat 500</option>
              <option>Hyundai Accent</option>
            </select>
          </div>
          <div class="row m-2">
            <div class="col-sm-6">
              <div class="form-group">
                <span class="form-label">Du</span>
                <input class="form-control" type="date" required />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <span class="form-label">Au</span>
                <input class="form-control" type="date" required />
              </div>
            </div>
          </div>
          <div class="row m-2">
            <div class="col-sm-4">
              <div class="form-group">
                <span class="form-label">Age</span>
                <select class="form-control">
                  <option>18-22</option>
                  <option>22-26</option>
                  <option>26-plus</option>
                </select>
                <span class="select-arrow"></span>
              </div>
            </div>
          </div>
          <div class="form-btn mt-3 m-lg-4">
            <button className="btn btn-primary">RESERVE</button>
          </div>
        </form>
      </div>

      <div className="row" id={Styles.rowPhone}>
        <div className="col-3">
          <img src="./images/tele.png" alt="phone" width="50" />
          <div id={Styles.cont}>
            <label id={Styles.ville}>Marrakech</label>
          </div>
          <span id={Styles.numero}>+212.524.439.554</span>
        </div>
        <div className="col-3">
          <img src="./images/tele.png" alt="phone" width="50" />
          <div id={Styles.cont}>
            <label id={Styles.ville}>El Jadida</label>
          </div>
          <span id={Styles.numero}>+212.523.350.821</span>
        </div>
        <div className="col-3">
          <img src="./images/tele.png" alt="phone" width="50" />
          <div id={Styles.cont}>
            <label id={Styles.ville}>Casablanca</label>
          </div>
          <span id={Styles.numero}>+212.522.280.021</span>
        </div>
        <div className="col-3">
          <img src="./images/tele.png" alt="phone" width="50" />
          <div id={Styles.cont}>
            <label id={Styles.ville}>Tanger</label>
          </div>
          <span id={Styles.numero}>+212.668.444.444</span>
        </div>
      </div>
    </div>
  );
}

export default Formulaire;

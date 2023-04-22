import React, { Component } from "react";
import style from "./CardCars.module.css";
class CardCars extends Component {
  render() {
    return (
      <section>
        <div className="container  mt-5">
          <div>
            <div className="col-6 mb-3">
              <div className="card p-4" id={style.card}>
                <img
                  className="card-img-top"
                  src={"https://dummyimage.com/450x400/dee2e6/6c757d.jpg"}
                  alt="..."
                />

                <div className="card-body p-1">
                  <div className="text-center">
                    <h5 className="fw-bolder">{this.props.car} </h5>
                    <p><i class="fas fa-check text-danger"></i>  {this.props.Carburant} </p>
                 <p><i class="fas fa-check text-danger"></i>  {this.props.Transmission} </p>
                 <p><i class="fas fa-check text-danger"></i>{this.props.Clima} </p>
                 <h5> {this.props.prix} DH/J</h5>
                  </div>

                  
                </div>

                <div className="card-footer p-1 pt-3 border-top-0 bg-transparent">
                  <div className="text-center">
                    <button
                      type="button"
                      class="btn btn-outline-dark mt-auto "
                      data-toggle="modal"
                      data-target="#infoModal"
                    >
                      RESERVER
                    </button>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CardCars;

import React, { useRef } from 'react';
import HomePartie3 from "./HomePartie3";
import emailjs from '@emailjs/browser';

export const Contact = () => {
 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_naygs9a', 'template_hphufch', form.current, '1uL_a1HAZmLbqYUmq')
      .then((result) => {
          alert("Message envoye")
      }, (error) => {
          console.log(error.text);
      });
  };
    

   
    return (
      <div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-6">
              <form ref={form} onSubmit={sendEmail} className="mt-5 p-5 bg-light">
                <div class="row mb-4">
           
                  <div class="col">
                    <div class="form-outline">
                      <label class="form-label" for="form3Example2">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        name="user_name"
                        id="form3Example2"
                        class="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-outline">
                    <label className="mt-4"> Email </label>
                    <input type="text" name="user_email"  className="form-control" required/>
                  </div>
                  <div>
                    <label className="mt-4">Message</label>
                    <textarea name="message" className="form-control" required></textarea>
                  </div>
                  <div className="mt-4">
                    <button className="btn btn-primary btn-block mt-2">
                      {" "}
                      Envoyer
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-6">
              <div className="pt-5">
                <iframe
                  src="https://www.google.com/maps/d/u/0/embed?mid=1GFjO2vOfue2xcWJWuLUJNBzuaAfWtOI&ehbc=2E312F"
                  width="640"
                  height="480"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-3">
              <img src="./images/localisation.png" width="50" />
              <span> 198 West casa-voyageur</span>
            </div>
            <div className="col-3">
              <img src="./images/phone.png" width="50" />
              <span> +212 62369526</span>
            </div>
            <div className="col-3">
              <img src="./images/email.png" width="50" />
              <span> info.location@gmail.com</span>
            </div>
            <div className="col-3">
              <img src="./images/fb.png" width="50" />
              <a
                href="www.facebook.com"
                className="text-decoration-none text-black p-3"
              >
                site.com{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <HomePartie3 />
        </div>
      </div>
    );
  }


export default Contact;

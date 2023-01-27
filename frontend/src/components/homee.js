import React from "react";
import './back2.jpg';

const homee = () => {
  return (
    <>
    <section id="user_account_section_block_top" className="page-section h-auto">
          <div className="container">
              <div className="row justify-content-center">
                  <div className="col-lg-8 text-center">
                      <h1 className="text-black">Welcome to our Ratatouille website!</h1>
                  </div>
              </div>
              <section id="story_section" className="page-section h-auto">
                  <div className="container">
                      <hr className="divider" />
                      <div className="row justify-content-center">
                          <p className=" d-flex align-items-center text-black ">
                              Nous connaissons bien vos habitudes alimentaires, et c'est pour cela que nous vous proposons de vous aider à changer vos habitudes et manger plus sainement!
                              {/* Venez nous rendre visite à notre restaurant et profiter de nos bons petits plats. */}
                          </p>
                      </div>
                  </div>
              </section>
              <br />

              <div className="row justify-content-center">
                  <div className="col-lg-8 text-center">
                      <h2 className="text-black">Trouvez un produit de substitution</h2>
                  </div>
              </div>
              <br />
              <div className="row justify-content-center">
                  {/* Please note that the form action {% url 'core:research' %} is a django template tag, you will have to replace it with the appropriate url in your react application.
Also, the input {{ form.food }} is not present here, you may have to add it accordingly. */}
                  <form action="/afficheSub" method="get" className="col-lg-6">
                      <div className="input-group">
                          <input type="text" className="form-control" placeholder="Search for..." />
                          <div className="input-group-append">
                              <button className="btn btn-secondary" type="submit">Rechercher</button>
                          </div>
                      </div>
                  </form>
                  {/* <form onSubmit={handleSubmit}>
                    <label>
                    Code barre:
                    <input type="text" value={barcode} onChange={(event) => setBarcode(event.target.value)} />
                    </label>
                    <button type="submit">Trouver un substitut</button>
                </form> */}
              </div>
          </div>
      </section></>
  );
};

export default homee;

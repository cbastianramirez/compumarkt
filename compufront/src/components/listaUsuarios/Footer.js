import React, { Fragment } from 'react'

export const Footer = () => {
  return (
    <>
        <footer className="py-1">
          <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
            <div className='me-5 d-none d-lg-block'>
              <span>Siguenos en nuestras redes sociales</span>
            </div>
            
            <div className="col">
                <a href="#" className="me-4 text-reset">
                <i className="facebook"></i>
                </a>
            </div>
            
            </section>
        
            <section className="">
            <div className="container text-center text-md-start mt-5">
                
                <div className="row mt-3">
                
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                
                    <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3"></i>Productos Online
                    </h6>
                    <p>
                   Gamers, Boards,Procesadores, entre otros... ven síguenos.
                    </p>
                </div>
                
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                      Productos computadores, boards, videojuegos, procesadores
                    </h6>
                    <p>
                      <a href="#" className="text-reset">Boards</a>
                    </p>
                    <p>
                      <a href="#" className="text-reset">Computadores</a>
                    </p>
                    <p>
                      <a href="#" className="text-reset">Gamers</a>
                    </p>
                    <p>
                      <a href="#" className="text-reset">Xbox</a>
                    </p>
                </div>
               
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    
                    <h6 className="text-uppercase fw-bold mb-4">
                    Explora
                    </h6>
                    <p>
                    <a href="#" className="text-reset">Ordenes</a>
                    </p>
                    <p>
                    <a href="#" className="text-reset">Herramientas</a>
                    </p>
                    <p>
                    <a href="#" className="text-reset">Ayuda</a>
                    </p>
                
                </div>
                
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    
                    <h6 className="text-uppercase fw-bold mb-4">
                    Contactanos en
                    </h6>
                    <p><i className="fas fa-home me-3"></i> Bogóta D.C, Medellín Colombia</p>
                    <p>
                    <i className="fas fa-envelope me-3"></i>
                    productosatualcance@comercio.com
                    </p>
                    <p><i className="fas fa-phone me-3"></i> 77 777 77 7</p>
                    <p><i className="fas fa-print me-3"></i> 88 888 88 8</p>

                    <p className="mt-1">
                      TopDevelopers Team
                      <br></br>
                      Mision TIC 2022
                    </p>
                </div>
              </div>   
            </div>
          </section>
        </footer>
    </>
  )
}
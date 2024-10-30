import React from "react";
import img1 from './Images/img1.jpg'; 
import img2 from './Images/img4.jpg';
import img3 from './Images/img5.jpg';
import './Style/caro.css';

function Carousel() {
    return (
      <div id="coffeeCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#coffeeCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#coffeeCarousel" data-slide-to="1"></li>
          <li data-target="#coffeeCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="Coffee Image 1" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Welcome to Our Coffee House</h5>
              <p>Experience the finest coffee blends.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="Coffee Image 2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Freshly Brewed Coffee</h5>
              <p>Always fresh, always delicious.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="Coffee Image 3" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Relax and Enjoy</h5>
              <p>Your perfect cup is just a sip away.</p>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#coffeeCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#coffeeCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
  
  export default Carousel;
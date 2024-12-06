import home_slide_1 from '../../../public/home-slide-5.jpeg'
import home_slide_2 from '../../../public/home-slide-6.jpeg'
import home_slide_3 from '../../../public/home-slide-8.jpeg'

const Gallery = () => {
    return ( 
        <>
          <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={home_slide_1} className="d-block w-100" alt="..."/>
            <div>
                <h1>Queima de estoque</h1>
            </div>
          </div>
          <div className="carousel-item">
            <img src={home_slide_2} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={home_slide_3} className="d-block w-100" alt="..."/>
          </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
          </button>
          </div>
        </>
     );
}
 
export default Gallery;
import Carousel from "react-bootstrap/Carousel";

function Slider() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/8547142/pexels-photo-8547142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Organize your Work</h3>
            <p>
              Have a clear strategy on how you do your work so as to be
              organized.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/7718707/pexels-photo-7718707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Organize your Work</h3>
            <p>
              Have a clear strategy on how you do your work so as to be
              organized.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/7213439/pexels-photo-7213439.jpeg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Organize your Work</h3>
            <p>
              Have a clear strategy on how you do your work so as to be
              organized.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
    </div>
    
  );
}

export default Slider;

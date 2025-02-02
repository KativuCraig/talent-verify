import slide01 from '../assets/slide01.jpeg'
import slide02 from '../assets/slide02.jpeg'
import slide03 from '../assets/slide03.jpeg'

import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  return (
  <div className="row">
    <Carousel variant="dark">
      <Carousel.Item>
      <img
  className="d-block w-100"
  src={slide01}
  alt="First slide"
  style={{ height: '550px' }}
/>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide03}
          alt="Second slide"
          style={{ height: '550px' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide02}
          alt="Third slide"
          style={{ height: '550px' }}
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default Home;
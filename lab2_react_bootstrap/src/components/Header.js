import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(){
return(
    <header>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='images\pizza5.jpg'
            alt='First Banner'
            style={{ width :'100%', height: '500px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h2>Neapolitan Pizza</h2>
            <p>If you are looking for traditional Italian pizza, the Neapolitan is the best option!</p>
          </Carousel.Caption>
        </Carousel.Item>
    </header>
);
}
export default Header;
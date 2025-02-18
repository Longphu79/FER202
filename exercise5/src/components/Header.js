import Carousel from 'react-bootstrap/Carousel';

function Header(){
return(
    <header>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='fpt_student.jpg'
            alt='First Banner'
            style={{ width :'100%', height: '500px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
    </header>
);
}
export default Header;
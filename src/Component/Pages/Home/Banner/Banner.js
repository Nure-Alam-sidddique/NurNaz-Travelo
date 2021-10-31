import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
      <div className="">
        <Carousel >
          <Carousel.Item className="h-50">
            <img
              className="d-block w-100"
              src="https://cdn.photoworkout.com/wp-content/uploads/2018/06/Travel-Photography-Tips.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.picsofasia.com/wp-content/uploads/2019/10/cropped-DSCF1599-3.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block  w-100"
              src="https://worldoftravelphotography.com/wp-content/uploads/2018/08/Things-I-learned-as-a-travel-photograher.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
};

export default Banner;
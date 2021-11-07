import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../../BannerImage/banner1.jpeg';
import banner2 from '../../../../BannerImage/banner2.jpeg';
import banner3 from '../../../../BannerImage/banner3.jpg';
const bannerImages = [
  {
    "id": 1,
    "title": "America",
    "description": "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    "image": banner1
  },
  {
    "id": 2,
    "title": "Brazil",
    "description": "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    "image": banner2
  },
  {
    "id": 3,
    "title": "Nepal",
    "description": "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    "image": banner3
  }
]
console.log(bannerImages);
const Banner = () => {
  
    return (
        <Carousel>
          {bannerImages.map((banner) => 
            <Carousel.Item key={banner.id}>
              <img
                className="d-block w-100"
                style={{height: "450px"}}
                src={banner.image}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>{banner.title}</h3>
                <p>{banner.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          )}
        </Carousel>
    );
};

export default Banner;
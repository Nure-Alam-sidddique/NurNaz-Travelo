import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../../BannerImage/banner1.jpeg';
import banner2 from '../../../../BannerImage/banner2.jpeg';
import banner3 from '../../../../BannerImage/banner3.jpg';
const bannerImages = [
  {
    id: 1,
    title: "America",
    description:
      "Room to breathe. We’ve got all the social distancing you want with hundreds of acres of parks",
    image: banner1,
  },
  {
    id: 2,
    title: "Brazil",
    description:
      "Brazil, officially the Federative Republic of Brazil, is the largest country in both South America ",
    image: banner2,
  },
  {
    id: 3,
    title: "Nepal",
    description:
      "Nepal, officially the Federal Democratic Republic of Nepal, is a landlocked country in South Asia.",
    image: banner3,
  },
];
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
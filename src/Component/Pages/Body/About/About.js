import React from 'react';
import { Col, Row } from 'react-bootstrap';

const About = () => {
    return (
      <div>
        <h1>
          Welcome To <span className="text-primary">NurNaz Travelo</span>
        </h1>
        <section>
          <Row>
            <div>
              <p className="text-align-center">
                Our goal is to remove any technical or financial barriers that
                can prevent you from making your own website. Our powerful tools
                empower individuals and business owners to create a website,
                sell online, or reach global audiences. Whether you're a
                beginner or website expert, we're excited to help you on your
                journey!
              </p>
            </div>
          </Row>
          <Row>
            <Col className="h-100">
              <div className="bg-secondary text-white">
                <p>
                  Our team started in the web hosting industry. After a few
                  years, we discovered there were too many challenges to making
                  a website. Traditional web hosting services were complicated
                  and expensive to manage.
                </p>
                <p>
                  Seeing a need for simplicity, the Website.com site builder was
                  born. We wanted to offer a website building platform that
                  would require no coding skills or design experience, with
                  everything needed to get published online. You can simply
                  focus on creating an amazing website that reflects your brand.
                </p>
                <p>
                  After seeing an increased need for ecommerce solutions, we
                  developed one of the only fully-featured, free and
                  commission-free online store builders. As our global userbase
                  grew, we expanded our editor with the ability to make
                  multilingual websites.
                </p>
              </div>
            </Col>
            <Col>
              <div>
                <img
                  src="https://blog.flyticket.com.bd/wp-content/uploads/2019/06/sajek-valley-1-1.jpg"
                  alt="Banner"
                />
              </div>
            </Col>
          </Row>
        </section>
      </div>
    );
};

export default About;
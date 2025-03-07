import { useState } from 'react';
import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Link from "next/link";
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.css';

import { getSortedServicesData } from "@library/services";

import CallToActionSection from "@components/sections/CallToAction";
import ServicesSection from "@components/sections/Services";
import CountersSection from "@components/sections/Counters";

const Services = (props) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Layouts>
      <PageBanner pageTitle={"Services"} pageDesc={"Our services vaulted us to the top of our industry."} />

      <ServicesSection />

      {/* Construction Services Start */}
      <section className="gap no-top construction-services">
        <div className="container">
          <Tab.Container id="services-tab-content" defaultActiveKey="tab-service-0">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="services-nav">
                <h2>Construction Services</h2>
                <Nav variant="pills" className="nav nav-pills mb-3">
                  <Nav.Item>
                    <Nav.Link eventKey="tab-service-0">Construction</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="tab-service-1">Quantity Surveying</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="tab-service-2">Shopfitting</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="tab-service-3">Project Development</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="tab-service-4">Project Management</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="tab-service-5">Civil Engineering</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="tab-service-6">Structural Engineering</Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </div>
            <div className="col-lg-8">
              <Tab.Content>
                <Tab.Pane eventKey="tab-service-0" title="General Contracting">
                  <figure>
                    <img className="w-100" src="/img/service3.jpg" alt="Services Nav Image 1" />
                    <figcaption>
                      <h3>General Contracting</h3>
                      <p>Overseeing the entire construction process to ensure timely and quality completion of projects.</p>
                    </figcaption>
                  </figure>
                </Tab.Pane>
                <Tab.Pane eventKey="tab-service-1" title="Construction Consultant">
                  <figure>
                    <img className="w-100" src="/img/service7.jpg" alt="Services Nav Image 2" />
                    <figcaption>
                      <h3>Project Management</h3>
                      <p>Coordinating all aspects of construction projects to ensure they are delivered on time and within budget.</p>
                    </figcaption>
                  </figure>
                </Tab.Pane>
                <Tab.Pane eventKey="tab-service-2" title="Metal Roofin">
                  <figure>
                    <img className="w-100" src="/img/services2.jpg" alt="Services Nav Image 3" />
                    <figcaption>
                      <h3>Quantity Surveying</h3>
                      <p>Providing precise cost estimates and financial management throughout the construction process to ensure project viability.</p>
                    </figcaption>
                  </figure>
                </Tab.Pane>
                <Tab.Pane eventKey="tab-service-3" title="House Renovation">
                  <figure>
                    <img className="w-100" src="/img/service9.jpg" alt="Services Nav Image 4" />
                    <figcaption>
                      <h3>Civil Engineering</h3>
                      <p>Planning and executing infrastructure projects that support community development and public safety.</p>
                    </figcaption>
                  </figure>
                </Tab.Pane>
                <Tab.Pane eventKey="tab-service-4" title="Green Building">
                  <figure>
                    <img className="w-100" src="/img/service4.jpg" alt="Services Nav Image 5" />
                    <figcaption>
                      <h3>Structural Engineering</h3>
                      <p>Designing safe and robust structures that meet all regulatory standards and withstand environmental challenges.</p>
                    </figcaption>
                  </figure>
                </Tab.Pane>
              </Tab.Content>
            </div>
          </div>
          </Tab.Container>
        </div>
      </section>
      {/* Construction Services End */}

      <CountersSection />

      {/* Video PopUp Start */}
      <div className="video-popup">
        <div className="container-fluid g-0">
          <div className="row">
          <video autoPlay muted loop>
          <source src="/videos/pbp-work.mp4" type="video/mp4" /></video>
            {/* <figure>
              <img className="w-100" src="/img/construction.jpeg" alt="Video PopUp Image" />
            </figure> */}
            <a className="video-play-btn" onClick={() => setOpen(true)} style={{"cursor": "pointer"}}>
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="35" height="56" viewBox="0 0 35 56"> <defs> <clipPath id="clip-video_arrow"> <rect width="35" height="56"/> </clipPath> </defs> <g id="video_arrow" data-name="video arrow" clipPath="url(#clip-video_arrow)"> <path id="Shape_1" data-name="Shape 1" d="M1362,5000.8,1327,4972V5027Z" transform="translate(-1326.998 -4971.996)" fill="rgba(0,0,0,0)"/> <path id="Shape_1_-_Outline" data-name="Shape 1 - Outline" d="M1333,5015.017l19.29-14.437L1333,4984.7v30.313M1327,5027V4972l35,28.807Z" transform="translate(-1326.998 -4971.996)"/> </g> </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* <ModalVideo channel='youtube' isOpen={isOpen} videoId="uemObN8_dcw" onClose={() => setOpen(false)} /> */}
      {/* Video PopUp Start */}

      {/* Service Style Two Start */}
      <section className="gap service-style-two">
        <div className="heading">
          <figure>
            <img src="/img/heading-icon.png" alt="heading-icon" width={50} />
          </figure>
          <span>What We Provide</span>
          <h2>Exclusive Services</h2>
        </div>
        <div className="container">
          <div className="row g-0">
            {props.services.map((item, key) => (
            <div key={`services-item-${key}`} className="col-lg-4 col-md-6 col-sm-12" >
              <div className="service-two-box">
                <h3><Link href={`/services/${item.id}`}>{item.title}</Link></h3>
                <p>{item.short}</p>
                <div className="service-two-icon d-flex-all justify-content-start">
                  <img src={item.image} alt={item.title} />
                  <Link href='#'>
                    <i className="fa-solid fa-arrow-up-long"></i>
                  </Link>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
      {/* Service Style Two End */}
      
      <CallToActionSection />
      
    </Layouts>
  );
};
export default Services;

export async function getStaticProps() {
  const allServices = getSortedServicesData();

  return {
    props: {
      services: allServices
    }
  }
}
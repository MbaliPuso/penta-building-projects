import dynamic from "next/dynamic";

import Layouts from "@layouts/Layouts";

import PageBanner from "@components/PageBanner";
import CountersSection from "@components/sections/Counters";
import RenovationSection from "@components/sections/Renovation";

const TeamSlider = dynamic( () => import("@components/sliders/Team"), { ssr: false } );
const PartnersSlider = dynamic( () => import("@components/sliders/Partners"), { ssr: false } );
const TestimonialSlider = dynamic( () => import("@components/sliders/Testimonial"), { ssr: false } );

const About = () => {
  return (
    <Layouts>
      <PageBanner pageTitle={"About Us"} pageDesc={"our values and vaulted us to the top of our industry."} />
      
      {/* About-First Start */}
      <section className="gap about-first">
        <div className="container">
          <div className="row">
            <h2>Building Excellence Across Industries</h2>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="who-we-are">
                <div>
                  <h3>Who We Are?</h3>
                  <p>We are dedicated to creating lasting infrastructure that enhances communities, drives economic growth, and leaves a positive legacy for future generations. Our team of experts brings extensive experience in planning, execution, and project management, ensuring seamless and efficient construction processes. From large-scale commercial developments to custom residential builds, we take pride in delivering exceptional results.</p>
                </div>
                <figure>
                  <img className="w-100" src="/img/gallery-1.jpg" alt="About Image One" />
                </figure>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="who-we-are space">
                <div>
                  <h3>What's in it for me?</h3>
                  <ul>
                    <li><i className="fa-solid fa-circle-dot" /> Sustainable Building Practices</li>
                    <li><i className="fa-solid fa-circle-dot" /> Skilled Workforce</li>
                    <li><i className="fa-solid fa-circle-dot" /> Uncompromising Quality</li>
                    <li><i className="fa-solid fa-circle-dot" /> End-to-End Solutions</li>
                    <li><i className="fa-solid fa-circle-dot" /> Legacy of Success</li>
                  </ul>
                </div>
                <figure>
                  <img className="w-100" src="/img/gallery-3.jpg" alt="About Image Two" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About-First End */}

      <CountersSection />

      {/*About How It Works Start */}
      <section className="gap about-how-it-works light-bg-color">
        <div className="heading">
          <figure>
            <img src="/images/heading-icon.png" alt="Heading Icon" />
          </figure>
          <span>Plan + Control</span>
          <h2>How it Works</h2>
        </div>
        <div className="container">
          <figure style={{"position": "relative", "zIndex": "9"}}>
            <img className="w-100" src="/img/gallery-2.jpg" alt="About How It Works" />
          </figure>
        </div>
        <div className="container">
          <div className="row g-0">
            <div className="col-lg-3 col-md-6 col-sm-12" >
              <div className="plans">
                <div className="y-box d-flex-all">
                  1.
                </div>
                <h3>Phase Plan</h3>
                <p>We integrate the design and construction process, ensuring every milestone aligns with project goals.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12" >
              <div className="plans">
                <div className="y-box d-flex-all">
                  2.
                </div>
                <h3>Design Coordination</h3>
                <p>Our team collaborates closely with architects and engineers to refine designs, optimizing efficiency and buildability.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12" >
              <div className="plans">
                <div className="y-box d-flex-all">
                  3.
                </div>
                <h3>Precision Planning</h3>
                <p>We develop accurate, coordinated layouts to serve as the foundation for flawless project execution.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12" >
              <div className="plans">
                <div className="y-box d-flex-all">
                  4.
                </div>
                <h3>Quality Control</h3>
                <p>Rigorous quality control measures are implemented at every stage, ensuring superior craftsmanship.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*About How It Works End */}

      {/*About Key Benefits Start */}
      <section className="gap about-key-benefits">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" >
              <div className="data">
                <figure>
                  <img className="w-100" src="/img/service2.jpg" alt="About key Benefits" />
                </figure>
              </div>
            </div>
            <div className="col-lg-6" >
              <div className="data">
                <h2>Key Benefits</h2>
                <ul>
                  <li>
                    <i className="fa-solid fa-check" />
                    <p>Strategic planning helps manage labor effectively, reducing unnecessary costs while maintaining high productivity.</p>
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    <p>Our system ensures seamless communication, precise scheduling, and accurate tracking to prevent delays and wastage.</p>
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    <p>Efficient procurement and logistics enable quicker utilization of materials upon delivery, keeping projects on schedule.</p>
                  </li>
                  <li>
                    <i className="fa-solid fa-check" />
                    <p>A well-managed supply chain ensures materials are readily available, minimizing disruptions and maximizing efficiency.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*About Key Benefits End */}

      {/* <TeamSlider noTop /> */}

      <RenovationSection />

      <TestimonialSlider />

      <PartnersSlider noTop />
      
    </Layouts>
  );
};
export default About;
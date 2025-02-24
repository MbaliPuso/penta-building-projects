import Layouts from "@layouts/Layouts";

import PageBanner from "@components/PageBanner";
import AboutSection from "@components/sections/About";
import CallToActionSection from "@components/sections/CallToAction";
import ImageView from "@components/ImageView";

const CoreValues = () => {
  return (
    <Layouts>
      <ImageView />

      <PageBanner pageTitle={"Core Values"} pageDesc={"Our commitment to excellence, integrity, and innovation drives Penta Building Projects to deliver outstanding results."} />
      
      <AboutSection />

      {/* Core Values Start */}
      <section className="gap no-top core-values">
        <div className="heading">
          <figure>
            <img src="/images/heading-icon.png" alt="Heading Icon" />
          </figure>
          <span>MAKE A DIFFERENCE</span>
          <h2>Our Core Values</h2>
        </div>
        <div className="container">
          <div className="row">
            <ul>
              <li>
                <div className="data">
                  <h3>Integrity</h3>
                  <p>We uphold the highest standards of honesty, transparency, and ethical business practices in every project we undertake. Our reputation is built on trust, and we are committed to delivering quality workmanship with unwavering integrity.</p>
                </div>
                <div className="image">
                  <figure>
                    <img className="w-100" src="/img/core-2.jpeg" alt="Core Values Image 1" />
                  </figure>
                </div>
              </li>
              <li>
                <div className="image">
                  <figure>
                    <img className="w-100" src="/img/about2.jpeg" alt="Core Values Image 1" />
                  </figure>
                </div>
                <div className="data">
                  <h3>Responsibility</h3>
                  <p>We take ownership of our work, ensuring that every project is executed with precision, professionalism, and care. Our responsibility extends beyond construction—we strive to create lasting value for our clients, employees, and the communities we serve.</p>
                </div>
              </li>
              <li>
                <div className="data">
                  <h3>Accountability</h3>
                  <p>We stand by our commitments and take full accountability for our actions. Through clear communication, teamwork, and a results-driven approach, we ensure that every project meets our high standards and exceeds client expectations.</p>
                </div>
                <div className="image">
                  <figure>
                    <img className="w-100" src="/img/core-1.jpeg" alt="Core Values Image 1" />
                  </figure>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Core Values End */}

      {/* Gallery Style One Start */}
      <div className="gallery-style-one">
        <div className="container-fluid g-0">
          <div className="row g-0">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <figure>
                <a data-fancybox="gallery" href="/img/gallery-1.jpeg">
                  <img className="img-fluid w-100" src="/img/gallery-1.jpeg" alt="Gallery 1" />
                </a>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <figure>
                <a data-fancybox="gallery" href="/img/gallery-2.jpeg">
                  <img className="img-fluid w-100" src="/img/gallery-2.jpeg" alt="Gallery 2" />
                </a>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <figure>
                <a data-fancybox="gallery" href="/img/gallery-3.jpeg">
                  <img className="img-fluid w-100" src="/img/gallery-3.jpeg" alt="Gallery 3" />
                </a>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <figure>
                <a data-fancybox="gallery" href="/img/gallery-4.jpeg">
                  <img className="img-fluid w-100" src="/img/gallery-4.jpeg" alt="Gallery 4" />
                </a>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <figure>
                <a data-fancybox="gallery" href="/img/gallery-5.jpeg">
                  <img className="img-fluid w-100" src="/img/gallery-5.jpeg" alt="Gallery 5" />
                </a>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <figure>
                <a data-fancybox="gallery" href="/img/gallery-6.jpeg">
                  <img className="img-fluid w-100" src="/img/gallery-6.jpeg" alt="Gallery 6" />
                </a>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <figure>
                <a data-fancybox="gallery" href="/img/gallery-7.jpeg">
                  <img className="img-fluid w-100" src="/img/gallery-7.jpeg" alt="Gallery 7" />
                </a>
              </figure>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <figure>
                <a data-fancybox="gallery" href="/img/gallery-8.jpeg">
                  <img className="img-fluid w-100" src="/img/gallery-8.jpeg" alt="Gallery 8" />
                </a>
              </figure>
            </div>
          </div>
        </div>
      </div>
      {/* Gallery Style One End */}

      {/* Innovation Start */}
      <section className="gap innovation">
        <div className="heading">
          <span>MAKE A DIFFERENCE</span>
          <h2>Building Excellence, Creating Impact</h2>
        </div>
        <div className="container">
          <div className="row">
            <ul>
              <li>
                <i className="fa-solid fa-check" />
                <p>Commitment to Quality</p>
              </li>
              <li>
                <i className="fa-solid fa-check" />
                <p>Client-Centered Approach</p>
              </li>
              <li>
                <i className="fa-solid fa-check" />
                <p>Sustainable Practices</p>
              </li>
              <li>
                <i className="fa-solid fa-check" />
                <p>Safety First</p>
              </li>
              <li>
                <i className="fa-solid fa-check" />
                <p>Trust and Integrity</p>
              </li>
              <li>
                <i className="fa-solid fa-check" />
                <p>Innovation in Action</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Innovation End */}

      <CallToActionSection />
      
    </Layouts>
  );
};
export default CoreValues;
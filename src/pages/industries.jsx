import Layouts from "@layouts/Layouts";
import Link from "next/link";

import { getSortedIndustriesData } from "@library/industries";

import PageBanner from "@components/PageBanner";

const Industry = (props) => {
  return (
    <Layouts>
      <PageBanner pageTitle={"Our Industries"} pageDesc={"Explore our diverse sectors: Industrial, Commercial, and Residential, where we deliver exceptional quality and innovative solutions tailored to meet the unique needs of each market."} />

      {/* Our Project One Start */}
      <section className="gap no-top project-completed our-projects-one">
        {props.industries.map((item, key) => (
        <div key={`projects-item-${key}`} className="prj-post">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="proj-data">
                  <h3><Link href='#'>{item.title}</Link></h3>
                  <p>{item.short}</p>
                  <div className="loc-date">
                    <div>
                      <span>CLIENT:</span>
                      <span>{item.client}</span>
                    </div>
                    <div>
                      <span>PROJECT DURATION:</span>
                      <span>{item.duration}</span>
                    </div>
                  </div>
                  <div className="loc-date">
                  <div>
                      <span>LARGEST PROJECT SIZE:</span>
                      <span>{item.size} m</span>
                    </div>
                    <div>
                      <span>HIGHEST PROJECT VALUE:</span>
                      <span>{item.value}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="data">
                  <figure>
                    <img src={item.image} alt={item.title} />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
        ))}

        {/* <div className="container">
          <div className="row">
            <div className="builty-pagination">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item"><a className="page-link" href="#."><i className='fa-solid fa-arrow-left-long'></i></a></li>
                  <li className="page-item"><a className="page-link" href="#.">01</a></li>
                  <li className="page-item"><a className="page-link" href="#.">02</a></li>
                  <li className="page-item"><a className="page-link" href="#.">03</a></li>
                  <li className="page-item space"><a className="page-link" href="#.">..........</a></li>
                  <li className="page-item"><a className="page-link" href="#.">08</a></li>
                  <li className="page-item"><a className="page-link" href="#."><i className='fa-solid fa-arrow-right-long'></i> </a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div> */}
      </section>
      {/* Our Project One End */}
      
    </Layouts>
  );
};
export default Industry;

export async function getStaticProps() {
  const allIndustries = getSortedIndustriesData();

  return {
    props: {
      industries: allIndustries
    }
  }
}
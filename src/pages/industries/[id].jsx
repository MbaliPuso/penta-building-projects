import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import Link from "next/link";
import { sliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

import { getSortedIndustriesData, getAllIndustryIds, getIndustryData, getRelatedIndustries } from "@library/industries";

import RelatedProjectsSection from "@components/RelatedIndustries";
import CallToActionSection from "@components/sections/CallToAction";

const IndustryDetail = ( props ) => {
  
  const industryData = props.data;
  let prev_id, next_id, prev_key, next_key = 0;

  props.industries.forEach(function(item, key){
    if ( item.id == industryData.id ) {
      prev_key = key - 1;
      next_key = key + 1;
    }
  })

  props.industries.forEach(function(item, key){
    if ( key == prev_key ) {
      prev_id = item.id;
    }
    if ( key == next_key ) {
      next_id = item.id;
    }
  })

  return (
    <Layouts>
      <PageBanner pageTitle={"Industry Detail"} pageDesc={"Built with excellence, quality, and innovation to exceed expectations."} />

      <section className="gap detail-page">

        <div className="container">
          <ul className="next-prev-projects">
            {prev_id != 0 && prev_id != undefined &&
            <li className="prev">
              <Link href='#'>
                <i className='fa-solid fa-arrow-left-long' />
              </Link>
            </li>
            }
            {next_id != 0 && next_id != undefined &&
            <li className="next">
              <Link href={`/industries/${next_id}`}>
                <i className='fa-solid fa-arrow-right-long' />
              </Link>
            </li>
            }
          </ul>
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="pr-dat">
                <div className="heading-style-2">
                  <div className="container p-0">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="data">
                          <span>Industry Overview</span>
                          <h2>{industryData.title}</h2>
                        </div>
                      </div>        
                    </div>
                  </div>
                </div>

                {industryData.contentHtml != "" &&
                <div dangerouslySetInnerHTML={{__html : industryData.contentHtml}} />
                }
                
                {typeof industryData.checklist != "undefined" &&
                <>
                  <h3>{industryData.checklist.title}</h3>
                  <ul className="include">
                    {industryData.checklist.items.map((item, key) => (
                    <li key={`checklist-item-${key}`}><i className="fa-solid fa-check" /> {item}</li>
                    ))}
                  </ul>
                </>
                }

                {typeof industryData.details != "undefined" &&
                <div className="row space">
                  {industryData.details.items.map((item, key) => (
                  <div key={`details-item-${key}`} className="col-lg-6 col-md-6 col-sm-12"  >
                    <div className="project-d-detail">
                      <div className="data">
                        <h3>{item.label}</h3>
                        <p>{item.value}</p>
                      </div>
                      <div className="d-flex-all icon">
                        <img src={item.icon} alt={item.alt} />
                      </div>
                    </div>
                  </div>
                  ))}
                </div>
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {typeof industryData.slider != "undefined" &&
        <>
          {/* Project Detail Slider Start */}
          <div className="gap no-top project-detail-slider">
            <div className="container-fluid g-0">
              <Swiper
                {...sliderProps.projDetailsSlider}
                className="p-d-slider"
              >
                {industryData.slider.items.map((item, key) => (
                <SwiperSlide key={`pds-slide-${key}`} className="swiper-slide">
                <figure>
                  <img src={item.image} alt={item.alt} />
                </figure>
                </SwiperSlide>
                ))}
                <div className="swiper-pagination" />
              </Swiper>
            </div>
          </div>
          {/* Project Detail Slider Start */}
        </>
      }

      <RelatedProjectsSection industries={props.related} /> 

      <CallToActionSection /> 

    </Layouts>
  );
};
export default IndustryDetail;

export async function getStaticPaths() {
    const paths = getAllIndustryIds()

    return {
      paths,
      fallback: false
    }
}

export async function getStaticProps({ params }) {
    const industryData = await getIndustryData(params.id)
    const relatedIndustries = await getRelatedIndustries(params.id)
    const allIndustries = await getSortedIndustriesData()

    return {
      props: {
        data: industryData,
        related: relatedIndustries,
        industries: allIndustries
      }
    }
}
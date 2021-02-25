import React, { useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/swiper-bundle.css';

// Import bootstrap components
import { Col, Row } from 'react-bootstrap';

// Import components
import Sidebar from '../common/Navbar';
import SliderCard from './SliderCard';

 // core version + navigation, pagination modules:
 import SwiperCore, { Navigation, Pagination, EffectCube, Autoplay } from 'swiper/core';

 // configure Swiper to use modules
 SwiperCore.use([Navigation, Pagination, EffectCube, Autoplay]);


const OrganizationCard = ({ data }) => {
  const eduOrgs = data.getOrganizations.filter(organization => organization.type === 'education');
  const expOrgs = data.getOrganizations.filter(organization => organization.type === 'experience');
  const certOrgs = data.getOrganizations.filter(organization => organization.type === 'certification');
  
  useEffect(() => {
    // init Swiper:
    const swiper = new Swiper('.swiper-container', {
      effect: 'cube',
      grabCursor: true,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }
    });
  }, []);

  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);

  return (
      <div id="organizations">
          <Row>
            <Col className="card-column" xs={12} md={6} lg={4}>
              <h1 className="organization-title" data-aos="fade-down" data-aos-once="true"><span className="navigation-color">{'<'}</span>Training{'  '}<span className="navigation-color">{'/>'}</span></h1>
              <div className="swiper-container" data-aos="fade-down" data-aos-once="true">
                <div className="swiper-wrapper">

                  {eduOrgs &&
                  eduOrgs
                  .map((organization, organizationIndex) => {
                      return (
                          <div key={organizationIndex} className="swiper-slide" style={{'backgroundColor': 'white', 'color': 'black'}}>
                              <SliderCard
                                  name={organization.name} 
                                  description={organization.description} 
                                  startDate={organization.startDate} 
                                  endDate={organization.endDate} 
                                  url={organization.url} 
                                  logo={organization.image} />
                          </div>
                      );
                    })
                  }
                </div>
              </div>
            </Col>
            <Col className="card-column" xs={12} md={6} lg={4}>
              <h1 className="organization-title" data-aos="fade-down" data-aos-once="true"><span className="navigation-color">{'<'}</span>Experience{'  '}<span className="navigation-color">{'/>'}</span></h1>
              <div className="swiper-container" data-aos="fade-down" data-aos-once="true">
                <div className="swiper-wrapper">

                  {expOrgs &&
                  expOrgs
                  .map((organization, organizationIndex) => {
                      return (
                          <div key={organizationIndex} className="swiper-slide" style={{'backgroundColor': 'white', 'color': 'black'}}>
                              <SliderCard
                                  name={organization.name} 
                                  description={organization.description} 
                                  startDate={organization.startDate} 
                                  endDate={organization.endDate} 
                                  url={organization.url} 
                                  logo={organization.image} />
                          </div>
                      );
                    })
                  }
                </div>
              </div>
            </Col>
            <Col className="card-column" xs={12} md={6} lg={4}>
              <h1 className="organization-title" data-aos="fade-down" data-aos-once="true"><span className="navigation-color">{'<'}</span>Certifications{'  '}<span className="navigation-color">{'/>'}</span></h1>
              <div className="swiper-container" data-aos="fade-down" data-aos-once="true">
                <div className="swiper-wrapper">

                  {certOrgs &&
                  certOrgs
                  .map((organization, organizationIndex) => {
                      return (
                          <div key={organizationIndex} className="swiper-slide" style={{'backgroundColor': 'white', 'color': 'black'}}>
                              <SliderCard
                                  name={organization.name} 
                                  description={organization.description} 
                                  startDate={organization.startDate} 
                                  endDate={organization.endDate} 
                                  url={organization.url} 
                                  logo={organization.image} />
                          </div>
                      );
                    })
                  }
                </div>
              </div>
            </Col>
          </Row>
        </div>
  )
}


export default OrganizationCard;
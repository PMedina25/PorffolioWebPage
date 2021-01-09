import React, { useState, useEffect } from 'react';

// Import bootstrap components
import { Card, Col, Container, Row } from 'react-bootstrap';

// Import react icons
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// Import components
import SliderCard from './SliderCard';

const OrganizationCard = ({ data }) => {
    const eduOrgs = data.getOrganizations.filter(organization => organization.type === 'education');
    const expOrgs = data.getOrganizations.filter(organization => organization.type === 'experience');
    const certOrgs = data.getOrganizations.filter(organization => organization.type === 'certification');

    const [eduOrganizations] = useState(eduOrgs);
    const [expOrganizations] = useState(expOrgs);
    const [certOrganizations] = useState(certOrgs);
    const [eduIndex, setEduIndex] = useState(0);
    const [expIndex, setExpIndex] = useState(0);
    const [certIndex, setCertIndex] = useState(0);

    useEffect(() => {
      const lastEduIndex = eduOrganizations.length - 1;

      if (eduIndex < 0) {
        setEduIndex(lastEduIndex);
      }
      if (eduIndex > lastEduIndex) {
        setEduIndex(0);
      }
    }, [eduIndex, eduOrganizations]);

    useEffect(() => {
        const lastExpIndex = expOrganizations.length - 1;

        if (expIndex < 0) {
            setExpIndex(lastExpIndex);
          }
        if (expIndex > lastExpIndex) {
            setExpIndex(0);
        }
    }, [expIndex, expOrganizations]);

    useEffect(() => {
        const lastCertIndex = certOrganizations.length - 1;

        if (certIndex < 0) {
            setCertIndex(lastCertIndex);
          }
        if (certIndex > lastCertIndex) {
            setCertIndex(0);
        }
    }, [certIndex, certOrganizations])

    useEffect(() => {
      let eduSlider = setInterval(() => {
        setEduIndex(eduIndex + 1);
      }, 5000);
      return () => clearInterval(eduSlider);
    }, [eduIndex]);

    useEffect(() => {
      let expSlider = setInterval(() => {
        setExpIndex(expIndex + 1);
      }, 5000);
      return () => clearInterval(expSlider);
    }, [expIndex]);

    useEffect(() => {
      let certSlider = setInterval(() => {
        setCertIndex(certIndex + 1);
      }, 5000);
      return () => clearInterval(certSlider);
    }, [certIndex]);

    return (
        <Container id="organizations" className="bg-light" fluid>
            <Row>
              <Col className="card-column" md={4}>
                <h1>Education</h1>
                <div className="cards-container">
                    {eduOrganizations &&
                    eduOrganizations
                    .map((organization, organizationIndex) => {
                        
                        let position = 'nextSlide';
                        if (organizationIndex === eduIndex) {
                        position = 'activeSlide';
                        }
                        if (organizationIndex === eduIndex - 1 || (eduIndex === 0 && organizationIndex === eduOrganizations.length - 1)) {
                        position = 'lastSlide';
                        }

                        return (
                            <Card key={organization.id} className={"m-auto slider-card " + position}>
                                <FiChevronLeft className="left-arrow-slider" onClick={() => setEduIndex(eduIndex - 1)} />
                                <SliderCard
                                    name={organization.name} 
                                    description={organization.description} 
                                    startDate={organization.startDate} 
                                    endDate={organization.endDate} 
                                    url={organization.url} 
                                    logo={organization.image} />
                                <FiChevronRight className="right-arrow-slider" onClick={() => setEduIndex(eduIndex + 1)} />
                            </Card>
                        );
                    })
                    }
                </div>
              </Col>
              <Col className="card-column" md={4}>
                <h1>Experience</h1>
                <div className="cards-container">
                    {expOrganizations &&
                    expOrganizations
                    .map((organization, organizationIndex) => {
                        
                        let position = 'nextSlide';
                        if (organizationIndex === expIndex) {
                        position = 'activeSlide';
                        }
                        
                        if (organizationIndex === expIndex - 1 || (expIndex === 0 && organizationIndex === expOrganizations.length - 1)) {
                        position = 'lastSlide';
                        }
                        

                        return (
                            <Card key={organization.id} className={"m-auto slider-card " + position}>
                                <FiChevronLeft className="left-arrow-slider" onClick={() => setExpIndex(expIndex - 1)} />
                                <SliderCard
                                    name={organization.name} 
                                    description={organization.description} 
                                    startDate={organization.startDate} 
                                    endDate={organization.endDate} 
                                    url={organization.url} 
                                    logo={organization.image} />
                                <FiChevronRight className="right-arrow-slider" onClick={() => setExpIndex(expIndex + 1)} />
                            </Card>
                        );
                    })
                    }
                </div>
              </Col>
              <Col className="card-column" md={4}>
                <h1>Certifications</h1>
                <div className="cards-container">
                    {certOrganizations &&
                    certOrganizations
                    .map((organization, organizationIndex) => {
                        
                        let position = 'nextSlide';
                        if (organizationIndex === certIndex) {
                        position = 'activeSlide';
                        }
                        if (organizationIndex === certIndex - 1 || (certIndex === 0 && organizationIndex === certOrganizations.length - 1)) {
                        position = 'lastSlide';
                        }

                        return (
                            <Card key={organization.id} className={"m-auto slider-card " + position}>
                                <FiChevronLeft className="left-arrow-slider" onClick={() => setCertIndex(certIndex - 1)} />
                                <SliderCard
                                    name={organization.name} 
                                    description={organization.description} 
                                    startDate={organization.startDate} 
                                    endDate={organization.endDate} 
                                    url={organization.url} 
                                    logo={organization.image} />
                                <FiChevronRight className="right-arrow-slider" onClick={() => setCertIndex(certIndex + 1)} />
                            </Card>
                        );
                    })
                    }
                </div>
              </Col>
            </Row>
          </Container>
    )
}

export default OrganizationCard;

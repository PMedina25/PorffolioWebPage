import React from 'react';
import { useQuery } from '@apollo/client';
import { FETCH_ORGANIZATIONS_QUERY } from '../../utils/graphql';

import { Col, Container, Row  } from 'react-bootstrap';

import SliderCard from './SliderCard';

const Organizations = () => {
    const { 
      loading, 
      error, 
      data 
    } = useQuery(FETCH_ORGANIZATIONS_QUERY);

    
    if (loading) {
      return <p>Loading...</p>;
    }
    if (error) {
      return <p>Error:(</p>;
    }

    return (
        <Container id="organizations" className="bg-light" fluid>
            <Row>
              <Col className="card-column" md={4}>
                <h1>Education</h1>
                {data.getOrganizations &&
                 data.getOrganizations
                  .filter(organization => organization.type === 'education')
                  .map(organization => (
                    <SliderCard
                      key={organization.id} 
                      name={organization.name} 
                      description={organization.description} 
                      startDate={organization.startDate} 
                      endDate={organization.endDate} 
                      url={organization.url} 
                      logo={organization.image}/>
                  ))
                 }
              </Col>
              <Col className="card-column" md={4}>
                <h1>Experience</h1>
                {data.getOrganizations &&
                 data.getOrganizations
                  .filter(organization => organization.type === 'experience')
                  .map(organization => (
                    <SliderCard 
                      key={organization.id} 
                      name={organization.name} 
                      description={organization.description} 
                      startDate={organization.startDate} 
                      endDate={organization.endDate} 
                      url={organization.url} 
                      logo={organization.image}/>
                  ))
                 }
              </Col>
              <Col className="card-column" md={4}>
                <h1>Certifications</h1>
                {data.getOrganizations &&
                 data.getOrganizations
                  .filter(organization => organization.type === 'certification')
                  .map(organization => (
                    <SliderCard 
                      key={organization.id} 
                      name={organization.name} 
                      description={organization.description} 
                      startDate={organization.startDate} 
                      endDate={organization.endDate} 
                      url={organization.url} 
                      logo={organization.image}/>
                  ))
                 }
              </Col>
            </Row>
          </Container>
    )
}

export default Organizations;
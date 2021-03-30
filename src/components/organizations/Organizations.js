import React from 'react';
import { useQuery } from '@apollo/client';
import { FETCH_ORGANIZATIONS_QUERY } from '../../utils/graphql';
import './styles/organizations.css';

// Import components
import OrganizationCard from './OrganizationCard';
import Loader from '../common/Loader';


const Organizations = () => {
    const { 
      loading, 
      error, 
      data 
    } = useQuery(FETCH_ORGANIZATIONS_QUERY);
    
    if (loading) {
      return <Loader section='Training and Experience'/>
    }
    if (error) {
      return <Loader section='Training and Experience'/>
        // return <h1>Error: Something Wrong Happened</h1>;
    }

    return (
      <OrganizationCard data={data} />
    )
}

export default Organizations;
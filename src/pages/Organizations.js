import React from 'react';
import { useQuery } from '@apollo/client';
import { FETCH_ORGANIZATIONS_QUERY } from '../utils/graphql';

// Import components
import OrganizationCard from '../components/organizations/OrganizationCard';
import Loader from '../components/common/Loader';


const Organizations = () => {
    const { 
      loading, 
      error, 
      data 
    } = useQuery(FETCH_ORGANIZATIONS_QUERY);
    
    if (loading) {
      return <Loader />
    }
    if (error) {
        return <h1>Error: Something Wrong Happened</h1>;
    }

    return (
      <OrganizationCard data={data} />
    )
}

export default Organizations;
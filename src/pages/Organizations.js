import React from 'react';
import { useQuery } from '@apollo/client';
import { FETCH_ORGANIZATIONS_QUERY } from '../utils/graphql';

// Import components
import OrganizationCard from '../components/organizations/OrganizationCard';
import Spinner from '../components/common/Spinner';


const Organizations = () => {
    const { 
      loading, 
      error, 
      data 
    } = useQuery(FETCH_ORGANIZATIONS_QUERY);
    
    if (loading) {
      return <Spinner />
    }
    if (error) {
        return <h1>Error: Something Wrong Happened</h1>;
    }

    return (
      <OrganizationCard data={data} />
    )
}

export default Organizations;
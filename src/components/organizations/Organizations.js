import React from 'react';
import { useQuery } from '@apollo/client';
import { FETCH_ORGANIZATIONS_QUERY } from '../../utils/graphql';

// Import components
import OrganizationCard from './OrganizationCard';

const Organizations = () => {
    const { 
      loading, 
      error, 
      data 
    } = useQuery(FETCH_ORGANIZATIONS_QUERY);
    
    // TODO: Add Spinner
    if (loading) {
      return <p>Loading...</p>;
    }
    if (error) {
      return <p>Error:(</p>;
    }

    return (
      <OrganizationCard data={data} />
    )
}

export default Organizations;
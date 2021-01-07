import gql from 'graphql-tag';

export const FETCH_ORGANIZATIONS_QUERY = gql`
{
    getOrganizations {
        id
        name
        description
        type
        startDate
        endDate
        url
        image
    }
}
`;
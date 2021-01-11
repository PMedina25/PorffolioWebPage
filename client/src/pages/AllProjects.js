import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { FETCH_PROJECTS_QUERY } from '../utils/graphql';

// Import components
import Projects from '../components/all-projects/Projects';
import Spinner from '../components/common/Spinner';

const AllProjects = () => {
    const {
        loading,
        error,
        data
    } = useQuery(FETCH_PROJECTS_QUERY);

    useEffect(() => {
        window.scroll({
            'top': 0,
            'left': 0,
            'behaviour': 'auto'
        });
    }, []);

    if (loading) {
        return <Spinner />
    }
    if (error) {
        return <h1>Error: Something Wrong Happened</h1>;
    }

    return (
        <div id="all-projects">
            <Projects projects={data} />
        </div>
    )
}

export default AllProjects;

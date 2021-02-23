import React from 'react';
import { Image } from 'react-bootstrap';
import { getTechnologyIcon } from '../../utils/get-technology-icon';

import { AiFillGithub } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';
import { FaLinkedin } from 'react-icons/fa';

const ProjectSingleContainer = ({ project }) => {
    return (
        <div className="project-single-container">
            <div className="image-project-single-container">
                <div className="overlay">
                    <Image src={project.image} fluid />
                </div>
                <div className="project-single-container-info">
                    <h4>{project.title}</h4>
                    <div className="project-single-container-description">
                        <p>{project.description}</p>
                    </div>
                    <div className="project-single-container-technologies-grid">
                        {project.technologies.map((technology, index) => {
                            return (
                                <div key={index} className="project-single-container-technology-item">
                                    {getTechnologyIcon(technology)}
                                    <div className="technology-name">
                                        {technology}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="project-single-container-links">
                        {
                            project.github &&
                            <a href={project.github} className="project-single-container-link-icon" target="_blank">
                                <AiFillGithub />
                            </a>
                        }
                        {
                            project.url &&
                            <a href={project.url} className="project-single-container-link-icon" target="_blank">
                                <BiLinkExternal />
                            </a>
                        }
                    </div>
                    {
                        project.title === 'Penpals' &&
                        <div className="project-team-members">
                            Team Members:{' '}
                            <div className="team-member">
                                <a className="member-linkedin" href="https://www.linkedin.com/in/laura-vendrell-aparisi-9139a0106/" target="_blank">
                                    <FaLinkedin className="member-linkedin-icon" />
                                    <div className="member-name">
                                        Laura Vendrell
                                    </div>
                                </a>
                            </div>
                            <div className="team-member">
                                <a className="member-linkedin" href="https://www.linkedin.com/in/elena-reboul-pardo-813a88139/" target="_blank">
                                    <FaLinkedin className="member-linkedin-icon" />
                                    <div className="member-name">
                                        Elena Reboul
                                    </div>
                                </a>
                            </div>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default ProjectSingleContainer;

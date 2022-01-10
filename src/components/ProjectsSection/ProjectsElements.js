
import styled from 'styled-components';

export const ProjectsContainer = styled.div`
    font-family: VT220;
    background: #000;
    padding-left: 60px;
    min-height: 100vh;
    position: relative;
    z-index: 1;
`

export const ProjectsBg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: linear-gradient(rgba(18, 16, 16, 0) 45%, rgba(0, 0, 0, 0.25) 60%);
    z-index: 10;
    background-size: 100% 3px, 2px 100%;
    pointer-events: none;
`

export const ProjectsLine = styled.div`
    position: absolute:
    top: 0;
    width: 100%;
    height: 15px;
    background-color: #ffffff10;
    z-index: 8;
    transform: translateY(-40px);
`

export const ProjectsSectionPrimary = styled.div`
    display: flex;
    flex-direction: row;
    padding: 40px 10px;
    background-color: #fa0;
    color: #000;

    a {
        color: #000;
        font-weight: bold;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const ProjectsSectionSecondary = styled.div`
    display: flex;
    flex-direction: row;
    padding: 40px 10px;
    background-color: #000;
    color: #fa0;
    
    a {
        color: #f90;
        font-weight: bold;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const ProjectTitle = styled.h1`
    padding: 20px;
    font-size: 3em;
`

export const ProjectLink = styled.a`
    padding-left: 20px;
`

export const ProjectDescription = styled.div`
    font-size: 1.5em;

    p {
        padding: 10px 0;
    }
`

export const Project = (props) => {
    var Section = ProjectsSectionPrimary
    if (props.secondary)
        Section = ProjectsSectionSecondary
    return (
        <Section>
            <ProjectTitle>{props.title}</ProjectTitle>
            <div>
                <ProjectLink href={props.link}>{props.link}</ProjectLink>
                <ProjectDescription>{props.desc}</ProjectDescription>
            </div>
        </Section>
    )
};

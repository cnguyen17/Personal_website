import React from 'react';
import Icon1 from '../../images/python.png';
import Icon2 from '../../images/react.png';
import Icon3 from '../../images/angular.png';
import useScrollReveal from '../../hooks/useScrollReveal';

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements';

const Services = () => {
  const [ref, isVisible] = useScrollReveal();

  const skills = [
    { icon: Icon1, name: 'Python', desc: 'Coded a span of projects in Python and it is my strongest coding language.' },
    { icon: Icon2, name: 'React Native', desc: 'I developed both EESANA and my portfolio website using React Native.' },
    { icon: Icon3, name: 'Angular', desc: 'I developed MSU Konnect using Angular, implementing the MEAN Stack framework.' },
  ];

  return (
    <ServicesContainer id='services'>
      <ServicesH1>My Skills</ServicesH1>
      <ServicesWrapper ref={ref}>
        {skills.map((skill, index) => (
          <ServicesCard key={skill.name} style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.12}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.12}s`
          }}>
            <ServicesIcon src={skill.icon} />
            <ServicesH2>{skill.name}</ServicesH2>
            <ServicesP>{skill.desc}</ServicesP>
          </ServicesCard>
        ))}
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;

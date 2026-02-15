import React from 'react';
import { useState } from 'react';
import Icon1 from '../../images/Travelport.jpg';
import Icon2 from '../../images/DevilDog.png';
import Icon3 from '../../images/jpmorgan.png';
import Icon4 from '../../images/Charles.jpg';
import Icon5 from '../../images/Zoom-Logo.png';
import Icon6 from '../../images/Northrop_grumman.png';
import Icon7 from '../../images/pacer.png';
import useScrollReveal from '../../hooks/useScrollReveal';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesP,
  ExpandedContent
} from './InternshipElements';

const Internships = () => {

  const [hoveredCard, setHoveredCard] = useState(null);
  const [ref, isVisible] = useScrollReveal();

  const handleMouseEnter = (index) => setHoveredCard(index);
  const handleMouseLeave = () => setHoveredCard(null);

  const internships = [
    {
      id: 1,
      icon: Icon7,
      link: 'https://pacer.co/',
      description:
        'Designed Figma prototypes aligned with user needs. Built web apps for Pacer using React and Firebase, including a live auction browser with advanced features.',
      expanded: (
        <ul>
          <li>
            Designed interactive demos and prototypes for future products and
            applications using Figma, ensuring alignment with user needs and
            product goals.
          </li>
          <li>
            Developed and deployed diverse web applications for Pacer using React,
            TypeScript, and Firebase, including a fully centralized live auction
            browser enabling users to buy and view vehicles.
          </li>
          <li>
            Integrated features such as profit margin calculations, bid costs, and
            shipping expenses, leveraging web scraping to aggregate data from
            multiple marketplaces.
          </li>
          <li>
            Redesigned Pacer's home page and multiple core applications, including
            the transaction page, shipping tracker, description builder, verify ID
            tool, and live auction browser, prioritizing mobile responsiveness and
            aesthetic simplicity to enhance user experience.
          </li>
          <li>
            Enhanced user interfaces across applications to fit mobile platforms
            and improve usability, leading to a more cohesive and visually
            appealing ecosystem of tools and services.
          </li>
        </ul>
      ),
    },
    {
      id: 2,
      icon: Icon6,
      link: 'https://www.northropgrumman.com/',
      description: 'Software Engineering Integration and Test Team, verifying requirements for satellite-deployed software.',
      expanded: (
        <ul>
          <li>
            Developed automated test scripts in Python for regression testing of
            software requirements intended for satellite deployment.
          </li>
          <li>
            Documented STC documents outlining detailed test steps for software
            requirements, shared on Confluence for knowledge sharing.
          </li>
          <li>
            Collaborated with cross-functional teams to identify, document, and
            communicate bugs discovered during testing and debugging.
          </li>
          <li>
            Conducted live testing with O&I, troubleshooting and
            documenting observations on performance and issues.
          </li>
          <li>
            Configured and set up Linux virtual machines for testing with
            bash scripting to automate the setup process.
          </li>
        </ul>
      ),
    },
    {
      id: 3,
      icon: Icon5,
      link: 'https://zoom.us/',
      description:
        'Production Service Engineer taking escalations and investigating complex service issues across OS environments.',
      expanded: (
        <ul>
          <li>
            Monitored and managed service quality with tools like
            IP telephony, conferencing solutions, and service monitoring.
          </li>
          <li>
            Collaborated with multiple tiers of support, investigating complex
            issues using WEB/Client/Server/Database services across different OS
            environments.
          </li>
          <li>
            Debugged diverse components of the Zoom client-server system,
            troubleshooting various layers of the OSI model.
          </li>
          <li>
            Conducted live technical support during real-time client calls,
            resolving high-priority issues.
          </li>
          <li>
            Deployed and managed containers using Docker and AWS cloud services
            like S3 to optimize escalated service aspects.
          </li>
        </ul>
      ),
    },
    {
      id: 4,
      icon: Icon1,
      link: 'https://www.travelport.com/',
      description:
        'Optimized TDM Microservices and APIs with JavaScript and C#. Integrated tools for automated dashboards.',
      expanded: (
        <ul>
          <li>
            Implemented solutions to optimize TDM Microservices and APIs using
            JavaScript and C#.
          </li>
          <li>
            Integrated a tool using JavaScript and PowerBI to automate and
            streamline interactive dashboard displays.
          </li>
          <li>
            Leveraged CI/CD tools like Jenkins and Ansible to streamline
            development, testing, and deployment processes.
          </li>
          <li>
            Contributed to automating registration for SAFe classes, increasing
            efficiency by 15%.
          </li>
        </ul>
      ),
    },
    {
      id: 5,
      icon: Icon2,
      link: 'https://www.devildogcyber.com/',
      description:
        'Cybersecurity Intern performing vulnerability testing for U.S. bases and automating official documentation.',
      expanded: (
        <ul>
          <li>
            Performed vulnerability testing for U.S. bases and institutions using
            Wireshark and NMAP, generating comprehensive vulnerability reports.
          </li>
          <li>
            Automated and formatted hundreds of official documents using Elastic
            Search, Access, Word, and Adobe.
          </li>
          <li>
            Demonstrated expertise in cybersecurity fundamentals, including threat
            detection and data analysis.
          </li>
        </ul>
      ),
    },
    {
      id: 6,
      icon: Icon3,
      link: 'https://www.theforage.com/virtual-internships/prototype/R5iK7HMxJGBgaSbvk/JP-Morgan-Banking-Technology-Virtual-Program',
      description:
        'Virtual Software Engineering intern developing data visualization tools using Python and React.',
      expanded: (
        <ul>
          <li>
            Utilized Python, TypeScript, React, and web applications to develop
            tools for visualizing and analyzing share price data.
          </li>
        </ul>
      ),
    },
    {
      id: 7,
      icon: Icon4,
      link: 'https://www.schwab.com/',
      description:
        'Development program participant receiving executive coaching and networking opportunities.',
      expanded: (
        <ul>
          <li>
            Engaged in a development program providing executive-level coaching,
            interview preparation, and networking opportunities.
          </li>
        </ul>
      ),
    },
  ];


  return (
    <ServicesContainer id="Internships">
      <ServicesH1>Work Experience</ServicesH1>
      <ServicesWrapper ref={ref}>
        {internships.map((internship, index) => (
          <ServicesCard
            key={internship.id}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => window.open(internship.link)}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.08}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.08}s`
            }}
          >
            <ServicesIcon src={internship.icon} />
            <ServicesP>{internship.description}</ServicesP>
            {hoveredCard === index && (
              <ExpandedContent>
                <img src={internship.icon} alt={`${internship.description} logo`} />
                {internship.expanded}
              </ExpandedContent>
            )}
          </ServicesCard>
        ))}
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Internships;

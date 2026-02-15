import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to='about'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            About
          </SidebarLink>
          <SidebarLink
            to='Experience'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Resume
          </SidebarLink>
          <SidebarLink
            to='services'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Skills
          </SidebarLink>
          <SidebarLink
           to='Project'
           smooth={true}
           duration={500}
           spy={true}
           exact='true'
           offset={-80}
         >
           Projects
          </SidebarLink>
          <SidebarLink
           to='Internships'
           smooth={true}
           duration={500}
           spy={true}
           exact='true'
           offset={-80}
         >
           Internships
          </SidebarLink>
          <SidebarLink
           to='signup'
           smooth={true}
           duration={500}
           spy={true}
           exact='true'
           offset={-80}
         >
           Contact
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;

import React from 'react';

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub
} from 'react-icons/fa';
import {
  HiMail
} from 'react-icons/hi';
import { animateScroll as scroll } from 'react-scroll';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from './FooterElements';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              <img src={require('../../images/logo4.png')} height={50} width={157} alt="Calvin Nguyen" />
            </SocialLogo>
            <WebsiteRights>Calvin Nguyen {new Date().getFullYear()}</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='https://www.facebook.com/calvin.nguyen.5099940/' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='https://www.instagram.com/calvin_nguyen.ig/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="mailto:calvin.nguyenco@gmail.com?subject=Let's Talk!"
                target='_blank'
                aria-label='Email'
                rel='noopener noreferrer'
              >
                <HiMail />
              </SocialIconLink>
              <SocialIconLink href='https://www.linkedin.com/in/calvin-nguyen-a13a7419b/' target='_blank' aria-label='LinkedIn'>
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink href='https://github.com/cnguyen17' target='_blank' aria-label='GitHub'>
                <FaGithub />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;

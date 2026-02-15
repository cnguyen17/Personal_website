import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background: #0a0a0a;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.06), transparent);
  }
`;

export const FooterWrap = styled.div`
  padding: clamp(48px, 8vw, 80px) clamp(20px, 5vw, 48px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 48px;
  width: 100%;
  margin-bottom: 48px;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  gap: 48px;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  box-sizing: border-box;
  color: #f0ece4;

  @media screen and (max-width: 820px) {
    align-items: center;
    text-align: center;
  }
`;

export const FooterLinkTitle = styled.h2`
  color: #f0ece4;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 16px;
  letter-spacing: 0.5px;
`;

export const FooterLink = styled(Link)`
  color: rgba(240, 236, 228, 0.4);
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 0.8125rem;
  font-weight: 300;
  letter-spacing: 0.3px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #d4a853;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.04);

  @media screen and (max-width: 820px) {
    flex-direction: column;
    gap: 24px;
  }
`;

export const SocialLogo = styled(Link)`
  color: #f0ece4;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
`;

export const WebsiteRights = styled.small`
  color: rgba(240, 236, 228, 0.25);
  font-size: 0.75rem;
  font-weight: 300;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const SocialIconLink = styled.a`
  color: rgba(240, 236, 228, 0.4);
  font-size: 20px;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;

  &:hover {
    color: #d4a853;
    background: rgba(212, 168, 83, 0.06);
    transform: translateY(-2px);
  }
`;

export const Img = styled.img`
  display: none;
`;

export const Spacer = styled.img`
  display: none;
`;

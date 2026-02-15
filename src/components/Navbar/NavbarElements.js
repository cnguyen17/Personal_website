import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: ${({ scrollNav }) =>
    scrollNav
      ? 'rgba(10, 10, 10, 0.85)'
      : 'transparent'};
  backdrop-filter: ${({ scrollNav }) =>
    scrollNav ? 'blur(20px) saturate(180%)' : 'none'};
  -webkit-backdrop-filter: ${({ scrollNav }) =>
    scrollNav ? 'blur(20px) saturate(180%)' : 'none'};
  border-bottom: ${({ scrollNav }) =>
    scrollNav ? '1px solid rgba(255, 255, 255, 0.06)' : '1px solid transparent'};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 clamp(20px, 5vw, 48px);
  max-width: 1200px;
`;

export const NavLogo = styled(LinkR)`
  color: #f0ece4;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  transition: opacity 0.3s ease;

  img {
    transition: opacity 0.3s ease;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    font-size: 1.5rem;
    cursor: pointer;
    color: #f0ece4;
    border-radius: 8px;
    transition: background 0.2s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.05);
    }
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  gap: 4px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  display: flex;
  align-items: center;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLinks = styled(LinkS)`
  color: rgba(240, 236, 228, 0.6);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: auto;
  cursor: pointer;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  border-radius: 6px;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;

  &:hover {
    color: #f0ece4;
    background: rgba(255, 255, 255, 0.04);
  }

  &.active {
    color: #d4a853;
    border-bottom: none;

    &::after {
      content: '';
      position: absolute;
      bottom: 4px;
      left: 50%;
      transform: translateX(-50%);
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: #d4a853;
    }
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 8px;
  background: #d4a853;
  white-space: nowrap;
  padding: 10px 24px;
  color: #0a0a0a;
  font-size: 0.8125rem;
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  text-decoration: none;
  letter-spacing: 0.5px;

  &:hover {
    background: #e8be6a;
    transform: translateY(-1px);
    box-shadow: 0 4px 20px rgba(212, 168, 83, 0.25);
  }
`;

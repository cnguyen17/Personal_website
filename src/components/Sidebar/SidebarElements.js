import styled, { keyframes } from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: rgba(10, 10, 10, 0.92);
  backdrop-filter: blur(30px) saturate(180%);
  -webkit-backdrop-filter: blur(30px) saturate(180%);
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};
  transform: ${({ isOpen }) => (isOpen ? 'scale(1)' : 'scale(1.05)')};
`;

export const CloseIcon = styled(FaTimes)`
  color: #f0ece4;
  font-size: 1.5rem;
`;

export const Icon = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(212, 168, 83, 0.3);
  }
`;

export const SidebarWrapper = styled.div`
  color: #f0ece4;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SidebarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  list-style: none;
  padding: 0;
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 2rem;
  font-weight: 400;
  text-decoration: none;
  list-style: none;
  color: rgba(240, 236, 228, 0.5);
  cursor: pointer;
  padding: 12px 32px;
  border-radius: 8px;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  animation: ${fadeInUp} 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;

  &:nth-child(1) { animation-delay: 0.05s; }
  &:nth-child(2) { animation-delay: 0.1s; }
  &:nth-child(3) { animation-delay: 0.15s; }
  &:nth-child(4) { animation-delay: 0.2s; }
  &:nth-child(5) { animation-delay: 0.25s; }
  &:nth-child(6) { animation-delay: 0.3s; }

  &:hover {
    color: #d4a853;
    background: rgba(212, 168, 83, 0.06);
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
`;

export const SidebarRoute = styled(LinkR)`
  border-radius: 12px;
  background: #d4a853;
  white-space: nowrap;
  padding: 16px 48px;
  color: #0a0a0a;
  font-size: 1rem;
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  text-decoration: none;
  letter-spacing: 0.5px;

  &:hover {
    background: #e8be6a;
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(212, 168, 83, 0.3);
  }
`;

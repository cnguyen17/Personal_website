import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
  border-radius: 10px;
  background: ${({ primary }) => (primary ? '#d4a853' : 'transparent')};
  border: ${({ primary }) => (primary ? 'none' : '1px solid rgba(212, 168, 83, 0.4)')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '16px 48px' : '14px 32px')};
  color: ${({ primary }) => (primary ? '#0a0a0a' : '#d4a853')};
  font-size: ${({ fontBig }) => (fontBig ? '1rem' : '0.875rem')};
  font-weight: 600;
  letter-spacing: 0.5px;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ primary }) =>
      primary
        ? '0 8px 30px rgba(212, 168, 83, 0.3)'
        : '0 8px 30px rgba(212, 168, 83, 0.1)'};
    background: ${({ primary }) => (primary ? '#e8be6a' : 'rgba(212, 168, 83, 0.08)')};

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(0);
  }
`;

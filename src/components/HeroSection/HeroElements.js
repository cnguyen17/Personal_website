import styled, { keyframes } from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const subtleFloat = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`;

export const HeroContainer = styled.div`
  background: #0a0a0a;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 clamp(20px, 5vw, 48px);
  height: 100vh;
  min-height: 600px;
  max-height: 1200px;
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(10, 10, 10, 0.3) 0%,
        rgba(10, 10, 10, 0.5) 50%,
        rgba(10, 10, 10, 0.85) 100%
      );
    z-index: 2;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 200px;
    background: linear-gradient(to top, #0a0a0a, transparent);
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.4;
  filter: saturate(0.3);
`;

export const VideoBgWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  & video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.4;
    filter: saturate(0.3);
  }
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 900px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const HeroH1 = styled.h1`
  color: #f0ece4;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: clamp(3rem, 7vw, 5.5rem);
  font-weight: 300;
  letter-spacing: -0.02em;
  line-height: 1.1;
  animation: ${fadeInUp} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both;
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: rgba(240, 236, 228, 0.55);
  font-size: clamp(0.9rem, 2vw, 1.125rem);
  line-height: 1.7;
  max-width: 520px;
  font-weight: 300;
  letter-spacing: 0.3px;
  animation: ${fadeInUp} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s both;
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeInUp} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.8s both;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
  transition: transform 0.3s ease;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

export const Img = styled.img`
  width: clamp(140px, 20vw, 200px);
  height: clamp(140px, 20vw, 200px);
  border-radius: 50%;
  object-fit: cover;
  animation: ${fadeInUp} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both,
             ${subtleFloat} 6s ease-in-out infinite 1.2s;
  margin-bottom: 24px;
`;

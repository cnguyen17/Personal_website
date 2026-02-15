import styled from 'styled-components';

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #111111;
  padding: clamp(80px, 10vw, 140px) clamp(20px, 5vw, 48px);
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

export const ServicesWrapper = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    max-width: 500px;
  }
`;

export const ServicesCard = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.02);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 16px;
  padding: 32px 24px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
  overflow: hidden;
  min-height: 240px;

  img {
    width: auto;
    max-width: 100%;
    height: auto;
    max-height: 80px;
    margin-bottom: 16px;
    object-fit: contain;
    filter: brightness(0.9);
    transition: all 0.4s ease;
  }

  &:hover {
    border-color: rgba(212, 168, 83, 0.15);
    background: rgba(255, 255, 255, 0.04);
    transform: translateY(-4px);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.25);

    img {
      filter: brightness(1);
    }
  }
`;

export const ExpandedContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 10, 10, 0.97);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 28px 24px;
  color: #f0ece4;
  font-size: 0.8rem;
  border: 1px solid rgba(212, 168, 83, 0.15);
  z-index: 20;
  text-align: left;
  overflow-y: auto;
  width: 100%;
  min-height: 100%;

  /* Custom scrollbar for expanded content */
  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(212, 168, 83, 0.3);
    border-radius: 2px;
  }

  img {
    width: auto;
    max-width: 60%;
    height: auto;
    max-height: 50px;
    margin-bottom: 16px;
    object-fit: contain;
    align-self: center;
  }

  ul {
    margin: 0;
    padding: 0 0 0 16px;
    list-style-type: none;
    text-align: left;
    line-height: 1.6;
  }

  li {
    margin-bottom: 12px;
    font-size: 0.75rem;
    color: rgba(240, 236, 228, 0.65);
    position: relative;
    padding-left: 12px;

    &::before {
      content: '';
      position: absolute;
      left: -4px;
      top: 8px;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: #d4a853;
    }
  }
`;

export const ServicesIcon = styled.img`
  height: 80px;
  width: auto;
  max-width: 160px;
  margin-bottom: 16px;
  object-fit: contain;
`;

export const ServicesH1 = styled.h1`
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 400;
  color: #f0ece4;
  margin-bottom: 60px;
  text-align: center;
  letter-spacing: -0.01em;
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  color: #f0ece4;
  margin-bottom: 12px;
  font-weight: 600;
`;

export const ServicesP = styled.p`
  font-size: 0.8rem;
  color: rgba(240, 236, 228, 0.45);
  text-align: center;
  line-height: 1.6;
  font-weight: 300;
`;

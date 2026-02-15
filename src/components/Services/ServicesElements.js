import styled from 'styled-components';

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #0a0a0a;
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
  gap: 24px;

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    max-width: 400px;
  }
`;

export const ServicesCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 16px;
  padding: 40px 32px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, #d4a853, transparent);
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(212, 168, 83, 0.15);
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3),
                0 0 40px rgba(212, 168, 83, 0.05);

    &::before {
      opacity: 1;
    }
  }
`;

export const ServicesIcon = styled.img`
  height: 80px;
  width: 80px;
  margin-bottom: 24px;
  object-fit: contain;
  filter: saturate(0.8);
  transition: all 0.4s ease;

  ${ServicesCard}:hover & {
    filter: saturate(1) drop-shadow(0 0 12px rgba(212, 168, 83, 0.2));
    transform: scale(1.08);
  }
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
  font-weight: 600;
  margin-bottom: 12px;
  color: #f0ece4;
  letter-spacing: 0.5px;
`;

export const ServicesP = styled.p`
  font-size: 0.875rem;
  text-align: center;
  color: rgba(240, 236, 228, 0.5);
  line-height: 1.7;
  font-weight: 300;
`;

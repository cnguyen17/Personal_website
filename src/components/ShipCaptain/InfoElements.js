import styled from 'styled-components';

export const InfoContainer = styled.div`
  color: #f0ece4;
  background: ${({ lightBg }) => (lightBg ? '#111111' : '#0a0a0a')};
  padding: clamp(80px, 10vw, 140px) 0;
  position: relative;
  overflow: hidden;

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

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(20px, 5vw, 48px);
`;

export const InfoRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(40px, 6vw, 80px);
  align-items: center;
  width: 100%;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? "'col2 col1'" : "'col1 col2'"};

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
    grid-template-areas: 'col1' 'col2';
  }
`;

export const Column1 = styled.div`
  grid-area: col1;
`;

export const Column2 = styled.div`
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
`;

export const TopLine = styled.div`
  color: #d4a853;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 20px;
  display: inline-block;

  &::after {
    content: '';
    display: inline-block;
    width: 40px;
    height: 1px;
    background: #d4a853;
    margin-left: 12px;
    vertical-align: middle;
    opacity: 0.5;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 28px;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: clamp(2rem, 4vw, 3.2rem);
  line-height: 1.15;
  font-weight: 400;
  color: #f0ece4;
  letter-spacing: -0.01em;
`;

export const Subtitle = styled.p`
  max-width: 480px;
  margin-bottom: 40px;
  font-size: 0.95rem;
  line-height: 1.8;
  color: rgba(240, 236, 228, 0.55);
  font-weight: 300;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 16px;
  flex-wrap: wrap;
`;

export const ImgWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Video = styled.video`
  width: 100%;
  max-width: 500px;
  border-radius: 16px;
  object-fit: cover;
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Img = styled.img`
  width: 100%;
  max-width: 500px;
  border-radius: 16px;
  object-fit: cover;
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: translateY(-4px) scale(1.01);
    border-color: rgba(212, 168, 83, 0.15);
    box-shadow: 0 24px 64px rgba(0, 0, 0, 0.4);
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

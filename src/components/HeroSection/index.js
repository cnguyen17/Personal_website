import React, { useState, useEffect, useRef } from 'react';
import { Button } from '../ButtonElements';

import Video from '../../videos/COAST_short.mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBgWrapper,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  Img
} from './HeroElements';

const HERO_VIDEO_ID = 'hero-bg-video';

function HeroSection() {
  const [hover, setHover] = useState(false);
  const [videoKey, setVideoKey] = useState(0);
  const lastRestartRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const video = document.getElementById(HERO_VIDEO_ID);
      if (!video) return;
      const now = Date.now();
      if (now - lastRestartRef.current < 1500) return;
      const ended =
        video.ended ||
        (video.paused && video.currentTime > 0.5) ||
        (Number.isFinite(video.duration) &&
          video.duration > 0 &&
          video.currentTime >= video.duration - 0.5);
      if (ended) {
        lastRestartRef.current = now;
        setVideoKey((k) => k + 1);
      }
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBgWrapper>
          <video
            key={videoKey}
            id={HERO_VIDEO_ID}
            src={Video}
            playsInline
            autoPlay
            muted
          />
        </VideoBgWrapper>
      </HeroBg>
      <HeroContent>
        <Img src={require('../../images/Profileborder.png')} alt="Calvin Nguyen" />
        <HeroH1>Calvin Nguyen</HeroH1>
        <HeroP>
          Software Engineer & Cybersecurity Professional
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to='about'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            primary='true'
            dark='true'
            onMouseEnter={() => setHover(!hover)}
            onMouseLeave={() => setHover(!hover)}
          >
            Explore Portfolio {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;

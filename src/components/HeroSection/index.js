import React, { useState } from 'react';

// import Video from '../../videos/video.mp4'

import {
  HeroContainer,
  // HeroBg,
  // VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  HeroButton,
  ArrowForward,
  ArrowRight
} from './HeroElements';

function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id='home'>
      {/* <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg> */}
      <HeroContent>
        <HeroH1>Diamond Hold</HeroH1>
        <HeroP>
          A fresh RFI-like cryptocurrency where the longer you hold, the more you are rewarded.
        </HeroP>
        <HeroBtnWrapper>
          <HeroButton
            href='https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xeE8feAeE52CE378BA356A5772BBa29d08AF25cdB'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            primary='true'
            dark='true'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Buy on PancakeSwap {hover ? <ArrowForward /> : <ArrowRight />}
          </HeroButton>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;

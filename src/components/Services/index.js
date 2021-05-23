import React from 'react';
import Icon from '../../images/Startup_Outline.svg';

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='us'>
      <ServicesH1>Why us?</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon} />
          <ServicesH2>Community First</ServicesH2>
          <ServicesP>
            This project is for everyone. Come join our socials and talk to us! We are a new group of talented and curious developers that want to grow this project - come help grow this with us!
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon} />
          <ServicesH2>Innovative Devs</ServicesH2>
          <ServicesP>
            We are tired of investing in projects that are exact clones with a number or two tweaked only to be rugged. So we decided to come up with a new & refreshing token mechanic.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon} />
          <ServicesH2>Unique Reward System</ServicesH2>
          <ServicesP>
            Your wallet has a rank, which upgrades the longer you hold our tokens. Each upgrade reduces the tax you receive, and gives you access to more lucrative rewards!
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;

import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { LinkItem } from '../Footer/FooterStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          My Portfolio
        </SectionTitle>
        <img src="images/faceshot.jpg" alt="" style={{width:'200px', borderRadius:'2rem'}}/>
        <SectionText>
         I am Christian Sanchez <br />UI/front-end web developer. 
        </SectionText>
        < LinkItem href = "https://www.linkedin.com/in/christian-sanchez-hernandez-58953b158/" >
           <Button onClick={props.handleClick}>Learn More</Button>
          </LinkItem>
      </LeftSection>

    </Section>
  </>
);

export default Hero;
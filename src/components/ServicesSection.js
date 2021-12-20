import React from 'react';
import { ImCss3, ImHtmlFive } from 'react-icons/im';
import { IoLogoJavascript, IoLogoPython } from 'react-icons/io';
import { SiCplusplus, SiC, SiVisualstudiocode } from 'react-icons/si';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="What i do best" heading="Technical Skills" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<ImHtmlFive />}
            title="HTML"
            desc="With over a year of experince, I develop responsive webistes for personal and work-related projects."
          />
          <ServicesSectionItem
            icon={<ImCss3 />}
            title="CSS"
            desc="With the help of HTML, I aim to make simple yet eye-catching designes for users with CSS properties."
          />
          <ServicesSectionItem
            icon={<IoLogoJavascript />}
            title="React"
            desc="Having used React for major projects such as this portfolio, it has helped me integrate JS with HTML and CSS to develope beautiful websites."
          />
        </div>
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<IoLogoPython />}
            title="Python"
            desc="Python was the first language I was exposed to. Having used it for 2 years in highschool I have deveoped 20+ projects aswell as 2 discord bots using Discord.py"
          />
          <ServicesSectionItem
            icon={<SiCplusplus />}
            title="C++"
            desc="Utilizing C++ in my first-year university classes I have created 5 major projects that use Data-structers such as Linked-Lists."
          />
          <ServicesSectionItem
            icon={<SiC />}
            title="C"
            desc="I have used C to code the sowftware in the STM32 Nucleo-64 to develope an interactive Adventure Room game for children."
          />
          <ServicesSectionItem
            icon={<SiVisualstudiocode />}
            title="VB.NET"
            desc="Using VB.NET I have developed infamous games such as jeopordy and and matching card game."
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}

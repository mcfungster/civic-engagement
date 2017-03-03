import React from 'react';
import Console from './Top20Console';
import Section from 'grommet/components/Section';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import HeaderContainer from '../containers/headerContainer';


const Top20Wrapper = () =>
  (
    <div className="top20-main">
      <Header className="landing-main-nav" size="small" float={false} fixed={true}>
        <HeaderContainer />
      </Header>
      <Header
        className="top20-header header"
        size="small"
      >
        <Title>
          Campaign Finance Top 20 Lists
        </Title>
      </Header>
      <Section
        className="top20-main"
      >
        <Console />
      </Section>
    </div>
  );

export default Top20Wrapper;

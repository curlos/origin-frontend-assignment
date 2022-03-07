import React from 'react';
import styled from 'styled-components'
import Card from './components/Card';
import Navbar from './components/Navbar';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  max-width: 100%;
  background-color: #F4F8FA;
`

const MiddleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const InnerMiddleWrapper = styled.div`
  width: 560px;
  text-align: center;
`

const SavingGoalTitle = styled.div`
  font-size: 20px;
  line-height: 24px;

  span {
    font-weight: 600;
  }
`

export function App(): JSX.Element {
  return (
    <Container>
      <Navbar />
      <MiddleWrapper>
        <InnerMiddleWrapper>
          <SavingGoalTitle>Let's plan your <span>saving goal.</span></SavingGoalTitle>
          <Card />
        </InnerMiddleWrapper>
      </MiddleWrapper>
    </Container>
  )
}

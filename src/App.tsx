import React from 'react';
import styled from 'styled-components'
import Navbar from './components/Navbar';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  max-width: 100%;
  background-color: #F4F8FA;
`
export function App(): JSX.Element {
  return (
    <Container>
      <Navbar />
    </Container>
  )
}

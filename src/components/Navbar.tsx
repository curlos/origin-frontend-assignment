import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 20px 50px;
  background-color: #FFFFFF;
`

export default function Navbar() {
  return (
    <Container>
      <img src="/assets/icons/logo.svg" alt="Origin Logo" />
    </Container>
  )
}

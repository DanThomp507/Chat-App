import styled from 'styled-components'
import { device } from '../../utils/breakpoints'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  height: 100vh;
  align-items: center;
  background-color: #1A1A1D;
`

export const SubContainer = styled.div`
  width: 30%;
  ${device.tablet} {
    width: 50%;
  }
`
export const Heading = styled.h1`
  color: white;
  font-size: 2.5em;
  padding-bottom: 10px;
`

export const Button = styled.button`
  color: #fff !important;
  text-transform: uppercase;
  text-decoration: none;
  background: #2979FF;
  padding: 20px;
  border-radius: 5px;
  display: inline-block;
  border: none;
  width: 100%;
`
export const Input = styled.input`
  border-radius: 0;
  padding: 15px 20px;
  width: 100%;
`
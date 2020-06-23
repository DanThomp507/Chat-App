import styled from 'styled-components'
import { device } from '../../utils/breakpoints'

export const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1A1A1D;

  ${device.mobileL}{
    height: 100%;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #FFFFFF;
  border-radius: 8px;
  height: 60%;
  width: 35%;

  ${device.tablet}{
    width: 60%;
  }

  ${device.mobileL}{
    width: 100%;
    height: 100%;
  }
`
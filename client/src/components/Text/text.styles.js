import styled from 'styled-components'
import { device } from '../../utils/breakpoints'

export const Container = styled.div`
display: flex;
flex-direction: column;
margin-left: 100px;
color: white;
height: 60%;
justify-content: space-between;

h1 {
  margin-bottom: 0px;
}

${device.laptop}{
  display: none;
}
`

export const ActiveContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50%;

  img {
    margin-left: 10px;
  }
`
export const ActiveItem = styled.div`
  display: flex;
  align-items: center;
`
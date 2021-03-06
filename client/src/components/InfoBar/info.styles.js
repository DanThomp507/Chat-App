import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #2979FF;
    border-radius: 4px 4px 0 0;
    height: 60px;
    width: 100%;
`

export const LeftInnerContainer = styled.div`
    flex: 0.5;
    display: flex;
    align-items: center;
    margin-left: 5%;
    color: white;

    img {
      margin-left: 5%;
    }
`

export const RightInnerContainer = styled.div`
    display: flex;
    flex: 0.5;
    justify-content: flex-end;
    margin-right: 5%;
`
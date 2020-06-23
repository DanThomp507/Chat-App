import styled from 'styled-components'
import { device } from '../../utils/breakpoints'

export const Form = styled.form`
    display: flex;
    border-top: 2px solid #D3D3D3;
`
export const Input = styled.input`
    border: none;
    border-radius: 0;
    padding: 5%;
    width: 80%;
    font-size: 1.2em;

    ${device.tablet} {
        width: 70%;
    }
`
export const SendButton = styled.button`
    color: #fff !important;
    text-transform: uppercase;
    text-decoration: none;
    background: #2979FF;
    padding: 20px;
    display: inline-block;
    border: none;
    width: 20%;

    ${device.tablet}{
        width: 30%;
    }
`
import styled from "styled-components";

export const Textarea = styled.textarea`
    width: 100%;
    border: none;
    height: 50vh;
    resize: none;
    font-size: 48px;
    line-height: 48px;
    background: transparent;
    color: white;
    -webkit-transition: all 2s cubic-bezier(0.55, 0.085, 0, 0.99);
    transition: all 2s cubic-bezier(0.55, 0.085, 0, 0.99);
    outline: none;
    font-family: 'univers';
`

export const Container = styled.form`
    padding: 40px;
    padding-top: 4vw;
    padding-left: 80px;
`
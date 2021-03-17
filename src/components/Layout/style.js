import styled from "styled-components";

export const Container = styled.div`
padding-top: ${props=> !props.padding ? props.head ? '60px' : '40px' : 0}
`
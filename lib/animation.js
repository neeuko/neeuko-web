import styled, { keyframes } from "styled-components";

const FadeIn = keyframes`
    from {
        opacity: 0;
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 10%, 0);
    }

    to {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    } 
`;

export const FadeInUp = styled.div`
  animation: ${FadeIn} 1s;
`;

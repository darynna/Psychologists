import styled from "styled-components";

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7); /* Dark overlay */
    // display: none;
    justify-content: center;
    align-items: center;
    z-index: 1000; /* Ensure modal is on top */

`

export const ModalContent = styled.div`
position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff; /* White content box */
    border-radius: 8px;
    max-width: 600px;
    width: 100%;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`


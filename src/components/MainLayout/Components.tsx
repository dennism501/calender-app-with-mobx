import styled from "styled-components";

export const MainLayout = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: monospace;
    font-weight: 100;
    --grey-100: #e4e9f0;
    --grey-200: #cfd7e3;
    --grey-300: #b5c0cd;
    --grey-800: #3e4e63;
    --grid-gap: 1px;
    --day-label-size: 20px;
    position: relative;
    background-color: var(--grey-200);
    border: solid 1px var(--grey-200);
`;

export const MonthButtonHolder = styled.div`
    width: 70%;
    display: flex;
    margin: 15px;
    justify-content: space-evenly;
`;
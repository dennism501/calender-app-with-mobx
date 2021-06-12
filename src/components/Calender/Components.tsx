import styled from "styled-components";

export const CalendarHeader = styled.section`
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    padding: 1px;
    width: 100%;
    border: solid 1px var(--grey-200);
`;

export const WeekdayContainer = styled.ol`
    padding: 0;
    margin: 0;
    width: 100%;
    list-style: none;
    color: var(--grey-800);
    font-size: 18px;
    background-color: #fff;
    padding-bottom: 5px;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    > * {
        text-align: center;
        font-weight: bold;
    }

`

export const WeekDayNameBox = styled.li`
    position: relative;
    font-size: 16px;
    padding: 0;
    margin: 0;
    list-style: none;
    background-color: #fff;
    color: var(--grey-800);
    padding: 5px;   
`


export const CalendarBody = styled.ol`
    height: 100%;
    width: 100%;
    position: relative;
    grid-column-gap: var(--grid-gap);
    grid-row-gap: var(--grid-gap);
    border-top: solid 1px var(--grey-200);
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    padding: 0;
    margin: 0;
    list-style: none;
  
`

export const CalenderDay = styled.li`
    position: relative;
    min-height: 100px;
    font-size: 16px;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    list-style: none;
    background-color: #fff;
    color: var(--grey-800);
    padding: 5px;
    &:hover {
        background-color:  #e4e9f0;
        cursor: pointer;
    }  
`

export const CalenderMarker = styled.span`
    height: 25px;
    width: 25px;
    background-color: #5d7bdd;
    border-radius: 50%;
    display: inline-block;
`


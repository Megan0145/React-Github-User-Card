import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const StyledCardList = styled.div`
    width: 80vw;
    min-height: 20vh;
    background-color: #c6ffbe;
    margin: 0 auto;
`;

export default class CardList extends React.Component{

    render() {
        return (
        <StyledCardList>
            <h1>CardList</h1>
            <Card />
        </StyledCardList>
        )
    }
}
import React from 'react';
import styled from 'styled-components';

const StyledUserCard = styled.div`
    background-color: white;
    width: 80%;
    display: flex;
    padding:3rem;
    justify-content: space-between;
    margin-top: 3rem;
    img{
        width:40%;
    }
    .user-details {
        display: flex;
        flex-direction: column;
        text-align: left;
        width: 40%;
    }
`;

export default class Card extends React.Component{
    render(){ 
        const { cardData } = this.props;
        return (
            <StyledUserCard>
                <img src={cardData.avatar_url}/>
                <div className='user-details'>
                <h2>{cardData.name}</h2>
                <p>Username: {cardData.login}</p>
                <p>Bio: {cardData.bio}</p>
                <p>Followers: {cardData.followers}</p>
                <p>Following: {cardData.following}</p>
                </div>
            </StyledUserCard> 
        );
    } 
}

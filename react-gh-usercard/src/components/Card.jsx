import React from 'react';
import styled from 'styled-components';

const StyledUserCard = styled.div`
    background-color: white;
    width: 80%;
    display: flex;
    padding:3rem;
    justify-content: space-between;
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
        const { img, name, userName, bio, followers, following, profileLink } = this.props;
        return (
            <StyledUserCard>
                <img src={img}/>
                <div className='user-details'>
                <h2>{name}</h2>
                <p>Username: {userName}</p>
                <p>Bio: {bio}</p>
                <p>Followers: {followers}</p>
                <p>Following; {following}</p>
                </div>
            </StyledUserCard> 
        );
    } 
}

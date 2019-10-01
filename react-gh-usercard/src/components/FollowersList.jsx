import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const StyledFollowersList = styled.div`
    width: 80%;
    background-color: white;
    padding: 3rem;
    margin: 3rem 0;
    display: flex;
    flex-wrap: wrap;
    h1 {
        width: 100%;
    }
`;

export default class FollowersList extends React.Component{
    render() {
        return(
            <StyledFollowersList>
            <h1>Followers</h1>
            {
                this.props.followers.map(follower => {
                    return <Card cardData={follower} />
                    // console.log(follower)
                })

            }
            </StyledFollowersList>
        );
    }
}

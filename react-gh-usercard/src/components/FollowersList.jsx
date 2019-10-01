import React from 'react';
import styled from 'styled-components';
import FollowerCard from './FollowerCard';

const StyledFollowersList = styled.div`
    width: 80%;
    background-color: white;
    padding: 3rem;
    margin: 3rem 0;
`;

export default class FollowersList extends React.Component{
    render() {
        return(
            <StyledFollowersList>
            <h1>Followers</h1>
            {
                this.props.followers.map(follower => {
                    return <FollowerCard followerData={follower} />

                })

            }
            </StyledFollowersList>
        );
    }
}

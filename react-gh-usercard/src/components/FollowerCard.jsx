import React from 'react';
import styled from 'styled-components';
const StyledFollowerCard = styled.div`
    width: 50%;
    img{
        width: 80%;
    }
`;

export default class FollowerCard extends React.Component {
    render() {
        const { followerData } = this.props;
        return (
            <StyledFollowerCard>
                <img src={followerData.avatar_url}/>
                <h1>{followerData.login}</h1>
            </StyledFollowerCard>
        );
    }
}
import React from 'react';

export default class FollowerCard extends React.Component {
    render() {
        const { followerData } = this.props;
        return (
            <div>
                <img src={followerData.avatar_url}/>
                <h1>{followerData.login}</h1>
            </div>
        );
    }
}
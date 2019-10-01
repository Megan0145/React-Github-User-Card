import React from 'react';

export default class Search extends React.Component {
    render() {
        return(
            <div>
                <input placeholder='Search by UserName' value={this.props.searchVal} onChange={this.props.onSearchChange}/>
                <button onClick={this.props.searchUser}>Go</button>
            </div>
        );
    }
}
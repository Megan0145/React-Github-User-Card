import React from "react";
import styled from "styled-components";
import Card from "./Card";
import axios from "axios";
import FollowersList from "./FollowersList";
import SearchBar from './Search';

const StyledCardContainer = styled.div`
  width: 80vw;
  min-height: 20vh;
  background-color: #c6ffbe;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
`;


export default class CardContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      cardData: {},
      followers: [],
      searchVal: '',
      userApi : "http://api.github.com/users/Megan0145",

    };
  }

  componentDidMount() {
    const userPromise = axios.get(this.state.userApi);
    const followersPromise = axios.get(`${this.state.userApi}/followers`);
    Promise.all([userPromise, followersPromise]).then(
      ([userAxiosRes, followersAxiosRes]) => {
        this.setState({
          cardData: userAxiosRes.data
          // followers: followersAxiosRes.data
        })
        const test = followersAxiosRes.data;
        test.map(follower => {
          axios.get(follower.url)
          .then(res => {
            console.log(res.data)
            this.setState(currentState => {
              return {
                followers: currentState.followers.concat(res.data)
              }
            })
          })
          .catch(err => console.log(err))
        })
      }
    ).catch(error => {console.log(error)})
  }

  onSearchChange = event => {
    this.setState({
      searchVal: event.target.value
    })
  }

  searchUser() {
    this.setState({
      userApi: `http://api.github.com/users/${this.state.searchVal}`
    })
  }

  render() {
    return (
      <StyledCardContainer>
        <SearchBar searchVal={this.state.searchVal} onSearchChange={this.onSearchChange} searchUser={this.searchUser}/>
        <Card
          cardData={this.state.cardData}
        />
        <FollowersList followers={this.state.followers} />
      </StyledCardContainer>
    );
  }
}

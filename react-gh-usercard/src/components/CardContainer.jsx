import React from "react";
import styled from "styled-components";
import Card from "./Card";
import axios from "axios";
import FollowersList from "./FollowersList";

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

const userApi = "https://api.github.com/users/Megan0145";
const followersApi = `${userApi}/followers`;

export default class CardContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      cardData: {},
      followers: []
    };
  }

  componentDidMount() {
    const userPromise = axios.get(userApi);
    const followersPromise = axios.get(followersApi);
    Promise.all([userPromise, followersPromise]).then(
      ([userAxiosRes, followersAxiosRes]) => {
        this.setState({
          cardData: userAxiosRes.data,
          followers: followersAxiosRes.data
        });
      }
    ).catch(error => {console.log(error)})
  }

  render() {
    return (
      <StyledCardContainer>
        <Card
          cardData={this.state.cardData}
        />
        <FollowersList followers={this.state.followers} />
      </StyledCardContainer>
    );
  }
}

import React from "react";
import styled from "styled-components";
import Card from "./Card";
import axios from "axios";

const StyledCardContainer = styled.div`
  width: 80vw;
  min-height: 20vh;
  background-color: #c6ffbe;
  margin: 0 auto;
  display: flex; 
  flex-direction: column;
  align-items: center;
`;

export default class CardContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      cardData: {},
      cards: []
    };
  }

  componentDidMount() {
    axios
      .get("http://api.github.com/users/Megan0145")
      .then(res => {
        this.setState(currentState => {
          return {
            cardData: res.data,
            // cards: currentState.cards.concat(cardData)
          };
        });
      })
      .catch(err => {
        debugger;
      });
  }

  render() {
    return (
      <StyledCardContainer>
        <h1>Card Container</h1>
            <Card
              img={this.state.cardData.avatar_url}
              name={this.state.cardData.name}
              userName={this.state.cardData.login}
              bio={this.state.cardData.bio}
              followers={this.state.cardData.followers}
              following={this.state.cardData.following}
              profileLink={this.state.cardData.html_url}
            />
      </StyledCardContainer>
    );
  }
}

// const myProfile = {
//     'avatar_url': 'https://avatars3.githubusercontent.com/u/20298565?s=460&v=4',
//     'name': 'Megan Ennis',
//     'login' : 'megan0145',
//     'location': 'Dublin',
//     'html_url': 'github.com/users/Megan0145',
//     'followers': 4,
//     'following': 4,
//     'bio': 'Bla bla blaaaaaaaa',
//     'email': 'mennis0145@gmail.com',
//     'public_gists': 0,
//     'public_repos': 30,
//   };

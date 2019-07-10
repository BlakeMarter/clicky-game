import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Navbar from "./components/NavBar";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    topscore: 0
  };

  scoreBoard = () => {
    if (this.state.score > this.state.topscore) {
      this.setState({ topscore: this.state.score }, function () {
        console.log(this.state.topscore);
      });
    }
    this.state.friends.forEach(friend => {
      friend.count = 0;
    });
    alert(`Womp Womp! Game Over! \nscore: ${this.state.score} \nPlease play again!`);
    this.setState({
      score: 0,
    });
    return true;
  };

  remixFriends = (id) => {
    this.state.friends.find((o, i) => {
      if (o.id === id) {
        if (friends[i].count === 0) {
          friends[i].count = friends[i].count + 1;
          this.setState({ score: this.state.score + 1 }, function () {
            console.log(this.state.score);
          });
          this.state.friends.sort(() => Math.random() - 0.5)
          return true;
        } else {
          this.scoreBoard();
        }
      }
      return console.log("poop");

    });
  };



  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    // console.log(this.state.friends);
    return (
      <div>
        <Navbar score={this.state.score} topscore={this.state.topscore} />
        <Wrapper>
        <Title>Welcome to Clicky!</Title>
          {this.state.friends.map(friend => (
            <FriendCard
              remixFriends={this.remixFriends}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import NavBar from "./components/NavBar";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    topScore: 0
  };

  scoreBoard = (id) => {
    let idArr = [""];
    let scoreArr = [""];
    let score = this.state.score;
    const friendID = this.friends.map(friend => friend.id);
    if (id !== friendID) {
      score += 1;
      scoreArr += scoreArr.push(score);
      idArr += idArr.push(id);
    } else {
      console.log("you lost!");
      
    }
    console.log("idArr: " + idArr);
    // console.log(event.target.value);
    console.log("scoreArr: " + scoreArr);
    console.log("score: " + score);
    
  }

  remixFriends = (id) => {
    const friendsR = friends.sort(() => Math.floor(Math.random() - 0.5));
    const friendID = friendsR.map(friend => friend.id);
    console.log(friendID);
    console.log(id);

    this.scoreBoard();
    this.setState({ friends: friendsR });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    console.log(this.state.friends);
    return (
      <div>
        <NavBar />
        <Wrapper>
          <Title>Friends List</Title>
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

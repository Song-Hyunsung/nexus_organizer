import React, { Component } from 'react';
import { Button, Grid, Row, Col } from 'react-bootstrap';
import Member from './Member'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      playerList: [],
      username: "unknown player",
      positionOne: "fill",
      positionTwo: "fill",
      tier: "unknown tier",
      teamList: ["Demacia", "Noxus", "Ionia", "Zaun"],
    };

  }

  componentWillMount(){
    fetch('/api', {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    }).then(response => {
      console.log(response);
      return response.json();
    }).then(body => {
      console.log(body.players);
      this.setState({
        playerList: body.players,
      })
    }).catch(() => {
      console.log("Error getting players");
    })
  }

  addNewPlayer(cb){
    fetch('/api', {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        playerName: this.state.username,
        positionOne: this.state.positionOne,
        positionTwo: this.state.positionTwo,
        tier: this.state.tier,
        team: this.state.team,
      }),
    }).then(response => {
      console.log("Creating New Player");
      return response.json();
    }).then(body => {
      cb();
    }).catch(() => {
      console.log("Error Creating New Player");
    })
  }

  clearPlayer(cb){
    fetch('/api', {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    }).then(response => {
      console.log("Deleting Players");
      return response.json();
    }).then(body => {
      console.log(body);
      cb();
    }).catch(() => {
      console.log("Error Deleting Players");
    })
  }

  handleUsername = (event) => {
    this.setState({ username: event.target.value });
  }

  handlePositionOne = (event) => {
    this.setState({ positionOne: event.target.value });
  }

  handlePositionTwo = (event) => {
    this.setState({ positionTwo: event.target.value });
  }

  handleTier = (event) => {
    this.setState({ tier: event.target.value });
  }

  refreshPage(){
    window.location.reload();
  }

  shuffle(array){
    for(let i = array.length - 1; i > 0; i--){
      const j = Math.floor(Math.random()  * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }

  generateBracket = () => {
    let currentTeamBracket = this.state.teamList;
    currentTeamBracket = this.shuffle(currentTeamBracket);

    this.setState({
      teamList: currentTeamBracket,
    })
  }

  render() {
    let notpickedList = this.state.playerList.map((player, index) => {
      if(player.team === "not picked"){
        return(
          <Member key={player.id} {...player} />
        )
      } else {
        return [];
      }
    })

    let demaciaList = this.state.playerList.map((player, index) => {
      if(player.team === "demacia"){
        return(
          <Member key={player.id} {...player} />
        )
      } else {
        return [];
      }
    })

    let noxusList = this.state.playerList.map((player, index) => {
      if(player.team === "noxus"){
        return(
          <Member key={player.id} {...player} />
        )
      } else {
        return [];
      }
    })

    let ioniaList = this.state.playerList.map((player, index) => {
      if(player.team === "ionia"){
        return(
          <Member key={player.id} {...player} />
        )
      } else {
        return [];
      }
    })

    let zaunList = this.state.playerList.map((player, index) => {
      if(player.team === "zaun"){
        return(
          <Member key={player.id} {...player} />
        )
      } else {
        return [];
      }
    })

    return (
    <div>
      <Grid>

        <Row className="heading">
          <Col>
            <h1> Nexus Clan Tournament Organizer </h1>
            <h4> Created by Aganazzar (Hyunsung) for Nexus Clan Use Only </h4>
            <h6> Built using Express (Node.js), React, PostgreSQL </h6>
          </Col>
          <Col>
            <div><p>Refreshing in </p><span id="minutes"></span>:<span id="seconds"></span></div>
            <Button bsStyle="success" bsSize="sm" onClick={() => this.refreshPage()}>Manually Refresh to See Team Update</Button>
          </Col>
        </Row>

        <Row>
          <Col sm={4} md={4} lg={4} className="notpick">
            <h3> WAITING LIST </h3>
            {notpickedList}
          </Col>
          <Col sm={8} md={8} lg={8} className="pick">
            <Col className="team" sm={3} md={3} lg={3}>
              <h3> DEMACIA </h3>
              {demaciaList}
            </Col>
            <Col className="team" sm={3} md={3} lg={3}>
              <h3> NOXUS </h3>
              {noxusList}
            </Col>
            <Col className="team" sm={3} md={3} lg={3}>
              <h3> IONIA </h3>
              {ioniaList}
            </Col>
            <Col className="team" sm={3} md={3} lg={3}>
              <h3> ZAUN </h3>
              {zaunList}
            </Col>
          </Col>
        </Row>

        <Row className="separator">
          <Col sm={4} md={4} lg={4}>
            <form>
              <label>
                <div><p className="topmargin">Summoner Name: </p><input type="text" value={this.state.username} onChange={this.handleUsername} /></div>
                <div><p>Tier: </p><input type="text" value={this.state.tier} onChange={this.handleTier} /></div>
              </label>
            </form>
            <div>
              <p><strong>Preferred Position</strong></p>
              <select value={this.state.positionOne} onChange={this.handlePositionOne}>
                <option value="fill">Fill</option>
                <option value="top">Top</option>
                <option value="jungle">Jungle</option>
                <option value="mid">Mid</option>
                <option value="adc">ADC</option>
                <option value="support">Support</option>
              </select>
              <span className="submit">
                <select value={this.state.positionTwo} onChange={this.handlePositionTwo}>
                  <option value="fill">Fill</option>
                  <option value="top">Top</option>
                  <option value="jungle">Jungle</option>
                  <option value="mid">Mid</option>
                  <option value="adc">ADC</option>
                  <option value="support">Support</option>
                </select>
              </span>
              <span className="submit">
                <Button bsStyle="primary" bsSize="sm" onClick={() => this.addNewPlayer(this.refreshPage)}>Submit</Button>
              </span>
            </div>
            <div>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <strong><p>Warning: This will erase all data</p></strong>
              <strong><p>Only press after tournament is done</p></strong>
              <Button className="deletebutton" bsStyle="danger" bsSize="sm" onClick={() => this.clearPlayer(this.refreshPage)}>Clear</Button>
            </div>
          </Col>
          <Col sm={8} md={8} lg={8}>
            <h2> Team Bracket </h2>
            <div className="generate"> <Button bsStyle="info" bsSize="sm" onClick={() => this.generateBracket()}>Generate</Button> </div>
            <h3> {this.state.teamList[0]} VS. {this.state.teamList[1]} </h3>
            <h3> {this.state.teamList[2]} VS. {this.state.teamList[3]} </h3>
          </Col>
        </Row>
      </Grid>
    </div>
    );
  }
}



export default App;

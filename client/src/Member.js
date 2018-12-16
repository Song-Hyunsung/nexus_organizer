import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import './App.css';

class Member extends Component {
	constructor(props){
		super(props);

		this.state = {
			username: "",
			positionOne: "",
			positionTwo: "",
			tier: "",
			team: "not picked",
			id: "",
		}
	}

	componentWillMount(){
		const { playerName, positionOne, positionTwo, tier, team, id } = this.props;
		this.setState({
			username: playerName,
			positionOne: positionOne,
			positionTwo: positionTwo,
			tier: tier,
			team: team,
			id: id,
		});
	}

	changeTeam(cb){
		fetch('/api', {
			method: "PUT",
			headers: {
				"Content-Type": "application/json; charset=utf-8",
			},
			body: JSON.stringify({
				playerName: this.state.username,
				positionOne: this.state.positionOne,
				positionTwo: this.state.positionTwo,
				team: this.state.team,
				tier: this.state.tier,
				id: this.state.id,
			}),
		}).then(response => {
			console.log("Changing Team");
			return response.json();
		}).then(body => {
			console.log(body);
			cb();
		}).catch(() => {
			console.log("Error changing team");
		})
	}

    handleTeam = (event) => {
      this.setState({ 
      		team: event.target.value
    	}, () => {
    		this.changeTeam(this.refreshPage);
    	});
    }

    refreshPage(){
    	window.location.reload();
    }

	render(){
		let currentTeam = !(this.state.team === "not picked");

		return(
			<div>
				{ currentTeam ? (
					<div className="teamelement">
						<p><strong>{this.state.username}</strong></p>
						<p>{this.state.tier}</p>
						<p><strong>{this.state.positionOne} {this.state.positionTwo}</strong></p>
						<p>
							<select value={this.state.team} onChange={this.handleTeam}>
							    <option value="not picked">Not Picked</option>
							    <option value="demacia">Demacia</option>
							    <option value="noxus">Noxus</option>
							    <option value="ionia">Ionia</option>
							    <option value="zaun">Zaun</option>
							</select>
						</p>
					</div>
				) : ( 
					<Col sm={6} md={6} lg={6}>
						<div className="teamelement">
							<p><strong>{this.state.username}</strong></p>
							<p>{this.state.tier}</p>
							<p><strong>{this.state.positionOne} {this.state.positionTwo}</strong></p>
							<p>
								<select value={this.state.team} onChange={this.handleTeam}>
								    <option value="not picked">Not Picked</option>
								    <option value="demacia">Demacia</option>
								    <option value="noxus">Noxus</option>
								    <option value="ionia">Ionia</option>
								    <option value="zaun">Zaun</option>
								</select>
							</p>
						</div>
					</Col>
				)}
			</div>
		)
	}
}

export default Member;
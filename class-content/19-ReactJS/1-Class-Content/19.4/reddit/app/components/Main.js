import React, { Component } from 'react';

export default class Main extends Component {
	render() {
		console.log("main....");
		return (
			<div className="container">
	      <div className="jumbotron">
	        <h2><strong>Reddit!</strong></h2>
	      </div>

	      <div className="row">
	        {/* This code will dump the correct Child Component */}
	        {this.props.children}
	      </div>
	    </div>
		);
	}
}

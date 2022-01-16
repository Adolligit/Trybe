import React, { Component } from 'react';

export default class HelloWorld extends Component {
	OiMundo() {
		return (
			<div>
				<h1>Hello, world!</h1>
				<h2>It is {new Date().toLocaleTimeString('pt', { hour12: true })}</h2>
			</div>
		);
	}

	render() {
		return (
			this.OiMundo()
		);
	}
}

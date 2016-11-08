import React, { Component } from 'react';
import { render } from 'react-dom';
import { Container } from 'flux/utils';
import BankBalanceStore from './BankBalanceStore';


class App extends Component {
	render(){
		return (
			<div>
				<header>Basic Settings for Bank exercise</header>
				test
			</div>
		);
	}
}

App.getStores = () => ([BankBalanceStore]);
App.calculateState = (prevState) => ({
	balance: BankBalanceStore.getState()
});

const AppContainer = Container.create(App);
render(<AppContainer />, document.getElementById('root'));
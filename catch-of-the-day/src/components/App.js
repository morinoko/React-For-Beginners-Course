import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
	// Methods that set state and methods that update state
	// always need to live in the exact same component
	state = {
		fishes: {},
		order: {}
	};

	addFish = (fish) => {
		// 1. Take a copy of exisiting state (because we never want to directly mutate state)
		const fishes = {...this.state.fishes};
		// 2. Add a new fish to the copied variable
		fishes[`fish${Date.now()}`] = fish;
		// 3. Set the new fishes object to state
		//    Only updates the pieces you give it
		this.setState({
			fishes // same as fishes: fishes
		});
	}

	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market" />
				</div>
				<Order />
				<Inventory addFish={this.addFish} />
			</div>
		)
	}
} 

export default App;

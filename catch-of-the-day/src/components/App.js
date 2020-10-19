import React from 'react';
import base from '../base';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {
	// Methods that set state and methods that update state
	// always need to live in the exact same component
	state = {
		fishes: {},
		order: {}
	};

	componentDidMount() {
		const { params } = this.props.match;
		// First reinstate our local storage
		const localStorageRef = localStorage.getItem(params.storeId);
		if (localStorageRef) {
			this.setState({ order: JSON.parse(localStorageRef) });
		}

		this.ref = base.syncState(`${params.storeId}/fishes`, {
			context: this,
			state: 'fishes'
		});
	}

	componentDidUpdate() {
		console.log(this.state.order);
		const { params } = this.props.match;

		localStorage.setItem(params.storeId, JSON.stringify(this.state.order));
	}

	componentWillUnmount() {
		base.removeBinding(this.ref);
	}

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

	updateFish = (key, updatedFish) => {
		// 1. Take copy of current state
		const fishes = {...this.state.fishes};
		// 2. Update state
		fishes[key] = updatedFish;
		// 3. Set that to state
		this.setState({fishes});
	}

	deleteFish = (key) => {
		// 1. Take a copy of state
		const fishes = {...this.state.fishes};
		// 2. Update the state
		//    (Set to null so Firebase can also delete)
		fishes[key] = null;
		// 3. Set that to state
		this.setState({fishes});
	}

	loadSampleFishes = () => {
		this.setState({ fishes: sampleFishes });
	}

	addToOrder = (key) => {
		// 1. Take copy of state
		const order = {...this.state.order};
		// 2. Either add to order or update the number in the order
		order[key] = order[key] + 1 || 1;
		// 3. Call setState to update state object
		this.setState({ order });
	}

	removeFromOrder = (key) => {
		// 1. Take copy of state
		const order = {...this.state.order};
		// 2. Delete the key
		delete order[key]
		// 3. Set to state
		this.setState({order});
	}

	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market" />
					<ul className="fishes">
						{Object.keys(this.state.fishes).map(key => (
							<Fish 
								key={key} 
								index={key}
								details={this.state.fishes[key]}
								addToOrder={this.addToOrder}
							/>
						))}
					</ul>
				</div>
				<Order 
					fishes={this.state.fishes} 
					order={this.state.order}
					removeFromOrder={this.removeFromOrder}
				/>
				<Inventory 
					addFish={this.addFish}
					updateFish={this.updateFish}
					deleteFish={this.deleteFish}
					loadSampleFishes={this.loadSampleFishes}
					fishes={this.state.fishes}
				/>
			</div>
		)
	}
} 

export default App;

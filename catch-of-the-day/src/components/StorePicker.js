import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
	// Other solution to this binding problem is to use the 
	// constructor and specifically bind all custom functions
	// to the component instance
	// constructor() {
	// 	super();
	// 	this.goToStore = this.goToStore.bind(this);
	// }

	myInput = React.createRef();

	// Instead of function, make goToStore a property that equals
	// an arrow function so this is bound to the component instance
	goToStore = (event) => {
		// 1. Stop form from submitting
		event.preventDefault();
		// 2. Get text from the input
		const storeName = this.myInput.current.value;
		// 3. Change page to /store/input-text
		//    push() is a Router method. It is available because Router is the parent
		this.props.history.push(`/store/${storeName}`);
	}

	render() {
		return (
			<form className="store-selector" onSubmit={this.goToStore}>	
				<h2>Please Enter A Store</h2>
				<input 
					type="text" 
					ref={this.myInput}
					required
					placeholder="Store Name"
					defaultValue={getFunName()} 
				/>
				<button type="submit">Visit Store → </button>
			</form>
		)
	}
}

export default StorePicker;

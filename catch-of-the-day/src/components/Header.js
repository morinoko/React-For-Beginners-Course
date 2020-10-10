import React from 'react';

// Stateless Functional Component (Only needs to render some)
const Header = ({tagline}) => (
	<header className="top">
		<h1>
			Catch
			<span className="ofThe">
				<span className="of">Of</span>
				<span className="the">The</span>
			</span>
			Day
		</h1>
		<h3 className="tagline">
			<span>{tagline}</span>
		</h3>
	</header>
);

export default Header;

// Regular React Component

// class Header extends React.Component {
// 	render() {
// 		return (
// 			<header className="top">
// 				<h1>
// 					Catch
// 					<span className="ofThe">
// 						<span className="of">Of</span>
// 						<span className="the">The</span>
// 					</span>
// 					Day
// 				</h1>
// 				<h3 className="tagline">
// 					<span>{this.props.tagline}</span>
// 				</h3>
// 			</header>
// 		)
// 	}
// }

// 'this' refers to the component instance

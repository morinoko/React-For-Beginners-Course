import React from "react";
import PropTypes from 'prop-types';

class EditFishForm extends React.Component {
    static propTypes = {
        updateFish: PropTypes.func,
        deleteFish: PropTypes.func,
        index: PropTypes.string,
        fish: PropTypes.shape({
            name: PropTypes.string,
            desc: PropTypes.string,
            image: PropTypes.string,
            status: PropTypes.string,
            price: PropTypes.number
        })
    }

    handleChange = (event) => {
        // Update that fish
        // 1. Take a copy of the current fish
        const updatedFish = {
            ...this.props.fish,
            [event.currentTarget.name]: event.currentTarget.value
        };
        this.props.updateFish(this.props.index, updatedFish);
    };

    render() {
        const fish = this.props.fish;

        return (
            <div className="fish-edit">
                <input type="text"
                       name="name"
                       onChange={this.handleChange}
                       value={fish.name} />
                <input type="text"
                       name="price"
                       onChange={this.handleChange}
                       value={fish.price} />
                <select name="status" onChange={this.handleChange} value={fish.status}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="desc" onChange={this.handleChange} value={fish.desc}></textarea>
                <input type="text"
                       name="image"
                       onChange={this.handleChange}
                       value={fish.image} />
                <button onClick={() => this.props.deleteFish(this.props.index)}>
                    Remove Fish
                </button>
            </div>
        );
    }
}

export default EditFishForm;

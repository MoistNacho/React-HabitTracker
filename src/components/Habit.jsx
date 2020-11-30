import React, { PureComponent } from 'react';

class Habit extends PureComponent {

    handleIncrease = () =>{
        this.props.onIncrease(this.props.habit);
    };

    handleDecrease = () =>{
        this.props.onDecrease(this.props.habit);
    };

    handleDelete = () =>{
        this.props.onDelete(this.props.habit);
    };


    render() {
        return (
            <li className="habit">
                <span className="habit-name">{this.props.habit.name}</span>
                <div className="habit-setting">
                    <span className="habit-count">{this.props.habit.count}</span>
                    <button className="habit-button habit-increase" onClick={this.handleIncrease}>
                        <i className="fas fa-plus-square"></i>
                    </button>
                    <button className="habit-button habit-decrease" onClick={this.handleDecrease}>
                        <i className="fas fa-minus-square"></i>
                    </button>
                    <button className="habit-button habit-delete" onClick={this.handleDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            </li>
        );
    }
}

export default Habit;
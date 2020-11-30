import React, { Component } from 'react';
import Habit from './Habit';


class Habits extends Component {
    render() {
        return (
            <ul className="habits">
               {
                   this.props.habits.map((habit)=>{
                       return <Habit 
                        key={habit.id} 
                        name={habit.name} 
                        habit={habit}
                        onIncrease={this.props.onIncrease}
                        onDecrease={this.props.onDecrease}
                        onDelete={this.props.onDelete} 
                       />;
                    })
               } 
            </ul>
        );
    }
}

export default Habits;
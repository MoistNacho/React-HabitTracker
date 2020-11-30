import React, { PureComponent } from 'react';

class HabitReset extends PureComponent {
    handleReset = () =>{
        this.props.onReset();
    }

    render() {
        return (
            <button className="habit-resetBtn" onClick={this.handleReset} >
                습관 초기화
            </button>
        );
    }
}

export default HabitReset;
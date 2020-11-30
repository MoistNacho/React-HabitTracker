import React, { Component } from 'react';
import Habits from './components/Habits';
import Navbar from './components/Navbar';
import AddForm from './components/AddForm';
import HabitReset from './components/HabitReset';
import './app.css';

class App extends Component {
  state={
    habits : [
        {id: 0 ,name:"아침에 스트레칭", count:0},
        {id: 1 ,name:"지각하지 않기", count:0},
        {id: 2 ,name:"1시간씩 독서하기", count:0}
    ],
    nav_count : 0,
  };

  navCount = (habits) => {
    const count = habits.filter(habit => habit.count >= 1);
    this.setState({habits, nav_count : count.length});
  }

  habitAdd = (name) => {
    if(!name){
      alert('올바른 이름을 입력하세요!');
      return;
    }
    const habits = [...this.state.habits];
    habits.push({
      id: 0,
      name:name, 
      count:0
    });
    habits.map((habit) => {
      habit.id = habits.indexOf(habit);
    })
    this.setState({habits});
  }

  handleIncrease = (habit) =>{
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id){
        return {...habit, count:item.count+1};
      }
      return item;
    })
    this.navCount(habits);
  };

  handleDecrease = (habit) =>{
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id){
        const count = item.count-1
        return {...habit, count:count < 0 ? 0 : count};
      }
      return item;
    })
    this.navCount(habits);
  };

  handleDelete = (habit) =>{
    const habits = [...this.state.habits];
    const result = habits.filter(item => item.id !== habit.id)
      
    this.navCount(result);
  }

  handleReset = () =>{
    const habits = this.state.habits.map(item => {
      if(item.count > 0){
        return {...item, count:0};
      }
      return item;
    })

    this.navCount(habits);
  }

  render() {
    return (
      <main className="app">
          <Navbar count={this.state.nav_count} />
          <AddForm addForm={this.habitAdd} />
          <Habits 
            habits={this.state.habits} 
            onIncrease={this.handleIncrease}
            onDecrease={this.handleDecrease}
            onDelete={this.handleDelete} 
          />
          <HabitReset onReset={this.handleReset} />
      </main>   
    );
  }
}

export default App;

import React, {Component} from 'react';
import './App.css';
import SearchBox from './SearchBox';
import CardList from './CardList';
import { robots } from './robots';

class App extends Component{
    constructor(){
        super();
        this.state={
            robots: robots,
            searchfield: ''
        }
    }

    
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        const filteredRobots = this.state.robots.filter((robot, i) => {
            return robots[i].name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
    }


    render(){
        return(
            <div className='tc bg-lightest-red'>
                <h1>WithRobotFriends</h1>
                <SearchBox searchChange = {this.onSearchChange} />
                <CardList robots = {this.state.robots}/>
            </div>
        )
    }
}

export default App;



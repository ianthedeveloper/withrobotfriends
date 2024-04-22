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


    render(){
        return(
            <div className='tc bg-lightest-red'>
                <h1>WithRobotFriends</h1>
                <SearchBox/>
                <CardList robots = {this.state.robots}/>
            </div>
        )
    }
}

export default App;



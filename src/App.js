import React, {Component} from 'react';
import './App.css';
import SearchBox from './SearchBox';
import CardList from './CardList';
import { robots } from './robots';


// Introducing State
class App extends Component{
    constructor(){
        super();
        this.state={
            robots: [],
            searchfield: ''
        }
    }

    // Introducing a Lifecycle Method so as to have ability to intergarate a users API
    // NB: Life-cycle Methods don't have the same syntax as arrow functions
    // componentDidMount executes after render function
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((users) => this.setState({robots: users}))

    }

    // Function that exectutes the 'searchfield' state
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }


    render(){
        // App Component(parent), filteres robots based on SearchBox input
        const filteredRobots = this.state.robots.filter((robot, i) => {
            return robots[i].name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })

        return(
            <div className='tc bg-lightest-red'>
                <h1>WithRobotFriends</h1>
                <SearchBox searchChange = {this.onSearchChange} />
                <CardList robots = {filteredRobots}/>
            </div>
        )

    }
}

export default App;



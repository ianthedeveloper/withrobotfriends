import React, {Component} from 'react';
import './App.css';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import {robots} from '../robots';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';


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
        const {robots, searchfield} = this.state;
        // App Component(parent), filteres robots based on SearchBox input
        const filteredRobots = robots.filter((robot, i) => {
            return robots[i].name.toLowerCase().includes(searchfield.toLowerCase())
        })

        //If the API request time equals 0, a 'LOADING' text will get displayed
        if (robots.length === 0){
            return <h1>GETTING READY: </h1>
        }else{
            return(
                <div className='tc bg-lightest-red'>
                    <h1>WithRobotFriends</h1>
                    <SearchBox searchChange = {this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots = {filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            )
        }

    }
}

export default App;



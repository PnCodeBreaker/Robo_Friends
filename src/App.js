import React,{Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';
import './App.css'

class App extends Component {

    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
            return response.json();
        })
        .then(users => {
            this.setState({robots: users});
        })
        
    }
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }
    render() {
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if(this.state.robots.length === 0){
            return <h1>Loading</h1>
        }
        else {
        return (
            <div className = 'tc'>
            <h1 className = 'f1'>RoboFriends</h1>
            <SearchBox searchChange = {this.onSearchChange}/>
            <Scroll>
                <ErrorBoundry>
                    <CardList robots = {filteredRobots}/> 
                </ErrorBoundry>
            </Scroll>
            </div>       
    );
        }
    }
    
}

export default App;








/* props never change. Props are always just inputs we get and we never modified them */

/* And that's what "state" is in React. "State" - and you'll hear this in computer programming
a lot simply means the description of your app. A "state" is simply an object - an object 
that describes your application And this "state" which describes our application is 
the robots, and whatever's entered in the search box and "state" is able to change

Props are simply things that come out of "state" So a parent feeds "state" into
a child component and as soon as a child (components) component receives a
"state" it's a property. That child can never change that property.  */
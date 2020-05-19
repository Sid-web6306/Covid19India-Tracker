import React,{Component} from 'react';
import CardList from './Components/cardList';

import Navigation from './Components/navigation';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state={
      states:[],
      searchBar:''
    }
  }
  componentDidMount(){
    fetch('https://covid-india-cases.herokuapp.com/states')
    .then(response=>response.json())
    .then(states => this.setState({states:states}));
  }


  onSearchBarHandler = (event)=>{
    this.setState({searchBar:event.target.value})
  }
  
  render(){
    const {states,searchBar}=this.state;
    const filteredStates= states.filter(state=>{
      return state.state.toLowerCase().includes(searchBar.toLowerCase());
    })
    return (
      <div>
        <Navigation onSearch = {this.onSearchBarHandler}/>
        <h1 className ='tc'>Covid19-India Tracker</h1>
        <div className='tc'>
          <CardList states={filteredStates}/>
        </div>
      </div>
    )
  }
}

export default App;

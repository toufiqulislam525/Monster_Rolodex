import logo from './logo.svg';
import './App.css';
import CardList from './Components/CardList/card_list_component';
import SearchBox from './Components/Searchbox/search_box_component';


import { Component } from 'react';

class App extends Component {
  constructor()
  {
    super();
    this.state = 
    {
      monsters : [],
      searchfield : ''
    }
  }

  componentDidMount(){
   
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json())
    .then( users => {
          this.setState(
            ()=>
            {
              return {monsters : users}
            }
            
          )  
    })

  }
  
  onSearchChange = (event)=>
  {
    let searchfield = event.target.value.toLowerCase();
    this.setState(()=>
    {
      return {searchfield}
    })

  }

  
  render(){
    console.log('Render from app')
    const {monsters,searchfield} = this.state;
    const {onSearchChange} = this;

    let filtered_monsters = [];
    filtered_monsters = monsters.filter((monster)=>
    {
      let m_name = monster.name.toLowerCase();
      return m_name.includes(searchfield);
    })

    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox 
        className={'monster-search-box'} 
        placeholder={'Search for monsters'} 
        onChangeHandler={onSearchChange}
        />

        < CardList 
        monsters = {filtered_monsters} 
        />
        
      </div>
    );

  }
  
}

export default App;

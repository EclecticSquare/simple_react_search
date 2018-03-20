import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: ['Robert Abbot','Alvin Ailey','Muhammed Ali','Richard Allen','Ella Baker','Shirly Chilsom']

    }
  }

  

  render() {
    
    const ListJSX = this.state.names.map((person, index) => {
      console.log(person)
      return <li>{person}</li>
  
    })   
            
   

          //   var jobsJSX = this.state.jobs.map((job,index) => {
          //     console.log(job)
          //     return  <JobsListItem key={index} {...job} />
          // })
  


    return (
      <div className="App">
        <div className='box'>
          <h1 className='title'>React Search</h1>
          <p>Here is a list of links about influential African-Americans in history.</p>
        </div>

        <div>
          <h2>Search</h2>
          <form><input type='text' placeholder='Enter a name'></input></form>
        </div>

        <div className='nameList'> {ListJSX}</div>

      </div>
    );
  }
}

export default App;

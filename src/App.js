import React, { Component } from 'react'
import './App.css'
import Movie from './components/Movie'
import data from './components/data'

class App extends Component {
  state = {
    query: ""
  }
 
  searchText = (e) => {
    this.setState({ query: e.target.value })
    console.log(this.state.query)
  }

  render(){
    let image = []
    let title = []
    let year = []
    let rating = []

    Object.keys(data).forEach( key => {
        title.push(data[key].title)
        year.push(data[key].year)
        rating.push(data[key].rating)
        image.push(data[key].image)
      }
    )

    //console.log(title)
    //console.log(year)
    //console.log(rating)

    let newName = title.filter( (x) => {
      return x.toLowerCase().indexOf(this.state.query) !== -1
    })

    return (
      <div className="wrapper">
      <div className="searchBar">
        <strong>Search: </strong> <input type="text" onKeyUp={this.searchText} />
      </div>

      <div className="movies_container">
        {
          newName.map( (m, i) => {
            return(
              <Movie poster={image[i]} title={m} year={year[i]} rating={rating[i]} key={i} />
            )
          })         
        }
      </div>
      </div>
    );
  }
}

export default App;

import React from 'react'
import unsplansh from '../API/unsplansh';
import SearchBar from '../SearchBar';


class App extends React.Component {
  state = {image: []};

onSearchSubmit = async (term)=> {
    const response = await unsplansh.get('search/photos',{
      params: { query: term },
    });
    
    // console.log(response.data.results);
    this.setState({image: response.data.results});
    // console.log(response);
  }

  render(){
    return (
      <div className="App ui container" style={{marginTop: '12px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} /> 
        <h3>Found {this.state.image.length} Images </h3>   
      </div>
    );
  }
}

export default App;

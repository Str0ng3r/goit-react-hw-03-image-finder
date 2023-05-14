import { Component } from "react"
import { ListGallery } from "./ImageGallery"
import { SearchBar } from "./Searchbar"
import axios from "axios"
export class App extends Component {
state = {
massiveData :[]
}


fcOnSb = (val) => {
  console.log(val);
  axios
    .get(`https://pixabay.com/api/?q=${val}&page=1&key=34891716-36b65b6efae61fa69d260cb9b&image_type=photo&orientation=horizontal&per_page=12`)
    .then(response => {
      console.log(response.data);
      this.setState({
        massiveData:response.data
      })
    })
    .catch(error => {
      console.log(error);
    });
};

  render (){
    return(
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <SearchBar onSubmit={this.fcOnSb}></SearchBar>
      <ListGallery mass={this.state.massiveData}></ListGallery>
    </div>
    )
  }
};

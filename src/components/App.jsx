import { Component } from "react"
import { ListGallery } from "./ImageGallery"
import { SearchBar } from "./Searchbar"
import axios from "axios"
import { SpinnerWait } from "./loadesSpinner"
import { ButtonLoad } from "./ButtonLoader"
export class App extends Component {
state = {
massiveData :[],
massiveLoading:[],
spinner:false,
errorState:false,
searchName:'',
pages:2
}

fcLoader = () => {
  this.setState(prevState => ({
    pages: prevState.pages + 1,
    spinner: true
  }));
  axios
    .get(`https://pixabay.com/api/?q=${this.state.searchName}&page=${this.state.pages}&key=34891716-36b65b6efae61fa69d260cb9b&image_type=photo&orientation=horizontal&per_page=12`)
    .then(response => {
      this.setState(prevState=>({
        massiveLoading:prevState.massiveLoading.concat(response.data.hits),
        spinner: false
      }))
    })
      .catch(error => {
        this.setState({
          errorState:true,
          spinner: false
        })
        console.log(error);
      });
};


fcOnSb = (val) => {
  console.log(val);
  this.setState({
    searchName:val,
    massiveLoading:[],
    spinner:true
  })
  axios
    .get(`https://pixabay.com/api/?q=${val}&page=1&key=34891716-36b65b6efae61fa69d260cb9b&image_type=photo&orientation=horizontal&per_page=12`)
    .then(response => {
      console.log(response.data.hits);
      this.setState({
        errorState:false,
        spinner:false,
        massiveData:response.data.hits
      })
    })
    .catch(error => {
      this.setState({
        errorState:true
      })
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
        flexDirection:'column',
        color: '#010101'
      }}
    >
      <SearchBar onSubmit={this.fcOnSb}></SearchBar>
      {this.state.errorState && <SpinnerWait message={'Sorry error'}></SpinnerWait>}
      {this.state.spinner && <SpinnerWait message={'plz wait'}></SpinnerWait>}
      {this.state.massiveData.length>1 && <ListGallery mass={this.state.massiveData}></ListGallery>}
      {this.state.massiveData.length === 12 && <ButtonLoad funcLoad={this.fcLoader}></ButtonLoad>}
      {this.state.massiveLoading.length>1 && <ListGallery mass={this.state.massiveLoading}></ListGallery>}
    </div>
    )
  }
};

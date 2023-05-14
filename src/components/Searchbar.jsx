import { Component } from "react";

export class SearchBar extends Component {
state = {
    valueInput:''
}
    render(){
        return(
<header className="searchbar">
  <form className="form" onSubmit={(evt) => {
        evt.preventDefault()
        this.props.onSubmit(this.state.valueInput)
    this.setState({
        valueInput:''
    })
  }}>
    <button type="submit" className="button">
      <span className="button-label">Search</span>
    </button>

    <input
    onChange={(evt) => {this.setState({
    valueInput: evt.target.value
    })}}
    value={this.state.valueInput}
      className="input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>
        )
    }  
}
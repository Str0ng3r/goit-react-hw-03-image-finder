import { Component } from 'react';
import { ListGallery } from './ImageGallery';
import { SearchBar } from './Searchbar';
import axios from 'axios';
import { SpinnerWait } from './loadesSpinner';
import { ButtonLoad } from './ButtonLoader';
import styles from './styles.module.css';

export class App extends Component {
  state = {
    massiveData: [],
    massiveLoading: [],
    spinner: false,
    errorState: false,
    searchName: '',
    buttonLoad: false,
    pages: 2,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const { searchName, pages } = this.state;
    this.setState({ spinner: true });

    axios
      .get(
        `https://pixabay.com/api/?q=${searchName}&page=${pages}&key=34891716-36b65b6efae61fa69d260cb9b&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then(response => {
        const { hits } = response.data;
        const massiveLoading = [...this.state.massiveLoading, ...hits];

        this.setState({
          massiveLoading,
          spinner: false,
          buttonLoad: hits.length === 12,
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({ errorState: true, spinner: false });
      });
  };

  fcOnSb = val => {
    this.setState({
      searchName: val,
      massiveLoading: [],
      spinner: true,
      pages: 2,
    });

    axios
      .get(
        `https://pixabay.com/api/?q=${val}&page=1&key=34891716-36b65b6efae61fa69d260cb9b&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then(response => {
        const { hits } = response.data;

        this.setState({
          errorState: false,
          spinner: false,
          massiveData: hits,
          buttonLoad: hits.length === 12,
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({ errorState: true });
      });
  };

  fcLoader = () => {
    this.setState(
      prevState => ({
        pages: prevState.pages + 1,
        spinner: true,
        buttonLoad: false,
      }),
      this.fetchData
    );
  };

  render() {
    const { errorState, spinner, massiveData, massiveLoading, buttonLoad } =
      this.state;

    return (
      <div className={styles.App}>
        <SearchBar onSubmit={this.fcOnSb} />
        {errorState && <SpinnerWait message="Произошла ошибка" />}
        {spinner && <SpinnerWait message="Пожалуйста, подождите" />}
        {massiveData.length > 1 && <ListGallery mass={massiveData} />}
        {massiveLoading.length > 1 && <ListGallery mass={massiveLoading} />}
        {buttonLoad && <ButtonLoad funcLoad={this.fcLoader} />}
      </div>
    );
  }
}

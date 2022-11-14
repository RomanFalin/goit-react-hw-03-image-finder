import Searchbar from 'components/Searchbar/Searchbar';

import { Component } from 'react';
import GalleryList from 'components/ImageGallery/ImageGallery';
import axios from 'axios';
import Loader from 'components/Loader/Loader';
import LoadMoreBtn from 'components/Button/Button';
import Modal from 'components/Modal/Modal';

axios.defaults.baseURL = 'https://pixabay.com/api/';

class App extends Component {}

export default App;

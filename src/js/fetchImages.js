import axios from 'axios';

export class PixabayAPI {
  #BASE_URL = 'https://pixabay.com/';
  #API_KEY = '34914076-a1f4109a1a2ff90f5349ae488';
  #searchQuery = '';
  #pageNumber = 1;

  #searchParams = new URLSearchParams({
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
  });

  async getImages() {
    const response = await axios.get(
      `${this.#BASE_URL}api/?key=${this.#API_KEY}&q=${this.#searchQuery}&${
        this.#searchParams
      }&page=${this.#pageNumber}`
    );
    return response.data;
  }

  set query(newSearchQuery) {
    this.#searchQuery = newSearchQuery;
  }

  get pageNumber() {
    return this.#pageNumber;
  }

  incrementPage() {
    this.#pageNumber += 1;
  }

  resetPage() {
    this.#pageNumber = 1;
  }
}

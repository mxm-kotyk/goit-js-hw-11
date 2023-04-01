export class PixabayAPI {
  #BASE_URL = 'https://pixabay.com/';
  #API = '34914076-a1f4109a1a2ff90f5349ae488';
  #searchQuery = '';
  #page = 1;
  #searchParams = new URLSearchParams({
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
  });

  getImages() {
    return fetch(
      `${this.#BASE_URL}api/?key=${this.#API}&q=${this.#searchQuery}&${
        this.#searchParams
      }&page=${this.#page}`
    ).then(response => {
      console.log('response:', response);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response.json();
    });
  }

  set query(newSearchQuery) {
    this.#searchQuery = newSearchQuery;
  }

  incrementPage() {
    this.#page += 1;
  }

  resetPage() {
    this.#page = 1;
  }
}

export class PixabayAPI {
  #BASE_URL = 'https://pixabay.com/';
  #API = '34914076-a1f4109a1a2ff90f5349ae488';
  #searchParams = new URLSearchParams({
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  getImages(searchQuery) {
    return fetch(
      `${this.#BASE_URL}api/?key=${this.#API}&q=${searchQuery}&${
        this.#searchParams
      }`
    ).then(response => {
      console.log('response:', response);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response.json();
    });
  }
}

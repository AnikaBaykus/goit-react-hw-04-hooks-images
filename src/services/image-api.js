const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 12;
const KEY = '22247215-1c12035fc4e9317ec5669aed6';

function fetchImage(name, page) {
  return fetch(
    `${BASE_URL}?q=${name}&key=${KEY}&image_type=photo&orientation=horizontal&page=${page}&per_page=${PER_PAGE}`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`❗ Not found ${name}`));
  });
}

const imageAPI = { fetchImage };
export default imageAPI;

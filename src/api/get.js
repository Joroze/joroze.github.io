import axios from 'axios';


let url = 'https://api.github.com';

// TODO: Combine get USER ajax request with get REPO
// /users/:username

export default function performRequest(username) {

    return axios.get(`/users/${username}/repos`, {
        baseURL: url,
        params:{
            sort: 'updated',
            direction: 'asc'
        }
      })
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
}

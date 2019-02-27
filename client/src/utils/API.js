import axios from './authAxios';

export default {
  getPosts: (params) => {
    return axios.get('/api/posts', { params })
  },

  createPost: (data) => {
    return axios.post('/api/posts', data)
      .catch(error => console.log('API.createPost Error:', error));
  },

  getPost: (id) => {
    return axios.get('/api/posts/' + id)
  },

  upvotePost: (id) => {
    return axios.get(`/api/posts/${id}/vote`)
  },

  purchasePost: (id) => {
    return axios.get(`/api/posts/${id}/purchase`)
  },

  getAllPostComments: (postId) => {
    return axios.get(`/api/posts/${postId}/comments/`)
  },

  getCategory: (categoryName) => {
    return axios.get(`/api/categories/${categoryName}`)
      .then(result => result.data)
      .catch(err => console.log('API.getCategory ERR: ', err))
  },

  getCategoriesTags: (categoryName) => {
    //console.log("getting Category Info")
    return axios.get(`/api/categories`)
  },

  createComment: (postId, commentData) => {
    return axios.post(`/api/posts/${postId}/comments`, commentData)
      .catch(error => console.log('API.createComment Err: ', error));
  },

  getUserDrafts: (id) => {
    return axios.get(`/api/users/id/${id}/posts/drafts`)
  },

  deletePost: (id) => {
    console.log(id)
    return axios.delete('/api/posts/' + id);
  },
  updatePost: (id, updatedData) => {
    return axios.put('/api/posts/' + id, updatedData)
      .then(response => {
        console.log('updatePost response', response);
        return response;
      })
      .catch(error => {
        console.log('updatePost error', error);
      });
  },
  getPostsAndBio: (id, params) => {
    // returns public profile object of the form
    // {
    //         user: {
    //             username: <name>,
    //             bio: <bio
    //         },
    //         posts: [],
    //         comments: []
    // }
    return axios.get(`/api/users/id/${id}/profile`, { params })
  },

  updateProfile: (id, updatedData) => {
    console.log(updatedData)
    return axios.put(`/api/users/id/${id}`, updatedData)
  }
};
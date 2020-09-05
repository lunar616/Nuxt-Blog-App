import axios from 'axios'
import Cookie from 'js-cookie'

export const state = () => ({
  token: null,
  postsLoaded: [],
});

export const mutations = {
  setPosts(state, posts) {
    state.postsLoaded = posts;
  },
  addPost(state, post) {
    state.postsLoaded.push(post);
  },
  editPost(state, postEdit) {
    const postIndex = state.postsLoaded.findIndex(post => post.id === postEdit.id);
    state.postsLoaded[postIndex] = postEdit;
  },
  setToken(state, token) {
    state.token = token;
  },
  destroyToken(state) {
    state.token = null;
  },
};

export const actions = {
  nuxtServerInit({commit}) {
    return axios.get('https://nuxt-blog-app-be092.firebaseio.com/posts.json')
      .then(res => {
        const postsArray = [];
        for (let key in res.data) {
          postsArray.push({ ...res.data[key], id: key});
        };

        commit('setPosts', postsArray);
      })
      .catch(error => console.log(error));
  },
  authUser({commit}, authData) {
    const key = 'AIzaSyCI_GiEl-GvatECdFhbbDlQBIJhcg6AZGQ';
    return axios.post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${key}`, {
      email: authData.email,
      password: authData.password,
      returnSecureToken: true,
    })
      .then(res => {
        console.log(res.data)
        let token = res.data.idToken;

        commit('setToken', token);
        if (process.client) {
          localStorage.setItem('token', token);
        };
        Cookie.set('jwt', token);
      })
      .catch(error => console.log(error));
  },
  initAuth({commit}, request) {
    let token; 
    if (request) {
      if (!request.headers.cookie) return false;

      const jwtCookie = request.headers.cookie
        .split(';')
        .find(token => token.trim().startsWith('jwt='));

      if (!jwtCookie) return false;

      token = jwtCookie.split('=')[1]; 
    } else {
      if (process.client) {
        token = localStorage.getItem('token');
      };

      if (token) {
        return false;
      };
    };

    commit('setToken', token);
  },
  logoutUser({commit}) {
    commit('destroyToken');
    if (process.client) {
      localStorage.removeItem('token');
    };
    Cookie.remove('jwt');
  },
  addPost({commit}, post) {
    return axios.post('https://nuxt-blog-app-be092.firebaseio.com/posts.json', post)
      .then(res => {
        commit('addPost', {
          ...post,
          id: res.data.name,
        });
      })
      .catch(error => console.log(error));
  },
  editPost({commit, state}, post) {
    return axios.put(`https://nuxt-blog-app-be092.firebaseio.com/posts/${post.id}.json?auth=${state.token}`, post)
      .then(() => commit('editPost', post))
      .catch(error => console.log(error));
  },
};

export const getters = {
  getPostsLoaded(state) {
    return state.postsLoaded;
  },
  checkAuthUser(state) {
    return state.token != null;
  },
};
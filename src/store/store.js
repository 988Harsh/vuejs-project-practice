import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);
Vue.use(Vuex);

export const store = new Vuex.Store({

    state: {
        users: [],
        itemCount: 0,
    },

    getters: {
        getUsers: state => state.users
    },

    mutations: {
        SAVE_USERS(state, data) {
            state.users = data.users;
            state.itemCount = data.count;
        }
    },

    actions: {
        async loadUsers({ commit }, { ...payload }) {
            return await axios.get(`http://localhost:3000/users?page=${payload.page}`).then(res => {
                commit('SAVE_USERS', res.data);
            }).catch(error => {
                throw new Error(`API ${error}`);
            });
        }
    },

})

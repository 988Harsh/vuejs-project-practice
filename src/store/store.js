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
        user: {},
        isEditing: false,
    },

    getters: {
        getUsers: state => state.users
    },

    mutations: {
        SAVE_USERS(state, data) {
            state.users = data.users;
            state.itemCount = data.count;
        },
        SAVE_USER(state, data) {
            state.user = data;
            state.isEditing = true;
        },
        UPDATECREATE_RESPONSE(state, data) {
            state.user = {};
            state.isEditing = false;
        },
    },

    actions: {
        async loadUsers({ commit }, { ...payload }) {
            return await axios.get(`http://localhost:3000/users?page=${payload.page}`).then(res => {
                commit('SAVE_USERS', res.data);
            }).catch(error => {
                throw new Error(`API ${error}`);
            });
        },
        async fetchUser({ commit }, { ...payload }) {
            return await axios.get(`http://localhost:3000/users/${payload._id}`).then(res => {
                commit('SAVE_USER', res.data);
            }).catch(error => {
                throw new Error(`API ${error}`);
            });
        },
        async updateOrInsertUser({ commit }, { ...payload }) {
            if (this.state.isEditing === true) {
                return await axios.patch(`http://localhost:3000/users/${payload._id}`, payload.user).then(res => {
                    commit('UPDATECREATE_RESPONSE', res.data);
                })
            } else {
                return await axios.post(`http://localhost:3000/users`, payload.user).then(res => {
                    commit('UPDATECREATE_RESPONSE', res.data);
                })
            }
        }
    },

})

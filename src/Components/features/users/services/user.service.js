import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export const getUsers = async () => {
    return await axios.get('http://localhost:3000/users/').then(res => {
        return res.data.users;
    });
}

export const getUser = async (id) => {
    return await axios.get(`http://localhost:3000/users/${id}`).then(res => {
        return res.data;
    });
}

export const updateUser = async (_id, user) => {
    return await axios.patch(`http://localhost:3000/users/${_id}`, user).then(res => res.data);
}

export const deleteUser = async (_id) => {
    return await axios.delete(`http://localhost:3000/users/${_id}`).then(res => res.data)
}

export const addUser = async (user) => {
    return await axios.post(`http://localhost:3000/users/`, user).then(res => res.data);
}
import Home from "../../../shared/Home.vue";

const Users = resolve => {
    require.ensure(['../Users.vue'], () => {
        resolve(require('../Users.vue'));
    }, 'users')
}
const EditUser = resolve => {
    require.ensure(['../UsersEdit.vue'], () => {
        resolve(require('../UsersEdit.vue'));
    }, 'users')
}
const CreateUser = resolve => {
    require.ensure(['../UserCreate.vue'], () => {
        resolve(require('../UserCreate.vue'));
    }, 'users')
}
const UsersList = resolve => {
    require.ensure(['../UsersList.vue'], () => {
        resolve(require('../UsersList.vue'));
    }, 'users')
}


export const routes = [


    { path: '', name: 'home', component: Home },
    {
        path: '/users', component: Users, children: [
            { path: '', component: UsersList },
            { path: 'add', component: CreateUser },
            { path: ':_id/edit', component: EditUser, name: 'userEdit' },
        ]
    },
    { path: '*', redirect: { name: 'home' } }

]
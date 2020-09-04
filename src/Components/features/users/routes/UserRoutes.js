import Home from "../../../shared/Home.vue";

const Users = resolve => {
    require.ensure(['../Users.vue'], () => {
        resolve(require('../Users.vue'));
    }, 'users')
}

const userManage = resolve => {
    require.ensure(['../userManage/UserManage.vue'], () => {
        resolve(require('../userManage/UserManage.vue'));
    }, 'users')
}
const UsersList = resolve => {
    require.ensure(['../usersList/UsersList.vue'], () => {
        resolve(require('../usersList/UsersList.vue'));
    }, 'users')
}


export const routes = [


    { path: '', name: 'home', component: Home },
    {
        path: '/users', component: Users, children: [
            { path: '', component: UsersList, name: 'userList' },
            { path: 'add', component: userManage, name: 'userAdd' },
            { path: ':_id/edit', component: userManage, name: 'userEdit' },
        ]
    },
    { path: '*', redirect: { name: 'home' } }

]
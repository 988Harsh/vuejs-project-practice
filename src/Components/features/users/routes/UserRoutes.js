import Home from "../../../shared/Home.vue";

const Users = resolve => {
    require.ensure(['../Users.vue'], () => {
        resolve(require('../Users.vue'));
    }, 'users')
}

const userManage = resolve => {
    require.ensure(['../user-managerial/UserManagarial.vue'], () => {
        resolve(require('../user-managerial/UserManagarial.vue'));
    }, 'users')
}
const UsersList = resolve => {
    require.ensure(['../userslist/UsersList.vue'], () => {
        resolve(require('../userslist/UsersList.vue'));
    }, 'users')
}


export const routes = [


    { path: '', name: 'home', component: Home },
    {
        path: '/users', component: Users, children: [
            { path: '', component: UsersList },
            { path: 'add', component: userManage, name: 'userAdd' },
            { path: ':_id/edit', component: userManage, name: 'userEdit' },
        ]
    },
    { path: '*', redirect: { name: 'home' } }

]
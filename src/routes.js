import Vue from 'vue'
import VueRouter from "vue-router";
import { routes } from "./Components/features/users/routes/UserRoutes";

Vue.use(VueRouter);

export default new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return { selector: to.hash };
        }
        return { x: 0, y: 0 };
    }
})
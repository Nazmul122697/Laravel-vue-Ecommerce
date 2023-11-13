import { createRouter, createWebHistory } from "vue-router";
import dashboard from "../views/Dashboard.vue";
import login from "../views/Login.vue";
import register from "../views/Register.vue";
import resetPassword from "../views/ResetPassword.vue";
import requestPassword from "../views/RequestPassword.vue";
import NotFound from "../views/NotFound.vue";

// Dashboard part
import AppLayouts from "../components/AppLayouts.vue";
import store from "./../store/index";

const routes = [
    {
        path: "/",
        redirect: "/app",
    },
    {
        path: "/app",
        component: AppLayouts,
        name: "app",
        redirect: "/app/dashboard",
        meta: {
            requiresAuth: true,
        },
        children: [
            {
                path: "dashboard",
                name: "app.dashboard",
                component: dashboard,
            },
        ],
    },

    // dashboar part end
    {
        path: "/dashboard",
        component: dashboard,
        name: "dashboard",
    },
    {
        path: "/login",
        component: login,
        name: "login",
        meta: {
            requiresGuest: true,
        },
    },
    {
        path: "/register",
        component: register,
        name: "register",
        meta: {
            requiresGuest: true,
        },
    },
    {
        path: "/reset-password",
        component: resetPassword,
        name: "reset-password",
        meta: {
            requiresGuest: true,
        },
    },
    {
        path: "/request-password",
        component: requestPassword,
        name: "request-password",
        meta: {
            requiresGuest: true,
        },
    },
    {
        path: "/:pathMatch(.*)",
        name: "notfound",
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Check Token
router.beforeEach((to, from, next) => {
    // to and from are both route objects. must call `next`.
    if (to.meta.requiresAuth && !store.state.user.Token) {
        next({
            name: "login",
        });
    } else if (to.meta.requiresGuest && store.state.user.Token) {
        next({
            name: "app.dashboard",
        });
    } else {
        next();
    }
});
export default router;

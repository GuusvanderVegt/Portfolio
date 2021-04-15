import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Home.vue";
import Dashboard_Home from "../views/Dashboard/Dashboard_Home";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
        path: "/sandbox",
        name: "Sandbox",
        component: () => import("../views/Sandbox.vue")
    },
    {
        path: "/dashboard",
        component: () => import("../views/Dashboard.vue"),
        children: [
            {
                path: "/",
                name: "Dashboard_Home",
                component: Dashboard_Home
            },
            {
                path: "crypto",
                name: "Dashboard_Crypto",
                component: () =>
                    import("../views/Dashboard/Dashboard_Crypto.vue")
            }
        ]
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("../views/Authentication/Login.vue")
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;

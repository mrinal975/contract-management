import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/contacts",
    component: HomeView,
  },
  {
    path: "/contacts",
    name: "ContactManager",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/ContactManager.vue"),
  },
  {
    path: "/contacts/add",
    name: "AddContact",
    component: () => import("../views/AddContact.vue"),
  },
  {
    path: "/contacts/edit/:contactId",
    name: "EditContact",
    component: () => import("../views/EditContact.vue"),
  },
  {
    path: "/contacts/view/:contactId",
    name: "ViewContact",
    component: () => import("../views/ViewContact.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "PageNotFound",
    component: () => import("../views/PageNotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

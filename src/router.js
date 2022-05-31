import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  
  
  
 
  {
    path: "/albums/:id/tracks",
    name: "view",
    component: () => import("./views/ViewTrack.vue"),
    props: true
  },
  {
    path: "/albums/:albumId/addTrack",
    name: "addTrack",
    component: () => import("./views/AddTrack.vue"),
    props: true
  },
  {
    path: "/albums/:albumId/tracks/:trackId/editTrack/",
    name: "editTrack",
    component: () => import("./views/EditTrack.vue"),
    props: true
  },
  
  
  
];
const router = createRouter({
  base: process.env.NODE_ENV === 'development' ? '/' : '/album-frontend-1/',
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
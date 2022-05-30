import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/albums",
    alias: "/",
    name: "albums",
    component: () => import("./views/AlbumsList.vue"),
    props: true
  },
  {
    path: "/edit/:id",
    name: "editAlbum",
    component: () => import("./views/EditAlbum.vue"),
    props: true
  },
  {
    path: "/addAlbum",
    name: "addAlbum",
    component: () => import("./views/AddAlbum.vue")
  },
  {
    path: "/view/:id",
    name: "view",
    component: () => import("./views/ViewAlbum.vue"),
    props: true
  },
  {
    path: "/addTrack",
    name: "addTrack",
    component: () => import("./views/AddTrack.vue"),
    props: true
  },
  {
    path: "/editTrack",
    name: "editTrack",
    component: () => import("./views/EditTrack.vue"),
    props: true
  },
  {
    path: "/artists",
    name: "artists",
    component: () => import("./views/ArtistsList.vue"),
    props: true
  },
  {
    path: "/addArtist",
    name: "addArtist",
    component: () => import("./views/AddArtist.vue")
  }
];
const router = createRouter({
  base: process.env.NODE_ENV === 'development' ? '/' : '/album-frontend-1/',
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
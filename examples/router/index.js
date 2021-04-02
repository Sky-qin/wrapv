import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/home"
import OpreationBar from "../pages/OpreationBar"
import ContentBox from "../pages/ContentBox"
import ViewBox from "../pages/ViewBox"


Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/components",
      component: Home,
      children: [
        {
          path: "/components/OpreationBar",
          component: OpreationBar,
        },
        {
          path: "/components/ContentBox",
          component: ContentBox,
        },
        {
          path: "/components/ViewBox",
          component: ViewBox,
        },
      ],
    },
    // {
    //   path: "/",
    //   component: Home,
    //   // children: [
    //   //   {
    //   //     // 当 /user/:id/profile 匹配成功，
    //   //     // UserProfile 会被渲染在 User 的 <router-view> 中
    //   //     path: "profile",
    //   //     component: UserProfile,
    //   //   },
    //   //   {
    //   //     // 当 /user/:id/posts 匹配成功
    //   //     // UserPosts 会被渲染在 User 的 <router-view> 中
    //   //     path: "posts",
    //   //     component: UserPosts,
    //   //   },
    //   // ],
    // },
  ],
});

export default router;

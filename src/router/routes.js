import { createRouter, createWebHistory } from "vue-router";
import Desktop from "../layouts/Desktop.vue"
import Mobile from "../layouts/Mobile.vue"
import Inicio from "../pages/Inicio.vue"
const routes = [
    {
        path: "/Desktop",component: Desktop,
        children: [
            // Inicio
            {
              path: '/inicio', // here it is, route /user/profile
              component: Inicio // we reference /src/pages/Profile.vue imported above
            },
      
        
            
          ]
    },
    {
      path: "/Mobile",component: Mobile,
      children: [
          // Inicio
          {
            path: 'inicio', // here it is, route /user/profile
            component: Inicio // we reference /src/pages/Profile.vue imported above
          },
    
      
          
        ]
  },
];

const history= createWebHistory();

const router= createRouter({
    history,
    routes
});

export default router;
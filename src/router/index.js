import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '@/components/About.vue'
import Home from '@/components/Home.vue'
import MercenaryTD from '@/components/MercenaryTD.vue'
import Team from '@/components/MaadTeam.vue'
import Contact from '@/components/MaadContact.vue'
import DataPolicy from '@/components/MaadDataPolicy.vue'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        { 
            path: '/', 
            component: Home, 
            name: 'home' 
        },
        { 
            path: '/about', 
            component: About, 
            name: 'about' 
        },
        {
            path: '/mercenary-td',
            component: MercenaryTD,
            name: 'mercenary-td'
        },
        {
            path: '/team',
            component: Team,
            name: 'team'
        },
        {
            path: '/contact',
            component: Contact,
            name: 'contact'
        },
        {
            path: '/data-policy',
            component: DataPolicy,
            name: 'data-policy'
        }
      ]
  })

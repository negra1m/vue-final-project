import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import CharactersList from '@/components/CharactersList'
import EpisodesList from '@/components/EpisodesList'
import LocationsList from '@/components/LocationsList'

Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/main',
            name: 'Main',
            component: Main
        },
        {
            path: '/',
            redirect: '/main'
        },
        {
            path: '/characters',
            name: 'Characters',
            component: CharactersList
        },
        {
            path: '/episodes',
            name: 'Episodes',
            component: EpisodesList
        },
        {
            path: '/locations',
            name: 'Locations',
            component: LocationsList
        }
    ]
})
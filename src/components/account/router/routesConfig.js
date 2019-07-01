import Login from '../views/Login'
import Add from '../views/child/add'
import Look from '../views/child/look'

export const routes = [
    { path: '/add', component: Add },
    { path: '/look', component: Look },
    { path: '/login', component: Login },
    { path: '/', redirect: '/add' }
]
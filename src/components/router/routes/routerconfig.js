import Main from '../Main'
import Me from '../Me'
import Child from '../child/Child'
import Item from '../child/Item'


export const routes = [{
        path: '/main',
        component: Main,
        children: [{
            path: '/main/child',
            component: Child
        }, {
            path: "/main/item",
            component: Item
        }, {
            path: '/main/child',
            from: '/',
            redirect: Child
        }]
    },
    { path: '/me', component: Me },
    { path: '/main', redirect: Main }
]
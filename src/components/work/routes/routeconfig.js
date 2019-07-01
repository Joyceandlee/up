import Menu from '../child/Menu'
import Shopcar from '../child/Shopcar'
import Order from '../child/Order'
import My from '../child/My'

export const routes = [
    { path: '/menu', component: Menu },
    { path: '/shopcar', component: Shopcar },
    { path: '/order', component: Order },
    { path: '/my', component: My },
]
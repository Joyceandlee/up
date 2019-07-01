import Watch from '../child/Watch'
import Listen from '../child/Listen'
import My from '../child/My'
import Story from '../child/watch/Story'
import Song from '../child/watch/Song'
import Cartoon from '../child/watch/Cartoon'
import lStory from '../child/listen/Story'
import lSong from '../child/listen/Song'
import Detail from '../child/Detail'
import Login from '../child/Login'

export const routes = [{
    path: '/watch',
    component: Watch,
    children: [
        { path: "/watch/story", component: Story },
        { path: "/watch/song", component: Song },
        { path: "/watch/cartoon", component: Cartoon },
        { path: '/watch', redirect: '/watch/song' }
    ]
}, {
    path: '/listen',
    component: Listen,
    children: [
        { path: "/listen/story", component: lStory },
        { path: "/listen/song", component: lSong },
        { path: '/listen', redirect: '/listen/song' }
    ]
}, {
    path: '/my',
    component: My
}, {
    path: '/watch',
    redirect: '/watch'
}, {
    path: '/detail',
    component: Detail
}, {
    path: '/login',
    component: Login
}]
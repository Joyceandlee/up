import React from 'react';
import {Provider} from 'react-redux'
// import store from "./components/Provider/store/store";
// import store from './components/account/store/index'
// import store from './components/asyncRedux/store/store'
// import store from './components/stock/store/store'
// import store from './components/card/store/store'
import store from './components/ClassName/store/store'
// import Home from './components/publicContent/Home.js'
// import Home from './components/alert/Home'
// import Home from './components/router/Home'
// import Home from './components/work/Home'
// import Home from './components/baby/Home'
// import Father from './components/newComponent/Father'
// import Father from './components/intercept/Father'
// import Father from './components/store/Father'
// import Home from './components/account/views/Home'
// import Home from './components/Provider/Home'
// import Home from './components/swiper/Home'
// import Home from './components/asyncRedux/Home'
// import Home from './components/antd/Home'
// import Home from './components/stock/Home'
// import Home from './components/card/Home'
import Home from './components/ClassName/Home'

class App extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      // <Father/>
      <Provider store={store}>
        <Home/>
      </Provider>
          // <Home/>
    )
  }
}

export default App;

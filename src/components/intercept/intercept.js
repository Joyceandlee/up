import React from 'react'
import Login from './views/Login'

function Instercept(Component){
    return class extends React.Component{
        componentWillMount(){
            if(localStorage.getItem('token')){

            }else{
                this.props.history.replace('/login')
                this.props.navigation.goBack()
            }
        }
        render(){
            return(
                <div>
                    <Component/>
                </div>
            )
        }
    }
}

export default Instercept;
import React, { Component,Fragment } from 'react';
import './dialog.css'
import PropTypes from 'prop-types'

class Dialog extends Component{
    constructor(props){
        super(props)
    }

    render(){
        let flag=this.props.flag
        console.log(flag)
        return(
            <div className="box">
               <div className="smallbox">
               <header>头部</header>
                <main>
                    {
                        flag===1&&<p>1</p>
                    }
                    {
                        flag===2&&<input type="text"/>
                    }
                    {
                        flag===3&&<img src="https://b-ssl.duitang.com/uploads/item/201707/01/20170701164959_WwCA4.thumb.224_0.gif" alt=""/>
                    }
                </main>
                <footer>
                    {
                        (flag===1||flag===3)&& <input type="button" value="确定" onClick={this.props.click}/>
                    }
                    {
                        flag===2&&<Fragment><input type="button" value="取消" onClick={this.props.click}/> <input type="button" value="确定" onClick={this.props.click}/></Fragment>
                    }
                </footer>
               </div>
            </div>
        )
    }
}



Dialog.propTypes={
    flag:PropTypes.number
}

export default Dialog
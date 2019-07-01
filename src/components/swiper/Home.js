import React, { Component } from 'react';
import Swiper from 'swiper'
import './swiper.min.css'

class Home extends Component {
    state={
        posts: [
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559120235478&di=4f536125fe8944fe4df53c4d31c36059&imgtype=0&src=http%3A%2F%2Fi2.hdslb.com%2Fbfs%2Farchive%2Fe2e0fb5ff076b8f786ad119c0aa45221154c9602.jpg",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559121934592&di=f4dc72a98f28a15769171e1030e1920c&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farchive%2F74557a39e163ffad7b3b2cc916b6dad4a8767a4b.jpg",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559121973695&di=64dc092bdc424944f16470b276dc7584&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F6%2F585a2843b2d4c.jpg%3Fdown",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559122006119&di=12b81224409da4f42852ea8d9350ae1e&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201607%2F20%2F20160720183938_MwNzt.jpeg",
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559716754&di=acf325ca2f5e65ac57960c751a89db5b&imgtype=jpg&er=1&src=http%3A%2F%2Fvedio.5054399.com%2Fvideo%2Fupload%2F1522053086.jpg"
          ]
    }
    render() {
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {
                        this.state.posts.map((item,index)=>{
                            return <div className="swiper-slide" key={index}>
                                <img style={{width:"100%"}} src={item} alt=""/>
                            </div>
                        })
                    }
                </div>
            </div>
        );
    }
    componentDidMount(){
        this.swiper=new Swiper('.swiper-container',{
            autoplay:true
        })
    }
}

export default Home;

import React from "react"
import FootNav from "../../components/FootNav"
import HomeHead from "../../components/Head"
import HomeSwiper from "../../components/Swiper"
import banner1 from "../../static/images/banner1.jpeg"
import banner2 from "../../static/images/banner2.jpeg"
import banner3 from "../../static/images/banner3.jpeg"
import banner4 from "../../static/images/banner4.jpeg"
import banner5 from "../../static/images/banner5.jpeg"
import banner6 from "../../static/images/banner6.jpeg"
import HomeHot from "./HomeHot"

export default class Home extends React.Component{
    render(){
        return(
            <div>
                <HomeHead />
                <HomeSwiper banners={[banner1,banner2,banner3,banner4,banner5,banner6]}/>
                <HomeHot />
                <FootNav />
            </div>
        )
    }
}
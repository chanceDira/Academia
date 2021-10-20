import React,{ Component } from "react";
import Aux from '../../hoc/Auxi/Auxilliary';
import Layout from './LayoutCenter/Layout'
import AboutPage  from '../../components/Page/About/About';
import OurMission from '../../components/Page/About/OurMission/OurMission';
import OurActivities from '../../components/Page/About/OurActivities/Activities'
import OurTeam from '../../components/Page/About/OurTeam/OurTeam'
import OurPaterner from '../../components/Page/About/OurPaterner/OurParteners'
import AboutFront from '../../components/Page/About/AboutFront/AboutFront'
import Footer from '../../components/Footer/NewFooter'
import './AboutCenter.css'

class Home extends Component{
  render(){
        return (   
        <Aux>
            <Layout>
            <AboutFront />
                <AboutPage />
                <OurMission />              
                <OurActivities/>
                <OurTeam/>
                <OurPaterner/>
                <Footer />  
            </Layout>
         </Aux>
        )
    }
}
export default Home




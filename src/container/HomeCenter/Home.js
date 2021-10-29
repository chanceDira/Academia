import React,{ Component } from "react";
import Aux from '../../hoc/Auxi/Auxilliary';
import Layout from './LayoutCenter/Layout'
import OurStory from '../../components/OurStory/OurStory';
import OurUniqueness from '../../components/OurUniqueness/OurUniqueness'
import WhyAkagera from '../../components/WhyAkagera/WhyAkagera';
import Footer from '../../components/Footer/NewFooter'
import Center from '../../components/CenterAupairAcademy/CenterAupairAcademy'
import OurTeam from "../../components/OurTeam/OurTeam";


class Home extends Component{
  
  render(){
  
        return (   
        <Aux>
            <Layout>
                <Center />
                <OurStory />
                <WhyAkagera />
                <OurTeam /> 
                <OurUniqueness />
                <Footer />
            </Layout>
         </Aux>
        )
    }
}
export default Home




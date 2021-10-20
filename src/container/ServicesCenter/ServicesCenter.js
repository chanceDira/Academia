import React,{ Component } from "react";
import Aux from '../../hoc/Auxi/Auxilliary';
import Layout from './LayoutCenter/Layout'
// import OurStory from '../../components/OurStory/OurStory';
// import OurUniqueness from '../../components/OurUniqueness/OurUniqueness'
// import WhyAkagera from '../../components/WhyAkagera/WhyAkagera';
import Footer from '../../components/Footer/NewFooter'
import ServicesPage from '../../components/Page/Services/Services'
import ServicesFont from '../../components/Page/Services/ServicesFront/ServicesFront'
// import HowToProceed from "../../components/HowToProceed/HowToProceed";
// import OurTeam from "../../components/OurTeam/OurTeam";



class Home extends Component{
  
  render(){
  
        return (   
        <Aux>
            <Layout>
                <ServicesFont />
                <ServicesPage />
                {/* <OurStory />
                <WhyAkagera />
                <OurUniqueness />
                <OurTeam /> 
                <HowToProceed /> */}
                <Footer />
            </Layout>
         </Aux>
        )
    }
}
export default Home




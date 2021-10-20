import React,{ Component } from "react";
import Aux from '../../hoc/Auxi/Auxilliary';
import Layout from './LayoutCenter/Layout'
import ContactFont  from '../../components/Page/Contact/ContactFront/ContactFront';
import ContactPage  from '../../components/Page/Contact/Contact';
// import OurUniqueness from '../../components/OurUniqueness/OurUniqueness'
// import WhyAkagera from '../../components/WhyAkagera/WhyAkagera';
import Footer from '../../components/Footer/NewFooter'
// import Center from '../../components/CenterAupairAcademy/CenterAupairAcademy'
// import HowToProceed from "../../components/HowToProceed/HowToProceed";
// import OurTeam from "../../components/OurTeam/OurTeam";


class Contact extends Component{
  
  render(){
  
        return (   
        <Aux>
            <Layout>
                <ContactFont />
                <ContactPage />
                {/* <OurStory />
                <WhyAkagera />
                <OurUniqueness />
                <OurTeam /> 
                <HowToProceed />*/}
                 <Footer /> 
            </Layout>
         </Aux>
        )
    }
}
export default Contact




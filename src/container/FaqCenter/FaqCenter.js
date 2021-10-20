import React,{ Component } from "react";
import Aux from '../../hoc/Auxi/Auxilliary';
import Layout from './LayoutCenter/Layout'
import FaqPage  from '../../components/Page/FAQ/Faq';
import FrontFaq  from '../../components/Page/FAQ/FrontFaq/FaqFront';
// import OurUniqueness from '../../components/OurUniqueness/OurUniqueness'
// import WhyAkagera from '../../components/WhyAkagera/WhyAkagera';
import Footer from '../../components/Footer/NewFooter'
// import Center from '../../components/CenterAupairAcademy/CenterAupairAcademy'
// import HowToProceed from "../../components/HowToProceed/HowToProceed";
// import OurTeam from "../../components/OurTeam/OurTeam";


class Faq extends Component{
  
  render(){
  
        return (   
        <Aux>
            <Layout>
                <FrontFaq />
                <FaqPage />
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
export default Faq




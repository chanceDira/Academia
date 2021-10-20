import React,{ Component } from "react";
import Aux from '../../hoc/Auxi/Auxilliary';
import Layout from './LayoutCenter/Layout'
import GetPage  from '../../components/Page/GetInvolved/GetInvolved';
import GetFont  from '../../components/Page/GetInvolved/InvolvedFront/InvolvedFront';
// import OurUniqueness from '../../components/OurUniqueness/OurUniqueness'
// import WhyAkagera from '../../components/WhyAkagera/WhyAkagera';
import Footer from '../../components/Footer/NewFooter'
// import Center from '../../components/CenterAupairAcademy/CenterAupairAcademy'
// import HowToProceed from "../../components/HowToProceed/HowToProceed";
// import OurTeam from "../../components/OurTeam/OurTeam";


class GetInvolved extends Component{
  
  render(){
  
        return (   
        <Aux>
            <Layout>
                <GetFont />
                <GetPage />
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
export default GetInvolved




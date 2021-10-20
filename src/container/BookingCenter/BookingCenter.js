import React,{ Component } from "react";
import Aux from '../../hoc/Auxi/Auxilliary';
import Layout from './LayoutCenter/Layout'
import BookingPage  from '../../components/Page/Booking/Booking';
import BookingFront  from '../../components/Page/Booking/BookingFront/BookingFront';
// import OurUniqueness from '../../components/OurUniqueness/OurUniqueness'
// import WhyAkagera from '../../components/WhyAkagera/WhyAkagera';
import Footer from '../../components/Footer/NewFooter'
// import Center from '../../components/CenterAupairAcademy/CenterAupairAcademy'
// import HowToProceed from "../../components/HowToProceed/HowToProceed";
// import OurTeam from "../../components/OurTeam/OurTeam";


class Home extends Component{
  
  render(){
  
        return (   
        <Aux>
            <Layout>
                <BookingFront />
                <BookingPage />
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
export default Home



